'use client';

import Link from "next/link";
import Header from "./ui/Header";
import { useState } from "react";
import { orm } from "../types";

interface SidebarProps {
  mongooseModelNames?: string[];
  orm: orm
}

export default function Sidebar({ mongooseModelNames, orm }: SidebarProps) {
  const [modelNames, setModelNames] = useState<string[]>([]);
  
  return (
    <div className="oga-hidden oga-border-r oga-border-white lg:oga-block">
      <div className="oga-h-full oga-max-h-screen oga-p-4">
        <Header variant="h2" className="oga-font-bold oga-text-3xl oga-mb-6 oga-uppercase">ọga Admin</Header>
        <div className="oga-py-2">
          <nav className="oga-flex oga-flex-col py-2">
            {orm !== 'mongoose' ? modelNames.map((model: string) => (
              <Link 
                key={model} 
                href={`/${model}`}
                className="oga-py-2 oga-rounded-lg oga-transition-all"
              >
                {model}
              </Link>
            )): mongooseModelNames?.map((model: string) => (
              <Link 
                key={model} 
                href={`/${model}`}
                className="oga-py-2 oga-rounded-lg oga-transition-all"
              >
                {model}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}