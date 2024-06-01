"use client";
import React from "react";
import { useState, ChangeEvent, useRef } from "react";
import { useFormik } from "formik";
import { useEffect } from "react";
import "./style.css";
import axios from "axios";
import { regitserDoctor, uploadSimpleImage } from "../api/baseUrl";
import * as Yup from "yup";
import { TiTick } from "react-icons/ti";
import { TfiReload } from "react-icons/tfi";
import { toast } from "react-toastify";

//initial values for form
const initialValues = {
  legalid: "",
  idtype: "cnic",
  pmdcNo: "",
  medicalCollege: "",
};

export default function RegisterDoctor() {

  


  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [idFile, setIDFile] = useState<File>();
  const [pmdcFile, setPmdcFile] = useState<File>();
  const cnicRegex = new RegExp("^[0-9]{5}-[0-9]{7}-[0-9]{1}$");
  const passportRegex = new RegExp("/^[A-PR-W]d{8}$/");
  const [idUrl, setidUrl] = useState("");
  const [pmdcUrl, setPmdcUrl] = useState("");
  const [disabled, setdisabled] = useState(true);
  const handleUploadImage = async (e: any, type: string) => {
    setdisabled(true);
    try {
      toast("Uploading Image");
      const data = new FormData();
      data.append("image", e.target.files![0]);
      const response = await axios.post(uploadSimpleImage, data, {
        withCredentials: true,
        headers: {
          authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (response.data.success) {
        if (type === "idUrl") {
          setidUrl(response.data.imageUrl);
        } else {
          setPmdcUrl(response.data.imageUrl);
        }
        toast("Image Uploaded");
        setdisabled(false);
      }
    } catch (err) {
      console.log(err);
      toast("Error Uploading Image");
    }
  };

  const handleRetryUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const printFormData = (formData: any) => {
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Yup.object({
        legalid: Yup.lazy((value, context) => {
          return context.parent.idtype === "cnic"
            ? Yup.string()
                .required("required*")
                .matches(cnicRegex, "Invalid CNIC")
            : Yup.string()
                .required("required*")
                .matches(passportRegex, "Invalid Passport ID");
        }),
        idtype: Yup.string().required("required*"),
        pmdcNo: Yup.string().required("required*"),
        medicalCollege: Yup.string().required("required*"),
      }),
      onSubmit: async (values, action) => {
        setIsLoading(true);
        console.log(values);
        try {
          if (!idFile || !pmdcFile) {
            alert("Please upload both files");
            setIsLoading(false);
            return;
          }
          const formData = new FormData();
          formData.append("legalid", values.legalid);
          formData.append("idtype", values.idtype);
          formData.append("pmdcNo", values.pmdcNo);
          formData.append("medicalCollege", values.medicalCollege);
          formData.append("idUrl", idUrl!);
          formData.append("pmdcUrl", pmdcUrl!);
          printFormData(formData);
          await axios
            .post(regitserDoctor, formData, {
              withCredentials: true,
              headers: {
                "authorization": "Bearer " + localStorage.getItem("accessToken"),
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              console.log(res);
              console.log(res.data);
            });
          
        } catch (error) {
          alert(JSON.stringify(error));
        }
        action.resetForm();
        setIsLoading(false);
      },
    });

  return (
    <div className="mt-20  h-[100vh]">
      <div className=" p-2   md:pt-0 flex justify-center ">
        <div className="shadow w-[90%] flex-col flex pt-3 pb-3 pr-4 pl-4 bg-[#f1f5f9]  rounded-md drop-shadow-lg  md:w-[60%] lg-[50%] xl:w-[40%]">
          <h1 className="font-bold text-[1.3rem]  text-blue-900 self-center ">
            Register as a Doctor
          </h1>
          <hr className="border-[#f4581c] border-width-3px height-1px mt-[1%] w-[20%] self-center" />
          <form
            className="flex mb-[30%] md:mb-0 mt-2 gap-1  flex-col justify-center "
            onSubmit={handleSubmit}
          >
            {/* Basic Information */}
            <div className="flex flex-col  md:flex-row gap-1">
              <div className=" flex-col w-[100%]">
                <label className="label" htmlFor="legalid">
                  Legal ID
                </label>
                <input
                  className="input"
                  type="text"
                  id="legalid"
                  name="legalid"
                  value={values.legalid}
                  placeholder={
                    values.idtype === "cnic"
                      ? "XXXXX-XXXXXXX-X"
                      : "XXXXXXXXXXXXXXXX"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.legalid && touched.legalid ? (
                  <div className="text-[#f4581c] text-sm">{errors.legalid}</div>
                ) : (
                  <></>
                )}
              </div>
              <div className=" flex-col w-[100%]">
                <label className="label" htmlFor="idtype">
                  ID Type
                </label>
                <select
                  id="idtype"
                  name="idtype"
                  className="input"
                  value={values.idtype}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="cnic">CNIC</option>
                  <option value="passport_id">PASSPORT ID</option>
                </select>
              </div>
            </div>

            {/* Professional Information */}
            <label className="label" htmlFor="idUrl">
              Upload ID
            </label>
            <div className="flex items-center justify-center space-x-3">
              <input
                className="input"
                type="file"
                id="idUrl"
                name="idUrl"
                ref={fileInputRef}
                placeholder="Enter ID URL"
                onChange={(e) => {
                  setIDFile(e.target.files![0]);
                  handleUploadImage(e, "idUrl");
                }}
                onBlur={handleBlur}
              />
              {idUrl ? (
                <TiTick size={40} className="p-2 border border-slate-500 rounded-lg" color="#00ED64" />
              ) : (
                <TfiReload size={40} className="p-2 border border-slate-500 rounded-lg cursor-pointer" color="red" onClick={handleRetryUpload} />
              )}
            </div>

            <label className="label" htmlFor="medicalCollege">
              Medical College
            </label>
            <input
              className="input"
              type="text"
              id="medicalCollege"
              name="medicalCollege"
              value={values.medicalCollege}
              placeholder="Enter Your Medical College"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.medicalCollege && touched.medicalCollege ? (
              <div className="text-[#f4581c] text-sm">
                {errors.medicalCollege}
              </div>
            ) : (
              <></>
            )}
            <label className="label" htmlFor="pmdcUrl">
              Upload PMDC Image
            </label>
            <div className="flex justify-center items-center space-x-3">
              <input
                className="input"
                type="file"
                id="pmdcUrl"
                name="pmdcUrl"
                placeholder="Enter Your PMDC URL"
                onChange={(e) => {
                  setPmdcFile(e.target.files![0]);
                  handleUploadImage(e, "pmdcUrl");
                }}
                onBlur={handleBlur}
              />
              {pmdcUrl ? (
                <TiTick size={40} className="p-2 border border-slate-500 rounded-lg" color="#00ED64" />
              ) : (
                <TfiReload size={40} className="p-2 border border-slate-500 rounded-lg cursor-pointer" color="red" onClick={handleRetryUpload} />
              )}
            </div>
            <label className="label" htmlFor="pmdcNo">
              PMDC No
            </label>
            <input
              className="input"
              type="text"
              id="pmdcNo"
              name="pmdcNo"
              placeholder="Enter PMDC No."
              value={values.pmdcNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.pmdcNo && touched.pmdcNo ? (
              <div className="text-[#f4581c] text-sm">{errors.pmdcNo}</div>
            ) : (
              <></>
            )}

            <button
              type="submit"
              disabled={disabled}
              className=" mt-[4%] w-[100%] md:w-[30%] lg:-[20%] self-center  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans "
            >
              {isLoading ? (
                <div className="flex flex-row  justify-center   w-[100%] ">
                  <img className="w-[70px]   " src="loader.gif"></img>
                </div>
              ) : (
                <>Submit</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
