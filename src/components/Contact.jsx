import React, { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import Swal from "sweetalert2";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "c3aab9ef-74f6-4717-aa40-7a4693ccbb55");

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

        // reset form
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
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 sm:mb-28 max-w-[45rem] mx-auto text-center px-4"
    >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        Contact Me
      </h2>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form onSubmit={onSubmit} className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg bg-gray-50 border-black/10 border transition-all"
          name="email"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg bg-gray-50 border-black/10 border p-4 transition-all"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />

        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-10 w-28 bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit <BsSendFill className="w-4 h-4" />
        </button>
      </form>
    </section>
  );
}
