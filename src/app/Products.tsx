import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { toast } from "sonner";

// Import ice cream images
import pistachioImage from "@/assets/pistachio-ice-cream.jpg";
import roseImage from "@/assets/rose-ice-cream.jpg";
import vanillaImage from "@/assets/vanilla-ice-cream.jpg";

const mockProducts = [
  {
    id: "1",
    name: "Pistachio Ice Cream",
    nameArabic: "بوظة الفستق الحلبي",
    price: 2500,
    image: pistachioImage,
    flavor: "فستق حلبي",
    popular: true,
  },
  {
    id: "2",
    name: "Rose Ice Cream",
    nameArabic: "بوظة الورد",
    price: 2200,
    image: roseImage,
    flavor: "ورد",
    popular: true,
  },
  {
    id: "3",
    name: "Vanilla Ice Cream",
    nameArabic: "بوظة الفانيليا",
    price: 2000,
    image: vanillaImage,
    flavor: "فانيليا",
  },
  {
    id: "4",
    name: "Chocolate Ice Cream",
    nameArabic: "بوظة الشوكولاتة",
    price: 2300,
    image: vanillaImage, // Placeholder - will generate more images
    flavor: "شوكولاتة",
    popular: true,
  },
  {
    id: "5",
    name: "Mastic Ice Cream",
    nameArabic: "بوظة المستكة",
    price: 2800,
    image: pistachioImage, // Placeholder
    flavor: "مستكة",
  },
  {
    id: "6",
    name: "Orange Blossom Ice Cream",
    nameArabic: "بوظة زهر النارنج",
    price: 2400,
    image: roseImage, // Placeholder
    flavor: "زهر النارنج",
  },
];

const flavorFilters = [
  "الكل",
  "فستق حلبي",
  "ورد",
  "فانيليا",
  "شوكولاتة",
  "مستكة",
  "زهر النارنج",
];

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFlavor, setSelectedFlavor] = useState("الكل");
  const [sortBy, setSortBy] = useState("name");

  const handleAddToCart = (product: any) => {
    toast.success(`تم إضافة ${product.nameArabic} إلى السلة`, {
      description: `السعر: ${product.price} ل.س`,
    });
  };

  const filteredProducts = mockProducts
    .filter((product) => {
      const matchesSearch = product.nameArabic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFlavor = selectedFlavor === "الكل" || product.flavor === selectedFlavor;
      return matchesSearch && matchesFlavor;
    })
    .sort((a, b) => {
      if (sortBy === "price") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "popular") return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      return a.nameArabic.localeCompare(b.nameArabic);
    });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-gabriela text-4xl md:text-5xl font-bold text-primary mb-4">
            منتجاتنا الرائعة
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            استكشف تشكيلة واسعة من أفضل أنواع البوظة السورية الأصيلة المصنوعة بعناية فائقة
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-2xl shadow-warm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="ابحث عن نكهتك المفضلة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 text-right bg-background border-border focus:border-primary transition-elegant"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background border border-border rounded-lg px-3 py-2 text-sm focus:border-primary transition-elegant"
              >
                <option value="name">ترتيب أبجدي</option>
                <option value="price">السعر (من الأقل)</option>
                <option value="price-desc">السعر (من الأعلى)</option>
                <option value="popular">الأكثر طلباً</option>
              </select>
            </div>
          </div>

          {/* Flavor Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {flavorFilters.map((flavor) => (
              <Badge
                key={flavor}
                variant={selectedFlavor === flavor ? "default" : "outline"}
                className={`cursor-pointer transition-elegant hover:scale-105 ${
                  selectedFlavor === flavor
                    ? "bg-gradient-primary text-primary-foreground shadow-warm"
                    : "hover:bg-muted"
                }`}
                onClick={() => setSelectedFlavor(flavor)}
              >
                {flavor}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-muted-foreground">
            تم العثور على {filteredProducts.length} منتج
          </p>
          
          {selectedFlavor !== "الكل" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedFlavor("الكل")}
              className="text-primary hover:bg-primary/10"
            >
              مسح الفلاتر
            </Button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-muted/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="font-gabriela text-xl text-primary mb-2">
              لم نجد أي منتجات مطابقة
            </h3>
            <p className="text-muted-foreground">
              جرب البحث بكلمات مختلفة أو اختر فلتر آخر
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-warm rounded-2xl p-8 mt-16 text-center shadow-elegant">
          <h2 className="font-gabriela text-2xl font-bold text-accent-foreground mb-4">
            لم تجد ما تبحث عنه؟
          </h2>
          <p className="text-accent-foreground/80 mb-6">
            تواصل معنا لطلب نكهات خاصة أو لمعرفة المزيد عن منتجاتنا
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
          >
            تواصل معنا
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Products;