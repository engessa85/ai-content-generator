import React from "react";
import SideBar from "./_components/SideBar";
import Header from "./_components/Header";
interface DashBoardType {
  children: React.ReactNode;
}
function DashBoardlayout({ children }: DashBoardType) {
  return (
    <div className="">
      <div className="md:fixed  md:w-64 md:block hidden">
        <SideBar />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default DashBoardlayout;
