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
    <div className="drop-shadow-md px-[2rem] bg-[#eef4f6] py-5 rounded-lg mt-20">
      <h1 className="font-bold text-lg">Book Appointment Now</h1>

      <div className="flex">
        <img src={"/1.svg"} alt="" />
        Select Hospital/Clinic
      </div>

      {/* Video Consultant */}
      <div
        className={`rounded-md border-solid border-2 cursor-pointer ${
          selectedConsultant === "videoConsultant"
            ? "border-blue-900"
            : "border-gray-300"
        }`}
        onClick={() => handleConsultantSelect("videoConsultant")}
      >
        <div className="px-4 space-y-1 py-2">
          <div className="flex text-sm font-bold">
            <img src="/videocamB.svg" alt="" />
            Video Consultant
          </div>
          <div className="flex text-sm">
            <img src="/clock.svg" alt="" />
            {`${doctor.videoConsultation.timeFrom} - ${doctor.videoConsultation.timeTo}`}
          </div>
          <div className="flex md:flex-row flex-col sm:items-center sm:justify-between">
            <div className="flex">
              <img src="/greendot.svg" alt="" />
              <h1 className="text-sm text-green-800">Available Tomorrow</h1>
            </div>
            <div>Rs. {`${doctor.videoConsultation.price}`}</div>
          </div>
        </div>
      </div>

      {/* Other Consultants */}
      {doctor.otherConsultations.map((id) => (
        <div
          className={`rounded-md border-solid cursor-pointer border-2 ${
            selectedConsultant === `otherConsultant-${id}`
              ? "border-blue-900"
              : "border-gray-300"
          }`}
          onClick={() => handleConsultantSelect(`otherConsultant-${id}`)}
        >
          <div className="px-4 sm:space-y-1 py-2">
            <div className="text-sm font-bold">
              {`${id.area}, ${id.place}`}
            </div>

            <div className="flex text-sm ">
              <img src="/clock.svg" alt="" />
              {`${id.timeFrom} - ${id.timeTo}`}
            </div>
            <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between">
              <div className="flex">
                <img src="/greendot.svg" alt="" />
                <h1 className="text-sm text-green-800">{id.available}</h1>
              </div>
              <div>Rs. {`${id.price}`}</div>
            </div>
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
