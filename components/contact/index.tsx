"use client";

import { useState } from "react";
import SocialSection from "@/components/social-section";
import { motion } from "motion/react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Here you would typically make an API call to send the email
      // For now we'll simulate success
      await new Promise((resolve) => setTimeout(resolve, 500));

      setFormStatus({
        submitted: true,
        success: true,
        message: "Thanks for reaching out! I'll get back to you soon.",
      });

      resetForm();

      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.log(error);
      setFormStatus({
        submitted: true,
        success: false,
        message: "Oops! Something went wrong. Please try again later.",
      });
    }
  };

  const inputClasses = (fieldName: string) => `
    w-full p-3
    bg-[var(--bg-black-100)]
    text-[var(--text-black-900)]
    rounded-lg border-2
    focus:outline-none
    transition-all duration-300
    ${
      focused === fieldName
        ? "border-[var(--skin-color)]"
        : "border-transparent"
    }
  `;

  return (
    <main className="min-h-screen">
      <div className="container max-w-4xl relative z-10 mx-auto">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-semibold text-[var(--text-black-700)] mb-4 text-center"
        >
          Get in Touch
        </motion.h3>

        <div className="flex flex-col md:flex-row gap-12 mt-10 bg-[var(--bg-black-50)] rounded-xl p-6 shadow-lg">
          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[var(--bg-black-100)] p-6 rounded-lg h-full shadow-inner">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-black-900)] border-b border-[var(--skin-color)] pb-2 inline-block">
                Get in Touch
              </h3>

              <p className="mb-8 text-[var(--text-black-700)]">
                I&apos;m always excited to connect about new opportunities and
                collaborations. Reach out through any of these platforms:
              </p>

              <motion.div
                className="mt-auto"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <SocialSection />
              </motion.div>

              <motion.div
                className="mt-10 text-center text-[var(--text-black-700)] text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <p>Or drop me a message using the form →</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text-black-900)] border-b border-[var(--skin-color)] pb-2 inline-block">
              Send a Message
            </h3>

            {formStatus.submitted ? (
              <motion.div
                className={`p-4 rounded-lg mt-8 flex items-center gap-3 ${
                  formStatus.success
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {formStatus.success ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <p>{formStatus.message}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={inputClasses("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </motion.div>

                <motion.div
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className={inputClasses("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </motion.div>

                <motion.div
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className={inputClasses("message")}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="bg-[var(--skin-color)] text-white py-3 px-6 rounded-lg
                    hover:bg-opacity-90 transition-all duration-300
                    flex items-center gap-2 group
                    transform hover:scale-[1.02] active:scale-[0.98]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
