import CaroselHome from "@/components/carousel/CaroselHome";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="w-full m-auto p-5 space-y-24 relative">
      <Hero />
      <div className="flex justify-center">
        <CaroselHome />
      </div>
    </main>
  );
}
