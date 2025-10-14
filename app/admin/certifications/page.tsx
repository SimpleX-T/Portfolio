import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getDb } from "@/lib/mongo";

async function getCerts() {
  const db = await getDb();
  const items = await db.collection("certifications").find().toArray();
  return items;
}

export default async function CertificationsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  const certs = await getCerts();

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[var(--text-black-700)]">
          Certifications
        </h1>
        <Link
          className="underline text-[var(--text-black-700)]"
          href="/admin/certifications/new"
        >
          New Certification
        </Link>
      </header>
      <div className="grid gap-4">
        {certs.map((c: any) => (
          <Card
            key={c.id ?? c._id}
            className="p-4 flex items-center justify-between"
          >
            <div>
              <div className="font-medium">{c.title}</div>
              <div className="text-sm text-[var(--text-black-700)]">
                {c.issuer} • {c.year}
              </div>
            </div>
          </Card>
        ))}
        {certs.length === 0 && (
          <p className="text-sm text-[var(--text-black-700)]">
            No certifications found
          </p>
        )}
      </div>
    </main>
  );
}
