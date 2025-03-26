import ProductCollections from "./_components/ProductCollections";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Hero />
      <ProductCollections />
    </div>
  );
}
