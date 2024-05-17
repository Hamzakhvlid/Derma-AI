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
import { uploadImage } from "@/app/Api/baseUrl";

export default function EditProfile() {
  const userState = useSelector((state: RootState) => state.user);
  const { profile } = userState;
  const [image, setImageUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  const initialValues = {
    firstname: profile.firstname,
    lastname: profile.lastname,
    phoneNumber: profile.phoneNumber,
    image: profile.image,
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
        image: Yup.string().url().required(),
        phoneNumber: Yup.string()
          .required(),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });
    const handleUpload = async () => {
        try {
          if (!selectedFile) return;
          const formData = new FormData();
          formData.append("image", selectedFile);
          const response = await axios.post(uploadImage, formData);
          console.log(response.data.imageName);
          console.log(response.data.imageUrl);
    
        setImageUrl(response.data.imageUrl);
        
        } catch (error: any) {
          alert("error occured while uploading image please try again later")
        }
      };
  return (
    <Theme>
      <main className="mx-4 mt-20">
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
                    src={values?.image ?? ""}
                    fallback={
                      (values.firstname ?? "")[0] + (values.lastname ?? "")[0]
                    }
                  />
                  <input
                    id="image"
                    type="file"
                    onChange={({ target }) => {
                      if (target.files) {
                        const file = target.files[0];
                        console.log(target.files);
                        setSelectedImage(URL.createObjectURL(file));
                        setSelectedFile(file);
                      }
                    }}
                  />
                  <Button onClick={handleUpload} type="button" size="2" variant="outline">
                    <MdOutlineFileUpload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Button type="submit" className="ml-auto">
                Save Changes
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </Theme>
  );
}
