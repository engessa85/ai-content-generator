import React from "react";
import Image from "next/image";
import { tempelateItems } from "./TempelateSection";
import Link from "next/link";

function Card(item: tempelateItems) {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className="p-5 bg-slate-100 flex flex-col gap-3 shadow-md border hover:scale-105 transition-all cursor-pointer rounded-lg ">
        <Image src={item.icon} width={50} height={50} alt="image" />
        <h1 className="font-bold">{item.name}</h1>
        <p className="line-clamp-3">{item.desc}</p>
      </div>
    </Link>
  );
}

export default Card;
