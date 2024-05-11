"use client";
import Link from "next/link";
import Button from "../../doctors/Button";
import { Fade } from "react-awesome-reveal";
import BookAppointmentCard from "../components/BookAppointmentCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/app/Api/baseUrl";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Avatar } from "@radix-ui/themes";
import DoctorDetailScreenLoading from "./loading";

const dummyAvailability = [
  { id: 1, from: "09:00", to: "12:00", location: "Hospital A", price:"1500" },
  { id: 2, from: "14:00", to: "17:00", location: "Hospital B", price: "2832" },
  { id: 3, from: "08:30", to: "11:30", location: "Clinic C", price: "2983" }
];

const dummyOnlineAvailability = {
  id: 1,
  from: "09:50",
  to: "10:50",
  price: "3903"
}

interface DoctorData {
  doctorName: string;
  detailedRole: string;
  specialization: string;
  qualifications: { institution: string; program: string }[];
  experienceYears: number;
  reviewsCount: number;
  servicesoffered: string;
  specialServices: string;
  imageUrl: string;
  experience: { institution: string; designation: string }[];
  appointmentDetails: string;
  reviews: {
    name: string;
    hospital: string;
    satisfied: boolean;
    time: string;
  }[];
  faqs: { question: string; answer: string }[];

  // Define other properties here
}

