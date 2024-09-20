'use client'

import React from "react";
import Image from "next/image";
import { BookUser, BrickWallIcon, History, Home, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

function SideBar() {
  const pathname = usePathname();

  const sideBarList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: BrickWallIcon,
      path: "/dashboard/billing",
    },
    {
      name: "Address",
      icon: BookUser,
      path: "/dashboard/Adress",
    },
    {
        name: "Setting",
        icon: Settings,
        path: "/dashboard/setting",
      },
  ];
  return (
    <div className="p-5 h-screen shadow-md border relative">
      <div className="fle items-center justify-center">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={80}
          height={80}
          className="mx-auto"
        />
        <hr className="mt-6 h-[0.5px] bg-gray-600"></hr>
      </div>
      <div className="flex flex-col gap-6 mt-6">
        {sideBarList.map((item, index) => (
          <div key={index} className={`flex gap-2 hover:bg-purple-600 hover:text-white p-2 rounded-lg cursor-pointer ${item.path === pathname && "bg-purple-600 text-white"}`}>
            <item.icon />
            <Link key={index} href={item.path}>
              {item.name} 
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 p-5 rounded-xl mb-24 w-[80%] mx-auto bg-purple-600 text-white flex flex-col gap-2">
        <h1>Credit</h1>
        <div className="bg-purple-400 h-2 w-full rounded-full">
          <div className="w-[30%] h-full bg-white rounded-full"></div>
        </div>
        <p className="text-sm">350/10000 credits used</p>
      </div>
      <Button className="absolute bottom-0 mb-10 w-[80%] mx-auto bg-slate-400 hover:bg-slate-50 hover:text-black transition-all">Upgrade</Button>
    </div>
  );
}

export default SideBar;
