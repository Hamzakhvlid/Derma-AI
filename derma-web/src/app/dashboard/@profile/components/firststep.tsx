"use client";
import React from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../style.css";

interface BasicInfoValues {
  doctorName: string;
  city: string;
  imageUrl: string;
  phone: string;
  hospital: string;
  desc: string;
}

interface BasicInfoStepProps {
  initialValues: BasicInfoValues;
  onNext: (values: BasicInfoValues) => void;
}

const BasicInfoStep: React.FC<BasicInfoStepProps> = ({ initialValues, onNext }) => {
  const formik = useFormik<BasicInfoValues>({
    initialValues,
    validationSchema: Yup.object({
      doctorName: Yup.string().required("Doctor name is required"),
      city: Yup.string().required("City is required"),
      imageUrl: Yup.string().url("Invalid URL"),
      phone: Yup.string().required("Phone number is required"),
      hospital: Yup.string().required("Hospital is required"),
      desc: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values: BasicInfoValues, { setSubmitting }: FormikHelpers<BasicInfoValues>) => {
      try {
        console.log("Submitting basic info", values);
          onNext(values);
        
      } catch (error) {
        console.error("Error submitting basic info", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="   h-[100vh]">
      <div className=" p-2   md:pt-0 flex justify-center ">
        <div className="shadow w-[90%] flex-col flex pt-3 pb-3 pr-4 pl-4 bg-[#f1f5f9]  rounded-md drop-shadow-lg  md:w-[60%] lg-[50%] xl:w-[40%]">
          <h1 className="font-bold text-[1.3rem]  text-blue-900 self-center ">
            Doctor Profile
          </h1>
          <hr className="border-[#f4581c] border-width-3px height-1px mt-[1%] w-[20%] self-center" /> 
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="doctorName">Doctor Name</label>
        <input
          id="doctorName"
          name="doctorName"
          type="text"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.doctorName}
        />
        {formik.touched.doctorName && formik.errors.doctorName ? (
          <div>{formik.errors.doctorName}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city ? (
          <div>{formik.errors.city}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="imageUrl">Image URL</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
          <div>{formik.errors.imageUrl}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="hospital">Hospital</label>
        <input
          id="hospital"
          name="hospital"
          type="text"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.hospital}
        />
        {formik.touched.hospital && formik.errors.hospital ? (
          <div>{formik.errors.hospital}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="desc">Description</label>
        <input
          id="desc"
          name="desc"
          type="text"
          className="input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.desc}
        />
        {formik.touched.desc && formik.errors.desc ? (
          <div>{formik.errors.desc}</div>
        ) : null}
      </div>

      <button type="submit">Next</button>
    </form>
    </div>
    </div>
    </div>
  );
};

export default BasicInfoStep;
