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
          {/* <p>{blog.content}</p> */}
          <h1>Your Skin's Best Friend: The Dermatologist</h1>
  <p>Our skin is our largest organ, protecting us from the outside world and regulating our temperature. But with all it does for us, sometimes our skin needs a little TLC. That's where dermatologists come in!</p>
  <h2>Who is a Dermatologist?</h2>
  <p>A dermatologist is a medical doctor who specializes in diagnosing and treating conditions related to the skin, hair, and nails. They've gone through years of schooling and training to become experts in this vital area of health.</p>
  <h2>What can a Dermatologist Help With?</h2>
  <p>Dermatologists can help with a wide range of issues, from common concerns like acne and eczema to more serious conditions like psoriasis and skin cancer. They can also perform cosmetic procedures like mole removal and Botox injections.</p>
  <h3>Reasons to Visit a Dermatologist</h3>
  <ul>
    <li>Acne breakouts</li>
    <li>Rashes and allergies</li>
    <li>Eczema or psoriasis</li>
    <li>Hair loss</li>
    <li>Skin cancer screening</li>
    <li>Warts and moles</li>
    <li>Concerns about wrinkles or aging skin</li>
  </ul>
  <h2>Why See a Dermatologist?</h2>
  <p>While there are many over-the-counter products available for skin concerns, a dermatologist can provide personalized advice and treatment plans. They can also perform biopsies to diagnose skin conditions accurately. Early diagnosis and treatment are crucial for many skin problems.</p>
  <h2>Finding a Dermatologist</h2>
  <p>Most insurance plans cover dermatologist visits, so don't hesitate to schedule an appointment if you have any concerns about your skin, hair, or nails. You can ask your primary care physician for a referral or search online for board-certified dermatologists in your area.</p>
  <p>Taking care of your skin is an important part of overall health. By working with a dermatologist, you can keep your skin healthy and glowing for years to come.</p>
        </article>
      </div>
    </div>
  )
}