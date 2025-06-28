import Image from "next/image";

import { Text } from "@/components/ui";
import { MessageCircle, Phone } from "lucide-react";
// declare function gtag_report_conversion(url?: string): boolean;

const STATES = [
  { content: 60, more: true, description: "Satisfied Customers" },
  { content: 5, more: true, description: "Years Experience" },
  { content: 3, more: true, description: "Trash Trucks" },
  { content: 6, more: true, description: "Counties We Service" },
];

const States = () => {
  return (
    <div className="bg-[#f3f3f3]">
      <section className="flex flex-col items-center gap-8 px-[80px] py-[60px] xl:flex-row xl:gap-40">
        <div className="relative aspect-[6/7] w-full overflow-hidden rounded-2xl xl:max-w-full order-2">
          <Image
            src="/images/truck.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex w-full flex-col items-center xl:max-w-full xl:items-start order-1">
          <Text
            variant="h2"
            className="max-w-[467px] text-center md:max-w-full xl:text-left"
          >
            Your Junk Removal Solution,
            <span className="text-red-700"> Red Bull Hauling!</span>
          </Text>
          <Text className="mt-6 max-w-[516px] text-center text-[#525252] md:max-w-full xl:text-left">
            Whether you are looking for a small junk removal job or a whole
            house clean-out, Red Bull Hauling can get it done. We are open 24/7 always
            taking call and new customers.
          </Text>
          {/* Insert Button Below */}
          {/* <a
            href="tel:+19198124559"
            target="_blank"
            // onClick={() => gtag_report_conversion('tel:+19198124559')}
            className="group bg-red-500 hover:text-red-500 mt-6 flex h-[54px] w-full max-w-[348px] cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]"
          > */}
          <button
              onClick={() => {
                const quoteSection = document.getElementById("quote");
                const headerOffset = 160; // Adjust this value based on your header's height (in pixels)
                if (quoteSection) {
                  const elementPosition = quoteSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - headerOffset;

                  window.scrollTo({top: offsetPosition, behavior: "smooth",
                  });
                }
              }}
              className="group bg-red-500 hover:text-red-500 mt-6 flex h-[54px] w-full max-w-[348px] cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]"
              aria-label="Scroll to Quote Section"
            >
            <div className="relative">
              <MessageCircle size={24} />
              <Phone
                size={10}
                className="group-hover:fill-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
              />
            </div>
            <p className="font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold uppercase">
              {/* Call For Free Quote */}
              Contact Us
            </p>
          </button>
          <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {STATES.map((state, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white py-5 shadow md:py-10"
              >
                <Text variant="h2">
                  {state.content}
                  {state.more && <span className="text-red-600">+</span>}
                </Text>
                <Text variant="body2" className="text-[#525252]">
                  {state.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default States;
