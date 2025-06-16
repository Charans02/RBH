// cta.tsx
// import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail, PhoneCall } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const CTA = ({ heroInView }: { heroInView: boolean }) => {
  return (
    <div className="bg-white relative">
      {/* Sticky Button - only show when Hero is out of view */}
      {!heroInView && ( 1
        // <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 w-full max-w-sm px-4 pb-[env(safe-area-inset-bottom,1rem)]">
        //   <a
        //     href="tel:+18176812020"
        //     target="_blank"
        //     rel="noopener noreferrer"
        //     className="block w-full rounded-full bg-blue-600 px-6 py-4 text-center text-white font-bold shadow-lg hover:bg-blue-700 hover:text-white transition"
        //   >
        //     Call For Free Quote
        //   </a>
        // </div>
      )}

      <section className="px-5 sm:px-10 md:px-20 py-10 pb-32 sm:pb-24">
        <div className="relative flex w-full flex-col items-center gap-5 rounded-3xl bg-gradient-to-r from-red-400 to-red-600 px-6 py-10 text-white overflow-hidden">
          {/* Background */}
          <Image
            src="/images/cta-pattern.png"
            alt=""
            fill
            className="object-cover object-center z-0"
          />

          {/* Foreground */}
          <div className="relative z-10 flex flex-col items-center gap-5 w-full">
            <p className="text-center text-[24px] sm:text-[36px] xl:text-[56px] leading-tight tracking-tight">
              You Call It, We
              <span className="font-semibold underline"> Haul It</span>
            </p>

            <p className="text-center font-bold text-[25px] sm:text-[18px] xl:text-[27px]">
              Call Now & Save $50 Off Your First Job!
            </p>

            <div className="flex flex-col-reverse items-center justify-center gap-1 md:flex-row md:gap-16">
              {/* Email */}
              <div className="flex items-center gap-4 xl:gap-5">
                <Mail fill="white" stroke="#800000" className="size-6 sm:size-8" />
                <p className="text-[13px] sm:text-[20px] xl:text-[25px] font-semibold">
                  {CONTACT_INFO[0].value}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 xl:gap-5">
                <PhoneCall fill="white" stroke="none" className="size-5 sm:size-7" />
                <p className="text-[13px] sm:text-[20px] xl:text-[25px]">
                  {CONTACT_INFO[2].value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
