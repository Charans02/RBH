import Image from "next/image";
import { MapPinCheckInside } from "lucide-react";

import { Text } from "@/components/ui";
import { SERVICE_AREAS } from "@/lib/constants";
// declare function gtag_report_conversion(url?: string): boolean;

const ServiceAreas = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-between bg-[url('/images/world_map.png')] bg-cover bg-center xl:flex-row">
        <div className="flex flex-col items-center xl:items-start order-1 xl:order-2">
          <div className="bg-red-500/10 w-fit rounded-full px-8 py-4">
            <p className="text-red-800 font-[family-name:var(--font-lato-sans)] text-[18px] leading-[18px] font-semibold uppercase">
              Service Areas
            </p>
          </div>
          <Text
            variant="h2"
            className="mt-8 max-w-[512px] text-center xl:text-left"
          >
            <span className="text-red-800">Trusted</span> Junk Removal Experts
            Serving These Areas!
          </Text>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {SERVICE_AREAS.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <MapPinCheckInside size={28} stroke="white" fill="#C6011F" />
                <Text
                  variant="body2"
                  className="text-foreground font-bold max-w-full text-[16px] md:text-[20px] md:max-w-[360px] xl:max-w-[212px]"
                >
                  {area}, NC
                </Text>
              </div>
            ))}
          </div>
          {/* 👇 Insert Call Button Below This Line */}
          {/* <a
            href="tel:+19198124559"
            target="_blank"
            // onClick={() => gtag_report_conversion('tel:+19198124559')}
            className="group bg-red-500 hover:text-red-500 mt-8 flex h-[54px] w-full max-w-[348px] items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]"
          > */}
          <button
            onClick={() => {
              const quoteSection = document.getElementById("quote");
              const headerOffset = 160; // Adjust this value based on your header's height (in pixels)
              if (quoteSection) {
                const elementPosition = quoteSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="group bg-red-500 hover:text-red-500 mt-8 flex h-[54px] w-full max-w-[348px] items-center justify-center gap-2.5 rounded-full px-8 py-4 text-white transition-colors hover:bg-[#f3f3f3]"
            aria-label="Scroll to Quote Section"
          >
            <div className="relative">
              <MapPinCheckInside size={24} />
            </div>
            <p className="font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold uppercase">
              {/* Call For Free Quote */}
              Contact Us
            </p>
          </button>
        </div>
        <Image
          src="/images/truck_no_bg.png"
          alt=""
          width={553}
          height={737}
          className="scale-x-[1] h-fit order-2 xl:order-1"
        />
      </div>
    </section>
  );
};

export default ServiceAreas;
