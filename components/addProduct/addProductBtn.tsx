"use client";
import { ReactNode } from "react";

import React from "react";
import { Button } from "../ui/button";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick: () => void;
  actionButton?: boolean;
}

function AddProductButton({ type, text, onClick, actionButton }: ButtonProps) {
  return (
    <>
      <Button onClick={onClick} type={type}>
        {text}
      </Button>
    </>
  );
}

export default AddProductButton;
