"use client";

import Link from "next/link";
import { useState } from "react";
import Brand from "./Brand";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    
    <header className="w-full bg-fs-bg/50 backdrop-blur-xl  px-10 py-4  fixed top-0 z-50 flex items-center justify-between">
      
      {/* Logo  */}
      <Brand/>

      {/* Nav items */}
      <nav className="inline-flex items-center space-x-8 text-[15px] font-medium">
        <Link href={"/"} className="text-white hover:text-fs-green transition-colors ease-in-out duration-200">Home</Link>
        <Link href={"/categories"} className="text-slate-400 hover:text-fs-green transition-colors ease-in-out duration-200">Categories</Link>
        <Link href={"/categories"} className="text-slate-400 hover:text-fs-green transition-colors ease-in-out duration-200">Channels</Link>
      </nav>

      {/* search box */}
      <div className="w-sm overflow-hidden rounded-full bg-gray-600/10">
        <input type="search" name="search" id="search" placeholder="Search channel ..." className="placeholder:text-gray-400/80 w-full h-full px-4 py-2 rounded-full outline-none text-neon-green font-medium"/>
      </div>

      {/* live  */}
      <div>
        <span className="inline-flex items-center justify-center gap-2 rounded-full  bg-emerald-600/20 px-3 py-1.5 text-sm font-semibold text-neon-green">
          <span className="h-2 w-2 animate-pulse rounded-full bg-neon-green"></span>Live Channels</span>
      </div>
    </header>
  );
}