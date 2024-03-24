"use client";

import BookAppointmentCardContactInfo from "./bookappointmentcontactinfo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import sampleDoctorData from "../../homePage/components/sampleDoctorData";
import { useState } from "react";

export default function BookAppointmentCard() {
  const doctor = sampleDoctorData.doctors[0];
  const [selectedConsultant, setSelectedConsultant] = useState<string>(null!);

  const handleConsultantSelect = (consultant: string) => {
    setSelectedConsultant(consultant);
  };

  return (
    <div className="drop-shadow-md p-4 bg-[#eef4f6] rounded-lg">
      <h1 className="font-bold text-lg mb-1">Book Appointment Now</h1>
      <div className="flex mb-1">
        <img src={"/1.svg"} alt="" />
        Select Hospital/Clinic
      </div>

      {/* Video Consultant */}
      <div
        className={`rounded-md border-solid mb-2 border-2 cursor-pointer ${
          selectedConsultant === "videoConsultant"
            ? "border-blue-900"
            : "border-gray-300"
        }`}
        onClick={() => handleConsultantSelect("videoConsultant")}
      >
        <div className="px-4 bg-white space-y-1 py-2 text-sm">
          <div className=" text-sm font-semibold underline">
            Video Consultant
          </div>
          <div>Rs. {`${doctor.videoConsultation.price}`}</div>
          <div className="flex">
            <img src="/greendot.svg" alt="" />
            <h1> Available Today, </h1>

            {`${doctor.videoConsultation.timeFrom} - ${doctor.videoConsultation.timeTo}`}
          </div>
          Online
        </div>
      </div>

      {/* Other Consultants */}
      {doctor.otherConsultations.map((id) => (
        <div
          className={`rounded-md bg-white text-sm mb-2 border-solid cursor-pointer border-2 ${
            selectedConsultant === `otherConsultant-${id}`
              ? "border-blue-900"
              : "border-gray-300"
          }`}
          onClick={() => handleConsultantSelect(`otherConsultant-${id}`)}
        >
          <div className="px-4 sm:space-y-1 py-2">
            <div className="text-sm font-semibold underline">{`${id.area}`}</div>
            <div>{`Rs. ${id.price}`}</div>
            <div className="flex">
              <img src="/greendot.svg" alt="" />
              <h1>{id.available},</h1>
              {`${id.timeFrom} - ${id.timeTo}`}
            </div>
            <div>{`${id.place}`}</div>
          </div>
        </div>
      ))}

      {/* Select Date & Time */}
      <div className="flex">
        <img src={"/2.svg"} alt="" />
        Select Date & Time
      </div>

      <BookAppointmentCardContactInfo />
    </div>
  );
}
