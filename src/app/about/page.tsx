import ExclusiveMembersSection from "@/components/aboutus/ExclusiveMembers";
import FarmhouseDevelopmentSection from "@/components/aboutus/Hero";
import PrinciplesSection from "@/components/aboutus/Principles";
import CircularTextDesc from "@/components/common/CircularTextDesc";
import Contact from "@/components/common/Contact";

export const metadata = {
  title: "About Us – Alchemy Landbase",
  description:
    "Learn about Alchemy Landbase, our mission, and 10+ years of trusted real estate service.",
  openGraph: {
    title: "About Alchemy Landbase",
    description:
      "Trusted real estate experts helping families find their dream homes for over a decade.",
    url: "https://alchemylandbase.com/about",
    images: [
      {
        url: "https://alchemylandbase.com/hero_BG_IMG_Large.png",
        width: 1200,
        height: 630,
        alt: "Alchemy Landbase Team",
      },
    ],
    type: "article",
  },
};

export default function About() {
  return (
    <>
    <FarmhouseDevelopmentSection/>
    <CircularTextDesc/>

    <PrinciplesSection/>
    <ExclusiveMembersSection/>
    <Contact/>
    </>
  );
}
