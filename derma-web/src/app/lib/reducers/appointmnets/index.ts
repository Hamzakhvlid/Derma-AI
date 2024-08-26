
import { createSlice } from "@reduxjs/toolkit";
export interface AppointmentModel {
    _id: string;
    title: string;
    description: string;
    email: string;
    name: string;
    status: string;
    date: string;
    duration: number;
    patientId: string;
    doctorId: string;
    isActive: boolean;
    startTime: string;
    location: string;
    lat: number;
    lng: number;
    __v: number;
    patientImage: string;
    doctorImage: string;
    doctorName: string;
    doctorEmail: string;
    mode: string;
}


// Define the initial state



export const appointmentSlice = createSlice({
    name: "appointments",
    initialState: [] as AppointmentModel[],
    reducers: {
      
      setAppointmnets: (state, action) => {
        console.log("appointments",action.payload)
        state = action.payload;
      },
     
      
    },
  });


export const { setAppointmnets } = appointmentSlice.actions;
// Define the appointment model

