"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Package } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "الرئيسية", icon: null },
    { path: "/products", label: "المنتجات", icon: Package },
    { path: "/testimonials", label: "آراء العملاء", icon: Star },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border shadow-elegant sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <div className="bg-gradient-primary p-2 rounded-xl shadow-warm">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-gabriela font-bold text-lg">
                  🍦
                </span>
              </div>
            </div>
            <div className="text-right rtl:text-left">
              <h1 className="font-gabriela text-2xl font-bold text-primary">
                Ice Karem
              </h1>
              <p className="text-sm text-muted-foreground">بوظة سورية أصيلة</p>
            </div>
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
                      ? "bg-primary text-primary-foreground shadow-warm"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Cart Button */}
          <Button
            variant="outline"
            size="sm"
            className="bg-peach/50 border-peach hover:bg-peach hover:text-peach-foreground transition-elegant shadow-warm"
          >
            <ShoppingCart className="w-4 h-4 ml-2" />
            السلة
            <span className="bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs mr-2">
              3
            </span>
          </Button>
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
                    ? "bg-primary text-primary-foreground shadow-warm"
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
