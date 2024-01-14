import React from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import formatPrice from "@/lib/formatPrice";
import { prisma } from "@/utils/prisma";
import { Button } from "../ui/button";
import Link from "next/link";

async function HomeProducts() {
  const products = await prisma.product.findMany();
  return (
    <div className="grid md:grid-cols-3 grid-col-2 gap-20">
      {products.slice(0, 3).map((x) => (
        <div
          key={x.id}
          className="text-center border p-2 rounded-lg flex flex-col justify-evenly items-center min-h-[500px]"
        >
          <h1 className="text-2xl md:text-3xl">{x.name}</h1>
          <Badge>{formatPrice(x.price as number)}</Badge>
          <div>
            <Image
              src={x.imgUrl as string}
              width={400}
              height={400}
              alt="image"
              priority
              className="p-5"
            />
          </div>
          <p>{x.description}</p>
        </div>
      ))}
      <Link href={"/products"}>
        <Button>Browse All Products..</Button>
      </Link>
    </div>
  );
}

export default HomeProducts;
