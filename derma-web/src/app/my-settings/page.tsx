import "@radix-ui/themes/styles.css";
import { Theme, Avatar, Heading, Flex, Separator, Text } from "@radix-ui/themes";
import { CgProfile } from "react-icons/cg";
import { FaQuestionCircle, FaLock } from "react-icons/fa";
import ListItem from "./components/ListItem";

export default function Settings() {
  return (
    <Theme>
      <div className="mt-20 w-full flex flex-col justify-between items-center md:hidden">
        <Heading>Settings</Heading>

        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="MA"
          radius="full"
          variant="solid"
          size="8"
        />
        <Flex className="w-full px-8 mt-6" gap="3" direction="column">
          <ListItem icon={<CgProfile size="24"/>} link={"/"} name={"Account"} key={"1"}/>
          <Separator orientation="horizontal" size="4" />
          <ListItem icon={<FaLock size="22"/>} link={"/privacy-policy"} name={"Privacy Policy"} key={"2"}/>
          <Separator orientation="horizontal" size="4" />
          <ListItem icon={<FaQuestionCircle size="22"/>} link={"/about-us"} name={"About us"} key={"3"}/>
        </Flex>
      </div>
    </Theme>
  );
}
