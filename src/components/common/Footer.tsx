// Footer.tsx
import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; 

// --- Placeholder/Mock Logo Component ---
const AlchemyLogo: React.FC = () => (
  // This is a simple placeholder to represent the round, dark/gold logo.
  <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
    <span className="text-xl font-bold text-[#b89547]">A</span>
  </div>
);

// --- Interface and Data (Unchanged) ---
interface LinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const companyLinks: LinkGroup = {
  title: 'Company',
  links: [
    { label: 'Our LinkedIn', href: '#' },
    { label: 'Our Projects', href: '#' },
    { label: 'About Us', href: '#' },
  ],
};

const serviceLinks: LinkGroup = {
  title: 'Our Services',
  links: [
    { label: 'Due Diligence', href: '#' },
    { label: 'Sales Strategy', href: '#' },
    { label: 'Land Acquisition', href: '#' },
    { label: 'Project Conceptualization', href: '#' },
  ],
};

// --- Reusable Link Column Component (Unchanged) ---
const FooterLinkColumn: React.FC<{ group: LinkGroup }> = ({ group }) => (
  <div>
    <h4 className="text-lg font-semibold text-gray-800 mb-4">{group.title}</h4>
    <nav className="space-y-2">
      {group.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="block text-gray-600 hover:text-[#b89547] transition duration-150 text-sm"
        >
          {link.label}
        </a>
      ))}
    </nav>
  </div>
);

// --- Main Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="container_section">
      <div className="container_content">
        
        {/* Top Separator Line */}
        <div className="border-t border-gray-300 mb-12"></div>

        {/* Main Content Grid: 
          Uses a custom grid template for large screens: 
          1.5fr (Branding) | 1.5fr (Spacer - the empty gap) | 1fr (Company) | 1.5fr (Services) | 2fr (Contact Us)
          For smaller screens, it will stack into two columns per row.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[1.5fr_1.5fr_1fr_1.5fr_2fr] gap-8 mb-12">
          
          {/* Column 1: Branding (Left side) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex flex-col items-start space-y-3">
                          <img
              src="/Alchemy_logo.png"
              alt="logo"
              className="w-14 h-14"
            />
              <div className="space-y-1">
                <p className="text-xl font-semibold text-gray-900">
                  Alchemy Landbase
                </p>
                <p className="text-sm text-gray-600">
                  We turn land into lasting family legacies.
                </p>
              </div>
            </div>
          </div>

          {/* Spacer Column (The key change for the alignment!) 
            This div is empty and only renders on desktop (lg) to push content right.
          */}
          <div className="hidden lg:block lg:col-span-1">
            {/* Empty spacer column to push the right-side content */}
          </div>


          {/* Columns 2, 3, 4: Menu and Contact (Right side) 
             On smaller screens (md and below), these columns will flow naturally.
          */}
          <FooterLinkColumn group={companyLinks} />
          <FooterLinkColumn group={serviceLinks} />

          {/* Contact Us Column */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm text-gray-600">
              {/* Email */}
              <div className="flex items-start space-x-2">
                <FiMail className="text-[#b89547]" />
                <a
                  href="mailto:info@alchemylandbase.com"
                  className="hover:text-[#b89547]"
                >
                  info@alchemylandbase.com
                </a>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-2">
                <FiPhone className="text-[#b89547]" />
                <a
                  href="tel:+917030062277"
                  className="hover:text-[#b89547]"
                >
                  +91 70300 62277
                </a>
              </div>
              {/* Address */}
              <div className="flex items-start space-x-2 pt-2">
                <FiMapPin className="text-[#b89547]" />
                <p>
                  403, Baani Address One, <br />
                  Sector 56, Golf Course Road <br />
                  Gurugram, Haryana-122011
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Separator Line */}
        <div className="border-t border-gray-300 mt-12"></div>

        {/* Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 text-sm">
          <p className="text-gray-600 mb-2 sm:mb-0">
            © 2025 Alchemy Landbase LLP
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-[#b89547] transition duration-150"
            >
              Terms of Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#b89547] transition duration-150"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;