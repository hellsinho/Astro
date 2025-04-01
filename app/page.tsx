import Image from "next/image";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Features from "./components/Features"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  );
}
