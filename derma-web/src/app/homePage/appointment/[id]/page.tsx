"use client";
import React from 'react';
import Map from '../../components/map';
import AppointmentCard from '../../components/appointmentCard';
import { AppointmentModel } from '../../../lib/reducers/appointmnets';
import { useRouter } from 'next/navigation';
import { url } from 'inspector';

const AppointmentDetails = (params: {
  id: string,
  
}) => {

  const  urlParams = new URLSearchParams(window.location.search);
  const appID = urlParams.get('id');
  const doctorName = urlParams.get('name');
  const date = urlParams.get('date');
  const status = urlParams.get('status');
  const startDate = urlParams.get('date');
  const desc= urlParams.get('description');
  const location = urlParams.get('location');
  const lat = urlParams.get('lat');
  const lng = urlParams.get('lng');
  const startTime = urlParams.get('startTime');
  const doctorEmail = urlParams.get('doctorEmail');
  const patientImage = urlParams.get('patientImage');
  const duration = urlParams.get('duration');




 
   


  const appointment = {
    "title": "Dermatology Consultation for Skin Health",
    "description": "Comprehensive skin assessment and personalized treatment plan",
    "date": "2024-05-13",
    "duration": 20,
    "startTime": "10:30",
    "location": "Hospital A",
  };
  

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[5rem]">
        <h1 className="text-3xl font-bold mb-4">Appointment Details</h1>
     
        <AppointmentCard  app={{startTime:startTime!,doctorName:doctorName!,status:status!,description:desc!,id:appID!,location:location!,doctorEmail:doctorEmail!, date: date!, duration: duration!}} />
      </div>
      <div className='w-[80%] md:w-[90%] wrapper '>
        <Map />
      </div>
    </>
  );
};

export default AppointmentDetails;