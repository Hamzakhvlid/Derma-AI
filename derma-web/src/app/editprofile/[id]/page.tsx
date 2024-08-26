"use client";
import { RootState } from "@/app/lib/store";
import {
  Card,
  Heading,
  Text,
  Button,
  Avatar,
  Theme,
  TextFieldInput,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useFormik } from "formik";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import axios from "axios";
import { updateProfile, uploadImage } from "@/app/api/baseUrl";
import { toast } from "react-toastify";

export default function EditProfile() {
  const userState = useSelector((state: RootState) => state.user);
  const { profile } = userState;
  const [image, setImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [disabled, setdisabled] = useState(false);

  const initialValues = {
    firstname: profile.first_name,
    lastname: profile.last_name,
    phoneNumber: profile.phoneNumber,
    imageUrl: profile.image,
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Yup.object().shape({
        firstname: Yup.string()
          .min(2, "Too Short!")
          .max(25, "Too Long!")
          .required(),
        lastname: Yup.string()
          .min(2, "Too Short!")
          .max(25, "Too Long!")
          .required(),
        imageUrl: Yup.string().url().required(),
        phoneNumber: Yup.string().required(),
      }),
      onSubmit: async (values) => {
        try {
          console.log(localStorage)
          values.imageUrl = image;
          const response = await axios.post("http://localhost:8080/api/v1/users/updateProfile", values, {
      
            headers: {
              authorization: "Bearer " + localStorage.getItem("accessToken"),
            },
          })
            .then((res) => {
              if (res.status === 200) {
                toast.success("Profile Updated Successfully");
              }
            });
        } catch (err) {
          toast.error("Error Updating Profile");
        }
      },
    });
  const handleUploadImage = async (e: any) => {
    setdisabled(true);
    try {
      toast("Uploading Image");
      const data = new FormData();
      data.append("image", e.target.files![0]);
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/uploadImage",
        data,
        {
        
          headers: {
            authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      if (response.data.success) {
        setImageUrl(response.data.imageUrl);
        toast.success("Image Uploaded");
        setdisabled(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Error Uploading Image");
      const fileInput = document.getElementById("file") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = ""; // Reset file input
      }
    }
  };
  return (
    <Theme>
      <main className="min-h-screen w-full">
        <div className="flex flex-col  items-center justify-center h-screen bg-gray-100  px-10 ">
          <div className="w-full max-w-3xl px-6 py-8 bg-white rounded-lg shadow-lg">
            <div className="mb-8">
              <Card className="">
                <div>
                  <Heading>Edit Profile</Heading>
                  <Text>Update your profile information.</Text>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="firstname">First Name</label>
                      <TextFieldInput
                        defaultValue={values.firstname}
                        id="firstname"
                        placeholder="Enter your firstname"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastname">Last Name</label>
                      <TextFieldInput
                        defaultValue={values.lastname}
                        id="lastname"
                        placeholder="Enter your lastname"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <TextFieldInput
                        defaultValue={values?.phoneNumber}
                        id="phoneNumber"
                        placeholder="Enter your phoneNumber"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="profile-picture">Profile Picture</label>
                      <div className="flex items-center gap-4">
                        <Avatar
                          src={values?.imageUrl ?? image ?? ""}
                          fallback={
                            (values.firstname ?? "")[0] +
                            (values.lastname ?? "")[0]
                          }
                        />
                        <input
                          id="image"
                          type="file"
                          onChange={(e) => {
                            handleUploadImage(e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button type="submit" disabled={disabled} className="ml-auto">
                      Save Changes
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </Theme>
  );
}
