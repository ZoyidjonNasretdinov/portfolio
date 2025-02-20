"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsPersonWorkspace } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
 
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden mobile:grid grid-cols-3 gap-4 bg-primary p-3 my-3 mx-3 text-black rounded-[17px]">
      <Link
        href="/"
        className={`btn flex justify-center items-center gap-1 text-center px-1 py-3 rounded-[17px]  ${pathname === "/" ? "bg-[#A290FC]" : "bg-secondary text-white"}`}
      >
        <CiUser /> Home
      </Link>
      <Link
        href="/works"
        className={`btn flex justify-center items-center gap-1 text-center px-1 rounded-[17px] ${pathname === "/work" ? "bg-[#A290FC]" : "bg-secondary text-white"}`}
      >
        <BsPersonWorkspace /> Works
      </Link>
      <Link
        href="/services"
        className={`btn flex justify-center items-center gap-1 text-center px-1 rounded-[17px] ${pathname === "/services" ? "bg-[#A290FC]" : "bg-secondary text-white"}`}
      >
        <RiCustomerService2Line />
        Services
      </Link>
    </nav>
  );
}
