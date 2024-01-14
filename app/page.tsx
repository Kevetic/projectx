import CaroselHome from "@/components/carousel/CaroselHome";
import Hero from "@/components/hero/Hero";
import HomeProducts from "@/components/productCards/HomeProducts";

export default function Home() {
  return (
    <main className="w-full m-auto p-5 space-y-24 relative">
      <div>
        <Hero />
      </div>
      <div className="flex justify-center">
        <CaroselHome />
      </div>
      <div className="text-center">
        <HomeProducts />
      </div>
    </main>
  );
}
