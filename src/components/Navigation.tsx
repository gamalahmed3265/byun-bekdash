"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Package, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/assets/logo.jpg"; // Adjust the path as necessary
const Navigation = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "الرئيسية", icon: Home },
    { path: "/products", label: "المنتجات", icon: Package },
    { path: "/testimonials", label: "آراء العملاء", icon: Star },
  ];

  return (
    <nav
      className={`fixed left-0 w-full top-0 z-50 transition-all duration-300 
        ${
          isScrolled
            ? "bg-primary border-border shadow-elegant"
            : "bg-primary border-border shadow-elegant"
          // isScrolled
          //   ? "bg-primary border-border shadow-elegant"
          //   : "text-card/95 backdrop-blur-sm bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Image src={Logo} alt="Ice Karem Logo" width={100} height={100} />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg transition-elegant ${
                    isActive
                      ? isScrolled
                        ? "bg-primary-foreground text-primary shadow-warm"
                        : "text-primary bg-primary-foreground shadow-warm"
                      : isScrolled
                      ? "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/20"
                      : "text-card/95 hover:text-muted"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Cart Button */}
          {/* <Button
            variant="outline"
            size="sm"
            className={`transition-elegant shadow-warm ${
              isScrolled
                ? "bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90"
                : "bg-peach/50 border-peach hover:bg-peach hover:text-peach-foreground"
            }`}
          >
            <ShoppingCart className="w-4 h-4 ml-2" />
            السلة
            <span
              className={`rounded-full px-2 py-1 text-xs mr-2 ${
                isScrolled
                  ? "bg-primary text-primary-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              3
            </span>
          </Button> */}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center mt-4 space-x-2 rtl:space-x-reverse">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center space-x-1 rtl:space-x-reverse px-3 py-2 rounded-lg text-sm transition-elegant ${
                  isActive
                    ? isScrolled
                      ? "bg-primary-foreground text-primary shadow-warm"
                      : "bg-primary text-primary-foreground shadow-warm"
                    : isScrolled
                    ? "text-primary-foreground hover:bg-primary-foreground/20"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
