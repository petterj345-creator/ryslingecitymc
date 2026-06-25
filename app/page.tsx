import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AtlasMaps from "@/components/AtlasMaps";
import Bosses from "@/components/Bosses";
import Items from "@/components/Items";
import Classes from "@/components/Classes";
import Towns from "@/components/Towns";
import DailyRewards from "@/components/DailyRewards";
import Visionsboard from "@/components/Visionsboard";
import Footer from "@/components/Footer";
import AdminCog from "@/components/AdminCog";

// The visionsboard reads live data, so render this page per request.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AtlasMaps />
        <Bosses />
        <Items />
        <Classes />
        <Towns />
        <DailyRewards />
        <Visionsboard />
      </main>
      <Footer />
      <AdminCog />
    </>
  );
}
