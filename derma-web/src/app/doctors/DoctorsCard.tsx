import Button from "./Button";
import DiscountTag from "./DiscountTag";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import sampleDoctorData from "../homePage/components/sampleDoctorData";
import React, { useState } from "react";
import { Badge } from "@radix-ui/themes";

const DoctorsCard = (props: {
    _id: string;
    imgUrl: string;
    name: string;
    isVerfied: Boolean;
    isSergeon: Boolean;
    speciality: String;
    study: String;
    reviews: Number;
    experience: String;
    
}) => {
    return (
        <>
            <div className="w-full drop-shadow-md px-[2rem] bg-white py-5 rounded-lg">
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <div className="flex xl:flex-row flex-col">
                        <img
                            className="rounded-full shadow-lg mb-6 mt-6 sm:mx-[6rem] mx-0 w-24 "
                            src={props.imgUrl}
                            alt="avatar"
                        />
                        <div className="sm:pb-0 pb-4">
                            <div className="space-y-2">
                                <div className="flex">
                                    <Link href={`/doctors/doctor/${props._id}`} className="text-blue-900 underline font-bold ">
                                        {props.name}
                                    </Link>
                                    {props.isVerfied && (
                                        <img
                                            className="h-6 w-6"
                                            src="https://cdn-icons-png.flaticon.com/256/6784/6784655.png"
                                            alt=""
                                        />
                                    )}
                                </div>
                                <div className="flex sm:space-x-10 space-x-3">
                                    <p className="sm:text-sm text-xs text-gray-600">
                                        {props.speciality}
                                    </p>
                                    {props.isSergeon && (
                                        <Badge variant="solid" color="green">Surgeon</Badge>
                                    )}
                                </div>
                                <p className="sm:text-sm text-xs text-gray-600">
                                    {props.study}
                                </p>
                            </div>
                            <div className="mt-5  text-sm  sm:divide-x divide:y divide-gray-300 flex sm:flex-row flex-col  sm:space-x-10 ">
                                <div>
                                    <h1>Reviews</h1>
                                    <h1 className="font-bold">{`${props.reviews}`}</h1>
                                </div>
                                <div className="sm:pl-4 pl-0">
                                    <h1>Experience</h1>
                                    <h1 className="font-bold">{props.experience}</h1>
                                </div>
                                <div className="sm:pl-4 pl-0">
                                    <h1>Satisfaction</h1>
                                    {/* <h1 className="font-bold">{`${props.satisfaction}`}%</h1> */}
                                    <h1 className="font-bold">{`${0}`}%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:flex-col flex-row space-x-2 sm:space-x-0 sm:space-y-2">
                        
               
                 
                        <Link href={`/doctors/doctor/${props._id}`} className={`bg-[#004D71] rounded-lg px-4 py-2 text-center text-sm  text-white `}>
                            Book Appointment
                        </Link>

                    </div>
                </div>
            </div>
        </>
    );
};

export default DoctorsCard;
