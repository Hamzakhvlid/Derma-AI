"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, uploadSimpleImage } from "@/app/api/baseUrl";
import { toast } from "react-toastify";

export default function EditBlog() {
  const { id } = useParams();
  console.log(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [disabled, setdisabled] = useState(false);


  useEffect(() => {
    async function fetchSingleBlog() {
      try {
        await axios
          .get(`${baseUrl}blogs/getSingleBlogById?id=${id}`, {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
          .then((res) => {
            setTitle(res.data.blog.title);
            setContent(res.data.blog.content);
            setCover(res.data.blog.cover);
          });
      } catch (err) {
        console.log(err);
      }
    }
    fetchSingleBlog();
  }, []);
  //upload Image
  const handleUploadImage = async (e: any) => {
    setdisabled(true);
    try {
      toast("Uploading Image");
      const data = new FormData();
      data.append("image", e.target.files![0]);
      const response = await axios.post(uploadSimpleImage, data, {
        withCredentials: true,
        headers: {
          authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (response.data.success) {
        setCover(response.data.imageUrl)
        toast("Image Uploaded");
        setdisabled(false);
      }
    } catch (err) {
      console.log(err);
      toast("Error Uploading Image");
      const fileInput = document.getElementById(
        "file"
      ) as HTMLInputElement;
      if (fileInput) {
        fileInput.value = ""; // Reset file input
      }
    }
  };
  async function updateBlog(){
    try{
        const data = new FormData();
        data.append("title", title);
        data.append("content", content);
        data.append("cover", cover);
        await axios.post(`${baseUrl}blogs/editBlog?id=${id}`,data, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
        }).then((res) => {
            toast(res.data.message)
        })
    }catch(err){
        console.log(err);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100  px-10 ">
      <div className="w-full max-w-3xl px-6 py-8 bg-white rounded-lg shadow-lg">
        <div className="mb-8" >
          <label
            className="block mb-2 text-sm font-medium text-gray-700 "
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
            id="title"
            placeholder="Enter your blog post title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-8" >
          <label
            className="block mb-2 text-sm font-medium text-gray-700 "
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
            id="content"
            placeholder="Start writing your blog post content..."
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="mb-8" >
          <label
            className="block mb-2 text-sm font-medium text-gray-700 "
            htmlFor="content"
          >
            Featured Image
          </label>
          <img src={cover} className="h-24 w-24"  />
          <label htmlFor='file' className="flex items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-md cursor-pointer ">
            <div className="text-center">
              <UploadIcon className="w-8 h-8 mx-auto text-gray-400 " />
              <p className="mt-2 text-sm font-medium text-gray-700 ">
                Drag and drop your image here, or click to upload
              </p>
            </div>
            <input hidden className="file"  id="file" type="file" onChange={(e) => {
                  
                  handleUploadImage(e);
                }} />
          </label>
        </div>
        <button className="w-full text-white bg-red-500 rounded-xl py-3" disabled={disabled} onClick={updateBlog} >Publish</button>
      </div>
    </div>
  );
}



function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}