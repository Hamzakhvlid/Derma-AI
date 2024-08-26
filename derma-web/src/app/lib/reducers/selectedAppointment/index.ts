
import { createSlice } from "@reduxjs/toolkit";
import { AppointmentModel } from "../appointmnets";


// Define the initial state



export const selectedAppointmentSlice = createSlice({
    name: "activeAppointments",
    initialState:  {} as AppointmentModel,
    reducers: {
  
        setActiveAppointment: (state, action) => {  
          
        state = action.payload;
        console.log("state",state)
      },
  
      
    },
  });


export const {  setActiveAppointment} = selectedAppointmentSlice.actions;
// Define the appointment model

