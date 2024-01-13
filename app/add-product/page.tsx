import AddProductButton from "@/components/addProduct/addProductBtn";
import AddProductForm from "@/components/addProduct/addProductForm";
import AddproductInput from "@/components/addProduct/addProductInput";
import React from "react";
import addProduct from "../actions/addProduct";

function AddProduct() {
  return (
    <>
      <AddProductForm action={addProduct}>
        <AddproductInput name="name" type="text" placeholder="Prodcut Name" />
        <AddproductInput
          name="description"
          type="text"
          placeholder="Product Description"
        />
        <AddproductInput name="imgUrl" type="url" placeholder="Product Image" />
        <AddproductInput name="price" type="number" placeholder="price" />
        <AddProductButton type="submit" text="submit" />
      </AddProductForm>
    </>
  );
}

export default AddProduct;
