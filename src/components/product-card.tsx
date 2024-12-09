import Image from "next/image";

export interface Product {
  image: string;
  name: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center p-4 mt-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          height={427}
          width={250}
        />
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-[#252B42] text-[16px] font-bold">{product.name}</h3>
        <p className="text-[#737373] text-[14px]">{product.department}</p>
        <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
          {product.originalPrice}{" "}
          <span className="text-[#23856D]">{product.discountedPrice}</span>
        </p>
        <div className="flex justify-center gap-2 mt-4">
          {product.colors.map((color, index) => (
            <div key={index} className={`w-4 h-4 ${color} rounded-full`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
