import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { Avatar, Text, Flex, Separator, DropdownMenu } from "@radix-ui/themes";
export default function AppointmentList(props: {
  avatrUrl: string;
  email: string;
  firstname: string;
  lastname: string;
}) {
  return (
    <div>
      <Flex direction={"row"} justify={"between"} align={"center"} p={"2"}>
        <Flex align={"center"} gap={"2"}>
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback={`${props.firstname[0]}${props.lastname[0]}`}
          />
          <Text>
            {props.firstname} {props.lastname}
          </Text>
        </Flex>
        <Text>{props.email}</Text>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Accept</DropdownMenu.Item>
            <DropdownMenu.Item color="red" >Delete</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
      <Separator size={"4"} />
    </div>
  );
}
