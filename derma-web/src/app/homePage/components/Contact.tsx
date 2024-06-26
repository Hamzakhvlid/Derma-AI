"use client";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    let   timeout:any ;
    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 8000);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  const sendEmail = (e:any) => {
    e.preventDefault();
    
  };

  return (
    <div id="contact-us" className="max-w-screen-lg mx-auto p-2 mb-16 md:mb-0">
      <div className="grid grid-cols-1 md:grid-cols-12 border rounded-md">
        <div className="bg-slate-100  md:col-span-4 p-7 text-gray-900 ">
          <p className="mt-4 text-sm leading-7 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-[#3b82f6]">Touch</span>
          </h3>
          <p className="mt-4 leading-6 text-gray-950">
            Book an appointment with our doctors, Our team is ready and waiting
            to serve you.
          </p>

          

          <p className=" mt-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3b82f6"
              className="w-5 h-5 mr-2 sm:mr-3"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>+25073000020</span>
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3b82f6"
              className="w-5 h-5 mr-2 sm:mr-3"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>DermaAI@doc.com</span>
          </p>

          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#3b82f6"
              className="w-5 h-5 mr-2 sm:mr-3"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>GUJRAT - PAKISTAN</span>
          </p>
        </div>

        <form
          ref={form.current}
          onSubmit={sendEmail}
          className="md:col-span-8 px-10 pt-4 pb-3"
        >
          <div className="mb-3 "  id="contact">
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

          <div className="-mx-0 mb-3">
            <label
              htmlFor="chosen_service"
              className="mb-1 block text-base font-medium text-[#07074D]"
            >
              Services
            </label>
            <select
              name="chosen_service"
              id="chosen_service"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="AI_diseases_Diagnosis_Prevention">
              AI diseases Diagnosis & Prevention
              </option>
              <option value="Cosmetic_Dermatology">Cosmetic Dermatology</option>
              <option value="Appointment_Booking">Appointment Booking</option>
              <option value="Skin_Care_Tips_Tricks">Skin Care Tips & Tricks</option>
              <option value="Check-ups_and_Consultation">Check-ups and Consultation</option>
              <option value="Acne_Treatment">
              Acne Treatment
              </option>
              
            </select>
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
              htmlFor="user_message"
            >
              Message
            </label>
            <textarea
              id="user_message"
              name="user_message"
             
              className="resize-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>

          <div className="mt-4">
     
              <button
                type="submit"
                value="Send"
                className="hover:shadow-form hover:opacity-90 w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

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

export default Contact;
