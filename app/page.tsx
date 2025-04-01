import Image from "next/image";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar";
import Features from "./components/Features"
import ProductDemo from "./components/ProductDemo";
import WaitlistForm from "./components/WaitlistForm";
import CosmicFooter from "./components/CosmicFooter";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <ProductDemo/>
      <WaitlistForm/>
      <CosmicFooter/>
    </div>
  );
}
