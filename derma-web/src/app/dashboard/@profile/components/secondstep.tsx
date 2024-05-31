"use client";
import React, { useState } from "react";
import { Formik, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormValues } from "../page";
import "../style.css";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { baseUrl } from "@/app/api/baseUrl";


interface QualificationExperienceStepProps {
  initialValues: FormValues;
  onNext: (values: FormValues) => void;
  onBack: () => void;
}

const QualificationExperienceStep: React.FC<QualificationExperienceStepProps> = ({
  initialValues,
  onNext,
  onBack,
}) => {


  const validationSchema = Yup.object({
    specialization: Yup.string().required("Specialization is required"),
    experienceYears: Yup.string().required("Experience years is required"),
    qualifications: Yup.array().of(
      Yup.object().shape({
        institution: Yup.string().required("Institution is required"),
        program: Yup.string().required("Program is required"),
      })
    ).min(1, "Add at least one qualification"),
    experience: Yup.array().of(
      Yup.object().shape({
        institution: Yup.string().required("Institution is required"),
        designation: Yup.string().required("Designation is required"),
      })
    ).min(1, "Add at least one experience"),
  });

  return (
    <div className="h-[100vh]">
      <div className="p-2 md:pt-0 flex justify-center">
        <div className="shadow w-[90%] flex-col flex pt-3 pb-3 pr-4 pl-4 bg-[#f1f5f9] rounded-md drop-shadow-lg md:w-[60%] lg-[50%] xl:w-[40%]">
          <h1 className="font-bold text-[1.3rem] text-blue-900 self-center">
            Doctor Profile
          </h1>
          <hr className="border-[#f4581c] border-width-3px height-1px mt-[1%] w-[20%] self-center" />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try{
                
                await axios.post(`${baseUrl}doctorDetail/addDoctorEducationAndExp`, values, {
                  withCredentials: true,
                  headers: {
                    "Authorization": "Bearer " + localStorage.getItem("accessToken"),
                  }
                }).then((res) => {
                  if(res.status === 200){
                    toast(res.data.message);
                    onNext(values);
                    setSubmitting(false)
                  }
                
                })

              }catch(err){
                console.log(err)
              
              }
            }}
          >
            {({ values, handleChange, handleBlur, touched, errors, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="specialization">
                  Specialization
                </label>
                <input
                  className="input"
                  type="text"
                  id="specialization"
                  name="specialization"
                  placeholder="Enter Specialization"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.specialization}
                />
                {touched.specialization && errors.specialization ? (
                  <div className="text-red-600 text-sm">{errors.specialization}</div>
                ) : null}

                <label className="label" htmlFor="qualifications">
                  Qualifications
                </label>
                <FieldArray name="qualifications">
                  {({ push, remove }) => (
                    <div>
                      {values.qualifications.map((qualification, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-1">
                          <Field
                            type="text"
                            className="input"
                            name={`qualifications[${index}].institution`}
                            placeholder="Institution"
                            value= {qualification.institution}
                          />
                          <ErrorMessage name={`qualifications[${index}].institution`} component="div" className="text-red-600 text-sm" />
                          <Field
                            type="text"
                            className="input"
                            name={`qualifications[${index}].program`}
                            placeholder="Program"
                            value= {qualification.program}
                          />
                          <ErrorMessage name={`qualifications[${index}].program`} component="div" className="text-red-600 text-sm" />
                          <button type="button" onClick={() => remove(index)}>
                          <IoIosRemoveCircle color="red" />
                          </button>
                        </div>
                      ))}
                      <button type="button" onClick={() => push({ institution: "", program: "" })}>
                      <IoIosAddCircle color="blue" />
                      </button>
                    </div>
                  )}
                  
                </FieldArray>
                {values.qualifications.length === 0 ? (<div className="text-red-600 text-sm">Add Atleast One Qualification</div>) : (<></>)}

                <label className="label" htmlFor="experience">
                  Experience
                </label>
                <FieldArray name="experience">
                  {({ push, remove }) => (
                    <div>
                      {values.experience.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-1">
                          <Field
                            type="text"
                            className="input"
                            name={`experience[${index}].institution`}
                            placeholder="Institution"
                            value={exp.institution}
                          />
                          <ErrorMessage name={`experience[${index}].institution`} component="div" className="text-red-600 text-sm" />
                          <Field
                            type="text"
                            className="input"
                            name={`experience[${index}].designation`}
                            placeholder="Designation"
                            value={exp.designation}
                          />
                          <ErrorMessage name={`experience[${index}].designation`} component="div" className="text-red-600 text-sm" />
                          <button type="button" onClick={() => remove(index)}>
                          <IoIosRemoveCircle color="red" />
                          </button>
                        </div>
                      ))}
                      <button type="button" onClick={() => push({ institution: "", designation: "" })}>
                      <IoIosAddCircle color="blue" />
                      </button>
                    </div>
                  )}
                </FieldArray>
                {values.experience.length === 0 ? (<div className="text-red-600 text-sm">Add Atleast One Experience</div>) : (<></>)}

                <label className="label" htmlFor="experienceYears">
                  Years of Experience
                </label>
                <input
                  className="input"
                  type="text"
                  id="experienceYears"
                  name="experienceYears"
                  value={values.experienceYears}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.experienceYears && errors.experienceYears ? (
                  <div className="text-red-600 text-sm">{errors.experienceYears}</div>
                ) : null}

                <div className="flex w-full justify-between items-center ">
                  <button
                    type="button"
                    className="mt-[4%] self-center px-4 py-2 bg-[#f4581c] rounded-lg hover:bg-opacity-90 text-white font-sans"
                    onClick={onBack}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="mt-[4%] self-center px-4 py-2 bg-[#f4581c] rounded-lg hover:bg-opacity-90 text-white font-sans"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex flex-row justify-center w-[100%]">
                        <img className="w-[70px]" src="loader.gif" alt="Loading..." />
                      </div>
                    ) : (
                      <>Next</>
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

export default QualificationExperienceStep;
