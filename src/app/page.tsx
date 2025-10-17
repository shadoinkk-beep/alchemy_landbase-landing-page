import CircularTextDesc from "@/components/common/CircularTextDesc";
import Contact from "@/components/common/Contact";
import AboutUs from "@/components/home/AboutUs";
import FarmhouseStatsSection from "@/components/home/FarmhouseStatsSection";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import FarmhouseProjects from "../components/home/FarmhouseProjects";

export const metadata = {
  title: "Where Land Meets Alchemy",
  description:
    "Discover premium real estate projects, villas, and apartments across India with Alchemy Landbase.",
  openGraph: {
    title: "Where Land Meets Alchemy",
    description: "Find your dream property with Alchemy Landbase.",
    url: "https://alchemylandbase.com",
    images: [
      {
        url: "https://alchemylandbase.com/hero_BG_IMG_Large.png",
        width: 1200,
        height: 630,
        alt: "Alchemy Landbase",
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
