"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type ProcessStep = {
  id: string;
  title: string;
  content: string;
};

const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    content:
      "We conduct thorough market research and competitor analysis to develop a customized strategy aligned with your business objectives and target audience preferences.",
  },
];

export default function WorkingProcess() {
  const [openItems, setOpenItems] = React.useState<string[]>(["01"]);

  const toggleItem = (value: string) => {
    setOpenItems((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]));
  };

  return (
    <main className="md:mt-[101px] md:mb-[138px] mt-10 mb-[70px] container">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 mb-10 md:mb-16">
        <h2 className="bg-accent rounded-[7px] w-fit px-[7px] py-1 text-2xl md:text-3xl">Our Working Process</h2>
        <p className="text-base md:text-lg max-w-[580px] text-center md:text-left">
          Step-by-Step Guide to Achieving
          <br className="hidden md:block" />
          Your Business Goals
        </p>
      </div>

      <div className="space-y-6">
        {processSteps.map((step) => (
          <div
            key={step.id}
            className={cn(
              "rounded-[45px] overflow-hidden transition-all duration-300 border-[var(--color-dark)] border-[1px] shadow-[0_10px_10px_-5px_rgba(0,0,0,0.9)]",
              openItems.includes(step.id) ? "bg-accent" : "bg-muted"
            )}
          >
            <div className="flex items-center justify-between p-6 md:p-8 cursor-pointer" onClick={() => toggleItem(step.id)}>
              <div className="flex items-center gap-4 md:gap-8">
                <span className="text-4xl md:text-5xl font-medium">{step.id}</span>
                <h3 className="text-xl md:text-2xl font-medium">{step.title}</h3>
              </div>
              <button className="bg-background rounded-full" aria-label={openItems.includes(step.id) ? "Collapse" : "Expand"}>
                {openItems.includes(step.id) ? (
                  <Minus size={36} className="border-[var(--color-dark)] border-[1px] rounded-full" />
                ) : (
                  <Plus size={36} className="border-[var(--color-dark)] border-[1px] rounded-full" />
                )}
              </button>
            </div>
            {openItems.includes(step.id) && (
              <div className="px-6 pb-8 md:px-20 md:pb-10 -mt-2 max-w-4xl">
                <p>{step.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
