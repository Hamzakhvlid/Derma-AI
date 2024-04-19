import { setActiveItem } from "@/app/lib/sidebarSlice";
import { useDispatch } from "react-redux";

export default function SidebarItems(props: {
  title: String;
  icon: any;
  activeItem: any;
}) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setActiveItem(`${props.title}`))}
      className={`flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#007AFF] p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ${
        props.activeItem === `${props.title}` ? 'bg-[#007AFF]' : ''
      }`}
    >
      {props.icon}
      <h3
        className={`text-base text-gray-800 group-hover:text-white font-semibold ${
            props.activeItem === `${props.title}` ? 'text-white' : ''
          }`}
      >
        {props.title}
      </h3>
    </div>
  );
}