export default function DoctorDetailScreen({
  params,
}: {
  params: { id: string };
}) {
  const [loading, setLoading] = useState(false);
  const [doctor, setDoctor] = useState<DoctorData | null>(null);

  const items = [
    "Satisfied with diagnosis and treatment",
    "PA & Staff was helpful",
    "Hospital / Clinic environment was well-maintained",
  ];

  useEffect(() => {
    setLoading(true);
    async function fetchSingleDoctor() {
      try {
        await axios
          .get(`${baseUrl}/users/getDetailedDoctor?id=${params.id}`)
          .then((response) => {
            console.log(response.data);
            setDoctor(response.data);
            setLoading(false);
          });
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    fetchSingleDoctor();
    setLoading(false);
  }, []);

  if(loading){
    return (
      <DoctorDetailScreenLoading />
    )
  }
  if(!doctor){  
    return (
      <DoctorDetailScreenLoading />
    )
  }

  return (
    <div className="wrapper">
      <div className="drop-shadow-md p-4 bg-white  m-3 rounded-lg mt-20">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex xl:flex-row flex-col">
            <Theme>
              <Avatar
                size={"7"}
                radius="full"
                src={doctor?.imageUrl}
                fallback={`${doctor?.doctorName[0]}`}
              />
            </Theme>
            <div className="sm:pb-0 pb-4">
              <div className="space-y-2">
                <div className="flex">
                  <h1 className="text-blue-900 underline font-bold ">
                    <div>{doctor?.doctorName}</div>
                  </h1>
                  {true && (
                    <img
                      className="h-6 w-6"
                      src="https://cdn-icons-png.flaticon.com/256/6784/6784655.png"
                      alt=""
                    />
                  )}
                </div>
                <div className="flex ">
                  <p className="sm:text-sm text-xs text-gray-600">
                    {doctor?.specialization}
                  </p>
                </div>
                <p className="sm:text-sm text-xs text-gray-600">
                  {doctor?.qualifications.map((qual) => (
                    <>
                      {qual.institution} {qual.program},
                    </>
                  ))}
                </p>
              </div>
              <div className="mt-5  text-sm ">
                <div className="flex">
                  <h1 className="text-[#e65300]">
                    {doctor?.reviewsCount} Reviews
                  </h1>
                </div>
                <div className="flex">
                  <h1>{doctor?.experienceYears} Years Experience</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row space-x-3 sm:space-x-0 sm:space-y-2">
            <p></p>
            <Button
              title={"Consult Online"}
              color={"bg-[#004D71]"}
              href={"#bookappointment"}
            />
            <Link
              href="#bookappointment"
              className={`bg-[#4CA585] rounded-lg px-4 py-2 text-center text-sm  text-white `}
            >
              Visit in Clinic
            </Link>
          </div>
        </div>
      </div>

      {/* bottom */}

      <div className="flex m-3 lg:flex-row flex-col-reverse space-x-4 mt-20">
        <div className="left">
          <div className="space-y-5 drop-shadow-md p-6 bg-white rounded-lg">
            <h1 className="font-bold text-lg">
              {doctor?.reviewsCount} Community Reviews
            </h1>
            <div className=" text-sm  sm:divide-x divide:y divide-gray-300 flex sm:flex-row flex-col  sm:space-x-24 ">
              <div>
                <h1>Wait Time</h1>
                <h1 className="font-bold">{`5 Mints`}</h1>
              </div>
              <div className="sm:pl-4 pl-0">
                <h1>Avg. Time to Patient</h1>
                <h1 className="font-bold">15 Mints</h1>
              </div>
              <div className="sm:pl-4 pl-0">
                <h1>Diagnosis Satisfaction</h1>
                <h1 className="font-bold">{`97`}%</h1>
              </div>
            </div>
            {doctor?.reviews && doctor?.reviews.length > 0 ? (
              doctor?.reviews.map((index) => (
                <div className="text-sm bg-white p-4 rounded-lg  border-2">
                  <div className="flex">
                    <img
                      className="rounded-full sm:mr-[1rem] w-6 "
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt=""
                    />
                    <h1 className="text-[#aaa]">{index.name}</h1>
                  </div>
                  <h1>
                    {`${index.name} shared utmost satisfaction with the care and services provided by Dr. Saira Taj at ${index.hospital}.`}
                  </h1>
                  {items.map((items) => (
                    <div className="flex mt-2">
                      {index.satisfied && (
                        <img
                          className="w-6 h-4 items-center"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Red_check.svg/1024px-Red_check.svg.png"
                          alt=""
                        />
                      )}
                      {items}
                    </div>
                  ))}
                  <h1 className="text-[#aaa] mt-2">
                    {`Review shared on Marham feedback call - ${index.time} ago`}
                  </h1>
                </div>
              ))
            ) : (
              <div className="text-sm bg-white p-4 rounded-lg  border-2">No Reviews</div>
            )
              }
          </div>
          {/* Qualifications */}
          <div className="drop-shadow-md p-4 bg-white rounded-lg mt-10">
            <h1 className="font-bold text-lg">Qualifications</h1>
            <table className="w-full text-sm border-collapse text-left ">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Institution</th>
                  <th className="border px-4 py-2">Degree / Course</th>
                </tr>
              </thead>
              <tbody>
                {doctor?.qualifications.map((qual: any) => (
                  <tr>
                    <td className="border px-4 py-2">{qual.institution}</td>
                    <td className="border px-4 py-2">{qual.program}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Experience */}
          <div className="drop-shadow-md p-4 bg-white rounded-lg mt-10">
            <h1 className="font-bold text-lg">Experience</h1>
            <table className="w-full text-sm border-collapse text-left">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Institution</th>
                  <th className="border px-4 py-2">Designation</th>
                </tr>
              </thead>
              <tbody>
                {doctor?.experience.map((exp: any) => (
                  <tr>
                    <td className="border px-4 py-2">{exp.institution}</td>
                    <td className="border px-4 py-2">{exp.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* FAQs */}
          <div className="drop-shadow-md bg-white p-4 rounded-lg mt-10">
            <h1 className="font-bold text-lg">FAQs </h1>

            {
              doctor?.faqs && doctor?.faqs.length > 0 ? (doctor?.faqs.map((index) => (
                <Fade>
                  <details>
                    <summary className="py-2 outline-none cursor-pointer focus:font-semibold">
                      {" "}
                      {index.question}
                    </summary>
  
                    <div className="px-4 pb-4">
                      <p> {index.answer}</p>
                    </div>
                  </details>
                </Fade>
              ))) : (
                <div className="text-sm bg-white p-4 rounded-lg  border-2">No FAQ's</div>
              )
            }
          </div>
        </div>
        <div id="bookappointment" className="right">
          <BookAppointmentCard availabilites={dummyAvailability} onlineAvailability={dummyOnlineAvailability}/>
        </div>
      </div>
      <div className="text-sm m-3">
        <h1 className="font-bold my-5">
          Professional Statement By {doctor?.doctorName}
        </h1>
        <h1 className="font-semibold my-5">Appointment Details:</h1>
        <h1>{doctor?.appointmentDetails}</h1>
        <h1 className="font-semibold my-5">Role of Dermatologist:</h1>
        {doctor?.detailedRole}
        {doctor?.appointmentDetails}
        <div className="flex my-5">
          <h1 className="font-semibold ">Qualifications: </h1>
          {doctor?.qualifications.map((qual) => (
            <>
              {qual.institution} {qual.program},
            </>
          ))}
        </div>

        <div className="flex my-5">
          <h1 className="font-semibold ">Experience:</h1>
          {doctor?.experience.map((exp) => (
            <>
              {exp.institution} {exp.designation},
            </>
          ))}
        </div>

        {/* <div className="flex-col my-5">
                <h1 className="font-semibold ">Patient Satisfaction Score: </h1>
                {props.satisfaction}
            </div> */}

        <h1 className="font-semibold my-5">
          Services offered by {doctor?.doctorName}:{" "}
        </h1>
        {doctor?.servicesoffered}
        <h1 className="font-semibold my-5">
          Special Interest by {doctor?.doctorName}:{" "}
        </h1>
        {doctor?.specialServices}
      </div>
    </div>
  );
}
