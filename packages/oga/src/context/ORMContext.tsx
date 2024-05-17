"use client";

import React, { ReactNode, useContext } from "react";
import { ModelAdapter } from "../adapters/adapter";
import { orm } from "../types";
import { getAdapter } from "../adapters";

type ORMContextProps = {
  orm: orm;
  instance: any;
  model?: any;
  adapter: ModelAdapter
}

const ORMContext = React.createContext<ORMContextProps>({} as ORMContextProps);

export const ORMProvider = ({ orm, instance, model, children }: Omit<ORMContextProps, 'adapter'> & { children: ReactNode}) => {
  const adapter = getAdapter(orm, instance, model);

  return (
    <ORMContext.Provider value={{ orm, instance, adapter: adapter }}>
      {children}
    </ORMContext.Provider>
  )
}

export const useORM = () => {
  const context = useContext(ORMContext);
  if (!context) {
    throw new Error("useORM must be used within a ORMProvider");
  }
  return context;
}