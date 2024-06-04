"use client";
import { baseUrl, uploadSimpleImage } from '@/app/api/baseUrl';
import {Theme, Button} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function CreateBlog() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [imgFile, setImgFile] = useState<File>();
    const [disabled, setdisabled] = useState(true);

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
            setImgUrl(response.data.imageUrl)
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
    async function createBlog(){
        try{
            const data = new FormData();
            data.append("title", title);
            data.append("content", content);
            data.append("cover", imgUrl);
            await axios.post(`${baseUrl}blogs/create`, data, {
                withCredentials: true,
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            }).then((res) => {
                if(res.data.success){
                    router.push("/")
                    toast("Blog Created Successfully");
                }
                console.log(res.data)

            })
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100  px-10 ">
      <div className="w-full max-w-3xl px-6 py-8 bg-white rounded-lg shadow-lg">
        <div className="mb-8">
          <label className="block mb-2 text-sm font-medium text-gray-700 " htmlFor="title">
            Title
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
            id="title"
            placeholder="Enter a title for your blog post"
            onChange={(e) => {setTitle(e.target.value)}}
            value={title}
            type="text"
          />
        </div>
        <div className="mb-8">
          <label className="block mb-2 text-sm font-medium text-gray-700 " htmlFor="content">
            Content
          </label>
          <div className="border border-gray-300 rounded-md shadow-sm ">
            <div className="px-3 py-2 bg-gray-100 rounded-t-md ">
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded hover:bg-gray-200 ">
                  <BoldIcon className="w-4 h-4" />
                </button>
                <button className="p-1 rounded hover:bg-gray-200 ">
                  <ItalicIcon className="w-4 h-4" />
                </button>
                <button className="p-1 rounded hover:bg-gray-200 ">
                  <UnderlineIcon className="w-4 h-4" />
                </button>
                <button className="p-1 rounded hover:bg-gray-200 ">
                  <HeadingIcon className="w-4 h-4" />
                </button>
                <button className="p-1 rounded hover:bg-gray-200 ">
                  <ListIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
            <textarea
              className="w-full px-3 py-2 border-t border-gray-300 rounded-b-md resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 "
              id="content"
              placeholder="Start writing your blog post content here..."
              rows={10}
              onChange={(e) => {setContent(e.target.value)}}
                value={content}
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 " htmlFor="image">
            Featured Image
          </label>
          <label htmlFor='file' className="flex items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-md cursor-pointer ">
            <div className="text-center">
              <UploadIcon className="w-8 h-8 mx-auto text-gray-400 " />
              <p className="mt-2 text-sm font-medium text-gray-700 ">
                Drag and drop your image here, or click to upload
              </p>
            </div>
            <input hidden className="file"  id="file" type="file" onChange={(e) => {
                  setImgFile(e.target.files![0]);
                  handleUploadImage(e);
                }} />
          </label>
        </div>
        
        <Theme>
        <div className="flex justify-end mt-8">
          <Button className="ml-4" onClick={createBlog} disabled={disabled} >
            Publish
          </Button>
        </div>
        </Theme>
      </div>
    </div>
  )
}

function BoldIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
    </svg>
  )
}


function HeadingIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 12h12" />
      <path d="M6 20V4" />
      <path d="M18 20V4" />
    </svg>
  )
}


function ItalicIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  )
}


function ListIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function UnderlineIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <line x1="4" x2="20" y1="20" y2="20" />
    </svg>
  )
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