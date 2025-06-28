"use client";

import Image from "next/image";
import { CalendarRange, Truck, MessageCircle, Phone } from "lucide-react";
import { Text } from "@/components/ui";
import { useRef, useEffect } from "react";
import JunkRemovalQuote2 from "./junk-removal-quote2";

const Hero = ({ setHeroInView }: { setHeroInView?: (inView: boolean) => void }) => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current || !setHeroInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [setHeroInView]);

  return (
    <div
      ref={heroRef}
      className="text-background bg-[url('/images/bg.png')] bg-cover bg-center pt-[58px] md:pt-[92px] xl:pt-[112px]"
    >
      <div className="bg-black-gradient">
        <section className="
          flex flex-col-reverse gap-5
          !pt-[20px] !pb-[40px]
          md:flex-row md:gap-[32.01px] md:!pt-[35px] md:!pb-[60px]
          xl:justify-between xl:gap-0 xl:!pb-[80px]
          2xl:!pt-[60px] 2xl:gap-20
        ">
          {/* Left: Truck Image + Form in Tablet */}
          <div className="
            w-full md:w-5/12
            flex flex-col items-center
            md:items-start
            md:justify-start
          ">
            {/* Truck */}
            <div className="hidden md:block w-full">
              <Image
                src="/images/truck_no_bg.png"
                alt="Trash Lion truck"
                width={803}
                height={987}
                quality={100}
                className="mx-auto w-full max-w-[280px] object-contain md:max-w-[340px] lg:max-w-[400px] xl:max-w-[500px]"
                priority
              />
            </div>

            {/* Tablet Only: Form Below Truck */}
            <div className="hidden md:block w-full mt-6">
              <JunkRemovalQuote2 />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="
            flex h-fit w-full max-w-[710px] flex-col items-center gap-4
            md:w-7/12 md:items-start
            lg:w-7/12 xl:w-7/12 2xl:w-1/2
          ">
            <Text
              variant="h1"
              className="text-center text-[38px] leading-[50px]
                sm:text-[28px] sm:leading-[43px]
                md:text-[34px] md:leading-[43px]
                lg:text-left xl:text-left
                xl:text-[55px] xl:leading-[78px]"
            >
              <span className="text-red-600 font-extrabold">
                North Carolina&apos;s Top-Rated Junk Removal Team
              </span>
              <br />
              Locally Owned and Faith-Driven.
            </Text>

            <Text className="text-center text-[16px] leading-[23px] md:text-left lg:text-[21px] lg:leading-[26px] xl:text-left">
              <span className="leading-[33px] font-bold">
                Serving North Carolina With Fast Same Day Service.
              </span>
            </Text>

            <div className="bg-[#f6f6f6] py-4 px-4 w-full rounded-xl md:px-6 md:max-w-[450px] mt-2">
              <div className="mx-auto flex flex-col items-center justify-center gap-2 text-center md:flex-row md:gap-4 md:text-left">
                <Image
                  src="/images/google-review.png"
                  alt="Google Review Badge"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Google Rating <span className="text-yellow-500">5.0</span>
                    <span className="ml-2 text-yellow-400">★ ★ ★ ★ ★</span>
                  </p>
                  <p className="text-sm font-medium text-gray-600">
                    Over <span className="font-bold text-black">60 Reviews</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:flex mt-4 items-center justify-start gap-1.5 py-2 whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <CalendarRange className="size-4 sm:size-5 lg:size-6" />
                <Text className="text-[15px] font-semibold lg:text-[18px]">
                  Same-Day Pickup
                </Text>
              </div>
              <div className="bg-background h-5 w-px" />
              <div className="flex items-center gap-1.5">
                <Truck className="size-4 sm:size-5 lg:size-6" />
                <Text className="text-[15px] font-semibold lg:text-[18px]">
                  60+ 5 star reviews
                </Text>
              </div>
            </div>

            <div className="block md:hidden">
              <Image
                src="/images/truck_no_bg.png"
                alt="Trash Lion truck"
                width={553}
                height={737}
                quality={100}
                className="mx-auto w-full max-w-[280px] object-contain"
                priority
              />
            </div>

            {/* Mobile-only Same-Day Pickup + Reviews */}
            <div className="flex flex items-center justify-start gap-1.5 mt-4 md:hidden whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <CalendarRange className="size-4" />
                <Text className="text-[15px] font-semibold">
                  Same-Day Pickup
                </Text>
              </div>
              <div className="bg-background h-5 w-px" />
              <div className="flex items-center gap-1.5">
                <Truck className="size-4" />
                <Text className="text-[15px] font-semibold">
                  60+ 5 star reviews
                </Text>
              </div>
            </div>

            <div className="h-4" />
            <div className="flex w-full flex-col items-center md:items-start gap-12">
              <Text className="text-center text-[18px] text-red-400 md:text-left lg:text-[26px]">
                <span className="font-bold">$50 Off For New Customers</span>
              </Text>

              <button
                onClick={() => {
                  const quoteSection = document.getElementById("quote");
                  const headerOffset = 160;
                  if (quoteSection) {
                    const elementPosition = quoteSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                  }
                }}
                className="group bg-red-600 hover:text-red-600 flex cursor-pointer items-center gap-2.5 rounded-full px-9 py-3 transition-colors hover:bg-white 2xl:w-fit 2xl:text-nowrap"
                aria-label="Scroll to Quote Section"
              >
                <div className="relative">
                  <MessageCircle size={24} />
                  <Phone
                    size={10}
                    className="group-hover:fill-red-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
                  />
                </div>
                <p className="font-semibold text-[16px] uppercase">
                  Contact Us for Free Quote
                </p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
