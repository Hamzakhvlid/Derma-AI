"use client";

import BookAppointmentCardContactInfo from "./bookappointmentcontactinfo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import sampleDoctorData from "../../../homePage/components/sampleDoctorData";
import { useState } from "react";

export default function BookAppointmentCard(props: {
  docID: string;
  isPublic: boolean;
  doctorName: string;
  doctorImage: string;  
  doctorEmail: string;
  availabilites: Array<{
    _id: string;
    startTime: string;
    endTime: string;
    city: string;
    day: string;
    location: string;
    lat: string;
    lng: string;
  }>;
  onlineAvailability: {
    _id: string;
    price: string;
    from: string;
    to: string;
  };
}) {
  const [selectedConsultant, setSelectedConsultant] = useState<string>(null!);
  const [selectedConsultantData, setSelectedConsultantData] =
    useState<any>(null);
   

  const handleConsultantSelect = (consultant: string, data: any) => {
    setSelectedConsultant(consultant);
    setSelectedConsultantData(data);
  };

  return (
    <div className="drop-shadow-md p-4 bg-[#eef4f6] rounded-lg w-full">
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
        onClick={() =>
          handleConsultantSelect("videoConsultant", props.onlineAvailability)
        }
      >
        <div className="px-4 bg-white space-y-1 py-2 text-sm">
          <div className=" text-sm font-semibold underline">
            Video Consultant
          </div>
          <div>Rs. {`${props.onlineAvailability.price}`}</div>
          <div className="flex">
            <img src="/greendot.svg" alt="" />

            {`${props.onlineAvailability.from} - ${props.onlineAvailability.to}`}
          </div>
          Online
        </div>
      </div>

      {/* Other Consultants */}
      {props.availabilites.map((id) => (
        <div
          className={`rounded-md bg-white text-sm mb-2 border-solid cursor-pointer border-2 ${
            selectedConsultant === `otherConsultant-${id._id}`
              ? "border-blue-900"
              : "border-gray-300"
          }`}
          onClick={() =>
            handleConsultantSelect(`otherConsultant-${id._id}`, id)
          }
        >
          <div className="px-4 sm:space-y-1 py-2">
            <div className="text-sm font-semibold underline">{`${id.location}`}</div>
            <div>{`${id.city}`}</div>
            <div className="flex">
              <img src="/greendot.svg" alt="" />
              {`${id.startTime} - ${id.endTime}`}
            </div>
          </div>
        </div>
      ))}

      {/* Select Date & Time */}
      {selectedConsultantData && (
        <div className="flex">
          <img src={"/2.svg"} alt="" />
          Select Date & Time
        </div>
      )}

      {selectedConsultantData && (
        <BookAppointmentCardContactInfo
          city={selectedConsultantData.city || "Online"}
          doctorID={props.docID}
          from={selectedConsultantData.from || selectedConsultantData.startTime}
          to={selectedConsultantData.to || selectedConsultantData.endTime}
          lat={selectedConsultantData.lat || 0}
          lng={selectedConsultantData.lng || 0}
          location= {selectedConsultantData.location || "Online"}
          isPublic={props.isPublic}
          doctorEmail={props.doctorEmail}
          doctorName={props.doctorName}
          doctorImage={props.doctorImage}
        />
      )}
    </div>
  );
}
