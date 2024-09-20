"use client"
import { Search } from "lucide-react";
import React from "react";
import { useState } from "react";

interface myPrope   {
  handleSearchValue:(value:string)=> void
}
function SearchSection({handleSearchValue}:myPrope) {

  const handelInputValue = (event:React.ChangeEvent<HTMLInputElement>)=> {
     handleSearchValue(event.target.value)
     
  }
  
  return (
    <div className="p-10 bg-gradient-to-br from-purple-700 via-purple-600 to-blue-300">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-white text-3xl">Browse all Services</h1>
        <p className="text-white">Which services you need to achieve today</p>
        <div className="flex items-start bg-white p-2 mt-2 rounded-xl w-[400px] ">
          <Search />
          <input
            type="text"
            placeholder="Place your search ...."
            className="outline-none bg-transparent ml-1"
            onChange={handelInputValue}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
