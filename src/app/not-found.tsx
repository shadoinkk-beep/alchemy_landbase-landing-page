// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container_section" >

    <main className="container_content min-w-screen content-center flex flex-col items-center justify-center  text-center ">
      {/* 404 Title */}
      <h1 className="text-7xl font-bold text-black mb-4">404</h1>

      {/* Subtitle */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Property not found
      </h2>
      <p className="text-gray-600 max-w-md mb-8">
        The page you’re looking for might have been removed, is under
        construction, or simply doesn’t exist.
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <Link
          href="/"
          className="button_black_bg"
        >
          Back to Home
        </Link>
        <Link
          href="/about"
          className="button_white_bg"
        >
          About Us
        </Link>
      </div>

      {/* Illustration (Optional) */}
      {/* <div className="mt-10">
        <img
          src="/images/404-house.png" // add a house/real-estate illustration in public/images
          alt="Not Found"
          className="w-72"
        />
      </div> */}
    </main>
    </section>

  );
}
