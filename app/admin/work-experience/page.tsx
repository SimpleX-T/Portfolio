import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getDb } from "@/lib/mongo";

async function getWork() {
  const db = await getDb();
  const items = await db.collection("workExperience").find().toArray();
  return items;
}

export default async function WorkPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  const work = await getWork();

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[var(--text-black-700)]">
          Work Experience
        </h1>
        <Link
          className="underline text-[var(--text-black-700)]"
          href="/admin/work-experience/new"
        >
          New Role
        </Link>
      </header>
      <div className="grid gap-4">
        {work.map((w: any) => (
          <Card key={w.id ?? w._id} className="p-4">
            <div className="font-medium">
              {w.role} • {w.company}
            </div>
            <div className="text-sm text-[var(--text-black-700)]">
              {w.period}
            </div>
          </Card>
        ))}
        {work.length === 0 && (
          <p className="text-sm text-[var(--text-black-700)]">
            No work experience found
          </p>
        )}
      </div>
    </main>
  );
}
