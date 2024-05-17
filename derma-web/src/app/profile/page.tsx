"use client";
import React from "react";
import { Avatar, Button, Switch, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";
import { MdEdit } from "react-icons/md";
import Link from "next/link";

const Profile = () => {
  const userState = useSelector((state: RootState) => state.user);
  const { user, profile, roles, isAdmin } = userState;
  return (
    <Theme>
      <main className="flex flex-col  bg-gray-100 mt-20 ">
        <header className="bg-white  shadow-sm p-4 flex items-center justify-between ">
          <div className="flex items-center space-x-4">
            <Avatar
              className="h-10 w-10"
              radius="full"
              fallback={
                (profile.firstname ?? "")[0] + (profile.lastname ?? "")[0]
              }
              src={profile?.image ?? ""}
            />

            <div>
              <h2 className="font-medium text-gray-900 ">
                {profile.firstname} {profile.lastname}
              </h2>
              <p className="text-gray-500  text-sm">{profile.email}</p>
            </div>
          </div>
          <Link href={`/editprofile/${profile._id}`}>
          <Button className="rounded-full" size="2" variant="outline">
            <MdEdit />
          </Button>
          </Link>
        </header>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <MedicalHistory />
          <UpcomingAppointments />
          <UserSettings />
        </div>
      </main>
    </Theme>
  );
};

const MedicalHistory = () => (
  <section>
    <h3 className="text-lg font-medium text-gray-900 ">Medical History</h3>
    <div className="bg-white  rounded-lg shadow-sm p-4 space-y-2">
      <DataPair label="Blood Type" value="O+" />
      <DataPair label="Allergies" value="Pollen, Latex" />
      <DataPair label="Medications" value="Ibuprofen, Aspirin" />
    </div>
  </section>
);

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

const UserSettings = () => (
  <section>
    <h3 className="text-lg font-medium text-gray-900 ">Settings</h3>
    <div className="bg-white  rounded-lg shadow-sm p-4 space-y-4">
      <Setting label="Notifications" value="Enabled" />
      <Setting label="Dark Mode" value="Enabled" />
      <div className="flex items-center justify-between">
        <DataPair label="Language" value="English" />
        <Button className="rounded-full" size="2" variant="outline">
          {/* <ChevronRightIcon className="h-5 w-5" /> */}
          <span className="sr-only">Change Language</span>
        </Button>
      </div>
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

interface SettingProps {
  label: string;
  value: string;
}

const Setting: React.FC<SettingProps> = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <DataPair label={label} value={value} />
    <Switch />
  </div>
);

export default Profile;
