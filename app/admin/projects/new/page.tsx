"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewProjectPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    img: "",
    link: "",
    github: "",
    technologies: "",
    isTeamProject: false,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const body = {
        ...form,
        technologies: form.technologies
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      };
      const res = await fetch("/api/admin/proxy/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to save");
      router.push("/admin/projects");
    } catch (e: unknown) {
      const error = e as Error;
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">New Project</h1>
      <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
        <Input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <Input
          placeholder="Image URL"
          value={form.img}
          onChange={(e) => setForm({ ...form, img: e.target.value })}
        />
        <Input
          placeholder="Live Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />
        <Input
          placeholder="GitHub Link"
          value={form.github}
          onChange={(e) => setForm({ ...form, github: e.target.value })}
        />
        <Input
          placeholder="Technologies (comma separated)"
          value={form.technologies}
          onChange={(e) => setForm({ ...form, technologies: e.target.value })}
        />
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.isTeamProject}
            onChange={(e) =>
              setForm({ ...form, isTeamProject: e.target.checked })
            }
          />
          Team Project
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Create Project"}
        </Button>
      </form>
    </main>
  );
}
