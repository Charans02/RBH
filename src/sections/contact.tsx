"use client";

import dynamic from "next/dynamic";
import { useMemo, useState, useEffect } from "react";
import { LatLngTuple } from "leaflet";
import { CircleChevronRight } from "lucide-react";
import { Text } from "@/components/ui";
import { toast } from "sonner";
import { sendEmail } from "@/app/actions";

const Contact = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const isFormValid = Object.values(formFields).every((val) => val.trim() !== "");

  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMediumScreen(window.innerWidth > 400 && window.innerWidth < 900);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const trackSubmission = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "client_button_click",
      client: "nwmngmt",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = {
        to: process.env.NEXT_PUBLIC_CONTACT_INFO || "",
        name: formFields.name,
        email: formFields.email,
        phone: formFields.phone,
        message: formFields.message,
      };

      const result = await sendEmail(data);

      if (result.success) {
        toast.success("Thank you for reaching out! Our support team will reach out soon.");
        trackSubmission();
        window.location.href = "/thank-you";
      } else if (result.error) {
        toast.error("Uh oh! Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        ssr: false,
      }),
    []
  );

  const markers: LatLngTuple[] = [[35.782169, -80.793457]];

  return (
    <div className="bg-[#f3f3f3]">
      <section id="contact" className="flex flex-col items-center gap-8 xl:flex-row xl:gap-40">
        <div className="z-10 w-full flex-1">
          <Text variant="h2" className="text-center xl:text-left">
            Want to Hire The Best In {isMediumScreen && <br />} Texas
            <br />
            <span className="text-red hidden"> Call Red Bull Hauling</span>
          </Text>
          <div className="border-red-500 mx-auto mt-8 h-[500px] overflow-hidden rounded-md border shadow sm:rounded-lg xl:rounded-xl">
            <Map posix={[35.782169, -80.793457]} markers={markers} />
          </div>
        </div>

        <div className="flex w-full flex-1 flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow">
          <p className="text-red-800 mb-8 text-center font-[family-name:var(--font-sora-sans)] text-[40px] leading-[40px] font-semibold xl:text-left">
            Reach out to Red Bull Hauling!
          </p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4 w-full space-y-2">
              <Text className="!text-left uppercase">Full Name</Text>
              <input
                name="name"
                value={formFields.name}
                onChange={handleChange}
                className="focus:outline-red w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="Ryan"
                required
              />
            </div>
            <div className="mb-4 w-full space-y-2">
              <Text className="!text-left uppercase">Email</Text>
              <input
                name="email"
                type="email"
                value={formFields.email}
                onChange={handleChange}
                className="focus:outline-red w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="Ryan@gmail.com"
                required
              />
            </div>
            <div className="mb-4 w-full space-y-2">
              <Text className="!text-left uppercase">Phone</Text>
              <input
                name="phone"
                value={formFields.phone}
                onChange={handleChange}
                className="focus:outline-red w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="919-812-4559"
                required
              />
            </div>
            <div className="w-full space-y-2">
              <Text className="!text-left uppercase">Message</Text>
              <textarea
                name="message"
                value={formFields.message}
                onChange={handleChange}
                className="focus:outline-red h-[150px] w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="How can we help you?"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading || !isFormValid}
              className="bg-red-800 mt-8 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl px-6 py-5 text-white disabled:opacity-70"
            >
              <CircleChevronRight size={20} />
              <Text variant="button">
                {loading ? "Sending..." : "Get Started"}
              </Text>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
