"use client";
import { useEffect, useState } from "react";
import { Avatar, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Image from "next/image";
import { StyledPagination } from "../doctors/styled";
import axios from "axios";
import Link from "next/link";
import { baseUrl } from "../api/baseUrl";

const Limit = 2;

type Blog = {
  cover: string;
  author: string;
  authorDetails: {
    firstname: string;
    imageUrl: string;
    lastname: string;
  };
  title: string;
  content: string;
};

export default function Blogs() {
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const handlePageClick = (event: any) => {
    setCurrentPage(event.selected + 1);

    console.log(event.selected);
  };

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${`${baseUrl}blogs/getAllBlogs`}?page=${currentPage}&limit=${Limit}`,
  };

  useEffect(() => {
    config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${`${baseUrl}blogs/getAllBlogs`}?page=${currentPage}&limit=${Limit}`,
    };
    const fetchData = async () => {
      const data = await fetchAllBlogs();
      console.log("data", data);
    };
    fetchData();
  }, [currentPage]);

  const fetchAllBlogs = async () => {
    try {
      const doc = await axios.request(config);
      setBlogs(doc.data.blogs);
      setTotalCount(doc.data.pagination.totalPages);
    } catch (e) {
      console.log(e);
      console.log("error occured");
    }
  };

  return (
    <div className="wrapper">
      <div className="container mx-auto px-4 py-8  mt-20">
        <h1 className="md:text-3xl md:font-bold sm:text-xl sm:font-semibold text-base font-medium mb-4">
          Blogs
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {blogs &&
            blogs.map((item: any) => (
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="mb-4">
                  <Image
                    alt="blog image"
                    className="w-full h-auto rounded-lg"
                    height={200}
                    src={item.cover}
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width={300}
                  />
                </div>
                <div className="flex items-center mb-2">
                  <Theme>
                    <Avatar fallback={`${item.authorDetails.firstname[0]}${item.authorDetails.lastname[0]}`} src={item.authorDetails.imageUrl} />
                  </Theme>
                  <div className="ml-2 text-sm font-semibold">
                    {`${item.authorDetails.firstname} ${item.authorDetails.lastname}`}
                  </div>
                </div>
                <Link href={`/blogs/blog/${item._id}`} className="text-lg font-bold mb-2 cursor-pointer">{item.title}</Link>
                <p className="text-sm text-gray-600">{item.content.slice(0, 100)}</p>
              </div>
            ))}
        </div>
        <div className="flex pr-5 pt-4 pb-20 justify-end align-bottom">
          {" "}
          <StyledPagination
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={4}
            pageCount={totalCount}
            previousLabel="< prev"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}
