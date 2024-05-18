import { Avatar, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Image from "next/image";

const dummyData = [
  {
    title: "Top 10 Travel Destinations for Summer 2024",
    imgurl: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg", // Replace with your desired image URL
    author: "Jane Doe",
    description:
      "Dreaming of a summer getaway? We've compiled a list of the hottest travel destinations to inspire your next adventure.",
    authorImg: "https://placeimg.com/150/150/people", // Replace with your desired image URL
  },
  {
    title: "Essential Skills to Master for the Modern Workplace",
    imgurl: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg", // Replace with your desired image URL
    author: "John Smith",
    description:
      "Stay ahead of the curve and boost your career prospects by learning these in-demand skills for the ever-evolving job market.",
    authorImg: "https://placeimg.com/150/150/people", // Replace with your desired image URL
  },
  {
    title: "The Power of Meditation for Stress Reduction",
    imgurl: "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg", // Replace with your desired image URL
    author: "Dr. Maria Garcia",
    description:
      "Discover how meditation can be a powerful tool for managing stress, improving focus, and enhancing overall well-being.",
    authorImg: "https://placeimg.com/150/150/people", // Replace with your desired image URL
  },
];

export default function Blogs() {
  return (
    <div className="wrapper">
    <div className="container mx-auto px-4 py-8  mt-20">
    <h1 className="md:text-3xl md:font-bold sm:text-xl sm:font-semibold text-base font-medium mb-4">Blogs</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        
        {dummyData.map((item, index) => (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <Image
              alt="blog image"
                className="w-full h-auto rounded-lg"
                height={200}
                src={item.imgurl}
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
            </div>
            <div className="flex items-center mb-2">
              <Theme><Avatar fallback={item.author[0]} src={item.authorImg} /></Theme>
              <div className="ml-2 text-sm font-semibold">{item.author}</div>
            </div>
            <h3 className="text-lg font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
