import Link from "next/link";
import { FieldDetails, FormValues, OgaConfig, ServerAction, orm } from "../types";
import Header from "./ui/Header";
import { Card } from "./ui/card";
import ModelPage from "./ModelPage";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import CreateForm from "./createForm";
import { getMongooseFields } from "../utils/generateForms";
import { convertFormDataToObject } from "../utils/utils";

interface DashboardProps extends Pick<OgaConfig, 'params' | 'searchParams'> {
  modelNames: string[]
  currentModel?: any
  orm: orm
}

export default function Dashboard({ params, searchParams, modelNames, currentModel, orm }: DashboardProps ) {
  const getParamsValue = ({ params }: Pick<OgaConfig, 'params'>) => {
    return Array.isArray(params?.admin) ? params.admin[0] : params?.admin || 'Dashboard';
  };

  if (!currentModel) {
    return (
      <section className="oga-p-4 md:oga-p-6">
        <Header className="oga-font-bold oga-text-3xl oga-mb-6">{getParamsValue({ params })}</Header>
        <div className="oga-grid oga-grid-cols-1 oga-gap-4 md:oga-grid-cols-2 lg:oga-grid-cols-3 xl:oga-grid-cols-4">
          {modelNames?.map((model) => (
            <Link href={`/admin/${model}`} key={model}>
              <Card className="oga-p-6 oga-font-semibold oga-text-balance oga-text-xl">{model}</Card>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  const modelFields = (() => {
    switch (orm) {
      case 'mongoose':
        return getMongooseFields(currentModel.schema.paths);
      case 'prisma':
        return {};
      default:
        return {};
    }
  })();
  
  async function createAction(data: FormData) {
    const values = convertFormDataToObject(data);
    try {
      switch (orm) {
        case 'mongoose':
          await currentModel.create(values);
          console.log('Data created successfully');
          return { success: true };
        case 'prisma':
          await currentModel.create(data);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error creating model:', error);
      throw new Error('Error creating model');
    }
  };

  return (
    <section className="oga-p-4 md:oga-p-6">
      <div className="oga-flex oga-justify-between oga-items-center">
        <Header className="oga-font-bold oga-text-3xl oga-mb-6">{getParamsValue({ params })}</Header>
        {params?.admin && (
          <Dialog>
            <DialogTrigger asChild>
              <Button>Create {getParamsValue({ params })}</Button>
            </DialogTrigger>
            <DialogContent className='sm:oga-max-w-[425px] oga-text-black'>
              <CreateForm schemaPath={modelFields as FieldDetails[]} action={createAction} />
            </DialogContent>
          </Dialog>
        )}
      </div>
      
      <ModelPage />  
    </section>
  )
}