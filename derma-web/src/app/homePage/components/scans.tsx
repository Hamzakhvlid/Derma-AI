"use client"
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { AiOutlineSchedule } from "react-icons/ai";
import { Avatar, Card, Badge, ScrollArea } from "@radix-ui/themes";
import { Button, DropdownMenu, Checkbox, Table } from "@radix-ui/themes";


import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";
import { toast } from "react-toastify";
import { getAppointments } from "@/app/api/baseUrl";
import { access } from "fs";
import axios from "axios";
import { AppointmentModel, setAppointmnets } from "@/app/lib/reducers/appointmnets";

import { StyledPagination } from "./style.js";
import ReactPaginate from 'react-paginate';
import {useRouter} from 'next/navigation'
import { setActiveAppointment } from "@/app/lib/reducers/selectedAppointment/index";
import './style.css';



export default function scanHistory() {

  const Limit=5;
const router=useRouter();
 const docID= useSelector((state:RootState)=>state.user.profile?.doctorId);
const docName= useSelector((state:RootState)=>state.user.profile?.first_name);
 const token = useSelector((state: RootState) => state.user.profile?.accessToken);
 const appoinntment = useSelector((state:RootState)=>state?.appointements);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalCount, setTotalCount] = useState(0);
 const [showPopup, setShowPopup] = useState(false);
  const [aiResponse, setaiResposne] = useState(null);
  const [loading,isLoading] = useState(true);
  const [error,isError] = useState(false);
  const [totalAppointmnets,setTotalAppointemnets] = useState(0);
  const dispacth=useDispatch();


 const dispatch = useDispatch();


 const fetchData = async () => {
  isError(false);
  isLoading(true);
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/users//getScans?page=${currentPage}&limit=${Limit}`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
    const docs = response.data.docs;

    setTotalCount(response.data.totalPages);
    setTotalAppointemnets(response.data.totalDocs);
    setNewAppointment(docs);
    console.log("appointments",docs);
    isLoading(false);
  } catch (error) {
    isLoading(false);
    isError(true);
    console.error('Error fetching appointments:', error);
    toast.error('Failed to fetch appointments');
  }
};
const handlePageClick = (event: any) => {
  setCurrentPage(event.selected + 1);

  console.log(event.selected);
};


