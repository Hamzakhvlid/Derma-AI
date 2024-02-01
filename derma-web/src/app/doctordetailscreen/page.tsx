"use client";
import Link from "next/link";
import Button from "../doctors/Button";
import { Fade } from "react-awesome-reveal";
import DiscountTag from "../doctors/DiscountTag";
import ProfesionalStatement from "./ProfessionalStatement";
import BookAppointmentCard from "./BookAppointmentCard";


const sampleReviews = {
  reviews: [
    {
      id: 0,
      name: "Muhammad Rizwan",
      hospital: "Bahira International Hospital",
      satisfied: true,
      time: "16 Hours Ago",
    },
    {
      id: 0,
      name: "Muhammad Rizwan",
      hospital: "Bahira International Hospital",
      satisfied: true,
      time: "16 Hours Ago",
    },
  ],
};

const faqs = {
  faqs: [
    {
      id: 0,
      question: "What is Dr. Saira Taj's contact number?",
      answer:
        "You can contact the Dermatologist through Marham's helpline: 0311-1222398 and we'll connect you with Dr. Saira Taj",
    },
    {
      id: 1,
      question: "What is the Qualification of Dr. Saira Taj?",
      answer:
        "Dr. Saira Taj has the following degrees : MBBS, MSc (Dermatology Skills & Treatment), fellowship Diploma American Aesthetic Association ( USA )",
    },
    {
      id: 2,
      question: "What is Dr. Saira Taj's speciality & area of expertise?",
      answer:
        "Dr. Saira Taj is specialist Dermatologist. Her area of expertise include Hair Problems, PRP, Laser for Hair removal, Acne",
    },
  ],
};

