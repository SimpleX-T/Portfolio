"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    setError(null);
    const res = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: true,
      callbackUrl: "/admin",
    });
    if (res?.error) setError("Invalid credentials");
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-12 w-[400px] p-6"
          >
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[var(--text-black-700)]">
                Welcome Back
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Sign in to your admin account
              </p>
            </div>

            <div className="space-y-6">
              <FormField
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--text-black-700)]">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        className="focus:border-[var(--skin-color)] focus:ring-[var(--skin-color)]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[var(--text-black-700)]">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="focus:border-[var(--skin-color)] focus:ring-[var(--skin-color)]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-lg bg-[var(--text-red-50)] p-3"
              >
                <p className="text-sm text-[var(--text-red-600)]">{error}</p>
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--skin-color)] text-[var(--text-black-900)] hover:bg-opacity-90 disabled:opacity-60 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin text-[var(--text-black-900)]"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Form>
      </Card>
    </main>
  );
}
