import CaroselHome from "@/components/carousel/page";
import Hero from "@/components/hero/page";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full m-auto p-5 space-y-24">
      <Hero />
      <div className=" flex justify-center">
        <CaroselHome />
      </div>
    </main>
  );
}
