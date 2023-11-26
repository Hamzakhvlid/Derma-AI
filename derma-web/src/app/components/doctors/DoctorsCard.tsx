import Button from "./Button";
import DiscountTag from "./DiscountTag";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const DoctorsCard = (props: {
    imgUrl: String;
    name: String;
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
        place: String;
        area: String;
        timeFrom: String;
        timeTo: String;
        available: String;
        price: Number;
        isAvailable: Boolean;
    }>;
}) => {
    const { isAvailable, available, price, timeFrom, timeTo } =
        props.videoConsultation;
    return (
        <>
            <div className="w-full h-auto drop-shadow-md px-[2rem] bg-white py-5 rounded-lg">
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <div className="flex xl:flex-row flex-col">
                        <img
                            className="rounded-full shadow-lg mb-6 mt-6 sm:mx-[6rem] mx-0 w-24 "
                            src="https://i.ibb.co/XVFPhWP/PSX-20230524-011601.jpg"
                            alt="avatar"
                        />
                        <div className="sm:pb-0 pb-4">
                            <div className="space-y-2">
                                <div className="flex">
                                    <h1 className="text-blue-900 underline font-bold ">
                                        {props.name}
                                    </h1>
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
                                        <div className="bg-green-900 text-white text-xs rounded-sm px-1 py-1">
                                            Surgeon
                                        </div>
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
                    <div className="flex sm:flex-col flex-row  space-x-3 space-y-2">
                        <p></p>
                        <Button
                            title={"Video Consultant"}
                            color={"bg-red-800"}
                            imgUrl={"/videocam.svg"}
                        />
                        <Button
                            title={"Book Appointment"}
                            color={"bg-blue-900"}
                            imgUrl={"/booking.svg"}
                        />
                        {props.isSergeon && (
                            <div className="relative mt-3">
                                <DiscountTag />
                                <Button
                                    title={"Pre-Surgery Appointment"}
                                    color={"bg-green-800"}
                                    imgUrl={"/surgeory.svg"}
                                />
                            </div>
                        )}
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
                    <SwiperSlide className="rounded-md border-blue-900 border-solid border-2 w-[30rem]">
                        <div className="px-4  sm:space-y-0 space-y-3 py-2">
                            <div className="flex text-sm font-bold">
                                <img src="/videocamB.svg" alt="" />
                                Video Consultant
                            </div>
                            <div className="flex text-sm ">
                                <img src="/clock.svg" alt="" />
                                {`${timeFrom} - ${timeTo}`}
                            </div>
                            <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between w-[28rem]">
                                <div className="flex">
                                    <img src="/greendot.svg" alt="" />
                                    <h1 className="text-sm text-green-800">Available Tomorrow</h1>
                                </div>
                                <div>Rs. {`${price}`}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {props.otherConsultations.map((id) => (
                        <SwiperSlide className="rounded-md border-gray-300 border-solid border-2 w-[30rem]">
                            <div className="px-4 sm:space-y-0 space-y-3 py-2">
                                <div className="flex text-sm font-bold">
                                    
                                    {`${id.area}, ${id.place}`}
                                </div>
                                <div className="flex text-sm ">
                                    <img src="/clock.svg" alt="" />
                                    {`${id.timeFrom} - ${id.timeTo}`}
                                </div>
                                <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between w-[28rem]">
                                    <div className="flex">
                                        <img src="/greendot.svg" alt="" />
                                        <h1 className="text-sm text-green-800">{id.available}</h1>
                                    </div>
                                    <div>Rs. {`${id.price}`}</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default DoctorsCard;
