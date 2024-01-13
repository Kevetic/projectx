import React from "react";
import { Input } from "../ui/input";

interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

function AddproductInput({ name, type, placeholder, value }: InputProps) {
  return (
    <Input name={name} type={type} value={value} placeholder={placeholder} />
  );
}

export default AddproductInput;
