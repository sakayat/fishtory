import Breadcrumbs from "../../_components/Breadcrumbs";
import ProductDetails from "../../_components/ProductDetails";

const ProductsPage = () => {
  const product = {
    title: "Breaded Whitebait (Frozen)",
    slug: "breaded-whitebait-frozen",
    images: ["/images/img4.webp", "/images/img5.webp", "/images/img6.webp"],
    shortDescription: "A moreish treat for all seafood lovers to enjoy!",
    regularPrice: 7.5,
    salePrice: 5.9,
    reviewsCount: 3,
    inStock: true,
    weight: "454G",
    servings: "2-3",
    tags: ["Suitable for freezing"],
    keyFeatures: [
      "Great freezer filler",
      "Delivered frozen and ready to cook",
      "Best served with tartar sauce",
    ],
    description: [
      "Fresh Whitebait that has been gutted and the heads removed before being coated in breadcrumbs. Breaded whitebait is also known as blanchbait.",
      "Shallow fry in butter and oil and serve with Tartare Sauce for a classic starter or light lunch.",
      "1kg - comfortably serves 2-3 people. Delivered frozen and should be cooked from frozen.",
    ],
    reviews: [
      {
        author: "Sara",
        title: "Breaded Whitebait (Frozen)",
        content: "Easy and delicious.",
        rating: 5,
        date: "1 day ago",
      },
      {
        author: "Oliver M",
        title: "Breaded Whitebait (Frozen)",
        content: "Loved them, will be ordering again",
        rating: 5,
        date: "1 week ago",
      },
      {
        author: "Emma T",
        title: "Perfect for entertaining",
        content:
          "These were a hit at our dinner party. Quick to cook and very tasty.",
        rating: 5,
        date: "6 months ago",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <Breadcrumbs title={product.slug} />
      <ProductDetails product={product} key={product.id} />
    </div>
  );
};

export default ProductsPage;
