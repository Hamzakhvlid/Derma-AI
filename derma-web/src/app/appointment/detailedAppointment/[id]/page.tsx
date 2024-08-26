import React from 'react';
import Map from '../../components/map';
import AppointmentCard from '../../components/appointmentCard';
import { AppointmentModel } from '../../../lib/reducers/appointmnets';
const AppointmentDetails = ({params}:{params:AppointmentModel}) => {
    const appointment =  {
      
            "title": "Dermatology Consultation for Skin Health",
            "description": "Comprehensive skin assessment and personalized treatment plan",
           
            "date": "2024-05-13",
            "duration": 20,
          
         
            "startTime": "10:30",
            "location": "Hospital A",
            
    };
  return (

   
    <> <div className="flex flex-col justify-center items-center pt-[5rem]">
    <h1 className="text-3xl font-bold mb-4">Appointment Details</h1>
   
     <AppointmentCard  />
   
    
  </div><div className='w-[80%] md:w-[90%] wrapper  '><Map/></div></>
  );
};

export default AppointmentDetails;