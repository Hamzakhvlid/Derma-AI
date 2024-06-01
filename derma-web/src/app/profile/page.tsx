"use client";
import React, {useEffect} from "react";
import { Avatar, Theme, AlertDialog, Flex, Button, Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../lib/store";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { login, logout } from "../lib/authSlice";
import { setProfile, setUser } from "../lib/reducers/loggedinUser";
import { redirect } from "next/navigation";
import {useRouter} from "next/router";


const Profile = () => {
  
  const userState = useSelector((state: RootState) => state.user);
  const authState = useSelector((state: RootState) => state.auth);
  const {isLogin } = authState;
  const { user, profile, roles, isAdmin } = userState;
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(login());
    dispatch(setProfile(null));
    dispatch(setUser(null));
    localStorage.removeItem("accessToken");
    localStorage.removeItem("accessToken");
    dispatch(logout());
    signOut();
    
  };
  
  
  
  return (
    <Theme className="wrapper">
      <main className="flex flex-col  bg-gray-100 mt-20">
        <header className="bg-white  shadow-sm p-4 ">
          <div className="flex flex-col justify-center items-center space-x-4">
            <Avatar
              size={"9"}
              radius="full"
              fallback={
                (profile.first_name ?? "")[0] + (profile.last_name ?? "")[0]
              }
              src={profile?.image ?? profile?.imageUrl ?? ""}
            />
            <Link
              href={`/editprofile/${profile._id}`}
              className="underline text-blue-400 text-sm "
            >
              Edit Profile
            </Link>
          </div>
          <div className="flex justify-between items-center mt-10">
            <h2 className="font-medium text-gray-900 ">Name:</h2>
            <p className="text-gray-500  text-sm">
              {profile.first_name} {profile.last_name}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-gray-900 ">Email:</h2>
            <p className="text-gray-500  text-sm">{profile.email}</p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <UpcomingAppointments />
        </div>
        <div className="overflow-y-auto p-4 space-y-4 flex justify-center items-center">
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Text className="cursor-pointer" color="red">Logout</Text>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Logout</AlertDialog.Title>
              <AlertDialog.Description size="2">
                Are you sure? This application will no longer be accessible and
                any existing sessions will be expired.
              </AlertDialog.Description>

              <Flex gap="3" mt="4" justify="end">
                <AlertDialog.Cancel>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button onClick={handleLogout} variant="solid" color="red">
                    Logout
                  </Button>
                </AlertDialog.Action>
              </Flex>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </div>
      </main>
    </Theme>
  );
};

const UpcomingAppointments = () => (
  <section>
    <h3 className="text-lg font-medium text-gray-900 ">
      Upcoming Appointments
    </h3>
    <div className="bg-white  rounded-lg shadow-sm p-4 space-y-4">
      <Appointment
        data={{
          type: "General Check-up",
          date: "May 15, 2023",
          time: "10:00 AM",
        }}
      />
      <Appointment
        data={{ type: "Dermatology", date: "June 1, 2023", time: "2:30 PM" }}
      />
    </div>
  </section>
);

interface DataPairProps {
  label: string;
  value: string;
}

const DataPair: React.FC<DataPairProps> = ({ label, value }) => (
  <div>
    <p className="text-gray-500  text-sm">{label}</p>
    <p className="text-gray-900  font-medium">{value}</p>
  </div>
);

interface AppointmentData {
  type: string;
  date: string;
  time: string;
}

const Appointment: React.FC<{ data: AppointmentData }> = ({ data }) => (
  <div className="flex items-center justify-between">
    <DataPair label="Appointment" value={data.type} />
    <DataPair label="Date" value={data.date} />
    <DataPair label="Time" value={data.time} />
  </div>
);

export default Profile;
