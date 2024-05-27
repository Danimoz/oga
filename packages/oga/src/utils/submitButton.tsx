'use client';

import { useFormStatus } from "react-dom"
import { Button } from "../components/ui/button";
import { LoaderIcon } from "lucide-react";

interface SubmitButtonProps {
  buttonText: string;
}

export default function SubmitButton({ buttonText }: SubmitButtonProps){
  const { pending } = useFormStatus();
  
  return (
    <Button disabled={pending} className="w-full" type='submit'>
      { pending ? (
        <>
          <LoaderIcon className='oga-animate-spin oga-mr-4 oga-h-4 oga-w-4' />
          {buttonText}
        </>
      ) : buttonText }
    </Button>
  )
}