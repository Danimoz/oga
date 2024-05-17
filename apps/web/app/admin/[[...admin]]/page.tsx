import { Admin } from '@repo/oga'
import dbConnect from '../../lib/dbConnect';
import models from '../../models/model';

interface AdminPageProps {
  params?: { admin?: string | string[] };
  searchParams?: { [key: string]: string | string[] | undefined } ;
}

export default async function AdminPage({ params, searchParams }: AdminPageProps) {
  console.log(params?.admin, 'params');
  console.log(searchParams, 'searchParams');

  const ormInstance = await dbConnect();

  return (
    <div>
      <Admin 
        orm="mongoose" 
        instance={ormInstance}
        params={params}
        searchParams={searchParams}
        models={models} 
      />
    </div>
  );
}