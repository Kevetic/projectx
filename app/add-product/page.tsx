import AddProductButton from "@/components/addProduct/addProductBtn";
import AddProductForm from "@/components/addProduct/addProductForm";
import AddproductInput from "@/components/addProduct/addProductInput";
import React from "react";
import addProduct from "../actions/addProduct";

function AddProduct() {
  return (
    <div className="flex w-11/12 justify-center flex-col m-auto p-20">
      <h1 className="text-5xl text-center m-20">Add Product</h1>
      <AddProductForm
        action={addProduct}
        className="grid grid-cols-2 gap-5 justify-center items-center"
      >
        <AddproductInput name="name" type="text" placeholder="Prodcut Name" />
        <AddproductInput
          name="description"
          type="text"
          placeholder="Product Description"
        />
        <AddproductInput name="imgUrl" type="url" placeholder="Product Image" />
        <AddproductInput name="price" type="number" placeholder="price" />
        <AddProductButton type="submit" text="submit" className=" mt-5 w-1/2" />
      </AddProductForm>
    </div>
  );
}

export default AddProduct;
