import { OgaConfig } from "../types";
import Layout from "./Layout";

type AdminProps = OgaConfig;

export function Admin({ orm, instance, models, params, searchParams }: AdminProps) {
  let currentModel;

  if (orm === "mongoose") {
    currentModel = models[params?.admin as string];
  }


  return (
    <Layout orm={orm} instance={instance} models={models}>
      <div className="oga-grid-cols-2">
        <h1>{params?.admin}</h1>
        <pre>{JSON.stringify(currentModel, null, 2)}</pre>
      </div>  
    </Layout>
  );
}