import { BadgeCheck, Building2, Clock, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className=" flex flex-col sticky left-0 gap-10 h-screen border border-red shadow-xl w-fit py-3 px-3 pr-12">
      <div className="text-center text-white font-bold w-[115px] py-1 px-4 rounded-full bg-amber-500">
        Examen Final
      </div>
      <div className="flex flex-col text-gray-500 font-semibold text-xs px-5 gap-3">


        <Link href={"/cardGenerator"} className="flex items-center gap-6">
          <LayoutTemplate />
          <p>Card Generator</p>
        </Link>
        <Link href={"/digitalClock"} className="flex items-center gap-6">
          {" "}
          <Clock />
          <p>Digital Clock</p>
        </Link>
        <Link href={"/drillingInfo"} className="flex items-center gap-6">
          {" "}
          <BadgeCheck />
          <p>Drilling Info</p>
        </Link>
        <Link href={"/galeriaDeCartas"} className="flex items-center gap-6">
          {" "}
          <Building2 />
          <p>Galeria de Cartas</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
