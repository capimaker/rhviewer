import { Logo } from "@/componentes/Shared/Logo/Logo";
import { NavbarDesktop } from "./NavbarDesktop/NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";


export  function Navbar() {
  return (
  <nav className="w-[90%] md:w-full md:max-w-5xl mx-auto sticky top-5 z-20 flex item-center justify-between px-6 py-3 bg-blue-300/30 backdrop-blur-md rounded-full shadow-lg border border-neutral-300/20">
   
  <Logo/>
  <NavbarDesktop/>
  <NavbarMobile/>
  </nav>
  );
}
