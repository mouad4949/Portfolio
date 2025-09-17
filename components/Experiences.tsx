
import React from "react";
import { Timeline } from "@/components/ui/exp";

export function TimelineDemo() {
  const data = [
    {
      title: "Research Assistant at ORACLE",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold mb-8">
Contributing to automating module management in the GraalVM CI system using Buildbot,
Docker, Ansible, and Environment Modules across Linux, Windows, and macOS platforms.
          </p>
        
          <div className="grid grid-cols-2 gap-4">
            <img
              src="PDP.jpeg"
              alt="oracle"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="graalvm.webp"
              alt="graalvm"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            
          </div>
         
        </div>
      ),
    },
    {
      title: "Internship Experience",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold mb-8">
          During my internship at Aéroclub Casablanca, I developed a booking system for flight reservations, including aircraft availability checks and secure online payments. I also created admin dashboards to manage airport operations, such as aircraft maintenance, pilot licenses, and the financial reporting of invoices. Using Python, Django, and Tailwind CSS, I delivered a comprehensive solution that improved efficiency across multiple areas. 
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-bold mb-8">
          This experience enhanced my software development skills and gave me valuable insights into real-world project management.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="aero1.jpeg"
              alt="internship"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="aero2.jpeg"
              alt="internship"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="aero3.jpeg"
              alt="internship"
              width={500}
              height={500}
              className="col-span-2 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>

        </div>
      ),
    },
    
  ];
  return (
    
    <div className="w-full" id="exp">
      <h1 className='heading'>
          Latest Professional {' '}
            <span className='text-purple'>Experiences</span>

        </h1>
      <Timeline data={data} />
    </div>
  );
}
