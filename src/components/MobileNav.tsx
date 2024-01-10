import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { navItems } from "./Navbar.astro";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col items-center justify-center h-full gap-10 text-2xl">
          {navItems.map(({ label, href }) => (
            <li key={label} className="font-nunito">
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
