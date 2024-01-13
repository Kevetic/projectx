"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

const addProduct = async (formData: FormData) => {
  const input = formData.get("input") as string;

  await prisma.product.create({
    data: {
      name: input,
    },
  });
};

export default addProduct;
