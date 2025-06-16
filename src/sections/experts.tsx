"use client";
import Image from "next/image";
import { Text } from "@/components/ui";
// Import EXPERT_IMAGES for the static grid
import { EXPERT_IMAGES } from "@/lib/constants";
// Commented out imports that will be used later with the carousel
/*
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
*/

const Experts = () => {
  // Commented carousel functionality - will be used later
  /*
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);
  */

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center blur-[2px]"></div>
      <div className="text-background relative z-10">
        <div className="bg-black/60">
          <section className="px-[80px] py-[60px]">
            <div className="flex flex-col items-center justify-between gap-9 xl:flex-row">
              <div className="flex flex-col items-center gap-9 xl:flex-row">
                <Image src="/images/logo.png" alt="" width={134} height={122} />
                <Text
                  variant="h2"
                  className="max-w-[517px] text-center xl:text-left"
                >
                  See Our Junk Removal
                  <span className="text-red-600"> Experts </span>
                  At Work!
                </Text>
              </div>
              <p className="hidden max-w-[478px] text-center font-[family-name:var(--font-sora-sans)] text-[19px] leading-[30px] sm:block xl:text-left">
                What&apos;s stopping your dreams from becoming a reality. Red Bull
                Hauling will get your area looking right.
              </p>
            </div>

            {/* Only showing the first image */}
            <div className="mt-16">
              <div className="flex flex-col items-center">
                <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                  <Image
                    src={
                      EXPERT_IMAGES[0].img_group[0]?.img_url ||
                      "/images/image.png"
                    }
                    alt={EXPERT_IMAGES[0].img_group[0]?.img_name || ""}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Commented out additional images */}
            {/*
            <div className="mt-16 space-y-8">
              <div className="flex flex-col items-center gap-8 xl:flex-row">
                <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                  <Image
                    src={
                      EXPERT_IMAGES[0].img_group[0]?.img_url ||
                      "/images/image.png"
                    }
                    alt={EXPERT_IMAGES[0].img_group[0]?.img_name || ""}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative hidden aspect-video w-full max-w-[768px] overflow-hidden rounded-lg xl:block">
                  <Image
                    src={
                      EXPERT_IMAGES[0].img_group[1]?.img_url ||
                      "/images/image.png"
                    }
                    alt={EXPERT_IMAGES[0].img_group[1]?.img_name || ""}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="hidden flex-col items-center gap-8 xl:flex xl:flex-row">
                <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                  <Image
                    src={
                      EXPERT_IMAGES[0].img_group[2]?.img_url ||
                      "/images/image.png"
                    }
                    alt={EXPERT_IMAGES[0].img_group[2]?.img_name || ""}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                  <Image
                    src={
                      EXPERT_IMAGES[0].img_group[3]?.img_url ||
                      "/images/image.png"
                    }
                    alt={EXPERT_IMAGES[0].img_group[3]?.img_name || ""}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                  <Image
                    src={
                      EXPERT_IMAGES[0].img_group[4]?.img_url ||
                      "/images/image.png"
                    }
                    alt={EXPERT_IMAGES[0].img_group[4]?.img_name || ""}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
            */}

            {/* Commented carousel implementation - will be used later */}
            {/*
            <div className="relative mt-16">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {EXPERT_IMAGES.map((group) => (
                    <div
                      key={group.id}
                      className="min-w-full flex-none space-y-8"
                    >
                      <div className="flex flex-col items-center gap-8 xl:flex-row">
                        <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                          <Image
                            src={
                              group.img_group[0]?.img_url || "/images/image.png"
                            }
                            alt={group.img_group[0]?.img_name || ""}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                          <Image
                            src={
                              group.img_group[1]?.img_url || "/images/image.png"
                            }
                            alt={group.img_group[1]?.img_name || ""}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col items-center gap-8 xl:flex-row">
                        <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                          <Image
                            src={
                              group.img_group[2]?.img_url || "/images/image.png"
                            }
                            alt={group.img_group[2]?.img_name || ""}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                          <Image
                            src={
                              group.img_group[3]?.img_url || "/images/image.png"
                            }
                            alt={group.img_group[3]?.img_name || ""}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="relative aspect-video w-full max-w-[768px] overflow-hidden rounded-lg">
                          <Image
                            src={
                              group.img_group[4]?.img_url || "/images/image.png"
                            }
                            alt={group.img_group[4]?.img_name || ""}
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                <button
                  onClick={scrollPrev}
                  className="rounded-full bg-white/20 p-2 text-white"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                {EXPERT_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-all ${
                      selectedIndex === index ? "bg-red w-6" : "bg-white/70"
                    }`}
                    onClick={() => embla?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}

                <button
                  onClick={scrollNext}
                  className="rounded-full bg-white/20 p-2 text-white"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
            */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experts;
