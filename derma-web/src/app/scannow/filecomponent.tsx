import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import axios from "axios";

import path from "path";
import Link from "next/link";
import Modal from "./modal";



const FileUploadComponent= () => {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [open, setOpen] = useState(false)

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

  return (
    <div className="absolute md:ml-[44%] md:mt-[-4rem] mt-[15rem]  ml-[33%] ">
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
            <img src={selectedImage} alt="" />
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
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center md:w-[80rem] md:h-[40rem]">
       
          <div className="mx-auto my-4 ">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-danger w-full">Delete</button>
            <button
              className="btn btn-light w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
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