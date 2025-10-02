import { Metadata } from "next";

interface Props {
  params: { slug: string };
}

const projectDetails: Record<
  string,
  { title: string; desc: string; price: string }
> = {
  "project-a": {
    title: "Project A – Luxury Villas in Goa",
    desc: "World-class living with luxury villas offering comfort, elegance, and modern design.",
    price: "7500000",
  },
  "project-b": {
    title: "Project B – Premium Apartments in Mumbai",
    desc: "Premium apartments with modern amenities located in the heart of Mumbai.",
    price: "9500000",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectDetails[params.slug];
  return {
    title: project?.title ?? "Real Estate Project",
    description: project?.desc ?? "Explore our premium real estate projects.",
    openGraph: {
      title: project?.title ?? "DreamHomes Project",
      description: project?.desc ?? "Premium real estate listing.",
      url: `https://dreamhomes.com/projects/${params.slug}`,
      images: [
        {
          url: `https://dreamhomes.com/og/${params.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: project?.title,
        },
      ],
      type: "product",
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projectDetails[params.slug];
  if (!project) return <h1>Project not found</h1>;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": project.title,
    "description": project.desc,
    "brand": {
      "@type": "RealEstateAgent",
      "name": "DreamHomes Realty",
    },
    "offers": {
      "@type": "Offer",
      "url": `https://dreamhomes.com/projects/${params.slug}`,
      "priceCurrency": "INR",
      "price": project.price,
      "availability": "https://schema.org/InStock",
    },
    "image": [`https://dreamhomes.com/images/${params.slug}.jpg`],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dreamhomes.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://dreamhomes.com/projects",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://dreamhomes.com/projects/${params.slug}`,
      },
    ],
  };

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4">{project.desc}</p>

      {/* JSON-LD for Project + Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </section>
  );
}
