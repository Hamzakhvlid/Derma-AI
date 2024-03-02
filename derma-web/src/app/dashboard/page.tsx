import SideNavbar from "./components/sidebar";
import Mainbar from "./components/Mainbar";

export default function Dashboard(){
    return (
        <main className="w-full flex ">
            <SideNavbar />
            <Mainbar />
        </main>
    )
}



