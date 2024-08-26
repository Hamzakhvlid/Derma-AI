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
import { backendUrl, baseUrl, getAppointments } from "@/app/api/baseUrl";
import { access } from "fs";
import axios from "axios";
import { AppointmentModel, setAppointmnets } from "@/app/lib/reducers/appointmnets";

import { StyledPagination } from "./style.js";
import ReactPaginate from 'react-paginate';
import {useRouter} from 'next/navigation'




export default function History() {

  const Limit=10;
const router=useRouter();
 const docID= useSelector((state:RootState)=>state.user.profile.doctorId);
const docName= useSelector((state:RootState)=>state.user.profile.first_name);
 const token = useSelector((state: RootState) => state.user.profile.accessToken);
 const appoinntment = useSelector((state:RootState)=>state.appointements);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalCount, setTotalCount] = useState(0);
 const [showPopup, setShowPopup] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<AppointmentModel | null>(null);
  const [loading,isLoading] = useState(true);
  const [error,isError] = useState(false);
  const [totalAppointmnets,setTotalAppointemnets] = useState(0);



 const dispatch = useDispatch();


 const fetchData = async () => {
  isError(false);
  isLoading(true);
  try {
    const response = await axios.get(`${getAppointments}?page=${currentPage}&limit=${Limit}`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
    const docs = response.data.docs;
    dispatch(setAppointmnets(docs));
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


  useEffect(()=>{

    setShowPopup(true);

  },[selectedAppointment])


  const [newAppointment, setNewAppointment] = useState<AppointmentModel[]>([]);

  useEffect(() => {
    const socket = io(backendUrl, {
     
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


  const handleInfo = (appointment:any) => {
    console.log("appointment",appointment);
    setSelectedAppointment(appointment);

   
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




  return (
    <> 
    <Theme className="">
     
     
      
       
   
      <div className="pb-20">
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap:4 lg:gap-8 p-4 md:p-6">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg md:text-xl">
                Appointment History
              </h1>
              <div className="ml-auto flex items-center gap-2">
           
              </div>
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
                    {loading?<>
                    <div className="flex justify-center align-middle "> <img className=" w-[4rem]" src="loader.gif"></img></div>
                     
                    </>:<>
                    {error?<div>
                      <div className="flex  justify-center align-middle">
    <div className="flex flex-col gap-2">  <h1 className="text-[#ff5362] ">Opps!! Error occured</h1>
                      <button onClick={fetchData} className="px-4 py-2 border mb-2 border-gray-300 rounded-md hover:text-white bg-orange-400 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Try Again
        </button></div>
                    
                      </div>
                    
                    
                    </div>:<>         {newAppointment.map((app:AppointmentModel ) => (
                      <Table.Row  onClick={()=>router.push('/appointmenthistory')} id={app._id} align={"center"} className="hover:bg-[#f1f5f9]">
                        
                        <Table.Cell>
                          <div className="flex items-center gap-2">
                            <Avatar
                              src={app.doctorImage}
                              fallback={app.name==undefined?"":app.name[0]}
                            />
                            <div>
                              <div className="font-medium">{`${app.doctorName}`}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {app.doctorEmail}
                              </div>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>{app.date}</Table.Cell>
                        <Table.Cell>{app.duration}</Table.Cell>
                        <Table.Cell className=" text-center ">  {truncateDescription(`To limit the description text to a maximum of 7 words and add an ellipsis (...) at the end if the text is longer, you can use JavaScript's built-in String.prototype.split() method to split the text into an array of words, and then slice the array to get the desired number of words. Here's an example of how you can modify the Table.Cell component:
jsx`)}</Table.Cell>
                        <Table.Cell className="text-right">
                          <Badge
                            color={`${
                              app.status === "pending"
                                ? "blue"
                                : app.status === "rejected" || app.status === "cancelled"
                                ? "red"
                                : "green"
                            }`}
                          >
                            {app.status}
                          </Badge>
                        </Table.Cell>
                        <Table.Cell>online</Table.Cell>
                        <Table.Cell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            {app.status === "cancelled" ? (
                              <>
                               
                               
                              </>
                            ) : (
                              <>
                               
                              <Button onClick={()=>handleInfo(app)}  variant="outline" color="red">
                                <XIcon className="h-4 w-4" />
                                <span className="sr-only">Reject</span>
                              </Button>
                            </>
                            )}


{showPopup && selectedAppointment && (
  
  
  <div id={selectedAppointment._id} className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-20 flex justify-center items-center z-50">
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
        <h2 className="text-1xl font-semibold mb-2">Are you Sure You Want to cancel this appointment</h2>
        <p className="text-gray-500 dark:text-gray-400">
      
        </p>
      </div>
     
     
    <button onClick={()=>handleappointment({  appId:selectedAppointment._id,status:"cancelled"})} className="px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
       Yes
      </button>
      <button onClick={()=>setShowPopup(false)} className="px-4 py-2 ml-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
       No
      </button>
    </div>
    </div>
  </div>
)}
                           
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    ))}</>}
                    </>}
         
                  </Table.Body>
                </Table.Root>
              </Card>
              
            </div>
                   {loading?<></>: <div className="flex pr-5 pt-4 pb-20 justify-end align-bottom">
          
                <StyledPagination
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={4}
                  pageCount={totalCount}
                  previousLabel="< prev"
          
                />
       
      </div>}
            
           
      
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
