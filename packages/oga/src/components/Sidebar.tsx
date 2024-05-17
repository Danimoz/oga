'use client';

import Link from "next/link";
import Header from "./ui/Header";
import { useORM } from "../context/ORMContext";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const { adapter } = useORM();
  const [modelNames, setModelNames] = useState<string[]>([]);

  useEffect(() => {
    const getModelNames = async () => {
      const models = await adapter.getAllModels();
      setModelNames(models);
    }

    getModelNames();
  }, [adapter]);

  
  return (
    <div className="oga-hidden oga-border-r oga-bg-gray-100/40 lg:oga-block dark:oga-bg-gray-800/40">
      <div className="oga-h-full oga-max-h-screen">
        <Header variant="h2">Oga Admin</Header>
        <div className="oga-py-2">
          <nav className="">
            {modelNames.map((model: string) => (
              <Link key={model} href={`/${model}`}>
                {model}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}