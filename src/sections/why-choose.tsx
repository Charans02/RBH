import Image from "next/image";
import { Check } from "lucide-react";
import { Text } from "@/components/ui";

const WhyChoose = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url(/images/bg.png)] bg-cover bg-center opacity-10" />
      <section className="flex flex-col items-center justify-between gap-10 px-[80px] py-[60px] xl:flex-row">
        <div className="space-y-14 flex-6/11">
          <Text variant="h2" className="text-center">
            Why Choose
            <br />
            <span className="text-red-600"> Red Bull Hauling?</span>
          </Text>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <div className="flex size-6 md:size-8 lg:size-10 xl:size-12 items-center justify-center rounded-[6px] xl:rounded-xl p-1 bg-[#2da884]">
                <Check size={32} stroke="white" />
              </div>
              <p className="font-[family-name:var(--font-lato-sans)] text-[22px] leading-[32px] font-semibold">
                Faith-Driven Values
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-6 md:size-8 lg:size-10 xl:size-12 items-center justify-center rounded-[6px] xl:rounded-xl p-1 bg-[#2da884]">
                <Check size={32} stroke="white" />
              </div>
              <p className="font-[family-name:var(--font-lato-sans)] text-[22px] leading-[32px] font-semibold">
                $50 OFF First Pickup Special
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-6 md:size-8 lg:size-10 xl:size-12 items-center justify-center rounded-[6px] xl:rounded-xl p-1 bg-[#2da884]">
                <Check size={32} stroke="white" />
              </div>
              <p className="font-[family-name:var(--font-lato-sans)] text-[22px] leading-[32px] font-semibold">
                Friendly, Professional Team
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-6 md:size-8 lg:size-10 xl:size-12 items-center justify-center rounded-[6px] xl:rounded-xl p-1 bg-[#2da884]">
                <Check size={32} stroke="white" />
              </div>
              <p className="font-[family-name:var(--font-lato-sans)] text-[22px] leading-[32px] font-semibold">
                Affordable Pricing, No Surprises
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-6 md:size-8 lg:size-10 xl:size-12 items-center justify-center rounded-[6px] xl:rounded-xl p-1 bg-[#2da884]">
                <Check size={32} stroke="white" />
              </div>
              <p className="font-[family-name:var(--font-lato-sans)] text-[22px] leading-[32px] font-semibold">
                Fully Insured for Your Peace of Mind
              </p>
            </div>
          </div>
          <button className="bg-red-600 w-full cursor-pointer rounded-full px-8 py-6">
            <Text variant="button" className="text-white">
              Get started today
            </Text>
          </button>
        </div>
        <div className="relative w-full overflow-hidden xl:ml-7 flex-5/11 rounded-2xl">
          <div className="relative h-[680px] w-full">
            <Image
              src="/images/trash.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-[0px] flex h-[80px] w-full items-center justify-center bg-red-600">
            <p className="font-[family-name:var(--font-lato-sans)] text-[18px] md:text-[30px] md:leading-[60px] font-semibold text-white">
              5+ Years Of Experience
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
