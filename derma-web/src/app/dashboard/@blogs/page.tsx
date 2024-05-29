"use client";
import axios from "axios";
import Link from "next/link"
import {useEffect, useState} from 'react';

export default function BlogsDoctorPage() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        async function fetchMyBlogs(){
            try{
                await axios.get('http://localhost:8080/api/v1/users/blogs/getMyBlogs', {
                    withCredentials: true,
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                    }
                }).then((res) => {
                    setBlogs(res.data.blogs)
                })
            }catch(err){
                console.log(err)
            }
        }
        fetchMyBlogs();
    }, [])
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Blog Posts</h1>
        <Link
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/blogs/create"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          New Post
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {
            blogs ? (
                blogs && blogs.map((blog:any, index) => (
                    <div className="bg-white rounded-lg shadow-md dark:bg-gray-800" key={index}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">
              <Link href="#">{blog.title}</Link>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4">May 1, 2023</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {blog.content}
            </p>
            <div className="flex items-center justify-end">
              <Link
                className="inline-flex items-center justify-center rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-gray-700 shadow transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:focus-visible:ring-gray-300"
                href="#"
              >
                {/* <EditIcon className="w-4 h-4 mr-2" /> */}
                Edit
              </Link>
              <button className="inline-flex items-center justify-center rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 ml-2">
                <TrashIcon className="w-4 h-4 mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
                ))
            ) : (
                <div>No Blogs Found</div>
            )
        }
        
      </div>
    </div>
  )
}

function DeleteIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
