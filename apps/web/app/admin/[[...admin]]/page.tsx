import { Admin } from '@repo/oga'
import models from '../../models/model';
import dbConnect from '../../lib/dbConnect';

interface AdminPageProps {
  params?: { admin?: string | string[] };
  searchParams?: { [key: string]: string | string[] | undefined } ;
}

export default async function AdminPage({ params, searchParams }: AdminPageProps) {
  await dbConnect();
  
  return (
    <div>
      <Admin 
        orm="mongoose" 
        params={params}
        searchParams={searchParams}
        models={models} 
      />
    </div>
  );
}