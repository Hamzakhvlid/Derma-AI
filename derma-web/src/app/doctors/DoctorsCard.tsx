import Button from "./Button";
import DiscountTag from "./DiscountTag";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import sampleDoctorData from "../homePage/components/sampleDoctorData";
import React, { useState } from "react";
import { Badge } from "@radix-ui/themes";

const DoctorsCard = (props: {
    doctorID: string;
    imgUrl: string;
    name: string;
    isVerfied: Boolean;
    isSergeon: Boolean;
    speciality: String;
    study: String;
    reviews: Number;
    experience: String;
    satisfaction: Number;
    videoConsultation: {
        isAvailable: Boolean;
        available: String;
        price: Number;
        timeFrom: String;
        timeTo: String;
    };
    otherConsultations: Array<{
        id: Number;
        place: string;
        area: string;
        timeFrom: string;
        timeTo: String;
        available: string;
        price: Number;
        isAvailable: Boolean;
        phone: string
    }>;
}) => {
    const { isAvailable, available, price, timeFrom, timeTo } =
        props.videoConsultation;
    const users = sampleDoctorData.users[0];
    
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
                                    <Link href={`/doctor/${props.doctorId}`} className="text-blue-900 underline font-bold ">
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
                                    <h1 className="font-bold">{`${props.satisfaction}`}%</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:flex-col flex-row space-x-2 sm:space-x-0 sm:space-y-2">
                        
                        <Button
                            title={"Video Call"}
                            color={"bg-[#4CA585]"}
                            href={"/doctordetailscreen#bookappointment"}
                        />
                        <Link href="/doctordetailscreen#bookappointment" className={`bg-[#004D71] rounded-lg px-4 py-2 text-center text-sm  text-white `}>
                            Book Appointment
                        </Link>

                    </div>
                </div>
                <Swiper
                    className="flex flex-row mt-6 space-x-5"
                    spaceBetween={50}
                    // install Swiper modules
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 2,
                        },
                        600: {
                            width: 600,
                            slidesPerView: 1,
                        },
                        1700: {
                            width: 1700,
                            slidesPerView: 3,
                        }

                    }}

                >
                    <SwiperSlide className="rounded-md border-blue-900 border-solid border-2">
                        <Link href= "/doctordetailscreen#bookappointment" className="px-4 block sm:space-y-0 space-y-3 py-2">
                            <div className="flex text-sm font-bold">
                                Video Consultant
                            </div>
                            <div className="flex">
                                    <img src="/greendot.svg" alt="" />
                                    <h1 className="text-sm text-green-800">Available Tomorrow</h1>
                                </div>
                                <div>Rs. {`${price}`}</div>
                            
                        </Link>
                    </SwiperSlide>
                    {props.otherConsultations.map((id) => (

                        <SwiperSlide className="rounded-md border-gray-300 border-solid border-2 ">
                            <Link
                            href={"/doctor#bookappointment"}
                                className="cursor-pointer">
                                <div className="px-4 sm:space-y-0 space-y-3 py-2">
                                    <div className="flex text-sm font-bold">

                                        {`${id.area}, ${id.place}`}
                                    </div>
                                    <div className="flex">
                                            <img src="/greendot.svg" alt="" />
                                            <h1 className="text-sm text-green-800">{id.available}</h1>
                                        </div>
                                        <div>Rs. {`${id.price}`}</div>
                                </div>
                            </Link>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default DoctorsCard;
