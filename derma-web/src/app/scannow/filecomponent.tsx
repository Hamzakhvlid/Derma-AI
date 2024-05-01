import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import axios from "axios";

import path from "path";
import Link from "next/link";
import Modal from "./modal";
import SymptomSelector from "./sysmptoms";
import Button from "../doctors/Button";
import './style.css'


const FileUploadComponent= () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [open, setOpen] = useState(false)
  const [result, setResult] = useState<string>("");
  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);
      const { data } = await axios.post("/api/image", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
   
  };

  const handleDiagnose = async () => {

    setResult("You  are diagnosed with Chickenpox")
    
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
        onClick={() => setOpen(true)}
        disabled={uploading}
        style={{ opacity: uploading ? ".5" : "1" }}
        className="bg-blue-900 p-3 w-32 text-center rounded text-white  ml-4 mt-4"
      >
        {uploading ? "Uploading.." : "Upload"}
      </button>
      <Modal open={open} onClose={() => handleClose()}>
       {result==""?<div className="text-center md:w-[80rem] md:h-[40rem]">
       
       <div className="mx-auto my-4 ">
         <h3 className="text-lg font-black text-gray-800 pt-[10%]">Symptoms</h3>
         <p className="text-sm text-gray-500 ">
           Select from below how many symptoms you are getting
         </p>
       </div>
       <div className="flex-col gap-4">
       
        <SymptomSelector></SymptomSelector>
        <button

  onClick={handleDiagnose}
     
     className="bg-blue-900 p-3 w-32 text-center rounded text-white  ml-4 mt-4"
   >Diagnose</button>

         
       </div>
     </div>:<div>
        <h1 className="text-center text-2xl font-black text-gray-800 pt-[10%]">Diagnosis</h1>
        <div> <div>
        <h1>Skin Analysis</h1>
<table>
  <tbody>
    <tr>
      <th>Skin type</th>
      <td>Oily</td>
    </tr>
    <tr>
      <th>Skin concerns</th>
      <td>Wrinkles, Acne</td>
    </tr>
    <tr>
      <th>Texture</th>
      <td>Mid 30s</td>
    </tr>
  </tbody>
</table>

      <div className="section">
        <h2>
          <span className="icon">☀️🌙</span> Skin Care Routines
        </h2>
        <h3>Pre-cleanse</h3>
        <ul>
          <li>
            <input type="checkbox" checked /> Laneige Cream Skin Milk Cleanser
           <br></br> <span className="frequency">every day</span>
          </li>
        </ul>

        <h3>Serum</h3>
        <ul>
          <li>
            <input type="checkbox" checked /> Innisfree Green Tea Seed Serum
            <br></br>   <span className="frequency">every day</span>
          </li>
          {/* Add more serum items here */}
        </ul>

        {/* Add more routine sections (Moisturizer, Sunscreen) similarly */}
      </div>
    </div></div>
        <p className="text-1xl text-gray-700 text-center pt-2">{result}</p>
        <div className="flex justify-center">
        <button  className="bg-blue-900 p-1 w-32 text-center rounded text-white  ml-4 mt-8">Book Appointment</button>
        </div>
      </div>}  
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