"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="hidden  mobile:block text-textColor p-4 text-center tablet:flex tablet:justify-between tablet:items-center flex-row-reverse">
      <nav className="flex justify-center gap-6">
        <Link
          href="/"
          className={`btm ${pathname === "/" ? "text-[#A290FC]" : ""}`}
        >
          About
        </Link>
        <Link
          href="/work"
          className={`btm ${pathname === "/work" ? "text-[#A290FC]" : ""}`}
        >
          Work
        </Link>
        <Link
          href="/services"
          className={`btm ${pathname === "/services" ? "text-[#A290FC]" : ""}`}
        >
          Services
        </Link>
      </nav>
      <p className="mt-4">&copy; {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
};

export default Footer;
