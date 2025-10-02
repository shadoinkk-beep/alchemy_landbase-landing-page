import CircularTextDesc from "@/components/common/CircularTextDesc";
import Contact from "@/components/common/Contact";
import AboutUs from "@/components/home/AboutUs";
import FarmhouseStatsSection from "@/components/home/FarmhouseStatsSection";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import FarmhouseProjects from "../components/home/FarmhouseProjects";

export const metadata = {
  title: "Luxury Real Estate Properties in India",
  description:
    "Discover premium real estate projects, villas, and apartments across India with DreamHomes Realty.",
  openGraph: {
    title: "Luxury Real Estate Properties in India",
    description: "Find your dream property with DreamHomes Realty.",
    url: "https://dreamhomes.com",
    images: [
      {
        url: "https://dreamhomes.com/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "DreamHomes Realty",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
    <Hero/>
    <FarmhouseProjects/>
    <WhyUs/>
    <CircularTextDesc/>
    <FarmhouseStatsSection/>
    <AboutUs/>
    <Contact/>
    
    </>
  );
}
