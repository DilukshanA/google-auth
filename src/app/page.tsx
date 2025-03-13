import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-2xl md:text-4xl font-bold">Google Authentication</h1>
      <Hero/>
    </div>
  );
}
