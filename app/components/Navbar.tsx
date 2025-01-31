import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className=" 2xl:block 2xl:px-44 py-3 shadow-sm font-poppins font-medium text-lg">
      <nav className="">
        {/* for desktop */}
        <div className="hidden justify-between items-center text-black 2xl:flex">
          <div className="logo">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={200} height={30} />
            </Link>
          </div>

          <div className="">
            <div className="flex gap-14">
              <Link
                className="transition hover:underline hover:text-blushPeach duration-200"
                href="#scheduleTime"
              >
                <span>Open Hours</span>
              </Link>
              <Link
                className="transition border-white hover:underline hover:text-blushPeach  duration-200"
                href="#menu"
              >
                <span>Menu</span>
              </Link>
              <Link
                className="transition border-white hover:underline hover:text-blushPeach duration-200"
                href="#order"
              >
                <span>Order for Pickup</span>
              </Link>
              <Link
                className="transition border-white hover:underline hover:text-blushPeach duration-200"
                href="#booking"
              >
                <span>Book Our Cafe</span>
              </Link>
              <Link
                className="transition border-white hover:underline hover:text-blushPeach duration-200"
                href="#contact"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          <div className="flex">
            <PhoneIcon aria-hidden="true" className="size-6 text-forestGreen" />
            <p className=" phone-num text-forestGreen">+(63) 927-012-5447</p>
          </div>
        </div>

        {/* for mobile */}
        <div className="flex 2xl:hidden justify-between">
          <div className="hidden sm:flex"></div>
          <div className="logo-container flex ">
            <div className="logo">
              <Image
                className="flex sm:ml-40"
                src="/logo.png"
                alt="logo"
                width={200}
                height={30}
              />
            </div>
          </div>
          <div className="flex items-center mr-10 sm:mr-20">
            <Menu as="div" className="relative inline-block">
              <MenuButton className="text-sm font-semibold text-black text-base">
                <Bars3Icon aria-hidden="true" className="size-6 text-black " />
              </MenuButton>
              <MenuItems
                transition
                anchor="bottom"
                className="font-poppins absolute right-0 z-10 mt-11 text-center origin-top-right rounded-md bg-cream shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <Link
                      className="block px-4 py-2 text-sm text-black data-[focus]:bg-blushPeach data-[focus]:text-black data-[focus]:outline-none"
                      href="#scheduleTime"
                    >
                      <span>Schedule</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="block px-4 py-2 text-sm text-black data-[focus]:bg-blushPeach data-[focus]:text-black data-[focus]:outline-none"
                      href="#menu"
                    >
                      <span>Menu</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="block px-4 py-2 text-sm text-black data-[focus]:bg-blushPeach data-[focus]:text-black data-[focus]:outline-none"
                      href="#order"
                    >
                      <span>Order For Pickup</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="block px-4 py-2 text-sm text-black data-[focus]:bg-blushPeach data-[focus]:text-black data-[focus]:outline-none"
                      href="#booking"
                    >
                      <span>Book Our Cafe</span>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      className="block px-4 py-2 text-sm text-black data-[focus]:bg-blushPeach data-[focus]:text-black data-[focus]:outline-none"
                      href="#contact"
                    >
                      <span>Contact Us</span>
                    </Link>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
