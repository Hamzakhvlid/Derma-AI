"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, getAdminDoctor, getDoctorDetail } from "@/app/api/baseUrl"; 
import { Theme, Avatar } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import DoctorDetailScreenLoading from "./loading"; // Adjust path if necessary
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setProfile, setUser } from "@/app/lib/reducers/loggedinUser";
import { logout } from "@/app/lib/authSlice";
import { signOut } from "@/auth";
import { toast } from "react-toastify";

interface DoctorData {
  _id: string;
  idUrl: string;
  legalid: string;
  medicalCollege: string;
  registration_no: string;
  pmdcUrl: string;
  baseUser:{ first_name:string;
    last_name:string;
    imageUrl:string;
  }
  idtype:String;
}
 

export default function DoctorDetailScreen({ params }: { params: { id: string } }) {
  const [loading, setLoading] = useState(false);
  const [doctor, setDoctor] = useState<DoctorData | null>(null);
  const token = useSelector((state: any) => state.user.profile?.accessToken);

  const router = useRouter();
  const [doctors, setDoctors] = useState<DoctorData[]>([]);
  const [comment, setComment] = useState("");

  const login = useSelector((state: any) => state.auth.isLogin);
const dispatch= useDispatch();
const handleDoctor = async (data: any) => {


};

  const handleLogout = () => {


   
    dispatch(setProfile(null));
  
    dispatch(setUser(null));
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    
    dispatch(logout());
    
    signOut();

    router.push("/login");
    
  }

  useEffect(() => {
    setLoading(true);
    async function fetchSingleDoctor() {
      try {
        const response = await axios.get(`${getAdminDoctor}?id=${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }


        );
        setDoctor(response.data); 
      } catch (err) {
        console.error("Error fetching doctor details:", err);
      } finally {
       
      }
    }
    fetchSingleDoctor();
    setLoading(false);
  }, [params.id]);

  

  async function verifyDoctor(obj:any){
    try{
        await axios.post(`${baseUrl}verifyDoctorByAdmin`, {
        id:  obj.id ,status:obj.status,comment: comment
        }, {
  
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })

       alert("Doctor status updated successfully")
        router.push("/admin");
    }catch(err){
      toast.error("Error")
        console.log(err)
    }
}

 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
    {loading ?<div className="p-[10rem] flex flex-col justify-start"> <img src="/loader.gif"></img></div>:<div className="flex flex-col gap-1 ">
      
      <Theme />
     
      {doctor?.baseUser.imageUrl &&  (
          <div className="flex ">
           
            <img src={doctor.baseUser.imageUrl}  className="w-[5rem] rounded-2xl items-center ml-[8rem]"></img>
          </div>
        )}

      {doctor?.baseUser.first_name &&  (
          <div className="flex ">
            <span className="font-semibold mr-2">First Name</span>
            <span>{doctor.baseUser.first_name}</span>
          </div>
        )}
         {doctor?.baseUser.last_name &&  (
          <div className="flex ">
            <span className="font-semibold mr-2">Last Name</span>
            <span>{doctor.baseUser.last_name}</span>
          </div>
        )}
         {doctor?.idtype &&  (
          <div className="flex ">
            <span className="font-semibold mr-2">Identity Type</span>
            <span>{doctor?.idtype}</span>
          </div>
        )}
      {doctor?.legalid &&  (
          <div className="flex ">
            <span className="font-semibold mr-2">Identity Number</span>
            <span>{doctor?.legalid}</span>
          </div>
        )}
      {doctor?.medicalCollege &&  (
          <div className="flex ">
            <span className="font-semibold mr-2">Medical College:</span>
            <span>{doctor?.medicalCollege}</span>
          </div>
        )}
      <div className=" space-y-4">
        {doctor?.registration_no && (
          <div className="flex items-center">
            <span className="font-semibold mr-2">Registration No:</span>
            <span>{doctor?.registration_no}</span>
          </div>
        )}
        {doctor?.pmdcUrl && (
          <div className="flex ">
            <span className="font-semibold mr-2">PMDC Certificate:</span>
            <a
              href={doctor?.pmdcUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View PMDC Certificate
            </a>
          </div>
        )}
        {doctor?.idUrl && (
          <div className="flex items-center">
            <span className="font-semibold mr-2">Identity:</span>
            <a
              href={doctor?.idUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View Identity
            </a>
          </div>

        )}
      </div>
      <input  onChange={(e)=>setComment(e.target.value)}  type="text" placeholder="Comment" className="border border-gray-300 rounded-md p-2 mt-2" />
     <div className="flex mt-3"> <button onClick={()=>verifyDoctor({  id:doctor?._id,status:"approved"})} className="px-4 py-2 border border-gray-300 rounded-md hover:text-white hover:bg-orange-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Approve 
      </button>
      <button onClick={()=>verifyDoctor({  id:doctor?._id,status:"rejected"})} className="px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300">
       Reject
      </button></div>
    </div>}
  </div>
</div>
   
  );
}