"use client";
import React, { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../style.css";
import { City } from "country-state-city";

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

const BasicInfoStep: React.FC<BasicInfoStepProps> = ({
  initialValues,
  onNext,
}) => {
  const pakAllCities = City.getCitiesOfCountry("PK");
  const [isLoading, setisLoading] = useState(false);
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
    onSubmit: async (
      values: BasicInfoValues,
      { setSubmitting }: FormikHelpers<BasicInfoValues>
    ) => {
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
              <label className="label" htmlFor="doctorName">
                Doctor Name
              </label>
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
                <div className="text-red-600 text-sm">
                  {formik.errors.doctorName}
                </div>
              ) : null}
            </div>

            <div>
              <label className="label" htmlFor="city">
                City
              </label>
              <select
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="input"
                name="city"
                id="city"
              >
                {pakAllCities?.map((city, index) => (
                  <option id={`${index}`} className="input" value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
              {formik.touched.city && formik.errors.city ? (
                <div className="text-red-600 text-sm">{formik.errors.city}</div>
              ) : null}
            </div>

            <div>
              <label className="label" htmlFor="phone">
                Phone
              </label>
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
                <div className="text-red-600 text-sm">
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>

            <div>
              <label className="label" htmlFor="hospital">
                Hospital
              </label>
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
                <div className="text-red-600 text-sm">
                  {formik.errors.hospital}
                </div>
              ) : null}
            </div>

            <div>
              <label className="label" htmlFor="desc">
                Description
              </label>
              <textarea
                id="desc"
                name="desc"
                cols={30}
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.desc}
              />
              {formik.touched.desc && formik.errors.desc ? (
                <div className="text-red-600 text-sm">{formik.errors.desc}</div>
              ) : null}
            </div>

            <div className="flex w-full justify-end items-center">
            <button
              type="submit"
              className=" mt-[4%]  self-center px-4 py-2  bg-[#f4581c] rounded-lg hover:bg-opacity-90   text-white font-sans "
            >
              {isLoading ? (
                <div className="flex flex-row  justify-center   w-[100%] ">
                  <img className="w-[70px]   " src="loader.gif"></img>
                </div>
              ) : (
                <>Next</>
              )}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;
