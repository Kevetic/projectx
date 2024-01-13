"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

const addProduct = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const imgUrl = formData.get("imgUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  await prisma.product.create({
    data: {
      description: description,
      name: name,
      imgUrl: imgUrl,
      price: price,
    },
  });
};

export default addProduct;
