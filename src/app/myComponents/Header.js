'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from 'next/link';

const Header = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          
            <header className="bg-white shadow w-4/5">
              <div className="container border-0 w-full flex flex-row p-7">
                <nav className="">
                  <ul className="font-mono text-xl font-black flex space-x-4">
                    <li className="mx-5"><Link href="./services">Services</Link></li>
                    <li className="mx-5"><Link href="./media">Media</Link></li>
                    <li className="mx-5"><Link href="./cases">Cases</Link></li>
                    <li className="mx-5"><Link href="./FAQs">FAQs</Link></li>
                    <li className="mx-5"><Link href="./contacts">Contacts</Link></li>
                  </ul>
                </nav>
              </div>
            </header>
          <NavigationMenuContent>
            {/* <NavigationMenuLink>Hi</NavigationMenuLink> */}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

  );
};

export default Header;

