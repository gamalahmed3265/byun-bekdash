"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  nameArabic: string;
  price: number;
  image: string;
  flavor: string;
  popular?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Card className="group relative overflow-hidden bg-card shadow-warm hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0">
      {/* Popular Badge */}
      {product.popular && (
        <Badge className="absolute top-3 right-3 z-10 bg-gradient-warm text-accent-foreground font-medium">
          الأكثر طلباً
        </Badge>
      )}

      {/* Heart Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 left-3 z-10 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-elegant shadow-warm"
      >
        <Heart
          className={`w-4 h-4 transition-colors ${
            isLiked
              ? "fill-red-500 text-red-500"
              : "text-muted-foreground hover:text-primary"
          }`}
        />
      </button>

      {/* Product Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-warm">
        <Image
          fill
          src={product.image}
          alt={product.nameArabic}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="p-4 space-y-3">
        {/* Product Title */}
        <div className="text-center">
          <h3 className="font-gabriela text-lg font-bold text-primary mb-1">
            {product.nameArabic}
          </h3>
          <p className="text-sm text-muted-foreground">{product.name}</p>
        </div>

        {/* Flavor Badge */}
        <div className="flex justify-center">
          <Badge
            variant="secondary"
            className="bg-lavender/20 text-lavender-foreground border-lavender/30"
          >
            {product.flavor}
          </Badge>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-center">
            <span className="text-2xl font-bold text-primary font-gabriela">
              {product.price}
            </span>
            <span className="text-sm text-muted-foreground mr-1">ل.س</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
