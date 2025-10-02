import ExclusiveMembersSection from "@/components/aboutus/ExclusiveMembers";
import FarmhouseDevelopmentSection from "@/components/aboutus/Hero";
import PrinciplesSection from "@/components/aboutus/Principles";
import CircularTextDesc from "@/components/common/CircularTextDesc";
import Contact from "@/components/common/Contact";

export const metadata = {
  title: "About Us – DreamHomes Realty",
  description:
    "Learn about DreamHomes Realty, our mission, and 10+ years of trusted real estate service.",
  openGraph: {
    title: "About DreamHomes Realty",
    description:
      "Trusted real estate experts helping families find their dream homes for over a decade.",
    url: "https://dreamhomes.com/about",
    images: [
      {
        url: "https://dreamhomes.com/og/about.jpg",
        width: 1200,
        height: 630,
        alt: "DreamHomes Realty Team",
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
