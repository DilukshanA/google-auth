import Hero from "@/components/Hero";;

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl md:text-4xl font-bold pb-24">Google Authentication</h1>
      <Hero/>
    </div>
  );
}
