import "@radix-ui/themes/styles.css";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import {
  Theme,
  Avatar,
  Heading,
  Flex,
  Separator,
  Text,
} from "@radix-ui/themes";
import { Component } from "react";

export default function ListItem(props: {
    link: String,
    name: String,
    icon: any,
}) {
  return (
    <Link href={`${props.link}`}>
      <div className="w-full flex justify-between items-center">
        <Flex gap="2">
          {props.icon}
          <Text>{props.name}</Text>
        </Flex>
        <IoIosArrowForward size="20" />
      </div>
    </Link>
  );
}
