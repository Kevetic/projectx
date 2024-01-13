import AddProductButton from "@/components/addProduct/addProductBtn";
import AddProductForm from "@/components/addProduct/addProductForm";
import AddproductInput from "@/components/addProduct/addProductInput";
import React from "react";

function AddProduct() {
  return (
    <>
      <AddProductForm>
        <AddproductInput name="input" type="text" placeholder="product item" />
        <AddProductButton type="submit" text="submit" />
      </AddProductForm>
    </>
  );
}

export default AddProduct;
