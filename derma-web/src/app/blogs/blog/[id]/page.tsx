"use client";
import { useEffect, useState } from "react";
import {  Avatar, Theme } from "@radix-ui/themes";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import { baseUrl } from "@/app/api/baseUrl";

export default function DetailedBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>();
  useEffect(() => {
    async function fetchSingleBlog(){
      try{
        await axios.get(`${baseUrl}blogs/getSingleBlogById?id=${id}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
          },
        }).then((res) => {
          setBlog(res.data.blog)
        })
      }
      catch(err){
        console.log(err)
      }
    }
    fetchSingleBlog()
  },[]);
  if(!blog){
    return <div>Loading...</div>;
  }
  return (
    <div className="mt-20">
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          alt="Hero Image"
          className="h-full w-full object-cover"
          height={1080}
          src={blog.cover}
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover",
          }}
          width={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl space-y-4 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {blog.title}
            </h1>
            <p className="text-lg font-medium">
              Discover the key strategies and insights that have propelled the world's most innovative companies to
              success.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12 px-4 sm:px-6 lg:px-8 wrapper">
        <article className="prose prose-lg prose-gray mx-auto dark:prose-invert">
          <div className="mb-8 flex items-center space-x-4">
            <Theme>
            <Avatar
                fallback={`${blog.authorDetails.firstname[0]}${blog.authorDetails.lastname[0]}`}
                src={blog.authorDetails.imageUrl}
             />
            </Theme>
            
            <div>
              <Link href={`/doctors/doctor/${blog.author}`} className="text-xl font-bold">{`${blog.authorDetails.firstname} ${blog.authorDetails.lastname}`}</Link>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold">{blog.title}</h1>
          <p>{blog.content}</p>
        </article>
      </div>
    </div>
  )
}