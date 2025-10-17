import CircularTextDesc2 from "@/components/common/CircularTextDesc2";
import Contact from "@/components/common/Contact";
import ExperienceSection from "@/components/projects/CTA";
import LandbaseIntro from "@/components/projects/LandbaseSection";
import LandbaseSection from "@/components/projects/LandbaseSection";

export const metadata = {
  title: "Our Real Estate Projects",
  description:
    "Explore our premium real estate projects including luxury apartments and villas.",
  openGraph: {
    title: "Our Real Estate Projects",
    description: "Premium homes, apartments, and villas by Alchemy Landbase.",
    url: "https://alchemylandbase.com/projects",
    images: [
      {
        url: "https://alchemylandbase.com/og/projects.jpg",
        width: 1200,
        height: 630,
        alt: "DreamHomes Projects",
      },
    ],
    type: "website",
  },
};

export default function Projects() {
  return (
    <>
    <LandbaseIntro/>
    <CircularTextDesc2/>
    <ExperienceSection/>
    <Contact/>
    </>
  );
}
