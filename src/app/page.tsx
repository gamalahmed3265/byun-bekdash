"use client";

import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Heart,
  Users,
  Award,
  ArrowLeft,
  ShoppingCart,
} from "lucide-react";
import { toast } from "sonner";

import heroImage from "@/assets/hero-ice-cream.jpg";
import pistachioImage from "@/assets/pistachio-ice-cream.jpg";
import roseImage from "@/assets/rose-ice-cream.jpg";
import vanillaImage from "@/assets/vanilla-ice-cream.jpg";
import Image from "next/image";
import Link from "next/link";

const Index = () => {
  const featuredProducts = [
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
  ];

  const featuredTestimonials = [
    {
      id: "1",
      name: "أحمد السوري",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Amazing authentic Syrian ice cream!",
      commentArabic: "بوظة سورية أصيلة رائعة! طعم الفستق الحلبي لا يُقاوم.",
      date: "منذ أسبوع",
      location: "دمشق، سوريا",
    },
    {
      id: "2",
      name: "فاطمة خالد",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "The rose ice cream is divine!",
      commentArabic: "بوظة الورد لذيذة جداً وطعمها مميز، أنصح الجميع بتجربتها!",
      date: "منذ 3 أيام",
      location: "حلب، سوريا",
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "وصفة أصيلة",
      description: "نستخدم الوصفات التقليدية السورية المتوارثة عبر الأجيال",
    },
    {
      icon: Award,
      title: "جودة عالية",
      description: "مكونات طبيعية 100% ومنتقاة بعناية من أفضل المصادر",
    },
    {
      icon: Users,
      title: "خدمة مميزة",
      description: "فريق متخصص وخدمة عملاء على مدار الساعة لضمان رضاكم",
    },
  ];

  const handleAddToCart = (product: any) => {
    toast.success(`تم إضافة ${product.nameArabic} إلى السلة`, {
      description: `السعر: ${product.price} ل.س`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            priority
            alt="Ice cream - أفضل بوظة سورية"
            className="w-full h-full object-cover"
            fill
          />
          <div className="absolute inset-0 bg-right bg-gradient-hero"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 animate-float">
            ✨ بوظة سورية أصيلة منذ 1950
          </Badge>

          <h1 className="font-gabriela text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ice cream
            <br />
            <span className="text-accent animate-shimmer">بوظة الذكريات</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            استمتع بأفضل وألذ أنواع البوظة السورية الأصيلة مع نكهات متنوعة وطعم
            لا يُنسى
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-bounce text-lg px-8 py-4"
              asChild
            >
              <Link href="/products">
                <ShoppingCart className="w-5 h-5 ml-2" />
                اطلب الآن
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm transition-elegant text-lg px-8 py-4"
              asChild
            >
              <Link href="/testimonials">
                آراء العملاء
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4">
        {/* Features Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="font-gabriela text-3xl md:text-4xl font-bold text-primary mb-4">
              لماذا نحن مختلفون؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نحن نفخر بتقديم بوظة سورية أصيلة بأعلى معايير الجودة والطعم الفريد
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="text-center shadow-warm hover:shadow-elegant transition-all duration-500 border-0 group"
                >
                  <CardContent className="p-8">
                    <div className="bg-gradient-warm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-gabriela text-xl font-bold text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-muted/20 -mx-4 px-4 rounded-3xl">
          <div className="text-center mb-16">
            <h2 className="font-gabriela text-3xl md:text-4xl font-bold text-primary mb-4">
              نكهاتنا المميزة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اكتشف تشكيلة من أفضل النكهات السورية الأصيلة المحضرة بعناية فائقة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-elegant"
              asChild
            >
              <Link href="/products">
                عرض جميع المنتجات
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="font-gabriela text-3xl md:text-4xl font-bold text-primary mb-4">
              ماذا يقول عملاؤنا؟
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              آراء حقيقية من عملائنا السعداء الذين جربوا بوظة Ice cream الأصيلة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-elegant"
              asChild
            >
              <Link href="/testimonials">
                قراءة المزيد من الآراء
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center shadow-elegant">
            <h2 className="font-gabriela text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              جاهز لتذوق الطعم الأصيل؟
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              اطلب بوظتك المفضلة الآن واستمتع بتوصيل سريع ونكهات لا تُنسى
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-bounce text-lg px-8"
                asChild
              >
                <Link href="/products">
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  اطلب الآن
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-elegant text-lg px-8"
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
