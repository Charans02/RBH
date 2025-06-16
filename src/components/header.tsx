"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { AlignJustify, MessageCircle, Phone, PhoneCall, X } from "lucide-react";
// declare function gtag_report_conversion(url?: string): boolean;

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleClick = () => {
    setIsMenuOpened(!isMenuOpened);
    document.documentElement.style.overflow = !isMenuOpened ? "hidden" : "auto";
  };

  const scrollToSection = useCallback(
    (id: string) => {
      // Close mobile menu if it's open
      if (isMenuOpened) {
        setIsMenuOpened(false);
        document.documentElement.style.overflow = "auto";
      }

      // Small delay to ensure DOM updates
      setTimeout(() => {
        if (id === "top") {
          // Scroll to the top of the page
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          const headerHeight = 92; // Approximate header height in pixels
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    },
    [isMenuOpened],
  );

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/10 text-white backdrop-blur-2xl">
      {!isMenuOpened ? (
        <div className="mx-auto flex max-w-[1512px] flex-row-reverse items-center justify-between gap-1.5 px-[20px] py-3 md:grid md:grid-cols-3 md:px-[35px] lg:grid lg:h-[92px] lg:grid-cols-3 lg:px-[60px] lg:py-1 xl:flex xl:h-[152px] xl:flex-row xl:py-4 2xl:grid 2xl:grid-cols-3 2xl:items-center 2xl:px-[60px]">
          <div className="hidden gap-12 xl:flex 2xl:justify-self-start">
            <Link href="#story" onClick={(e) => handleNavClick(e, "story")}>
              <p className="hover:text-red-500 font-[family-name:var(--font-sora-sans)] leading-[100%] font-normal transition-all hover:underline xl:text-[18px] 2xl:text-[20px]">
                About
              </p>
            </Link>
            <Link
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
            >
              <p className="hover:text-red-500 font-[family-name:var(--font-sora-sans)] leading-[100%] font-normal transition-all hover:underline xl:text-[18px] 2xl:text-[20px]">
                Reviews
              </p>
            </Link>
            <Link
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
            >
              <p className="hover:text-red-500 font-[family-name:var(--font-sora-sans)] leading-[100%] font-normal transition-all hover:underline xl:text-[18px] 2xl:text-[20px]">
                Services
              </p>
            </Link>
          </div>

          <div className="col-start-1 flex items-center ml-1 gap-0.5 xl:hidden">
            <a
              href="tel:+19198124559"
              target="_blank"
              rel="noopener noreferrer"
              // onClick={() => gtag_report_conversion('tel:+18176812020')}
              className="flex items-center gap-1 rounded-full bg-red-600 px-1 py-0.5 text-sm font-[family-name:var(--font-sora-sans)] text-white shadow-md transition hover:bg-red-700"
              aria-label="Reserve Your Dumpster"
            >
              <Phone size={18} />
              <span className="font-bold">Call for a Free Quote</span>
            </a>

            <button
              className="hover:text-red-500 cursor-pointer transition-colors"
              onClick={handleClick}
              aria-label="Menu"
            >
              <AlignJustify className="size-8" />
            </button>
          </div>

          <Link
            href="#"
            className="col-start-2 flex items-center justify-center xl:mx-0 2xl:hidden"
            onClick={(e) => handleNavClick(e, "top")}
          >
            <Image
              src="/images/logo.png"
              alt="Trash Lion Logo"
              width={224}
              height={102}
              className="block h-[34px] w-[38px] md:hidden xl:h-[122px] xl:w-[134px]"
            />
            <p className="font-[family-name:var(--font-sora-sans)] text-[13px] leading-[100%] font-semibold md:text-[20px] xl:text-[23px]">
              Red Bull Hauling&nbsp;
            </p>
            <Image
              src="/images/logo.png"
              alt="Trash Lion Logo"
              width={224}
              height={102}
              className="hidden h-[34px] w-[58px] md:block md:h-[69px] md:w-[87px] xl:h-[80px] xl:w-[105px]"
            />
            {/* <p className="font-[family-name:var(--font-sora-sans)] text-[13px] leading-[100%] font-semibold md:text-[20px] xl:text-[23px]">
              .
            </p> */}
          </Link>

          <div className="hidden 2xl:flex 2xl:justify-self-center">
            <Link
              href="#"
              className="flex items-center"
              onClick={(e) => handleNavClick(e, "top")}
            >
              <p className="font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-semibold">
                Red Bull
              </p>
              <Image
                src="/images/logo.png"
                alt="Trash Lion Logo"
                width={224}
                height={102}
                className="h-[120px] w-[155px]"
              />
              <p className="font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-semibold">
                Hauling
              </p>
            </Link>
          </div>

          <div className="hidden items-center gap-20 md:col-start-3 md:flex md:justify-self-end 2xl:justify-self-end 2xl:gap-12">
            <div className="hidden items-center gap-2.5 text-nowrap xl:flex">
              <PhoneCall size={30} fill="#FF0000" stroke="none" />
              <p className="font-[family-name:var(--font-sora-sans)] text-[20px] leading-[100%] font-bold">
                919 - 812 - 4559
              </p>
            </div>
            <a
              href="tel:+19198124559"
              target="_blank"
              rel="noopener noreferrer"
              // onClick={() => gtag_report_conversion('tel:+18176812020')}
              className="group bg-red-600 hover:text-red-600 flex cursor-pointer items-center gap-2.5 rounded-full px-9 py-3 transition-colors hover:bg-white 2xl:w-fit 2xl:text-nowrap"
            >
              <div className="relative">
                <MessageCircle size={24} />
                <Phone
                  size={10}
                  className="group-hover:fill-red-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-white"
                />
              </div>
              <p className="hidden font-[family-name:var(--font-sora-sans)] text-[16px] leading-[100%] font-semibold lg:block">
                Contact Us
              </p>
            </a>
          </div>
        </div>
      ) : (
        <div className="relative flex h-screen items-center justify-center bg-black">
          <div className="flex flex-col items-center gap-18">
            <Link href="#story" onClick={(e) => handleNavClick(e, "story")}>
              <p className="hover:text-red-500 font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-normal transition-all">
                About
              </p>
            </Link>
            <Link
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
            >
              <p className="hover:text-red-500 font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-normal transition-all">
                Reviews
              </p>
            </Link>
            <Link
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
            >
              <p className="hover:text-red-500 font-[family-name:var(--font-sora-sans)] text-[25px] leading-[100%] font-normal transition-all">
                Services
              </p>
            </Link>
          </div>
          <button
            className="hover:text-red-500 absolute top-6 right-6 block cursor-pointer transition-colors"
            onClick={handleClick}
          >
            <X className="size-8" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
