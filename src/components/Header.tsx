import { Menu } from "lucide-react";
import LogoWithName from "./helper/LogoWithName";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const HeaderLinks = [
  { name: "About us", path: "/" },
  { name: "Services", path: "/" },
  { name: "Use Cases", path: "/" },
  { name: "Pricing", path: "/" },
  { name: "Blog", path: "/" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between md:mt-[60px] md:mb-[70px] md:px-[100px] px-5 pt-[30px] pb-[40px]">
      <div>
        <LogoWithName />
      </div>

      <div className="hidden items-center gap-10 md:flex">
        <ul className="flex gap-10">
          {HeaderLinks.map((link) => (
            <a key={link.name} href={link.path}>
              <p>{link.name}</p>
            </a>
          ))}
        </ul>
        <button className="rounded-[14px] border-[var(--color-dark)] border-[1px] py-5 px-[35px] hover:bg-accent transition-all">
          <p>Request a quote</p>
        </button>
      </div>

      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="top" className="pt-10 border-b-2 border-accent">
            <nav>
              <ul className="flex flex-col gap-5">
                {HeaderLinks.map((link) => (
                  <li key={link.name} className="text-center">
                    <a href={link.path}>
                      <p>{link.name}</p>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="m-4">
                <button className="w-full rounded-[14px] border-[var(--color-dark)] border-[1px] py-4 px-[35px]">
                  <p>Request a quote</p>
                </button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
