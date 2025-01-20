import ShopBannerSection from "@/components/sections/shop/ShopBannerSection";
import ShopFilterSection from "@/components/sections/shop/ShopFilterSection";
import ShopHeroSection from "@/components/sections/shop/ShopHeroSection";
import ShopPaginationSection from "@/components/sections/shop/ShopPaginationSection";
import ShopProductSection from "@/components/sections/shop/ShopProductSection";

function ShopPage() {
  return (
    <div>
      <ShopHeroSection />
      <ShopFilterSection />
      <div className="mx-4 sm:mx-6 md:mx-10 lg:mx-[50px] xl:mx-[130px]">
  <ShopProductSection />
</div>
<div className="my-[20px] sm:my-[30px] md:my-[40px] lg:my-[70px]">
  <ShopPaginationSection />
</div>


      <ShopBannerSection />
    </div>
  );
}

export default ShopPage;