useEffect(() => {

  

  fetchData();


  

  
  }, [currentPage]);





  const [newAppointment, setNewAppointment] = useState<AppointmentModel[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:8080', {
     
    });
    
    socket.emit('doctor-connected', docID );
    socket.on('connected', (data: any) => {
      console.log('Connected to socket');
    });
    socket.emit('setup', docID ); // Replace with actual patient ID

    socket.on('new-appointment', (appointment: AppointmentModel) => {
      console.log("appointmentRequest",appointment);
      setNewAppointment([appointment, ...newAppointment]);
      setTotalAppointemnets(totalAppointmnets+1);
     
  
    });
  })


  const handleInfo = (res:any) => {
    console.log("appointment",res);
    setShowPopup(true);
    setaiResposne(res.aiDiagnosis);
    

   
  };

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
      fetchData();
      setShowPopup(false);
    } catch (error) {
    toast.error("Failed to update appointment");

    setShowPopup(false);
      console.error('Error fetching appointments:', error);
      toast.error('Failed to fetch appointments');
    }

   
  };



  const truncateDescription = (description:string) => {
    const words = description.split(' ');
    const maxWords = 9;
  
    if (words.length <= maxWords) {
      return description;
    } else {
      const truncatedWords = words.slice(0, maxWords);
      return `${truncatedWords.join(' ')}...`;
    }
  };

  const handleroute = (app:AppointmentModel)=>{
     console.log("app",app);
    dispacth(setActiveAppointment(app));
    router.push(`/homePage/appointment/${app._id}?name=${app.doctorName}&patientId=${app.patientId}&doctorId=${app.doctorId}&date=${app.date}&duration=${app.duration}&status=${app.status}&mode=${app.mode}&location=${app.location}&lat=${app.lat}&lng=${app.lng}&doctorImage=${app.doctorImage}&doctorEmail=${app.doctorEmail}&doctorName=${app.doctorName}&patientImage=${app.patientImage}&startTime=${app.startTime}&id=${app._id}&description=${app.description}`)
   

  

  }




  return (
    <>
      <Theme className="">
        <div className="pb-20">
          <div className="flex flex-col">
            <main className="flex flex-1 flex-col gap:4 lg:gap-8 p-4 md:p-6">
              <div className="flex items-center gap-4">
                <h1 className="font-semibold text-lg md:text-xl">
                  Scans History
                </h1>
                <div className="ml-auto flex items-center gap-2"></div>
              </div>
              <div className="gap-2 lg:gap-6">
                <Card>
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        {/* Rest of the code */}
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {loading ? (
                        <>
                          <div className="flex justify-center align-middle ">
                            {" "}
                            <img
                              className="w-[4rem]"
                              src="loader.gif"
                              alt="Loading..."
                            ></img>
                          </div>
                        </>
                      ) : (
                        <>
                          {error ? (
                            <div>
                              <div className="flex  justify-center align-middle">
                                <div className="flex flex-col gap-2">
                                  {" "}
                                  <h1 className="text-[#ff5362] ">
                                    Opps!! Error occured
                                  </h1>
                                  <button
                                    onClick={fetchData}
                                    className="px-4 py-2 border mb-2 border-gray-300 rounded-md hover:text-white bg-orange-400 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  >
                                    Try Again
                                  </button>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-row  gap-6">
                              {newAppointment.map((app: any) => (
                                <div
                                  key={app._id}
                                   onClick={()=>handleInfo(app)}
                                  id={app._id}
                                  className="hover:bg-[#cbd5df] bg-[#f1f5f9] flex flex-col justify-center align-middle  rounded-xl  p-6 cursor-pointer"
                                >
                                  <div className="">
                                    <Avatar
                                   
                                  size={'7'}
                                      src={app.scanImage}
                                      fallback={
                                        app.name == undefined ? "" : app.name[0]
                                      }
                                    />
                                    
                                  </div>
                                  <div className={`text-lg text-center font-semibold ${app.type === 'disease' ? 'text-blue-500' : 'text-[#f4581c]'}`}>
                          {app.type}
                        </div>
                        <div className={`text font-semibold ${app.type === 'disease' ? 'text-blue-500' : 'text-[#f4581c]'}`}>
                          {app.createdAt.slice(0,10)}
                        </div>
                                  
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                        {showPopup===true && aiResponse? 
  
  
  <div id={''} className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-70 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg">
    <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => setShowPopup(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="w-full max-w-md p-6 bg-white rounded-lg ">
      <div>
        
      <div className="flex flex-col justify-between items-center align-middle">
      <div className="h-[60vh] overflow-y-scroll  lg:overflow-auto">
      {Object.entries(aiResponse).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>
            {typeof aiResponse[key] === "object" ? (
              <table className="w-full text-sm border-collapse text-left">
                <tbody>
                  {Object.entries(aiResponse[key]).map(
                    ([subKey, subValue]) => (
                      <tr key={subKey}>
                        <td>{subKey}</td>
                        <td>
                          {typeof aiResponse[key][subKey] === "object" ? (
                            <table>
                              <tbody>
                                {Object.entries(aiResponse[key][subKey]).map(
                                  ([newSubKey, subValue]) => (
                                    <tr key={newSubKey}>
                                      <td>{newSubKey}</td>
                                      <td>
                                        {aiResponse[key][subKey][newSubKey]}
                                      </td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          ) : (
                            aiResponse[key][subKey]
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            ) : (
              aiResponse[key]
            )}
          </td>
        </tr>
      ))}
     
    </div>
    <div>
    
      
    </div>
   
  
</div>
</div>
</div>
     
     
    
    </div>
    </div>
   :<></>
}
                    </Table.Body>
                  </Table.Root>
                </Card>
              </div>
              {loading ? (
                <></>
              ) : (
                <div className="flex pr-5 pt-4 pb-20 justify-end align-bottom">
                  <StyledPagination
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={totalCount}
                    previousLabel="< prev"
                  />
                </div>
              )}
            </main>
          </div>
        </div>
      </Theme>
    </>
  );
}

interface Props {
  className?: string;
}

const CalendarIcon: React.FC<Props> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
};

const CheckIcon: React.FC<Props> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

const FilterIcon: React.FC<Props> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
};

const RefreshCwIcon: React.FC<Props> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
};

const XIcon: React.FC<Props> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};
