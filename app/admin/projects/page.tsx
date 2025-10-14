import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getDb } from "@/lib/mongo";
import type { WithId } from "mongodb";
import Image from "next/image";

type MinimalProject = WithId<{
  id?: number;
  title: string;
  description: string;
  img: string;
}>;

async function getProjects() {
  const db = await getDb();
  const items = (await db
    .collection("projects")
    .find()
    .project({ title: 1, description: 1, id: 1, img: 1 })
    .toArray()) as MinimalProject[];
  return items;
}

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");
  const projects = await getProjects();

  return (
    <main className="p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[var(--text-black-700)]">
          Projects
        </h1>
        <Link
          className="underline text-[var(--text-black-700)] hover:bg-[var(--bg-black-50)]/60 transition-colors duration-100 ease-in p-2"
          href="/admin/projects/new"
        >
          New Project
        </Link>
      </header>
      <div className="grid lg:grid-cols-3 gap-4">
        {projects.map((p: MinimalProject) => (
          <Card key={String(p.id ?? p._id)} className="p-4 flex gap-4">
            <div>
              <Image src={p.img} alt={p.title} width={100} height={100} />
            </div>

            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-[var(--text-black-700)]">
                {p.description}
              </div>
            </div>
            <Link
              className="underline text-[var(--text-black-700)]"
              href={`/admin/projects/${String(p.id ?? p._id)}`}
            >
              Edit
            </Link>
          </Card>
        ))}
        {projects.length === 0 && (
          <p className="text-sm text-[var(--text-black-700)]">
            No projects found
          </p>
        )}
      </div>
    </main>
  );
}
