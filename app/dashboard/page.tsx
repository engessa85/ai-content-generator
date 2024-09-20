'use client'
import React from "react";
import SearchSection from "./_components/SearchSection";
import TempelateSection from "./_components/TempelateSection";
import { useState } from "react";

function DashBoardPage() {
  const [search, setSearch] = useState('')
  const handleSearchValue = (value:string)=>{
      setSearch(value)
      
  }
  return (
    <div>
      {/* search section */}
      <SearchSection handleSearchValue =  {handleSearchValue} />

      {/* tempelate section */}
      <TempelateSection searchvalueis = {search} />
    </div>
  );
}

export default DashBoardPage;