export default function DoctorDetailScreen() {
  const items = [
    "Satisfied with diagnosis and treatment",
    "PA & Staff was helpful",
    "Hospital / Clinic environment was well-maintained",
  ];
  return (
    <div className="xl:mx-60 md:mx-20 sm:mx-14 mx-10">
      <div className="w-full h-auto drop-shadow-md px-[2rem] bg-white py-5 rounded-lg mt-20">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex xl:flex-row flex-col">
            <img
              className="rounded-full shadow-lg mb-6 mt-6 sm:mx-[6rem] mx-0 w-36 "
              src="https://i.ibb.co/XVFPhWP/PSX-20230524-011601.jpg"
              alt="avatar"
            />
            <div className="sm:pb-0 pb-4">
              <div className="space-y-2">
                <div className="flex">
                  <h1 className="text-blue-900 underline font-bold ">
                    Muhammad Ansar
                  </h1>
                  {true && (
                    <img
                      className="h-6 w-6"
                      src="https://cdn-icons-png.flaticon.com/256/6784/6784655.png"
                      alt=""
                    />
                  )}
                </div>
                <div className="flex sm:space-x-10 space-x-3">
                  <p className="sm:text-sm text-xs text-gray-600">
                    Dermatologist
                  </p>
                  {true && (
                    <div className="bg-green-900 text-white text-xs rounded-sm px-1 py-1">
                      Surgeon
                    </div>
                  )}
                </div>
                <p className="sm:text-sm text-xs text-gray-600">
                  MBBS, FCPS (Dermatology), CAAAM (USA)
                </p>
              </div>
              <div className="mt-5  text-sm ">
                <div className="flex">
                  <h1 className="text-[#e65300]">{`4500`} Reviews</h1>
                </div>
                <div className="flex">
                  <h1>15 Years Experience</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row  space-x-3 space-y-2">
            <p></p>
            <Button
              title={"Consult Online"}
              color={"bg-[#004D71]"}
              imgUrl={"/videocam.svg"}
            />
            <button
              className={`bg-[#4CA585] rounded-lg sm:w-auto w-[7rem] sm:h-auto h-[3rem] sm:py-2 py-[0.2] sm:px-[5rem] px-[0.5rem] flex text-sm  text-white `}
            >
              <img src={`/booking.svg`} alt="" />
              Visit in Clinic
            </button>
          </div>
        </div>
      </div>

      {/* bottom */}

      <div className="flex lg:flex-row flex-col-reverse space-x-4">
        <div className="">
          <div className="max-w-6xl h-auto drop-shadow-md px-[2rem] bg-white py-5 rounded-lg mt-20">
            <h1 className="font-bold text-lg">10 Community Reviews</h1>
            <div className="mt-5  text-sm  sm:divide-x divide:y divide-gray-300 flex sm:flex-row flex-col  sm:space-x-24 ">
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
            {sampleReviews.reviews.map((index) => (
              <div className="w-auto text-sm h-auto px-[2rem] bg-white py-5 rounded-lg mt-20 border-2">
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
                        className="w-4 h-4 items-center"
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
            ))}
          </div>
          {/* Qualifications */}
          <div className="w-auto h-auto drop-shadow-md px-[2rem] bg-white py-5 rounded-lg mt-20">
            <h1 className="font-bold text-lg">Qualifications</h1>
            <table className="w-full text-sm border-collapse text-left ">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Institution</th>
                  <th className="border px-4 py-2">Degree / Course</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    University of Health Sciences, Lahore
                  </td>
                  <td className="border px-4 py-2">MBBS</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    University of Hertfordshire, UK
                  </td>
                  <td className="border px-4 py-2">
                    MSc (Dermatology Skills &amp; Treatment)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Experience */}
          <div className="w-auto h-auto drop-shadow-md px-[2rem] bg-white py-5 rounded-lg mt-20">
            <h1 className="font-bold text-lg">Experience</h1>
            <table className="w-full text-sm border-collapse text-left">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Institution</th>
                  <th className="border px-4 py-2">Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    University of Health Sciences, Lahore
                  </td>
                  <td className="border px-4 py-2">MBBS</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    University of Hertfordshire, UK
                  </td>
                  <td className="border px-4 py-2">
                    MSc (Dermatology Skills &amp; Treatment)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* FAQs */}
          <div className="w-auto h-auto drop-shadow-md px-[2rem] bg-white py-5 rounded-lg mt-20">
            <h1 className="font-bold text-lg">FAQs </h1>

            {faqs.faqs.map((index) => (
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
            ))}
          </div>
        </div>
        <BookAppointmentCard />
      </div>

      <ProfesionalStatement
        experience="Dr. Saira Taj has been treating patients with Dermatologist related diseases for the past 7 years and has an excellent success rate."
        interest="The special interests of Dr. Saira Taj are:
       Hair Problems
       PRP
       Laser for Hair removal
       Acne"
        qualification="MBBS from University of Health Sciences, Lahore and MSc (Dermatology Skills & Treatment) from University of Hertfordshire, UK"
        role="Skin specialists like Dr. Saira Taj help in the treatment of all diseases related to the skin hair and nails. Other commonly used names for a Dermatologist are skin care specialist, aesthetician, and skin doctor. They can care for people of all ages from babies to adults.
       Some of the common roles of a dermatologist are the diagnosis and treatment of all skin-related diseases and disorders whether minor or major. You can also get cosmetic procedures done from skin specialists like hydra facials, wrinkle treatment, mole removal, or acne scar treatments, etc."
        satisfaction="Dr. Saira Taj has an impressive % and has received great reviews from Marham Users. Most of the patients are happy with the quality of treatment Dr. Saira Taj provides and recommend them for the treatment of dermatological issues."
        services="Hair Removing Laser
       PRP
       HIFU
       Mesotherapy
       PRF
       Acne scar treatment
       RF
       Hydrafacaial
       Oxygeneo 3 in 1 super facial
       Carbon Facial
       Vampire facial
       Skin tightening Procedure
       Hair transplant"
        key={0}
        name={"Ansar"}
        appointmentdetails="Dr. Saira Taj is a qualified Dermatologist in Lahore with over 7 years of experience in the field. With numerous qualifications, the doctor provides the best treatment for all Dermatologist related diseases. Dr. Saira Taj has treated over 0 patients through Marham and has 0 reviews. You can book an appointment with Dr. Saira Taj through Marham."
      />
    </div>
  );
}
