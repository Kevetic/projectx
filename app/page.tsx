import Hero from "@/components/hero/Hero";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full m-auto p-5">
      <Hero />
      <Button>Hello World</Button>
    </main>
  );
}
