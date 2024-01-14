import React from "react";
import { prisma } from "@/utils/prisma";
import GetCards from "./GetCards";

async function Cards() {
  const products = await prisma.product.findMany();

  return (
    <div className="grid md:grid-cols-3 grid-col-2 gap-20">
      <GetCards products={products} />
    </div>
  );
}

export default Cards;
