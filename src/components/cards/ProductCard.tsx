"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import MainButton from "../common/MainButton";
import { useRouter } from "next/navigation";

interface IProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  otherPrice?: string;
  type?: string;
  typeValue?: string;
}

function ProductCard({
  id,
  imageUrl,
  title,
  description,
  price,
  otherPrice,
  type,
  typeValue,
}: IProps) {
  const router = useRouter();
  const icons = [
    {
      iconUrl: "/images/share_icon.png",
      title: "Share",
      action: () => {},
    },
    {
      iconUrl: "/images/compare_icon.png",
      title: "Compare",
      action: () => {},
    },
    {
      iconUrl: "/images/like_icon.png",
      title: "Like",
      action: () => {},
    },
  ];

  const cardVariant = {
    initial: { opacity: 0, x: 120, scale: 0.5 },
    animate: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <motion.div
      initial=" "
      whileHover="animate"
      className="relative flex flex-col items-center max-w-[300px] w-full"
    >
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt="product"
          className="h-[301px] w-full object-cover"
        />

        {typeValue && (
          <div
            className={cn(
              "absolute top-4 right-4 w-12 h-12 rounded-full text-white font-medium flex justify-center items-center",
              type === "DISCOUNTED"
                ? "bg-error"
                : type === "NEW"
                ? "bg-success"
                : ""
            )}
          >
            {typeValue}
          </div>
        )}
      </div>

      <div className="bg-[#F4F5F7] p-4 w-full rounded-b-lg">
        <p className="text-customBlack text-lg font-semibold">{title}</p>
        <p className="text-customGray font-medium text-sm py-2">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-customBlack text-xl font-semibold">{price}</p>
          {otherPrice && (
            <p className="line-through text-customGray">{otherPrice}</p>
          )}
        </div>
      </div>

      <motion.div
        className={(
          "absolute p-4 left-0 right-0 top-0 bottom-0 bg-[#3A3A3A]/80 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
        )}
        variants={cardVariant}
      >
        <div className="flex justify-center">
          <MainButton
            text="Add to cart"
            classes=" "
            action={() => router.push(`/shop/product/${id}`)}
          />
        </div>
        <div className="flex justify-center gap-5 mt-6">
          {icons.map((icon, index) => (
            <div
              className="flex gap-1 items-center"
              key={index}
              onClick={icon.action}
            >
              <div>
                <img src={icon.iconUrl} alt="icon" />
              </div>
              <p className="text-white">{icon.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductCard;
