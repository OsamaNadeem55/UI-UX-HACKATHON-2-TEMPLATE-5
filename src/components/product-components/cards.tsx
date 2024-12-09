import { Product } from "../../../types";
import ProductCard from "@/components/product-card";

const Cards: React.FC = () => {
  const products: Product[] = [
    {
      image: "/card1.png",
      name: "Graphic Design",
      department: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/card2.png",
      name: "Web Design",
      department: "Marketing Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/card3.png",
      name: "Logo Design",
      department: "Branding Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/card4.png",
      name: "UI/UX Design",
      department: "Product Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/card5.png",
      name: "Branding Design",
      department: "Creative Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/card6.png",
      name: "App Design",
      department: "Tech Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/card7.png",
      name: "Product Strategy",
      department: "Sales Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
    {
      image: "/card8.png",
      name: "Marketing Strategy",
      department: "Sales Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["bg-[#23A6F0]", "bg-[#23856D]", "bg-[#E77C40]", "bg-[#252B42]"],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center mt-5 mb-7 overflow-x-hidden">
      {/* Product Cart Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6 w-full">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

     {/* Pagination Controls */}
<div className="flex flex-wrap justify-center items-center space-x-4 mt-16 border-[#BDBDBD] border-2 rounded-md">
  <button className="px-4 py-2 bg-[#F3F3F3] text-[#BDBDBD] rounded-md hover:bg-gray-300 text-sm sm:px-8 sm:py-6">
    First
  </button>

  {/* Page Numbers */}
  <div className="flex space-x-2 mt-4 sm:mt-0">
    <button className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6">
      1
    </button>
    <button className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6">
      2
    </button>
    <button className="px-4 py-2 font-bold rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white text-sm sm:px-8 sm:py-6">
      3
    </button>
  </div>

  <button className="px-4 py-2 text-[#23A6F0] rounded-md hover:bg-[#1D8CC8] hover:text-white text-sm sm:px-8 sm:py-6">
    Next
  </button>
</div>

    </div>
  );
};

export default Cards;
