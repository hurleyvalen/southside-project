import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-44 py-3 bg-mochaBrown shadow-sm font-poppins font-medium text-lg">
      <nav className="flex justify-between items-center text-black ">
        <div className="logo flex-wrap">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
          </Link>
        </div>

        {session && session?.user ? (
          <>
            <div className="">
              <div className="flex gap-14">
                <Link
                  className="transition border-b-2 border-mochaBrown hover:border-blushPeach hover:text-cream duration-200"
                  href=""
                >
                  <span>Schedule</span>
                </Link>
                <Link
                  className="transition border-b-2 border-mochaBrown hover:border-blushPeach hover:text-cream  duration-200"
                  href=""
                >
                  <span>Menu</span>
                </Link>
                <Link
                  className="transition border-b-2 border-mochaBrown hover:border-blushPeach hover:text-cream duration-200"
                  href=""
                >
                  <span>Order for Pickup</span>
                </Link>
                <Link
                  className="transition border-b-2 border-mochaBrown hover:border-blushPeach hover:text-cream duration-200"
                  href=""
                >
                  <span>Book Our Cafe</span>
                </Link>
                <Link
                  className="transition border-b-2 border-mochaBrown hover:border-blushPeach hover:text-cream duration-200"
                  href=""
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex w-full px-3 py-2 text-sm font-semibold text-black text-base">
                  {session?.user.name}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-black"
                  />
                </MenuButton>
                <MenuItems
                  transition
                  anchor="bottom"
                  className="font-poppins absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-cream shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <div className="block px-4 py-2 text-sm text-black data-[focus]:bg-blushPeach data-[focus]:text-black data-[focus]:outline-none">
                        <button className="">Profile</button>
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <form
                        className="block px-4 py-2 text-sm text-black data-[focus]:bg-blushPeach data-[focus]:text-black data-[focus]:outline-none"
                        action={async () => {
                          "use server";
                          await signOut({ redirectTo: "/" });
                        }}
                      >
                        <button type="submit" className="">
                          Logout
                        </button>
                      </form>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button type="submit">Login</button>
          </form>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
