import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  const db = await (await import("@/lib/mongo")).getDb();
  const [projects, certs, work] = await Promise.all([
    db.collection("projects").countDocuments(),
    db.collection("certifications").countDocuments(),
    db.collection("workExperience").countDocuments(),
  ]);

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl text-[var(--text-black-700)] font-semibold">
          Admin Dashboard
        </h1>
        <Link
          href="/api/auth/signout"
          className="underline text-[var(--text-black-700)]"
        >
          Sign out
        </Link>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <h2 className="font-medium text-[var(--text-black-700)]">Projects</h2>
          <p className="text-3xl font-bold text-[var(--text-black-700)]">
            {projects}
          </p>
          <p className="text-sm text-[var(--text-black-700)]">Total projects</p>
        </Card>
        <Card className="p-4">
          <h2 className="font-medium text-[var(--text-black-700)]">
            Certifications
          </h2>
          <p className="text-3xl font-bold text-[var(--text-black-700)]">
            {certs}
          </p>
          <p className="text-sm text-[var(--text-black-700)]">
            Total certifications
          </p>
        </Card>
        <Card className="p-4">
          <h2 className="font-medium text-[var(--text-black-700)]">
            Work Experience
          </h2>
          <p className="text-3xl font-bold text-[var(--text-black-700)]">
            {work}
          </p>
          <p className="text-sm text-[var(--text-black-700)]">Total roles</p>
        </Card>
      </section>
    </main>
  );
}
