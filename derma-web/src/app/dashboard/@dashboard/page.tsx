"use client";
import {useEffect} from   "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { AiOutlineSchedule } from "react-icons/ai";
import { Avatar, Card, Badge, ScrollArea } from "@radix-ui/themes";
import { Button, DropdownMenu, Checkbox, Table } from "@radix-ui/themes";
import React from "react";
import { appointmentReq } from "./demo-data/sample";
import io from 'socket.io-client';

export default function DashBoard1() {
  return (
    <Theme>
      <h1 className="font-bold text-lg">Welcome, Dr. Stephan</h1>
      <h1>Have a nice day at great work</h1>
      <div className="flex justify-center items-center text-white gap-10 flex-wrap">
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

      <div className="pb-20">
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap:4 lg:gap-8 p-4 md:p-6">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg md:text-xl">
                Appointment Requests
              </h1>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button
                      className="w-[200px] justify-start text-left font-normal"
                      variant="outline"
                    >
                      <FilterIcon className="mr-2 h-4 w-4" />
                      Filter by Status
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content align="end" className="w-auto p-0">
                    <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                    <DropdownMenu.Item shortcut="⌘ D">
                      Duplicate
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ N">
                      Archive
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
                <Button variant="outline">
                  <RefreshCwIcon className="h-4 w-4" />
                  <span className="sr-only">Refresh</span>
                </Button>
              </div>
            </div>
            <div className="gap-2 lg:gap-6">
              <Card>
                <Table.Root>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeaderCell className="w-[32px]">
                        <Checkbox id="select-all" />
                      </Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Patient</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Time</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell>Reason</Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell className="text-right">
                        Status
                      </Table.ColumnHeaderCell>
                      <Table.ColumnHeaderCell className="text-right">
                        Actions
                      </Table.ColumnHeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {appointmentReq.map((app) => (
                      <Table.Row align={"center"}>
                        <Table.Cell>
                          <Checkbox id="select-1" />
                        </Table.Cell>
                        <Table.Cell>
                          <div className="flex items-center gap-2">
                            <Avatar
                              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                              fallback={`MA`}
                            />
                            <div>
                              <div className="font-medium">{`${app.firstname} ${app.lastname}`}</div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {app.email}
                              </div>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>{app.date}</Table.Cell>
                        <Table.Cell>{app.time}</Table.Cell>
                        <Table.Cell>{app.reason}</Table.Cell>
                        <Table.Cell className="text-right">
                          <Badge
                            color={`${
                              app.status === "pending"
                                ? "blue"
                                : app.status === "rejected"
                                ? "red"
                                : "green"
                            }`}
                          >
                            {app.status}
                          </Badge>
                        </Table.Cell>
                        <Table.Cell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            {app.status === "pending" ? (
                              <>
                                <Button variant="outline" color="green">
                                  <CheckIcon className="h-4 w-4" />
                                  <span className="sr-only">Accept</span>
                                </Button>
                                <Button variant="outline" color="red">
                                  <XIcon className="h-4 w-4" />
                                  <span className="sr-only">Reject</span>
                                </Button>
                              </>
                            ) : (
                              <></>
                            )}

                            <Button variant="outline">
                              <CalendarIcon className="h-4 w-4" />
                              <span className="sr-only">Reschedule</span>
                            </Button>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </Theme>
  );
}

interface Props {
  className?: string;
}

const CalendarIcon: React.FC<Props> = (props) => {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
};

const CheckIcon: React.FC<Props> = (props) => {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

const FilterIcon: React.FC<Props> = (props) => {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
};

const RefreshCwIcon: React.FC<Props> = (props) => {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
};

const XIcon: React.FC<Props> = (props) => {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};
