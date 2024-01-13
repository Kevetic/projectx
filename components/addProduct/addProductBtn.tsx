"use client";
import { ReactNode } from "react";

import React from "react";
import { Button } from "../ui/button";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  className?: string;
}

function AddProductButton({
  type,
  text,
  onClick,
  actionButton,
  className,
}: ButtonProps) {
  return (
    <>
      <Button onClick={onClick} type={type} className={className}>
        {text}
      </Button>
    </>
  );
}

export default AddProductButton;
