import { OgaConfig } from "../types";
import Dashboard from "./Dashboard";
import Layout from "./Layout";

type AdminProps = OgaConfig;

export function Admin({ orm, instance, models, params, searchParams }: AdminProps) {
  let currentModel;

  if (orm === "mongoose") {
    currentModel = models[params?.admin as string];
  }

  const modelNames = Object.keys(models)

  return (
    <Layout orm={orm} instance={instance} modelNames={modelNames} >
      <Dashboard 
        params={params} 
        searchParams={searchParams}
        modelNames={modelNames} 
        orm={orm}
        currentModel={currentModel} 
      />
    </Layout>
  );
} 