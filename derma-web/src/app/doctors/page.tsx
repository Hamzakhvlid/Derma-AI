"use client";
import DoctorsCard from "./DoctorsCard";
import sampleDoctorData from "../homePage/components/sampleDoctorData";
import React, { useEffect, useState } from "react";
import FilterDrawer from "./Filter/filter";
import axios from "axios";
import { doctor } from "../Api/baseUrl";
import FormData from 'form-data';
import { useDispatch, useSelector } from "react-redux";
import {  DoctorModel, setDoctor } from "../lib/reducers/doctors";
import { RootState } from "../lib/store";





let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `${doctor}?page=0&limit=6`,

 
};



const Doctors = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [filters, setFilters] = useState<string[]>([]);
    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };
    const dispatch = useDispatch();
    let doctorData=[];
     doctorData= useSelector((state: RootState) =>state.doctor.doctor);  
    console.log("doctorData",doctorData);
const fetchDoctors = async () => {

     
                try{
                    const doc=  await axios.request(config)
                 console.log("response from doctors api");
                    console.log(doc.data.doctors);
                 
                return doc.data.doctors;
        
                }catch(e){
                    console.log(e);
                    console.log("error occured")
                }
};
 
useEffect( () => {
    console.log("useEffect making request to doctors api");
    
    const fetchData = async () => {
        const data = await fetchDoctors();
        console.log("data", data);
        dispatch(setDoctor(data));
    };

    fetchData();
}, []);

const handleDrawerClose = () => {
    setIsDrawerOpen(false);
};

    const handleApplyFilters = () => {
        // Apply filters logic here
        setIsDrawerOpen(false);
    };
    return (
        <div className="wrapper">
            <div className="relative pt-[4rem]">
                <img
                    className="w-full bg-cover h-[25rem]"
                    src="https://doctorshospital.com.pk/wp-content/uploads/2019/12/page-title-about-1.jpg"
                    alt=""
                />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold leading-none text-center text-white">
                    Meet Our Doctors
                </h1>
            </div>
            <div>
                <button
                    className="my-4 p-2 bg-blue-500 text-white"
                    onClick={handleDrawerOpen}
                >
                    Open Filter Drawer
                </button>
                <FilterDrawer
                    isOpen={isDrawerOpen}
                    onClose={handleDrawerClose}
                    onApply={handleApplyFilters}
                    filters={filters}
                    setFilters={setFilters}
                />
            </div>
           
            {doctorData.map((id:DoctorModel) => (
                <div className="flex flex-col sm:px-20 px-3 mt-10 ">
                    <DoctorsCard
                       imgUrl={id.imageUrl}
                        name={id.doctorName}
                        experience={id.experienceYears.toString() + " years"}
                        isVerfied={id.isApproved}
                        reviews={0}
                        speciality={id.specialization}
                        satisfaction={97}
                        key={id._id}
                        study={id.specialization}
                        isSergeon={true}
                        videoConsultation={sampleDoctorData['doctors'][0].videoConsultation}
                        otherConsultations={sampleDoctorData['doctors'][0].otherConsultations}
                    />
                </div>
            ))} 
        </div>
    );
};

export default Doctors;

