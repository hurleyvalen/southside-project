import {
  APPOINTMENTS_QUERY,
  MENU_QUERY,
  SCHEDULE_QUERY,
} from "@/sanity/lib/queries";
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
  const { data: schedule } = await sanityFetch({ query: SCHEDULE_QUERY });
  const { data: menu } = await sanityFetch({ query: MENU_QUERY });

  return (
    <>
      <Hero />
      <Divider />
      <Schedule schedule={schedule} />
      <Menu menu={menu} />
      <Order />
      <Booking booking={booking} />
      <Contact />
      <SanityLive />
    </>
  );
}
