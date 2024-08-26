"use client";
import { RootState } from '@/app/lib/store';
import { AppointmentModel } from '@devexpress/dx-react-scheduler';
import React, { use, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AppointmentCard = (props:{ app:{
id:string,
date:string,
duration:string,
startTime:string,
location:string,
status:string
doctorName:string
description:string
doctorEmail:String,

}}) => {

  const appdes = useSelector((state: RootState) => state.activeAppointments);
  const token = useSelector((state: RootState) => state.user.profile?.accessToken);





  const   handleappointment = async (appointment:any) => {
   

    try {
      const response = await fetch("http://localhost:8080/api/v1/users/apppointment/updateAppointmentStatus", {
        method: "POST",
        headers: {
          "authorization": "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointment),
      });
      
      toast.success(`Appointment ${appointment.status}  successfully`);
    
     
    } catch (error) {
    toast.error("Failed to update appointment");

   
      console.error('Error fetching appointments:', error);
      toast.error('Failed to fetch appointments');
    }

   
  };
  return (
    <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg ">
      <div>
        <h2 className="text-2xl font-semibold">Dermatology Consultation</h2>
        <p className="text-gray-500 dark:text-gray-400">
        {props.app?.description}
        </p>
      </div>
      <div className="grid gap-4 text-sm mt-4">
      <div className="flex items-center justify-between">
          <span className="font-medium">Doctor Name:</span>
          <span className="text-gray-500 dark:text-gray-400">{props.app?.doctorName}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Doctor Email:</span>
          <span className="text-gray-500 dark:text-gray-400">{props.app?.doctorEmail}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Date:</span>
          <span className="text-gray-500 dark:text-gray-400">{props.app?.date}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Duration:</span>
          <span className="text-gray-500 dark:text-gray-400">{props.app?.duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Start Time:</span>
          <span className="text-gray-500 dark:text-gray-400">{props.app.startTime}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-medium">Location:</span>
          <span className="text-gray-500 dark:text-gray-400">
          {props.app.location}
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-4">
       
        <button  onClick={()=>handleappointment({appId:props.app.id,status:"cancelled"})} className="px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;