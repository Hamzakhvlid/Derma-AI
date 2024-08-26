"use client";
import Link from "next/link";
import {
  Theme,
  DropdownMenu,
  Avatar,
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../api/baseUrl";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { login, logout } from "../lib/authSlice";
import { setPriority } from "os";
import { setProfile, setUser } from "../lib/reducers/loggedinUser";
import {  signOut } from "@/auth";

type Doctors = {
    _id:string;
    idUrl: string;
    legalid: string;
    medicalCollege: string;
    registration_no: string;
    pmdcUrl: string;
    baseUser: {
        first_name: string;
        last_name: string;
        status: string;
        role: string;
        imageUrl: string;
    }
}

export default function Component() {
  const token = useSelector((state: any) => state.user.profile?.accessToken);
  const router = useRouter();
    const [doctors, setDoctors] = useState<Doctors[]>([]);
    const dispatch= useDispatch();
    const login = useSelector((state: any) => state.auth.isLogin);

    useEffect(()=> {
        async function getAllDoctors(){
            try{
                await axios.get(`${baseUrl}/getAlldoctorsforadmin`, {
                   
                    headers:{
                        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                    }
                }).then((res) => {
                    console.log(res.data.doctors)
                    setDoctors(res.data.doctors)
                })
            }catch(err){

            }
        }
        getAllDoctors()
    }, []);


    async function verifyDoctor(obj:any){
        try{
            await axios.post(`${baseUrl}verifyDoctorByAdmin`, {
            id:  obj.id ,status:obj.status,comment: obj.comment
            }, {
      
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            }).then((res) => {
                toast(res.data.message)
            })
        }catch(err){
            console.log(err)
        }
    }



  const handleLogout = () => {


  
    dispatch(setProfile(null));
  
    dispatch(setUser(null));
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    
    dispatch(logout());
    
    signOut();

    router.push("/login");
    
  }
  return (
    <Theme>
      <div className="grid mt-[4rem] min-h-screen w-full overflow-hidden  bg-[#f1f5f9]">
       
        <div className="w-full">
         
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="border shadow-sm rounded-lg p-2">
              <Table.Root>
                <TableHeader>
                  <Table.Row>
                    <Table.ColumnHeaderCell>Doctor</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                      Medical College
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Legal ID</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>ID URL</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>PMDC NO</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>PMDC URL</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    
                  </Table.Row>
                </TableHeader>
                <TableBody>
                    {
                        doctors &&
                        doctors.length > 0 ?
                        doctors.map((doctor) => (
                            <TableRow onClick={()=>router.push(`/admin/${doctor._id}`)} className="hover:bg-[#cdd4dc]">
                    <TableCell>
                      <div className="flex items-center gap-4">
                        <Avatar
                          className="w-10 h-10 border"
                          src={doctor.baseUser.imageUrl}
                          fallback={`${doctor.baseUser.first_name[0]}${doctor.baseUser.last_name[0]}`}
                        />
                        <div className="grid gap-0.5">
                          <div className="font-medium">{`${doctor.baseUser.first_name} ${doctor.baseUser.last_name}`}</div>
                          
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{doctor.medicalCollege}</TableCell>
                    <TableCell>{doctor.legalid}</TableCell>
                    <TableCell><a target="_blank" href={doctor.idUrl}>ID URL</a></TableCell>
                    <TableCell>{doctor.registration_no}</TableCell>
                    <TableCell><a target="_blank" href={doctor.pmdcUrl}>PMDC URL</a></TableCell>
                    <TableCell>
                      <Badge
                        className={`${doctor.baseUser.status === "approved" ? "bg-green-300" : "bg-yellow-100"} text-yellow-900 dark:text-yellow-400`}
                        variant="outline"
                      >
                        {doctor.baseUser.status}
                      </Badge>
                 
                     
                    </TableCell>
                  </TableRow>
                        )):<div className="flex justify-center items-center"><h1 className="text-black items-center align-middle pl-[40rem] py-[5rem] text-center">Nothing to show</h1></div>
                    }
                  
                </TableBody>
              </Table.Root>
            </div>
          </main>
        </div>
      </div>
    </Theme>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
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
}

function ClipboardIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function HospitalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  );
}

function MoveHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserCheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <polyline points="16 11 18 13 22 9" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
