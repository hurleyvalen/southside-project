<!--  ## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

/// save ////

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
                        {session && session?.user ? (          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}-->
