export const metadata = {
  title: "Our Real Estate Projects",
  description:
    "Explore our premium real estate projects including luxury apartments and villas.",
  openGraph: {
    title: "Our Real Estate Projects",
    description: "Premium homes, apartments, and villas by DreamHomes Realty.",
    url: "https://dreamhomes.com/projects",
    images: [
      {
        url: "https://dreamhomes.com/og/projects.jpg",
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
    <section className="p-10">
      <h1 className="text-3xl font-bold">Our Projects</h1>
      <ul className="mt-6 space-y-3">
        <li>
          <a href="/projects/project-a">Project A – Luxury Villas</a>
        </li>
        <li>
          <a href="/projects/project-b">Project B – Premium Apartments</a>
        </li>
      </ul>
    </section>
  );
}
