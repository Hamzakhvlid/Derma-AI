import React, { useRef, useState, useEffect } from "react";
import Fade from "react-awesome-reveal";
import sampleDoctorData from "@/app/homePage/components/sampleDoctorData";

const BookAppointmentCardContactInfo = (props: {
  from: string;
  to: string;
}) => {
  const generateTimeSlots = (from:any, to:any) => {
    const slots = [];
    const currentDate = new Date();
    const startTime = new Date(`${currentDate.toDateString()} ${from}`);
    const endTime = new Date(`${currentDate.toDateString()} ${to}`);
    let current = startTime;

    while (current <= endTime) {
      slots.push(
        `${current.getHours()}:${current
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      );
      current.setMinutes(current.getMinutes() + 30);
    }
    return slots;
  };
  const [selectedSlot, setSelectedSlot] = useState("");

  const handleSlotChange = (e:any) => {
    setSelectedSlot(e.target.value);
  };
  const today = new Date();

  // Calculate the date 20 days from today
  const nextTwentyDays = new Date(today);
  nextTwentyDays.setDate(nextTwentyDays.getDate() + 20);
  const todayString = today.toISOString().split('T')[0];
  const nextTwentyDaysString = nextTwentyDays.toISOString().split('T')[0];

  return (
    <div className="mx-auto p-2">
      <div className=" border rounded-md">
        <form
          onSubmit={() => {}}
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
                  min={todayString as string}
                  max={nextTwentyDaysString as string}
                  name="user_date"
                  id="user_date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-3">
                <label
                  htmlFor="slot"
                  className="mb-1 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <select
                  id="slot"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={selectedSlot}
                  onChange={(e) => handleSlotChange(e)}
                >
                  <option value="">Select a time slot</option>
                  {generateTimeSlots(
                    props.from,
                    props.to,
                  ).map((slot, index) => (
                    <option key={index} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
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
            <Fade className="hover:shadow-form hover:opacity-90 w-full cursor-pointer rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none">
             
                {false ? "Booking..." : "Book Appointment"}
              
            </Fade>
            {false && (
              <p className="text-green-500 mt-1 text-center">
                Appointment received successfully, Thank you!
              </p>
            )}
            {false && <p className="text-red-500 mt-1 text-center">error</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointmentCardContactInfo;
