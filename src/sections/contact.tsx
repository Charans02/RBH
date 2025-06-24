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

  // Handle window resize on client side only
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setIsMediumScreen(window.innerWidth > 400 && window.innerWidth < 900);
      }
    };

    // Check on initial render
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map"), {
        ssr: false,
      }),
    [],
  );

  const locations = [
    { name: "North Carolina", latitude: 35.782169, longitude: -80.793457 },
  ];

  const markers: LatLngTuple[] = locations.map((location) => [
    location.latitude,
    location.longitude,
  ]);

  return (
    <div className="bg-[#f3f3f3]">
      <section
        id="contact"
        className="flex flex-col items-center gap-8 xl:flex-row xl:gap-40"
      >
        <div className="z-10 w-full flex-1">
          <Text variant="h2" className="text-center xl:text-left">
            Want to Hire The Best In {isMediumScreen && <br />} Texas
            <br />
            <span className="text-red hidden"> Call Red Bull Hauling</span>
          </Text>
          {/* <Image
            src="/images/map.png"
            alt=""
            width={601}
            height={349}
            className="border-red mt-8 w-full rounded-md border shadow sm:rounded-lg xl:rounded-xl"
          /> */}
          <div className="border-red-500 mx-auto mt-8 h-[500px] overflow-hidden rounded-md border shadow sm:rounded-lg xl:rounded-xl">
            <Map posix={[35.782169, -80.793457]} markers={markers} />
          </div>
        </div>
        <div className="flex w-full flex-1 flex-col items-center gap-4 rounded-2xl bg-white p-8 shadow">
          <p className="text-red-800 mb-8 text-center font-[family-name:var(--font-sora-sans)] text-[40px] leading-[40px] font-semibold xl:text-left">
            Reach out to Red Bull Hauling!
          </p>
          <form
            className="w-full"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              setLoading(true);

              try {
                const data = {
                  to: process.env.NEXT_PUBLIC_CONTACT_INFO || "",
                  name: formData.get("name") as string,
                  email: formData.get("email") as string,
                  phone: formData.get("phone") as string,
                  message: formData.get("message") as string,
                };

                const result = await sendEmail(data);

                if (result.success) {
                  form.reset();
                  toast.success(
                    "Thank you for reaching out! Our support team will reach out soon.",
                  );
                }

                if (result.error) {
                  toast.error("Uh oh! Something went wrong.");
                }
              } catch (err) {
                console.error(err);
              } finally {
                setLoading(false);
              }
            }}
          >
            <div className="mb-4 w-full space-y-2">
              <Text className="!text-left uppercase">Full Name</Text>
              <input
                name="name"
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
                className="focus:outline-red w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="Ryan@gmail.com"
                required
              />
            </div>
            <div className="mb-4 w-full space-y-2">
              <Text className="!text-left uppercase">Phone</Text>
              <input
                name="phone"
                className="focus:outline-red w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="919-812-4559"
                required
              />
            </div>
            <div className="w-full space-y-2">
              <Text className="!text-left uppercase">Message</Text>
              <textarea
                name="message"
                className="focus:outline-red h-[150px] w-full rounded-2xl border-[2px] border-[#989898] p-4 font-[family-name:var(--font-lato-sans)]"
                placeholder="How can we help you?"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
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
