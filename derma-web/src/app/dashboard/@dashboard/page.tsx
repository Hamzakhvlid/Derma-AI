import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { AiOutlineSchedule } from "react-icons/ai";
import { Avatar, Card, Box, Flex, Text, Badge } from "@radix-ui/themes";

export default function DashBoard1() {
  return (
    <Theme>
      <h1 className="font-bold text-lg">Welcome, Dr. Stephan</h1>
      <h1>Have a nice day at great work</h1>
      <div className="flex justify-center items-center text-white gap-10">
        <div className="bg-[#7a6efe] flex justify-center items-center rounded-lg">
          <div className="px-10 py-4 flex justify-between items-center gap-5">
            <AiOutlineSchedule className="h-6 w-6" />
            <div>
              <h1 className="font-bold text-2xl">24.4k</h1>
              <h1 className="text-sm">Appointment</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#FF5363] flex justify-center items-center rounded-lg">
          <div className="px-10 py-4 flex justify-between items-center gap-5">
            <AiOutlineSchedule className="h-6 w-6" />
            <div>
              <h1 className="font-bold text-2xl">24.4k</h1>
              <h1 className="text-sm">Appointment</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#FFA901] flex justify-center items-center rounded-lg">
          <div className="px-10 py-4 flex justify-between items-center gap-5">
            <AiOutlineSchedule className="h-6 w-6" />
            <div>
              <h1 className="font-bold text-2xl">24.4k</h1>
              <h1 className="text-sm">Appointment</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#24A8FA] flex justify-center items-center rounded-lg">
          <div className="px-10 py-4 flex justify-between items-center gap-5">
            <AiOutlineSchedule className="h-6 w-6" />
            <div>
              <h1 className="font-bold text-2xl">24.4k</h1>
              <h1 className="text-sm">Appointment</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom flex">
        <div className="left">
          <h1>Appointment Request</h1>
          <div className="bg-white rounded-lg drop-shadow-lg">
            <Flex>
              <Avatar
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Flex direction={"column"}>
                <Text>Muhammad Ansar</Text>
                <Text>25 Male, 12 April 9:30PM</Text>
              </Flex>
              <Badge color="green">Complete</Badge>
            </Flex>
          </div>
        </div>
        <div className="left">
          <h1>Appointment Request</h1>
          <div className="bg-white rounded-lg drop-shadow-lg">
            <Flex>
              <Avatar
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Flex direction={"column"}>
                <Text>Muhammad Ansar</Text>
                <Text>25 Male, 12 April 9:30PM</Text>
              </Flex>
              <Badge color="green">Complete</Badge>
            </Flex>
          </div>
        </div>
        <div className="left">
          <h1>Appointment Request</h1>
          <div className="bg-white rounded-lg drop-shadow-lg">
            <Flex>
              <Avatar
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
              <Flex direction={"column"}>
                <Text>Muhammad Ansar</Text>
                <Text>25 Male, 12 April 9:30PM</Text>
              </Flex>
              <Badge color="green">Complete</Badge>
            </Flex>
          </div>
        </div>
      </div>
    </Theme>
  );
}
