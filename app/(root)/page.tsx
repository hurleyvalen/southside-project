import { APPOINTMENTS_QUERY } from "@/sanity/lib/queries";
import Divider from "../components/Divider";
import Booking from "../components/sections/Booking";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Menu from "../components/sections/Menu";
import Order from "../components/sections/Order";
import Schedule from "../components/sections/Schedule";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
export default async function Home() {
  const { data: booking } = await sanityFetch({ query: APPOINTMENTS_QUERY });
  console.log(booking);
  return (
    <>
      <Hero />
      <Divider />
      <Schedule />
      <Menu />
      <Order />
      <Booking booking={booking} />
      <Contact />
      <SanityLive />
    </>
  );
}
