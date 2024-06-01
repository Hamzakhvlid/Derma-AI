import SideNavbar from "./components/sidebar";
import Mainbar from "./components/Mainbar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function Dashboard() {
  return (
    <Theme>
      <main className="hidden fancybackground lg:flex ">
        <SideNavbar />
        <Mainbar />
      </main>
      <main className="flex min-h-screen w-full justify-center items-center lg:hidden "><p className="text-lg  text-black">Please use a larger screen to view the dashboard.</p></main>
    </Theme>
  );
}
