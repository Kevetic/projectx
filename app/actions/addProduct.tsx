"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

const addProduct = async () => {
  const post = await prisma.post.create({
    data: {
      title: "This title",
      body: "Body",
    },
  });
};

export default addProduct;
