import SideNavbar from "./components/sidebar";
import Mainbar from "./components/Mainbar";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function Dashboard() {
  return (
    <Theme>
      <main className="fancybackground flex ">
        <SideNavbar />
        <Mainbar />
      </main>
    </Theme>
  );
}
