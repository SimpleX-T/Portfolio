"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewWorkPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    role: "",
    link: "",
    company: "",
    period: "",
    description: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/proxy/workExperience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to save");
      router.push("/admin/work-experience");
    } catch (e: unknown) {
      const error = e as Error;
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">New Role</h1>
      <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
        <Input
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <Input
          placeholder="Company Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />
        <Input
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
        <Input
          placeholder="Period"
          value={form.period}
          onChange={(e) => setForm({ ...form, period: e.target.value })}
        />
        <Input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Create"}
        </Button>
      </form>
    </main>
  );
}
