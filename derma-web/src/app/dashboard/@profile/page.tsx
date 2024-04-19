"use client";
import React from "react";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import { signup } from "../../Api/baseUrl";
import { useEffect } from "react";
import axios from "axios";

import "./style.css";
import SucessMessage from "../../forgotPassword/sucessMessage";
interface Values {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}
//initial values for form
const initialValues = {
  nic: "",
  phone: "",
  hospital: "",
  detailed_role: "",
  services_offered: "",
  special_services: "",
  specialization: "",
  description: "",
  qualification: [],
  experience: [],
};

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

// Render the Counter component inside the SignUpPage component

export default function DashboardProfile() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);

  // handle qualifications
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

  //
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(signup, values);
          console.log(response);
          setIsLoading(false);

          if (response.status == 201) {
            setShowSuccess(true);
            setCount(1);
          }
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
    <div className="   h-[100vh]">
      <div className=" p-2   md:pt-0 flex justify-center ">
        <div className="shadow w-[90%] flex-col flex pt-3 pb-3 pr-4 pl-4 bg-[#f1f5f9]  rounded-md drop-shadow-lg  md:w-[60%] lg-[50%] xl:w-[40%]">
          <h1 className="font-bold text-[1.3rem]  text-blue-900 self-center ">
            Doctor Profile
          </h1>
          <hr className="border-[#f4581c] border-width-3px height-1px mt-[1%] w-[20%] self-center" />
          <form
            className="flex mb-[30%] md:mb-0 mt-2 gap-1  flex-col justify-center "
            onSubmit={handleSubmit}
          >
            {/* Basic Information */}
            <div className="flex flex-col  md:flex-row gap-1">
              <div className=" flex-col w-[100%]">
                <label className="label" htmlFor="nic">
                  NIC
                </label>
                <input
                  className="input"
                  type="text"
                  id="nic"
                  name="nic"
                  placeholder="Enter NIC"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className=" flex-col w-[100%]">
                <label className="label" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="input"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            {/* Professional Information */}
            <label className="label" htmlFor="hospital">
              Hospital
            </label>
            <input
              className="input"
              type="text"
              id="hospital"
              name="hospital"
              placeholder="Enter Hospital Name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="label" htmlFor="role">
              Detailed Role
            </label>
            <input
              className="input"
              type="text"
              id="role"
              name="role"
              placeholder="Enter Your detailed role"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="label" htmlFor="services-offered">
              Services Offered
            </label>
            <input
              className="input"
              type="text"
              id="services-offered"
              name="services-offered"
              placeholder="Enter Your Services Offered"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="label" htmlFor="special-services">
            Special Services
            </label>
            <input
              className="input"
              type="text"
              id="special-services"
              name="special-services"
              placeholder="Enter Your Special Services"
              onChange={handleChange}
              onBlur={handleBlur}
            />

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
            />
            <label className="label" htmlFor="specialization">
              Description
            </label>
            <textarea
              className="input"
              id="desc"
              name="desc"
              placeholder="Enter Description"
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {/* Qualifications */}

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
                  <button onClick={() => handleRemoveQualification(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button onClick={handleAddQualification}>
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
                  <button onClick={() => handleRemoveExperience(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button onClick={handleAddExperience}>
                Add Experience
              </button>
            </div>


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
