
import { createSlice } from '@reduxjs/toolkit';
export interface Root {
    success: boolean
    message: string
    doctors: DoctorModel[]
    pagination: Pagination
  }
  
  export interface DoctorModel {
    _id: string
    doctorName: string
    baseUser: string
    isApproved: boolean
    legalid: string
    idtype: string
    idUrl: string
    pmdcNo: string
    medicalCollege: string
    pmdcUrl: string
    createdAt: string
    updatedAt: string
    __v: number
    appointmentDetails: string
    desc: string
    detailedRole: string
    hospital: string
    imageUrl: string
    nic: string
    phone: string
    servicesoffered: string
    specialServices: string
    specialization: string
    qualifications: Qualification[]
    experience: Experience[]
    isPublic: boolean
    experienceYears: number
    reviewsCount: number
  }
  
  export interface Qualification {
    institution: string
    program: string
    _id: string
  }
  
  export interface Experience {
    institution: string
    designation: string
    _id: string
  }
  
  export interface Pagination {
    totalDocs: number
    totalPages: number
    currentPage: number
    perPage: number
    
  }

  export interface DoctorState {
    doctor: [];
  
  }
  
  const initialState: DoctorState = {
    doctor: [],

  };


  export const doctorSlice = createSlice({
    name: 'doctor',
    initialState,
    reducers: {
      setDoctor: (state, action) => {
        state.doctor = action.payload;
        console.log("doctor",state.doctor)
      },
     
    },
  });
  
  export const {  setDoctor} =
    doctorSlice.actions;
  
  export default doctorSlice.reducer;
  
  