
import {  Avatar, Theme } from "@radix-ui/themes";
import Image from "next/image";

export default function DetailedBlog() {
  return (
    <div className="mt-20">
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          alt="Hero Image"
          className="h-full w-full object-cover"
          height={1080}
          src="https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg?size=626&ext=jpg"
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
              The Secrets of Successful Startups
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
                fallback="JD"
                src=""
             />
            </Theme>
            
            <div>
              <h2 className="text-xl font-bold">Jane Doe</h2>
              <p className="text-gray-500 dark:text-gray-400">Startup Founder and CEO</p>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold">The Secrets of Successful Startups</h1>
          <p>
            In the fast-paced world of entrepreneurship, the difference between success and failure can often come down
            to a few key strategies and insights. In this in-depth article, we'll explore the secrets that have
            propelled the world's most innovative startups to greatness.
          </p>
          <h2>Embrace Agility and Adaptability</h2>
          <p>
            The most successful startups are those that are able to quickly adapt to changing market conditions and
            customer needs. By embracing an agile mindset and being willing to pivot when necessary, these companies are
            able to stay ahead of the curve and capitalize on emerging opportunities.
          </p>
          
          <h2>Focus on Customer Experience</h2>
          <p>
            Successful startups understand that the key to long-term growth is providing an exceptional customer
            experience. By deeply understanding their target audience and tailoring their products and services to meet
            their needs, these companies are able to build loyal customer relationships that drive sustainable growth.
          </p>
          <h2>Embrace a Culture of Innovation</h2>
          <p>
            The most innovative startups are those that have cultivated a culture that encourages and rewards
            creativity, risk-taking, and experimentation. By empowering their teams to think outside the box and explore
            new ideas, these companies are able to stay ahead of the competition and deliver groundbreaking solutions.
          </p>
          
          <h2>Leverage Data and Analytics</h2>
          <p>
            Successful startups understand the power of data and analytics to drive informed decision-making. By
            collecting and analyzing key metrics and insights, these companies are able to make data-driven decisions
            that optimize their operations, marketing, and product development strategies.
          </p>
          <h2>Build a Strong Network and Ecosystem</h2>
          <p>
            The most successful startups are those that have built a strong network of partners, investors, and industry
            influencers. By leveraging these connections, they are able to access valuable resources, expertise, and
            opportunities that help them scale and succeed.
          </p>
          
        </article>
      </div>
    </div>
  )
}