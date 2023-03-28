import Link from "next/link";
import Image from "next/image";

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`} legacyBehavior>
        <a className="object-contain">
          <div className="object-cover w-full">
            <Image
              src={product.image}
              alt={product.name}
              // className="rounded shadow object-cover h-64 w-full"
              height={400}
              width={300}
            />
          </div>
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`} legacyBehavior>
          <a>
            <h2 className="text-lg"> {product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
