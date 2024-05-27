import Sidebar from './Sidebar';
import { ReactNode } from 'react';
import { OgaConfig } from "../types";

interface LayoutProps extends Omit<OgaConfig, 'models'>{
  children: ReactNode
  modelNames?: string[]
}

export default function Layout({ orm, instance, modelNames, children }: LayoutProps) {
  return (
    <main className={`oga-grid oga-min-h-screen oga-w-full lg:oga-grid-cols-[280px_1fr] oga-font-rubik`}>
      <Sidebar orm={orm} mongooseModelNames={modelNames} />
      {children}
    </main>
  )
}
