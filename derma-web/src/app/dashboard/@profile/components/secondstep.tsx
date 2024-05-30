"use client";
import React, {useState, ChangeEvent } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormValues } from "../page";
import "../style.css";

interface Qualification {
    institution: string;
    program: string;
    [key: string]: string; // Index signature
  }
  
  interface Experience {
    institution: string;
    designation: string;
    [key: string]: string; // Index signature
  }
  



  interface QualificationExperienceStepProps {
    initialValues: FormValues;
    onNext: (values: FormValues) => void;
    onBack: () => void;
  }

  const QualificationExperienceStep: React.FC<QualificationExperienceStepProps> = ({ initialValues, onNext, onBack }) => {
    const [qualifications, setQualifications] = useState<Qualification[]>([
        { institution: "", program: "" },
      ]);
    
      const handleAddQualification = () => {
        setQualifications([...qualifications, { institution: "", program: "" }]);
      };
    
      const handleRemoveQualification = (index: number) => {
        const updatedQualifications = qualifications.filter((_, i) => i !== index);
        setQualifications(updatedQualifications);
      };
    
      const handleQualificationChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement>
      ) => {
        const { name, value } = e.target;
        const updatedQualifications = [...qualifications];
        updatedQualifications[index][name] = value;
        setQualifications(updatedQualifications);
      };
    
      // handle experience
      const [experience, setExperiece] = useState<Experience[]>([
        { institution: "", designation: "" },
      ]);
    
      const handleAddExperience = () => {
        setExperiece([...experience, { institution: "", designation: "" }]);
      };
    
      const handleRemoveExperience = (index: number) => {
        const updatedExperience = experience.filter((_, i) => i !== index);
        setExperiece(updatedExperience);
      };
    
      const handleExperienceChange = (
        index: number,
        e: ChangeEvent<HTMLInputElement>
      ) => {
        const { name, value } = e.target;
        const updatedExperience = [...experience];
        updatedExperience[index][name] = value;
        setExperiece(updatedExperience);
      };
    
    const formik = useFormik<FormValues>({
      initialValues,
      validationSchema: Yup.object({
        specialization: Yup.string().required("Specialization is required"),
        // qualifications: Yup.array().of(
        //   Yup.object({
        //     institution: Yup.string().required("Institution is required"),
        //     program: Yup.string().required("Program is required"),
        //   })
        // ).required("Qualifications are required"),
        // experience: Yup.array().of(
        //   Yup.object({
        //     institution: Yup.string().required("Institution is required"),
        //     designation: Yup.string().required("Designation is required"),
        //   })
        // ).required("Experience is required"),
      }),
      onSubmit: async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        try {
            // Explicitly type 'values.availability' as an array of 'never' type
          values.qualifications = qualifications as never[];
          values.experience = experience as never[];
          
         console.log("Submitting qualifications", values);
            onNext(values);
          
        } catch (error) {
          console.error("Error submitting qualifications", error);
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
        <label className="label" htmlFor="specialization">
              Specialization
            </label>
            <input
              className="input"
              type="text"
              id="specialization"
              name="specialization"
              placeholder="Enter Specialization"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.specialization}
            />
            <label className="label" htmlFor="qualifications">
              Qualifications
            </label>

            <div>
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex flex-col  md:flex-row gap-1">
                  <input
                    type="text"
                    className="input"
                    name="institution"
                    value={qualification.institution}
                    onChange={(e) => handleQualificationChange(index, e)}
                    placeholder="Institution"
                  />
                  <input
                    type="text"
                    className="input"
                    name="program"
                    value={qualification.program}
                    onChange={(e) => handleQualificationChange(index, e)}
                    placeholder="Program"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveQualification(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddQualification}>
                Add Qualification
              </button>
            </div>

            {/* Experience */}

            <label className="label" htmlFor="experience">
              Experience
            </label>

            <div>
              {experience.map((exp, index) => (
                <div key={index} className="flex flex-col  md:flex-row gap-1">
                  <input
                    type="text"
                    className="input"
                    name="institution"
                    value={exp.institution}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Institution"
                  />
                  <input
                    type="text"
                    className="input"
                    name="designation"
                    value={exp.designation}
                    onChange={(e) => handleExperienceChange(index, e)}
                    placeholder="Designation"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveExperience(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={handleAddExperience}>
                Add Experience
              </button>
            </div>
            <label className="label" htmlFor="experienceYears:">
              Years of Experience
            </label>
            <input
              className="input"
              type="number"
              id="experienceYears:"
              name="experienceYears:"
              placeholder="1"
              min="0"
              value={formik.values.experienceYears}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </form>
      </div>
      </div>
      </div>
    );
  };
  
  export default QualificationExperienceStep;