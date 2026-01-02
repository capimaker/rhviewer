"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { links } from "../Navbar.data";
import Link from "next/link";
import { X } from "lucide-react";

export function NavbarMobile() {
    const [ isOpen, setIsOpen ] = useState(false);
  return (
    <div className="flex md:hidden">
        <Button className="text-black" variant="outline"
            onClick={() => setIsOpen(!isOpen)} >
        {isOpen ? <X size={24}/> :<Menu size={24} />}
        </Button>

        {isOpen && (
            <div className="absolute top-16 right-4 bg-white/90 text-black backdrop-blur-md rounded-lg shadow-lg border border-neutral-300/20 flex flex-col items-start p-4 gap-3">
                {links.map((link) => (
                    <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </Link>
           ))} 
           </div>
        )}  
    </div>
  );
}
