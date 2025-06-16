import Link from "next/link";

import { Text } from "@/components/ui";
import { CONTACT_INFO, SOCIAL_LINKS, QUICK_LINKS } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center blur-[2px]"></div>
      <div className="text-background relative z-10 text-center xl:text-left">
        <div className="bg-black/60">
          <section className="flex !max-w-[640px] flex-col-reverse items-center justify-between gap-16 lg:!max-w-[860px] xl:!max-w-[1512px] xl:flex-row xl:items-start">
            <div className="flex flex-col items-center xl:w-2/5 xl:items-start">
              <Text variant="h4">
                Red Bull<span className="text-red-700"> Hauling</span>
              </Text>
              <Text className="mt-4">
                We don&apos;t just haul junk. We restore peace of mind. We are open 24/7 ready to get any job done!
              </Text>
              <div className="mt-8 flex gap-8">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    className="bg-foreground border-background hover:border-red-400 hover:bg-red-800 flex size-10 items-center justify-center rounded-lg border transition-colors"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-around gap-20 md:flex-row md:items-start xl:w-3/5 xl:justify-center">
              <div className="w-full max-w-[120px] space-y-6 sm:space-y-10">
                <Text variant="h6" className="whitespace-nowrap">
                  Quick Links
                </Text>
                <div className="flex flex-col gap-4">
                  {QUICK_LINKS.map((link) => (
                    <Link key={link.name} href={link.url}>
                      <Text className="hover:text-red-500 transition-colors">
                        {link.name}
                      </Text>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-full max-w-[292px] space-y-6 sm:space-y-10">
                <Text variant="h6">Contact Us</Text>
                <div className="flex flex-col items-center gap-4 xl:items-start">
                  {CONTACT_INFO.map((info) => (
                    <div key={info.name} className="flex items-center gap-2">
                      {info.icon}
                      <Text>{info.value}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="w-full max-w-[480px] space-y-6 sm:space-y-10 xl:max-w-full">
              <Text variant="h6">Newsletter</Text>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
                <input
                  className="w-full rounded-l-2xl rounded-r-2xl bg-white/10 px-6 py-5 font-[family-name:var(--font-sora-sans)] text-[16px] leading-[24px] backdrop-blur-md transition-colors focus:bg-white/20 focus:outline-none sm:rounded-r-none"
                  placeholder="Enter your email"
                />
                <button className="bg-red hover:text-red btn-shadow cursor-pointer rounded-l-2xl rounded-r-2xl px-6 py-[18px] transition-colors hover:bg-white sm:rounded-l-none">
                  <Text variant="button">Subscribe</Text>
                </button>
              </div>
            </div> */}
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
