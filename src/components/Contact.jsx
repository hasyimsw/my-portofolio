import React, { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import Swal from "sweetalert2";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.target;
    const formData = new FormData(form);

    // 🛑 Honeypot check (anti-bot)
    if (formData.get("company")) {
      return;
    }

    const email = formData.get("email");
    const message = formData.get("message");

    // 🧪 Validasi dasar
    if (!email || !message) {
      Swal.fire("Oops!", "All fields are required.", "warning");
      return;
    }

    if (message.length < 10) {
      Swal.fire("Oops!", "Message is too short.", "warning");
      return;
    }

    setIsSubmitting(true);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully.",
          icon: "success",
        });

        // ✅ reset form
        form.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to send message.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 mt-28 mb-28 max-w-[45rem] mx-auto text-center px-4"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 dark:text-white">Contact Me</h2>

      <p className="text-gray-700 -mt-6 dark:text-white">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form onSubmit={onSubmit} className="mt-10 flex flex-col">
        {/* Honeypot (hidden input for bots) */}
        <input
          type="text"
          name="company"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <input
          className="h-14 mb-3 px-4 rounded-lg bg-gray-50 border-gray-300 border-2 transition-all"
          name="name"
          type="text"
          required
          maxLength={500}
          placeholder="Your name"
        />

        <input
          className="h-14 mb-3 px-4 rounded-lg bg-gray-50 border-gray-300 border-2 transition-all"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />

        <textarea
          className="h-52 mb-3 rounded-lg bg-gray-50 border-gray-300 border-2 p-4 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`group flex items-center justify-center gap-2 h-10 w-32 
            rounded-full outline-none transition-all shadow-md
            ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-900 text-white hover:scale-110 hover:bg-gray-950 dark:bg-gray-100 dark:text-black"
            }`}
        >
          {isSubmitting ? "Sending..." : "Submit"}
          {!isSubmitting && <BsSendFill className="w-4 h-4" />}
        </button>
      </form>
    </section>
  );
}