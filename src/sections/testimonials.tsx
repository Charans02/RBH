"use client";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Text } from "@/components/ui";
import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialType } from "@/lib/types";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: false,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onSettle = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!cardRefs.current.length) return;

    const handleResize = () => {
      cardRefs.current.forEach((ref) => {
        if (ref) ref.style.height = "auto";
      });

      setTimeout(() => {
        let maxHeight = 0;
        cardRefs.current.forEach((ref) => {
          if (ref && ref.offsetHeight > maxHeight) {
            maxHeight = ref.offsetHeight;
          }
        });

        setCardHeight(maxHeight);
        cardRefs.current.forEach((ref) => {
          if (ref) ref.style.height = `${maxHeight}px`;
        });
      }, 50);
    };

    handleResize();

    let resizeTimer: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSlideSelect = () => {
      setTimeout(() => {
        let maxHeight = 0;
        cardRefs.current.forEach((ref) => {
          if (ref && ref.offsetHeight > maxHeight) {
            maxHeight = ref.offsetHeight;
          }
        });

        setCardHeight(maxHeight);
        cardRefs.current.forEach((ref) => {
          if (ref) ref.style.height = `${maxHeight}px`;
        });
      }, 300);
    };

    emblaApi.on("settle", handleSlideSelect);

    return () => {
      emblaApi.off("settle", handleSlideSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("settle", onSettle);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("settle", onSettle);
    };
  }, [emblaApi, onSelect, onSettle]);

  return (
    <div className="relative max-h-[700px] overflow-hidden">
      <div className="bg-opacity-95 absolute inset-0 bg-black bg-[url(/images/review_bg.png)] bg-cover bg-center blur-[2px]"></div>
      <div className="relative z-10 text-white">
        <section
          id="testimonials"
          className="flex flex-col items-center lg:items-start max-h-[700px] overflow-hidden"
        >
          <div className="w-full bg-opacity-95 flex-col justify-center flex lg:flex-row xl:items-end xl:justify-start gap-0.5 lg:gap-4 py-1">
            <div className="space-y-4 text-center lg:text-left">
              <Text variant="h2">
                Read what our
                <br />
                <span className="text-red-600"> customers are saying!</span>
              </Text>
              <Text
                variant="body1"
                className="hidden text-[13px] md:text-[15px] lg:text-[16px]"
              >
                Texas has been trusting Red Bull Hauling and our
                work quality speaks for itself — see what customers are saying!
              </Text>
            </div>
            <div className="sm:mt-0 flex sm:my-auto mx-auto lg:mx-0 lg:mt-5 xl:mt-13 sm:mr-auto mb-4">
              <div className="mt-4 flex space-x-6">
                <button
                  className="bg-red-600 hover:bg-red-800/80 flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors"
                  onClick={scrollPrev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="bg-red-600 hover:bg-red-800/80 flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors"
                  onClick={scrollNext}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-2 w-full">
            <div className="carousel-container relative">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {TESTIMONIALS.map((t, idx) => (
                    <div
                      key={idx}
                      className="embla__slide relative mx-0 flex-[0_0_90%] md:flex-[0_0_50%] lg:flex-[0_0_45%]"
                    >
                      <div
                        className={`origin-center transform transition-all duration-500 ease-in-out ${
                          selectedIndex === idx ? "scale-100" : "scale-95"
                        }`}
                      >
                        <TestimonialCard
                          t={t}
                          ref={(el) => {
                            cardRefs.current[idx] = el;
                          }}
                          height={cardHeight}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3 flex justify-center space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (emblaApi) emblaApi.scrollTo(index);
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === selectedIndex ? "bg-red-500" : "bg-white/70"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;

const TestimonialCard = React.forwardRef<
  HTMLDivElement,
  { t: TestimonialType; height: number }
>(({ t, height }, ref) => {
  return (
    <div className="relative min-w-[200px] p-2 md:min-w-[450px] lg:min-w-[500px]">
      <div className="absolute inset-0 rounded-2xl bg-black/10"></div>
      <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-30"></div>
      <div
        ref={ref}
        className="relative flex w-full flex-col items-center overflow-hidden rounded-2xl px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 backdrop-blur-[10px]"
        style={{ height: height ? `${height}px` : "auto", maxHeight: "400px" }}
      >
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

        <div className="mb-3 flex w-full flex-col items-center justify-between space-y-3 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <div className="relative flex h-[40px] w-[40px] items-center justify-center overflow-hidden rounded-full bg-[#2B6023] text-xl text-white md:h-[50px] md:w-[50px]">
              {t.avatar ? (
                <Image
                  src={t.avatar}
                  alt={`${t.name}'s testimonial`}
                  fill
                  className="object-cover"
                />
              ) : (
                <span>{t.name.charAt(0)}</span>
              )}
            </div>
            <p className="text-red-500 text-center text-[14px] font-semibold md:text-left md:text-[16px] lg:text-[17px]">
              {t.name}
            </p>
          </div>
          <div className="flex gap-1">
            {Array(t.rating)
              .fill(null)
              .map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className="lg:h-[18px] lg:w-[18px]"
                  fill="#ffbe40"
                  stroke="none"
                />
              ))}
            {Array(5 - t.rating)
              .fill(null)
              .map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className="lg:h-[18px] lg:w-[18px]"
                  fill="#f3f3f3"
                  stroke="none"
                />
              ))}
          </div>
        </div>

        <div className="w-full overflow-y-auto">
          <Text className="text-center text-[14px] leading-[1.6] text-white md:text-[15px] lg:text-[16px]">
            {t.content}
          </Text>
        </div>
      </div>
    </div>
  );
});

TestimonialCard.displayName = "TestimonialCard";
