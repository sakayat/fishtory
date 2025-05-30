import ProductCollections from "./_components/ProductCollections";
import Hero from "./_components/Hero";
import FoodSelection from "./_components/FoodSelection";
import ProductCarousel from "./_components/ProductCarousel";
import IntroVideoOverlay from "./_components/IntroVideoOverlay";
import DeliveryService from "./_components/DeliveryService";
import Newsletter from "./_components/Newsletter";


export default function Home() {
  return (
    <div className="flex flex-col gap-2 bg-[#F0EDEB]">
      <Hero />
      <ProductCollections />
      <FoodSelection />
      <ProductCarousel />
      <IntroVideoOverlay />
      <DeliveryService />
      <Newsletter />

    </div>
  );
}
