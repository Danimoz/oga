'use client';

import { FieldDetails, ServerAction } from "../types";
import SubmitButton from "../utils/submitButton";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface CreateFormProps {
  schemaPath: FieldDetails[]
  action: any
}

export default function CreateForm({ schemaPath, action }: CreateFormProps) {
  async function handleSubmit(data: FormData) {
    const res = await action(data);
    console.log(res);
  }

  return (
    <form className="oga-mt-4" action={handleSubmit}>
      {schemaPath.map((field: FieldDetails) => (
        <div key={field.name} className="oga-space-y-2 oga-mb-4">
          <Label htmlFor={field.name} className='oga-block oga-mb-2 oga-capitalize'>{field.name}</Label>
          {field.type === 'textarea' ? (
            <Textarea name={field.name} id={field.name} required={field.required} />
          ) : (
            <Input type={field.type} name={field.name} id={field.name} required={field.required} />
          )}
        </div>
      ))}
      <SubmitButton buttonText="Create" />
    </form>
  )
}