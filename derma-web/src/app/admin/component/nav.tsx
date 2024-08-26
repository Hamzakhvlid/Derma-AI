import Link from "next/link";
import { useRouter } from "next/navigation"



export default function AdminNavbar() {

    const router = useRouter();
    const handleLogout = () => {
      localStorage.removeItem("accessToken");
      router.push("/admin/login");
    }
    
    return (
      <header className="flex h-14 fixed w-full top-0  lg:h-[60px] items-center justify-between gap-4 border-b bg-[#f4581c] py-8 px-6 ">
              
      <div className="flex flex-row">
      <span className="mr-1 text-xl text-blue-500">
    <img src="/dermalogo.png" width={"38px"} height="28px" alt="" />
  </span>
  <Link href={"/admin"}>  <h1  className="font-semibold text-lg text-white">Derma AI Admin</h1></Link>
      
      </div>
  
  <button onClick={()=>handleLogout} className="px-4 py-2 border border-gray-300 rounded-md text-white bg-[#3d3c7b] focus:outline-none focus:ring-2 focus:ring-blue-500">
  Logout
  </button>
      
    </header>
    )
  }