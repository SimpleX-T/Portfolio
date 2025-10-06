import Link from "next/link";
import DisplayCard from "@/components/display-card";

export default function NotFound() {
  return (
    <DisplayCard>
      <section className="grid place-items-center h-screen w-full">
        <div className="text-center">
          <h1 className="text-[12rem] font-bold">404</h1>
          <p className="text-4xl mb-8">Page not found</p>
          <Link
            href="/"
            className="flex items-center justify-center rounded-lg text-lg w-24 mx-auto p-2 bg-[#e8dfec]"
          >
            Back
          </Link>
        </div>
      </section>
    </DisplayCard>
  );
}
