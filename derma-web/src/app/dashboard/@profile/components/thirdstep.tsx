"use client";
import React, { useState, ChangeEvent } from "react";
import { Formik, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Theme, Switch } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "../style.css";
import { FormValues } from "../page";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";


interface AvailabilityStepProps {
  initialValues: FormValues;
  onBack: () => void;
}

const validationSchema = Yup.object({
  availability: Yup.array()
    .of(
      Yup.object().shape({
        startTime: Yup.string().required("Start Time is required"), // Time in 24-hour format (e.g., "09:00")
        endTime: Yup.string().required("End Time is required"), // Time in 24-hour format (e.g., "17:00")
        day: Yup.string().required("day is required"),
        lat: Yup.number().required("lat is required"),
        lng: Yup.number().required("lng is required"),
        city: Yup.string().required("city is required"),
        location: Yup.string().required("location is required"),
        price: Yup.string().required("price is required"),
      })
    )
    .min(1, "Add at least one qualification"),
  promotionalHeadline: Yup.string().required(
    "Promotional Headline is Required"
  ),
  detailedRole: Yup.string().required("Detailed Role is required"),
  onlineAvailability: Yup.object().shape({
    from: Yup.string().required("Start Time is required"),
    to: Yup.string().required("End Time is required"),
    price: Yup.string().required("price is required"),
  }),
});

