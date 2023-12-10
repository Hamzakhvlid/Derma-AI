import React from "react";

export default function AppointmentDone({
    searchParams,
}: {
    searchParams: {
        id: string;
        patientName: string,
        patientPhone: string,
        doctorname: string;
        appointmentTime: string;
        hospitalPhone: string;
        hospital: string;
        place: string;
        date: string;
    };
}) {

    return (
        <div className="mt-20 text-center px-9 flex flex-col justify-center items-center">
            <div className="mb-8 flex flex-col justify-center items-center">
                <img className="h-10 w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png" alt="" />
                <h1 className="text-green-600 text-center text-3xl font-bold">Your Appointment is Booked.</h1>
            </div>
            Your Appointment is booked & our team will contact you as soon as possible.
            <div className="flex mt-10 space-x-6 justify-center items-center w-auto ">
                <div className="flex space-y-10 flex-col justify-center items-center w-auto">
                    <p>Appointment</p>
                    <p>Date</p>
                    <p>Dermatologist</p>
                    <p>Hospital</p>
                    <p>Hospital Address</p>
                    <p>Hospital Phone</p>
                </div>
                <div className="flex xs:mt-0 mt-[-20px] space-y-10 flex-col justify-center items-center w-auto">
                    <p>{searchParams.appointmentTime}</p>
                    <p>{searchParams.date}</p>
                    <p>{searchParams.doctorname}</p>
                    <p>{searchParams.hospital}</p>
                    <p>{searchParams.place}</p>
                    <p>{searchParams.hospitalPhone}</p>
                </div>
            </div>
        </div>
    );
}
