"use client";
import React, {useState, ChangeEvent } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Theme, Switch } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "../style.css";

interface Availability {
    startTime: string; // Time in 24-hour format (e.g., "09:00")
    endTime: string; // Time in 24-hour format (e.g., "17:00")
    day: string;
    lat: number;
    lng: number;
    city: string;
    location: string;
    price: string;
    [key: string]: string | number;
  }
  interface OnlineAvailability {
    from: string;
    to: string;
    price: string;
  }

  interface FormValues {
    availability: Availability[];
    onlineAvailability: OnlineAvailability;
    promotionalHeadline: string;
    detailedRole: string;
  }
  
  interface AvailabilityStepProps {
    initialValues: FormValues;
    onBack: () => void;
  }


const AvailabilityStep: React.FC<AvailabilityStepProps> = ({ initialValues, onBack }) => {
    const [onlineAvailabilitySwitch, setOnlineAvailabilitySwitch] =
    useState(false);
  const [onlineAvailability, setOnlineAvailability] =
    useState<OnlineAvailability>({
      from: "",
      to: "",
      price: "",
    });
  const handleOnlineAvailabilityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOnlineAvailability({ ...onlineAvailability, [name]: value });
  };
  const [availability, setAvailability] = useState<Availability[]>([
    { location: "", price: "", city: "", lat: 0, lng: 0, day: "", endTime: "", startTime: ""},
  ]);
  const handleAddAvailability = () => {
    setAvailability([
      ...availability,
      { location: "", price: "", city: "", lat: 0, lng: 0, day: "", endTime: "", startTime: ""},
    ]);
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
    const formik = useFormik<FormValues>({
      initialValues,
      validationSchema: Yup.object({
        // availability: Yup.array().of(
        //   Yup.object({
        //     location: Yup.string().required("Location is required"),
        //     price: Yup.number().min(500).max(2000).required("Price is required"),
        //     city: Yup.string().required("City is required"),
        //     lat: Yup.number().required("Latitude is required"),
        //     lng: Yup.number().required("Longitude is required"),
        //     day: Yup.string().required("Day is required"),
        //     endTime: Yup.string().required("End time is required"),
        //     startTime: Yup.string().required("Start time is required"),
        //   })
        // ).required("Availability is required"),
        // onlineAvailability: Yup.object().shape({
        //   from: Yup.string().required("Start time is required"),
        //   to: Yup.string().required("End time is required"),
        //   price: Yup.number().min(500).max(2000).required("Price is required"),
        // }),
        promotionalHeadline: Yup.string().required("Promotional headline is required"),
        detailedRole: Yup.string().required("Detailed role is required"),
      }),
      onSubmit: async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
        try {
          values.availability = availability as never[];
          values.onlineAvailability = onlineAvailability;
          console.log("Submitting availability", values);
            alert("Profile setup complete!");
          
        } catch (error) {
          console.error("Error submitting availability", error);
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
        <label className="label" htmlFor="availability">
              Availability
            </label>
            <div>
              {availability.map((slot, index) => (
                <div key={index} className="flex flex-col  md:flex-row gap-1 flex-wrap ">
                  <input
                    type="time"
                    className="input"
                    name="startTime"
                    value={slot.startTime}
                    onChange={(e) => handleAvailabilityChange(index, e)}
                    placeholder="startTime"
                  />
                  <input
                    type="time"
                    className="input"
                    name="endTime"
                    value={slot.endTime}
                    onChange={(e) => handleAvailabilityChange(index, e)}
                    placeholder="endTime"
                  />
                  <input
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
                  <input
                    type="text"
                    className="input"
                    name="city"
                    value={slot.city}
                    onChange={(e) => handleAvailabilityChange(index, e)}
                    placeholder="City"
                    />
                  <input
                    type="text"
                    className="input"
                    name="day"
                    value={slot.day}
                    onChange={(e) => handleAvailabilityChange(index, e)}
                    placeholder="Day" />
                  <input
                    type="number"
                    className="input"
                    name="lat"
                    value={slot.lat}
                    onChange={(e) => handleAvailabilityChange(index, e)}
                    placeholder="Latitude" />
                  <input
                    type="number"
                    className="input"
                    name="lng"
                    value={slot.lng}
                    onChange={(e) => handleAvailabilityChange(index, e)}
                    placeholder="Longitude" />
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
                  />
                  <input
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.promotionalHeadline}
            />
            <label className="label" htmlFor="detailedRole">
              Detailed Role
            </label>
            <input
              className="input"
              type="text"
              id="detailedRole"
              name="detailedRole"
              placeholder="Enter Your detailed role"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.detailedRole}
            />
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Submit</button>
      </form>
      </div>
      </div>
      </div>
    );
  };
  
  export default AvailabilityStep;