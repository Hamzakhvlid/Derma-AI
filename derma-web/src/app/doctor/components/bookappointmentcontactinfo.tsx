import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Fade from "react-awesome-reveal";
import sampleDoctorData from "@/app/homePage/components/sampleDoctorData";
import Link from "next/link";

const BookAppointmentCardContactInfo = () => {
  const doctor = sampleDoctorData.doctors[0];
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
console.log(form);
  useEffect(() => {
    let timeout: any;
    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 8000);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    // emailjs
    //   .sendForm(
    //     "service_xisoyix",
    //     "template_o8b8bzr",
    //     form.current as any,
    //     "y5LmTUdhgknXetKeT"
    //   )
    //   .then((result) => {
    //     var form = form.current as any;
    //     setIsSent(true);
    //     setIsLoading(false);
    //     form.reset();
    //     setTimeout(() => {
    //       setIsSent(false);
    //     }, 5000);
    //   })
    //   .catch((error) => {
    //     setError("An error occurred. Please try again later.");
    //     setIsLoading(false);
    //   });
  };

  return (
    <div className="mx-auto p-2">
      <div className=" border rounded-md">
        <form
          ref={form.current}
          onSubmit={sendEmail}
          className="md:col-span-8 px-4 pt-4 pb-3"
        >
          <div className="mb-3 " id="contact">
            <label
              htmlFor="user_name"
              className="mb-1 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              required
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_phone"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  id="user_phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_email"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_date"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="user_date"
                  id="user_date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="user_time"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="user_time"
                  id="user_time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="w-full mb-3">
            <label
              className="mb-1 block text-base font-medium text-[#07074D]"
              htmlFor="promo-code"
            >
              Promo Code
            </label>
            <input
              id="promo-code"
              name="promo-code"
              type="text"
              placeholder="Add Promo Code"
              className="resize-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></input>
          </div>

          <div className="mt-4">
            <Fade>
              <Link
              href={{pathname:"/appointmentdone", query:{
                id: doctor.id,
                patientName: "Muhammad Ansar",
                patientPhoneNo: "03214613759",
                doctorname: doctor.name,
                appointmentTime: doctor.otherConsultations[0].id,
                hospitalPhone: doctor.otherConsultations[0].phone,
                hospital: doctor.otherConsultations[0].area,
                place: doctor.otherConsultations[0].place,
                date: doctor.otherConsultations[0].timeFrom,
              }}}
            
                type="submit"
                // value="Send"
                className="hover:shadow-form hover:opacity-90 w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                // disabled={isLoading}
              >
                {isLoading ? "Booking..." : "Book Appointment"}
              </Link>
            </Fade>
            {isSent && (
              <p className="text-green-500 mt-1 text-center">
                Appointment received successfully, Thank you!
              </p>
            )}
            {error && <p className="text-red-500 mt-1 text-center">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointmentCardContactInfo;
