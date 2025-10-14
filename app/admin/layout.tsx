import Link from "next/link";

const links = [
  {
    href: "/admin",
    label: "Dashboard",
  },

  {
    href: "/admin/projects",
    label: "Projects",
  },
  {
    href: "/admin/certifications",
    label: "Certifications",
  },
  {
    href: "/admin/work-experience",
    label: "Work Experience",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[220px_1fr] w-full">
      <aside className="border-r p-4 space-y-12">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-black-700)]">
            Admin
          </h2>
        </div>

        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              className="text-[var(--text-black-700)] hover:bg-[var(--bg-black-50)]/60 transition-colors duration-100 ease-in p-2"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section>{children}</section>
    </div>
  );
}