const AvailabilityStep: React.FC<AvailabilityStepProps> = ({
  initialValues,
  onBack,
}) => {
  const [onlineAvailabilitySwitch, setOnlineAvailabilitySwitch] = useState(false);
  return (
    <div className="   h-[100vh]">
      <div className=" p-2   md:pt-0 flex justify-center ">
        <div className="shadow w-[90%] flex-col flex pt-3 pb-3 pr-4 pl-4 bg-[#f1f5f9]  rounded-md drop-shadow-lg  md:w-[60%] lg-[50%] xl:w-[40%]">
          <h1 className="font-bold text-[1.3rem]  text-blue-900 self-center ">
            Doctor Profile
          </h1>
          <hr className="border-[#f4581c] border-width-3px height-1px mt-[1%] w-[20%] self-center" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
              console.log(values);
            }}
          >
            {({
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="availability">
                  Availability
                </label>

                <FieldArray name="availability">
                  {({ push, remove }) => (
                    <div>
                      {values.availability.map((availability, index) => (
                        <div
                          key={index}
                          className="flex flex-col  md:flex-row gap-1 flex-wrap "
                        >
                          <Field
                            type="time"
                            className="input"
                            name={`availability[${index}].startTime`}
                            value={availability.startTime}
                            placeholder="startTime"
                          />
                          <ErrorMessage name={`availability[${index}].startTime`} component="div" className="text-red-600 text-sm" />

                          <Field
                            type="time"
                            className="input"
                            name={`availability[${index}].endTime`}
                            value={availability.endTime}
                            placeholder="endTime"
                          />
                          <ErrorMessage name={`availability[${index}].endTime`} component="div" className="text-red-600 text-sm" />
                          <Field
                            type="number"
                            className="input"
                            name={`availability[${index}].price`}
                            value={availability.price}
                            placeholder="Price"
                            min={"500"}
                            max={"2000"}
                          />
                          <ErrorMessage name={`availability[${index}].price`} component="div" className="text-red-600 text-sm" />
                          <Field
                            type="text"
                            className="input"
                            name={`availability[${index}].location`}
                            value={availability.location}
                            placeholder="Location"
                          />
                          <ErrorMessage name={`availability[${index}].location`} component="div" className="text-red-600 text-sm" />
                          <Field
                            type="text"
                            className="input"
                            name={`availability[${index}].city`}
                            value={availability.city}
                            placeholder="City"
                          />
                          <ErrorMessage name={`availability[${index}].city`} component="div" className="text-red-600 text-sm" />
                          <Field
                            type="text"
                            className="input"
                            name={`availability[${index}].day`}
                            value={availability.day}
                            placeholder="Day"
                          />
                          <ErrorMessage name={`availability[${index}].day`} component="div" className="text-red-600 text-sm" />
                          <Field
                            type="number"
                            className="input"
                            name={`availability[${index}].lat`}
                            value={availability.lat}
                            placeholder="Latitude"
                          />
                          <ErrorMessage name={`availability[${index}].lat`} component="div" className="text-red-600 text-sm" />
                          <Field
                            type="number"
                            className="input"
                            name={`availability[${index}].lng`}
                            value={availability.lng}
                            placeholder="Longitude"
                          />
                          <ErrorMessage name={`availability[${index}].lng`} component="div" className="text-red-600 text-sm" />
                          <button type="button" onClick={() => remove(index)}>
                          <IoIosRemoveCircle color="red" />
                          </button>
                        </div>
                      ))}
                      <button type="button" onClick={() => push({ startTime: "", endTime: "", day: "", lat:0, lng: 0, 
                        city: "", location: "", price: ""
                       })}>
                      <IoIosAddCircle color="blue" />
                      </button>
                    </div>
                  )}
                </FieldArray>

                <div>
                  <Theme>
                    <Switch
                      checked={onlineAvailabilitySwitch}
                      onCheckedChange={() =>
                        setOnlineAvailabilitySwitch(!onlineAvailabilitySwitch)
                      }
                    />
                  </Theme>
                </div>
                {onlineAvailabilitySwitch ? (
                  <div>
                    <label className="label" htmlFor="availability">
                      Online Availability
                    </label>
                    <div className="flex flex-col  md:flex-row gap-1">
                      <Field
                        type="time"
                        className="input"
                        name="onlineAvailability.from"
                        value={values.onlineAvailability.from}
                        placeholder="From"
                      />
                      <ErrorMessage name={`onlineAvailability.from`} component="div" className="text-red-600 text-sm" />
                      <Field
                        type="time"
                        className="input"
                        name="onlineAvailability.to"
                        value={values.onlineAvailability.to}
                        placeholder="To"
                      />
                      <ErrorMessage name={`onlineAvailability.to`} component="div" className="text-red-600 text-sm" />
                      <Field
                        type="number"
                        className="input"
                        name="onlineAvailability.price"
                        value={values.onlineAvailability.price}
                        placeholder="Price"
                        min={"500"}
                        max={"2000"}
                      />
                      <ErrorMessage name={`onlineAvailability.price`} component="div" className="text-red-600 text-sm" />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
                <label className="label" htmlFor="promotionalHeadline">
                  Promotional Headline
                </label>
                <input
                  className="input"
                  type="text"
                  id="promotionalHeadline"
                  name="promotionalHeadline"
                  placeholder="Enter Promotional Headline"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.promotionalHeadline}
                />
                {touched.promotionalHeadline && errors.promotionalHeadline ? (
                  <div className="text-red-600 text-sm">{errors.promotionalHeadline}</div>
                ) : null}
                <label className="label" htmlFor="detailedRole">
                  Detailed Role
                </label>
                <input
                  className="input"
                  type="text"
                  id="detailedRole"
                  name="detailedRole"
                  placeholder="Enter Your detailed role"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.detailedRole}
                />
                {touched.detailedRole && errors.detailedRole ? (
                  <div className="text-red-600 text-sm">{errors.detailedRole}</div>
                ) : null}
                <div className="flex w-full justify-end items-center">
                  <button type="button" onClick={onBack}>
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" mt-[4%] w-[100%] md:w-[30%] lg:-[20%] self-center  bg-[#f4581c] rounded-lg hover:bg-opacity-90  h-[3rem]  text-white font-sans "
                  >
                    {isSubmitting ? (
                      <div className="flex flex-row  justify-center   w-[100%] ">
                        <img className="w-[70px]   " src="loader.gif"></img>
                      </div>
                    ) : (
                      <>Submit</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStep;
