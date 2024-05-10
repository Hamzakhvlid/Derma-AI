"use client";
import React from "react";
import { useState, ChangeEvent } from "react";
import { useFormik } from "formik";
import { useEffect } from "react";
import "./style.css";
import axios from "axios";
import {  signup } from "../Api/baseUrl";

//initial values for form
const initialValues = {
  legalid: "",
  idtype: "",
  pmdcNo: "",
  medicalCollege: "",
};


export default function RegisterDoctor() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);
  const idType = {
    cnic: "CNIC",
    passpost_id: "PASSPORT_ID"
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };  
  }, []);

  const { values,setFieldValue, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit:  async (values, action) => {
        try {
          await axios.post("", values, {
            withCredentials: true
          }).then((response) => {
            console.log(response)
          })
          console.log(values);
        } catch (error) {
          alert(JSON.stringify(error));
        }
        action.resetForm();
      },
    });

  if (showSuccess && count > 4) {
    window.location.href = "/login";
  }
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
                  placeholder={`Enter Legal ID`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className=" flex-col w-[100%]">
                <label className="label" htmlFor="idtype">
                  ID Type
                </label>
                <select id="idType" className="input" onChange={handleChange} onBlur={handleBlur}>
                    <option value="cnin">CNIC</option>
                    <option value="passport_id">PASSPORT ID</option>
                </select>
               
              </div>
            </div>

            {/* Professional Information */}
            <label className="label" htmlFor="idUrl">
              Upload ID 
            </label>
            <input
              className="input"
              type="file"
              id="idUrl"
              name="idUrl"
              placeholder="Enter ID URL"
              onChange={(e) => setFieldValue('idUrl', e.target.files![0])}
              onBlur={handleBlur}
            />
            
            <label className="label" htmlFor="medicalCollege">
              Medical College
            </label>
            <input
              className="input"
              type="text"
              id="medicalCollege"
              name="medicalCollege"
              placeholder="Enter Your Medical College"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="label" htmlFor="pmdcUrl">
              Upload PMDC Image
            </label>
            <input
              className="input"
              type="file"
              id="pmdcUrl"
              name="pmdcUrl"
              placeholder="Enter Your PMDC URL"
              onChange={(e) => setFieldValue('pmdcUrl', e.target.files![0])}
              onBlur={handleBlur}
            />
            <label className="label" htmlFor="pmdcNo">
              PMDC No
            </label>
            <input
              className="input"
              type="number"
              id="pmdcNo"
              name="pmdcNo"
              placeholder="1"
              min="0"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            

           

            <button
              type="submit"
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
