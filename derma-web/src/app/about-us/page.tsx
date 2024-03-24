"use client";
import Services from "../homePage/components/Services";

export default function AboutUs() {
  return (
    <div className="wrapper bg-white">
      <div className="relative pt-[4rem]">
        <img
          className="w-full bg-cover h-[20rem]"
          src="/about_us_banner.png"
          alt=""
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold leading-none text-center text-white">
          About Us
        </h1>
        <p className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sem text-center text-white">
          Derma AI - Find, Book & Consult Doctors <br />
          Pakistan's #1 Healthcare Super App!
        </p>
      </div>
      <div className="text-center mt-10 p-4">
        <h1 className="text-[#014e78] text-[1.1rem] font-bold mb-2">Problem We're Solving</h1>
        <p>
          70% patients in Pakistan suffers severely because they are unable to
          connect with doctor timely due to:
        </p>
      </div>
      <div className="p-4 flex justify-between mt-10 sm:px-[20%] px-[30%] sm:flex-row flex-col text-center">
        <div>
          <img
            src="https://static.marham.pk/assets/images/about_us/lack_of_information.png"
            alt=""
          />
          <p>Lack of information</p>
        </div>
        <div>
          <img
            src="	https://static.marham.pk/assets/images/about_us/poor_accessibility.png"
            alt=""
          />
          <p>Poor Accessibility</p>
        </div>
        <div>
          <img
            src="https://static.marham.pk/assets/images/about_us/no_gp_triage.png"
            alt=""
          />
          <p>No GP Triage</p>
        </div>
      </div>
      <div className="text-center mt-10 p-4">
        <h1 className="text-[#014e78] text-[1.1rem] font-bold mb-2">Our Vision</h1>
        <p>
        We are building a <b>community</b> of <b>patients</b> to drive the <b>patient-centric</b> healthcare experience
        </p>
      </div>
      <img
          className="w-full bg-cover "
          src="https://static.marham.pk/assets/images/about_us/our-mission.png"
          alt=""
        />
        <div className="mt-8"></div>
      <Services />

      <h1 className="my-10 text-[1.1rem] font-bold text-[#014e78] text-center">Interested in Partnership?</h1>
      <div className="flex justify-center mb-10">
        <a href="/#contact-us" className="bg-red-800 text-white text-[0.9rem] py-2 px-4 rounded-lg">
          Partner with Derma-AI
        </a>
      </div>
    </div>
  );
}
