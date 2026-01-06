"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left hover:text-[#bc1019] transition-colors group"
      >
        <span className="text-2xl md:text-3xl font-light tracking-tight pr-8">
          {title}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-[#bc1019] transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] pb-6" : "max-h-0"
        }`}
      >
        <div className="text-gray-600 leading-relaxed space-y-3 text-lg md:text-xl">
          {children}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export function Accordion({ children, className = "" }: AccordionProps) {
  return (
    <div className={`divide-y divide-gray-200 ${className}`}>
      {children}
    </div>
  );
}
