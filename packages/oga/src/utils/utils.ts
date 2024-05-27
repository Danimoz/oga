import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormValues } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertFormDataToObject(formData: FormData): FormValues {
  const formValues: FormValues = {};

  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      formValues[key] = value;
    } else {
      formValues[key] = value.toString();
    }
  }

  return formValues;
}