import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-mochaBrown shadow-sm font-poppins">
      <nav className="flex justify-between items-center">
        <div className="logo flex">
          {/* <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
          </Link> */}

          <span className="font-Black text-black text-2xl">
            South Side Brews
          </span>
        </div>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/orders">
                <span>Check Orders</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="">
                  Logout
                </button>
              </form>

              <Link href={`/user/${session?.user.id}`}>
                <span>{session?.user.name}</span>
              </Link>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
