import { Navbars } from "../components/Navbar.tsx";
import HeroSection from "../components/HeroSection.tsx";
export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased">
      <Navbars/>
      <HeroSection/>
    </main>
  );
}