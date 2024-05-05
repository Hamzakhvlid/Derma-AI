import { GetServerSideProps, NextPage } from "next";
import { use, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

import path from "path";
import Link from "next/link";
import Modal from "./modal";
import SymptomSelector from "./sysmptoms";
import Button from "../doctors/Button";
import './style.css'
import { scanNow, uploadImage } from "../Api/baseUrl";
import { json } from "stream/consumers";
import {useDispatch, useSelector} from 'react-redux'
import { setImageName, setImageUrl, setResponse } from "../lib/reducers/scanNow";
import { redirect } from "next/dist/server/api-utils";
import {useRouter } from 'next/navigation'
import SkinAnalysisResult from "./diseaseResult";
import { RootState } from "../lib/store";
import TipsResult from "./tipsResult";
const FileUploadComponent= () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [open, setOpen] = useState(false)
  const [result, setResult] = useState<string>("");
  const dispatch = useDispatch();
  const router=useRouter();
  const reqSymptoms=useSelector((state:RootState)=>state.scanNow.symptoms);
  const reqAdditionalInfo=useSelector((state:RootState)=>state.scanNow.additionalInfo);
  const reqImageName=useSelector((state:RootState)=>state.scanNow.imageName);
  const reqImageUrl=useSelector((state:RootState)=>state.scanNow.imageUrl);
  const type=useSelector((state:RootState)=>state.scanNow.type);
  const analysis=useSelector((state:RootState)=>state.scanNow.response);
  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("image", selectedFile);
      const response= await axios.post(uploadImage, formData);
      console.log(response.data.imageName);
      console.log(response.data.imageUrl);

      dispatch(setImageName(response.data.imageName));
      dispatch(setImageUrl(response.data.imageUrl));

    } catch (error: any) {
      alert("error occured while uploading image please try again later");
      router.push("/scannow");
    }
    setUploading(false);
   
  };

  const handleDiagnose = async () => {

    try {
      if (!selectedFile) return;
      const formData = new FormData();

      formData.append("symptoms", reqSymptoms??"");
      formData.append("additionalInfo", reqAdditionalInfo??"");
      formData.append("imageName", reqImageName??"");
      formData.append("imageUrl", reqImageUrl??"");
      formData.append("type", type??"");
      const  response  = await axios.post(scanNow, formData);
     
  
      const textObject = response.data.aiResponse;
      dispatch(setResponse(response.data.aiResponse));
      console.log(textObject);



      
    }catch (error: any) {
     alert("error occured while Diagnosis please try again later");
   //  router.push("/scanNow");
    }
    console.log("selectedFile req gone through axios");
    setResult("You have Acne")
    
  }
  const handleClose=()=>{
    setOpen(false)
    setResult("")
  }




  return (
    <div className="">
      <label>
      
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];

              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
        />
       
        <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
          {selectedImage ? (
            <img src={selectedImage} height={50} width={50} alt="" />
          ) : (
            <span>Select Image</span>
          )}
        </div>
      </label>
  
      <button
        onClick={() => {handleUpload();setOpen(true)}}
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1" }}
        className="bg-blue-900 p-3 w-32 text-center rounded text-white  ml-4 mt-4"
      >
        {uploading ? "Uploading.." : "Upload"}
      </button>
      <Modal open={open} onClose={() => handleClose()}>
       {result==""?<div className="text-center md:w-[80rem] md:h-[40rem]">
       
       <div className="mx-auto my-4 ">
         <h3 className="text-lg font-black text-gray-800 pt-[10%]">{type==='disease'?"Disease Symptoms":"Beauty Tips Topic"} </h3>
         <p className="text-sm text-gray-500 ">
         {type==='disease'?" Select from below how many symptoms you are getting":"Select from below topics that you wanted to be added in response"} 
         </p>
       </div>
       <div className="flex-col gap-4">
       
        <SymptomSelector></SymptomSelector>
        <button

  onClick={handleDiagnose}
     
     className="bg-blue-900 p-3 w-32 text-center rounded text-white  ml-4 mt-4"
   >Diagnose</button>

         
       </div>
     </div>:<div className="w-[50%] "><>{type==='disease'?<SkinAnalysisResult apiResponse={analysis}></SkinAnalysisResult>:<TipsResult apiResponse={analysis}></TipsResult>}</>
     </div> }
      </Modal>

    
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const props = { dirs: [] };
  try {
   
 
    return { props };
  } catch (error) {
    return { props };
  }
};

export default FileUploadComponent;