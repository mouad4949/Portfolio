import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Technologies from "@/components/Technologies";
import Deployment from "@/components/Deployment";
import { TimelineDemo } from "@/components/Experiences";
import { Approach } from "@/components/Approach";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-ceter flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="maw-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Technologies/> 
        <Deployment/>
        <TimelineDemo/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
