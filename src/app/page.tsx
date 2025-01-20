import BrowseTheRangeSection from "@/components/sections/BrowseTheRangeSection";
import HeroSection from "@/components/sections/HeroSection";
import OurProductSection from "@/components/sections/OurProductSection";
import ShareSetupSection from "@/components/sections/ShareSetupSection";

export default function HomePage() {
  return (
    <main className="bg-white mx-auto items-center justify-center place-items-center">
      <HeroSection />
      <div className="flex flex-col justify-center items-center gap-[56px] mx-4 md:mx-[130px]">
        <BrowseTheRangeSection />
        <OurProductSection />
      </div>
      <div className="mt-[56px]">
        <ShareSetupSection />
      </div>
    </main>
  );
}
