"use client";
import React from "react";
import AddproductInput from "./addProductInput";
import { useRef, ReactNode } from "react";

interface addproductProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => boolean;
}

function AddProductForm({
  children,
  action,
  className,
  onSubmit,
}: addproductProps) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form>
        <AddproductInput />
      </form>
    </div>
  );
}

export default AddProductForm;
