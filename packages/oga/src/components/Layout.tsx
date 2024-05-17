'use client';

import { ORMProvider } from "../context/ORMContext";
import Sidebar from './Sidebar';
import { ReactNode } from 'react';
import { OgaConfig } from "../types";


interface LayoutProps extends OgaConfig {
  children: ReactNode
}

export default function Layout({ orm, instance, models, children }: LayoutProps) {
  return (
    <ORMProvider orm={orm} instance={instance} model={models}>
      <main className={`oga-grid oga-min-h-screen oga-w-full lg:oga-grid-cols-[280px_1fr]`}>
        <Sidebar />
        {children}
      </main>
    </ORMProvider>
  )
}
