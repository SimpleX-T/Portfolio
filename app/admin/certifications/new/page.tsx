"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewCertificationPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    issuer: "",
    year: "",
    icon: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/proxy/certifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to save");
      router.push("/admin/certifications");
    } catch (e: unknown) {
      const error = e as Error;
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">New Certification</h1>
      <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
        <Input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Input
          placeholder="Issuer"
          value={form.issuer}
          onChange={(e) => setForm({ ...form, issuer: e.target.value })}
        />
        <Input
          placeholder="Year"
          value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
        />
        <Input
          placeholder="Icon path or URL"
          value={form.icon}
          onChange={(e) => setForm({ ...form, icon: e.target.value })}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Create"}
        </Button>
      </form>
    </main>
  );
}
