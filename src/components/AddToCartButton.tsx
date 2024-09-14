"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem, items } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);
  // const isInCart = items.find((item) => item.product.id === product.id);
  // const isInCartt = items
  const isInCart =
    items.find((item) => item.product.id === product.id)?.product.id ===
    product.id;

  return (
    <Button
      disabled={isInCart}
      onClick={() => {
        if (!isInCart) {
          addItem(product);
          setIsSuccess(true);
        }
      }}
      size="lg"
      className="w-full"
    >
      {isSuccess ? "Added!" : !isInCart ? "Add to cart" : "Added in Cart!"}
    </Button>
  );
};

export default AddToCartButton;
