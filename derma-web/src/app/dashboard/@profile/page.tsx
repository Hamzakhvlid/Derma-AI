"use client";
import React from "react";
import { useState, ChangeEvent } from "react";
import { useFormik } from "formik";
import { useEffect } from "react";
import axios from "axios";
import { City } from "country-state-city";
import "./style.css";
import { Theme, Switch } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import { getCompleteDoctorDetailsForDashboard } from "@/app/api/baseUrl";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";


//initial values for form
const initialValues = {
  nic: "",
  phone: "",
  hospital: "",
  role: "",
  services_offered: "",
  special_services: "",
  specialization: "",
  description: "",
  qualification: [],
  experience: [],
  city: "",
  years_exp: "",
  promotional_headline: "",
  availability: [],
  onlineAvailability: {}
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

interface Availability {
  from: string; // Time in 24-hour format (e.g., "09:00")
  to: string; // Time in 24-hour format (e.g., "17:00")
  location: string;
  price: string;
  [key: string]: string;
}
interface OnlineAvailability{
  from : string,
  to: string,
  price: string,
}

// Render the Counter component inside the SignUpPage component

export default function DashboardProfile() {

  
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(1);
  const [onlineAvailabilitySwitch, setOnlineAvailabilitySwitch] = useState(false);
  const [onlineAvailability, setOnlineAvailability] = useState<OnlineAvailability>({
    from: "", to: "", price: ""
  });
  const handleOnlineAvailabilityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOnlineAvailability({ ...onlineAvailability, [name]: value });
  };

  const pakAllCities = City.getCitiesOfCountry("PK");

  // handle availability

  const [availability, setAvailability] = useState<Availability[]>([
    {from: "", to: "", location: "", price: ""}
  ]);
  const handleAddAvailability = () => {
    setAvailability([...availability, { from: "", to: "", location: "" , price: ""}]);
  };

  const handleRemoveAvailability = (index: number) => {
    const updatedAvailability = availability.filter((_, i) => i !== index);
    setAvailability(updatedAvailability);
  };

  const handleAvailabilityChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedAvailability = [...availability];
    updatedAvailability[index][name] = value;
    setAvailability(updatedAvailability);
  };
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

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setValues } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values, action) => {
        try {
          values.availability = availability as never[]; // Explicitly type 'values.availability' as an array of 'never' type
          values.qualification = qualifications as never[];
          values.experience = experience as never[];
          values.onlineAvailability = onlineAvailability;
          
          // const response = await axios.post(signup, values);
          // console.log(response);
          // setIsLoading(false);

          console.log(values);
          // if (response.status == 201) {
          //   setShowSuccess(true);
          //   setCount(1);
          // }
        } catch (error) {
          alert(JSON.stringify(error));
        }
        action.resetForm();
      },
    });

    useEffect(() => {
      async function getDoctorCompleteProfile(){
        try{
          await axios.get(`${getCompleteDoctorDetailsForDashboard}`, {
            withCredentials: true,
            headers: {
              "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
          }).then((response) => {
            const doctordata = response.data.doctor;
            setValues({
              nic: doctordata.nic || "",
              phone: doctordata.phone || "",
              hospital: doctordata.hospital || "",
              role: doctordata.role || "",
              services_offered: doctordata.services_offered || "",
              special_services: doctordata.special_services || "",
              specialization: doctordata.specialization || "",
              description: doctordata.description || "",
              qualification: doctordata.qualification || [],
              experience: doctordata.experience || [],
              city: doctordata.city || "",
              years_exp: doctordata.years_exp || "",
              promotional_headline: doctordata.promotional_headline || "",
              availability: doctordata.availability || [],
              onlineAvailability: doctordata.onlineAvailability || {}
            });
            console.log(response.data)
          })
        }catch(err){
          console.log(err)
        }
      }
      getDoctorCompleteProfile()
    }, [])

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
            <label className="label" htmlFor="services_offered">
              Services Offered
            </label>
            <input
              className="input"
              type="text"
              id="services_offered"
              name="services_offered"
              placeholder="Enter Your Services Offered"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="label" htmlFor="city">
              City
            </label>
            <select
              onChange={handleChange}
              defaultValue={"Lahore"}
              onBlur={handleBlur}
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
            <label className="label" htmlFor="years_exp">
              Years of Experience
            </label>
            <input
              className="input"
              type="number"
              id="years_exp"
              name="years_exp"
              placeholder="1"
              min="0"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="label" htmlFor="special_services">
              Special Services
            </label>
            <input
              className="input"
              type="text"
              id="special_services"
              name="special_services"
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
            <label className="label" htmlFor="desc">
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
            <label className="label" htmlFor="promotional_headline">
              Promotional Headline
            </label>
            <input
              className="input"
              type="text"
              id="promotional_headline"
              name="promotional_headline"
              placeholder="Enter Promotional Headline"
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
            <label className="label" htmlFor="availability">
              Availability
            </label>
            <div>
            {availability.map((slot, index) => (
              <div key={index} className="flex flex-col  md:flex-row gap-1">
                <input
                  type="time"
                  className="input"
                  name="from"
                  value={slot.from}
                  onChange={(e) => handleAvailabilityChange(index, e)}
                  placeholder="From"
                />
                <input
                  type="time"
                  className="input"
                  name="to"
                  value={slot.to}
                  onChange={(e) => handleAvailabilityChange(index, e)}
                  placeholder="To"
                /><input
                type="number"
                className="input"
                name="price"
                value={slot.price}
                onChange={(e) => handleAvailabilityChange(index, e)}
                placeholder="Price"
                min={"500"}
                max={"2000"}
              />
                <input
                  type="text"
                  className="input"
                  name="location"
                  value={slot.location}
                  onChange={(e) => handleAvailabilityChange(index, e)}
                  placeholder="Location"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveAvailability(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            

            <button type="button" onClick={handleAddAvailability}>
              Add Availability
            </button>
            </div>
            <div><Theme><Switch checked={onlineAvailabilitySwitch} onCheckedChange={() => setOnlineAvailabilitySwitch(!onlineAvailabilitySwitch)}/></Theme></div>
            {
              onlineAvailabilitySwitch ? <div>
              <label className="label" htmlFor="availability">
              Online Availability
            </label>
            <div className="flex flex-col  md:flex-row gap-1">
            <input
                  type="time"
                  className="input"
                  name="from"
                  value={onlineAvailability.from}
                  onChange={handleOnlineAvailabilityChange}
                  placeholder="From"
                />
                <input
                  type="time"
                  className="input"
                  name="to"
                  value={onlineAvailability.to}
                  onChange={handleOnlineAvailabilityChange}
                  placeholder="To"
                /><input
                type="number"
                className="input"
                name="price"
                value={onlineAvailability.price}
                onChange={handleOnlineAvailabilityChange}
                placeholder="Price"
                min={"500"}
                max={"2000"}
              />

            </div>
            </div> : (<></>)
}
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