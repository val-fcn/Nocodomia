import Features from "./ui/index/features";
import Header from "./ui/index/header";
import Hero from "./ui/index/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header />
      <div className="z-10 w-full items-center justify-between font-mono text-xl">
       <Hero />
       <Features />
       <div className='text-gray-500'>section social proof</div>
       <div className='text-gray-500'>section benefits</div>
       <div className='text-gray-500'>section HIW</div>
       <div className='text-gray-500'>section testimonial</div>
       <div className='text-gray-500'>section plans</div>
       <div className='text-gray-500'>section faq</div>
      </div>
    </main>
  );
}
