"use client";
import React, { useEffect, useState } from "react";
import BasicInfoStep from "./components/firststep";
import QualificationExperienceStep from "./components/secondstep";
import AvailabilityStep from "./components/thirdstep";
import "./style.css";
import axios from "axios";
import { baseUrl } from "@/app/api/baseUrl";

interface Qualification {
  institution: string;
  program: string;
}

interface Experience {
  institution: string;
  designation: string;
}

interface OnlineAvailability {
  from: string;
  to: string;
  price: string;
}

interface Availability {
  startTime: string; // Time in 24-hour format (e.g., "09:00")
  endTime: string; // Time in 24-hour format (e.g., "17:00")
  day: string;
  lat: number;
  lng: number;
  city: string;
  location: string;
  price: string;
}

export interface FormValues {
  doctorName: string;
  city: string;
  imageUrl: string;
  phone: string;
  hospital: string;
  desc: string;
  specialization: string;
  qualifications: Qualification[];
  experience: Experience[];
  experienceYears: string;
  availability: Availability[];
  onlineAvailability: OnlineAvailability;
  promotionalHeadline: string;
  detailedRole: string;
}

const initialValues: FormValues = {
  doctorName: "",
  city: "Lahore",
  imageUrl: "",
  phone: "",
  hospital: "",
  desc: "",
  specialization: "",
  qualifications: [],
  experience: [],
  experienceYears: "",
  availability: [],
  onlineAvailability: { from: "", to: "", price: "" },
  promotionalHeadline: "",
  detailedRole: "",
};

const DashboardProfile: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formValues, setFormValues] = useState<FormValues | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchDoctorDetails() {
      await axios
        .get(`${baseUrl}getCompleteDoctor`, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(res.data.doctor);
          const doctorData = res.data.doctor;

          const fetchedValues: FormValues = {
            doctorName: doctorData.doctorName || "",
            city: doctorData.city || "Lahore",
            imageUrl: doctorData.imageUrl || "",
            phone: doctorData.phone || "",
            hospital: doctorData.hospital || "",
            desc: doctorData.desc || "",
            specialization: doctorData.specialization || "",
            qualifications: doctorData.qualifications || [],
            experience: doctorData.experience || [],
            experienceYears: doctorData.experienceYears || "",
            availability: doctorData.availability || [],
            onlineAvailability: doctorData.onlineAvailability || {
              from: "",
              to: "",
              price: "",
            },
            promotionalHeadline: doctorData.promotionalHeadline || "",
            detailedRole: doctorData.detailedRole || "",
          };

          setFormValues(fetchedValues);
        });
    }
    fetchDoctorDetails();
    setLoading(false);
  }, []);

  const handleBack = () => {
    setStep(step - 1);
  };

  if (!formValues) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  const handleNext = (values: Partial<FormValues>) => {
    setFormValues({ ...formValues, ...values });
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return <BasicInfoStep initialValues={formValues} onNext={handleNext} />;
    case 2:
      return (
        <QualificationExperienceStep
          initialValues={formValues}
          onNext={handleNext}
          onBack={handleBack}
        />
      );
    case 3:
      return (
        <AvailabilityStep initialValues={formValues} onBack={handleBack} />
      );
    default:
      return null;
  }
};

export default DashboardProfile;
