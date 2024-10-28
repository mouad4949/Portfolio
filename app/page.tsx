
import Hero from "../components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";

import Technologies from "@/components/Technologies";
import Deployment from "@/components/Deployment";
import { TimelineDemo } from "@/components/Experiences";
import { Approach } from "@/components/Approach";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="relative overflow-clip bg-black-100 flex justify-center items-ceter flex-col  mx-auto sm:px-10 px-5">
      <div className="maw-w-7xl w-full">
        
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
