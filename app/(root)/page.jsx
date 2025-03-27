import ProductCollections from "./_components/ProductCollections";
import Hero from "./_components/Hero";
import FoodSelection from "./_components/FoodSelection";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 bg-[bg-[#F0EDEB]]">
      <Hero />
      <ProductCollections />
      <FoodSelection />
    </div>
  );
}
