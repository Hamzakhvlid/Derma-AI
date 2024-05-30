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
    <div>
      <div className="space-y-6">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            id="title"
            placeholder="Enter your blog post title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            id="content"
            placeholder="Start writing your blog post content..."
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            htmlFor="content"
          >
            Cover Image
          </label>
          <img src={cover} />
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            id="cover"
            type="file"
            onChange={(e) => {
                handleUploadImage(e);
            }}
          />
        </div>
        <button className="w-full" disabled={disabled} onClick={updateBlog} >Publish</button>
      </div>
    </div>
  );
}
