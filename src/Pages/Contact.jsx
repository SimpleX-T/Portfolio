"use client";
import { useState } from "react";
import DisplayCard from "../UI/DisplayCard";
import SocialSection from "../UI/SocialSection";
import { motion } from "motion/react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

function Contact() {
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

  const [focused, setFocused] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus({
      submitted: true,
      success: true,
      message: "Your message has been sent successfully!",
    });

    setTimeout(() => {
      setFormState({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: "",
        });
      }, 5000);
    }, 500);
  };

  return (
    <DisplayCard className="relative overflow-hidden">
      <div className="container max-w-4xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-[var(--text-black-900)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s <span className="text-[var(--skin-color)]">Connect</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 mt-10 bg-[var(--bg-black-50)] rounded-xl p-6 shadow-lg">
          {/* Get in Touch Section */}
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
                I&apos;m always open to new opportunities and collaborations.
                Feel free to reach out through any of these platforms:
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
                <p>Or send me a message using the form </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
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
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
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
                        className={`w-full p-3 bg-[var(--bg-black-100)] text-[var(--text-black-900)] rounded-lg border-2 focus:outline-none transition-all duration-300 ${
                          focused === "name"
                            ? "border-[var(--skin-color)]"
                            : "border-transparent"
                        }`}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                      />
                    </motion.div>
                  </div>

                  <div>
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
                        className={`w-full p-3 bg-[var(--bg-black-100)] text-[var(--text-black-900)] rounded-lg border-2 focus:outline-none transition-all duration-300 ${
                          focused === "email"
                            ? "border-[var(--skin-color)]"
                            : "border-transparent"
                        }`}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </motion.div>
                  </div>

                  <div>
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
                        rows="5"
                        required
                        className={`w-full p-3 bg-[var(--bg-black-100)] text-[var(--text-black-900)] resize-none rounded-lg border-2 focus:outline-none transition-all duration-300 ${
                          focused === "message"
                            ? "border-[var(--skin-color)]"
                            : "border-transparent"
                        }`}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                      />
                    </motion.div>
                  </div>

                  <motion.button
                    type="submit"
                    className="bg-[var(--skin-color)] text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </DisplayCard>
  );
}

export default Contact;

// import DisplayCard from "../UI/DisplayCard";
// import SocialSection from "../UI/SocialSection";

// function Contact() {
//   return (
//     <DisplayCard>
//       <div className="container md:w-3/4">
//         <h2>Contact Me</h2>
//         <div className="flex flex-col md:flex-row mt-16">
//           <div className="w-full md:w-1/2 mb-8 md:mb-0 p-4">
//             <h3 className="text-2xl font-semibold mb-4 text-[var(--text-black-700)]">
//               Get in Touch
//             </h3>
//             <p className="mb-4 text-[var(--text-black-900)]">
//               Feel free to reach out to me through any of these platforms:
//             </p>
//             <div className="w-full md:w-1/2 mx-auto">
//               <SocialSection color="var(--text-black-700)" />
//             </div>
//           </div>

//           <div className="w-full md:w-1/2">
//             <h3 className="text-2xl font-semibold mb-4 text-[var(--text-black-900)]">
//               Send a Message
//             </h3>
//             <form>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full p-2 bg-[var(--bg-black-100)] text-[var(--text-black-900)] rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full p-2 bg-[var(--bg-black-100)] text-[var(--text-black-900)] rounded"
//                 />
//               </div>
//               <div className="mb-4">
//                 <textarea
//                   placeholder="Your Message"
//                   rows="4"
//                   className="w-full p-2 bg-[var(--bg-black-100)] text-[var(--text-black-900)] resize-none rounded"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 className="bg-[var(--skin-color)] text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </DisplayCard>
//   );
// }
// export default Contact;
