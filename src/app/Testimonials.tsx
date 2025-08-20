import { useState } from "react";
import Navigation from "@/components/Navigation";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle, Users, ThumbsUp } from "lucide-react";
import { toast } from "sonner";

const mockTestimonials = [
  {
    id: "1",
    name: "أحمد السوري",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Amazing authentic Syrian ice cream! The pistachio flavor is incredible.",
    commentArabic: "بوظة سورية أصيلة رائعة! طعم الفستق الحلبي لا يُقاوم وذكرني بطفولتي في حلب.",
    date: "منذ أسبوع",
    location: "دمشق، سوريا",
  },
  {
    id: "2",
    name: "فاطمة خالد",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "The rose ice cream is like nothing I've ever tasted!",
    commentArabic: "بوظة الورد لذيذة جداً وطعمها مميز، التوصيل سريع والخدمة ممتازة. أنصح الجميع بتجربتها!",
    date: "منذ 3 أيام",
    location: "حلب، سوريا",
  },
  {
    id: "3",
    name: "محمد العلي",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    comment: "Great quality and authentic taste. Will definitely order again!",
    commentArabic: "جودة عالية وطعم أصيل يذكرني بالبوظة الشامية القديمة. سأطلب مرة أخرى بالتأكيد!",
    date: "منذ أسبوعين",
    location: "اللاذقية، سوريا",
  },
  {
    id: "4",
    name: "ليلى حسن",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Perfect for special occasions. My family loved it!",
    commentArabic: "مثالية للمناسبات الخاصة. عائلتي أحبتها كثيراً، خاصة الأطفال. طعم رائع وتغليف أنيق.",
    date: "منذ 5 أيام",
    location: "حمص، سوريا",
  },
  {
    id: "5",
    name: "خالد الأسود",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "The mastic flavor is absolutely divine! Worth every penny.",
    commentArabic: "نكهة المستكة إلهية حقاً! تستحق كل قرش دفعته. بوظة أصيلة مثل التي كنا نأكلها قديماً.",
    date: "منذ 4 أيام",
    location: "طرطوس، سوريا",
  },
  {
    id: "6",
    name: "رنا مصطفى",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    comment: "Beautiful presentation and delicious taste. Highly recommended!",
    commentArabic: "تقديم جميل وطعم لذيذ. أنصح بها بشدة! الشوكولاتة كانت كريمية ومنعشة جداً.",
    date: "منذ أسبوع",
    location: "درعا، سوريا",
  },
];

const Testimonials = () => {
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    comment: "",
    rating: 5,
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newTestimonial.name.trim() || !newTestimonial.comment.trim()) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }

    toast.success("شكراً لك! تم إرسال رأيك بنجاح وسيتم مراجعته قريباً", {
      description: "نقدر وقتك في مشاركة تجربتك معنا",
    });

    // Reset form
    setNewTestimonial({ name: "", comment: "", rating: 5 });
    setShowForm(false);
  };

  const stats = [
    { icon: Users, value: "500+", label: "عميل سعيد" },
    { icon: Star, value: "4.9", label: "متو��ط التقييم" },
    { icon: MessageCircle, value: "200+", label: "رأي إيجابي" },
    { icon: ThumbsUp, value: "98%", label: "معدل الرضا" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-gabriela text-4xl md:text-5xl font-bold text-primary mb-4">
            آراء عملائنا الكرام
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            اكتشف ما يقوله عملاؤنا السعداء عن تجربتهم مع بوظة Ice Karem الأصيلة
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center shadow-warm border-0 bg-gradient-warm/20">
                <CardContent className="p-6">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-gabriela text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add Testimonial Button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={() => setShowForm(!showForm)}
            size="lg"
            className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90 transition-all"
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            {showForm ? "إخفاء النموذج" : "شارك رأيك معنا"}
          </Button>
        </div>

        {/* Add Testimonial Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto mb-12 shadow-elegant border-2 border-primary/10">
            <CardHeader>
              <CardTitle className="font-gabriela text-xl text-primary text-center">
                شاركنا تجربتك مع Ice Karem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitTestimonial} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    اسمك الكريم *
                  </label>
                  <Input
                    value={newTestimonial.name}
                    onChange={(e) => setNewTestimonial(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="أدخل اسمك..."
                    className="text-right"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    التقييم *
                  </label>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setNewTestimonial(prev => ({ ...prev, rating }))}
                        className="transition-colors"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            rating <= newTestimonial.rating
                              ? "fill-accent text-accent"
                              : "text-muted-foreground hover:text-accent"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-sm text-muted-foreground mr-2">
                      ({newTestimonial.rating} من 5)
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    رأيك وتعليقك *
                  </label>
                  <Textarea
                    value={newTestimonial.comment}
                    onChange={(e) => setNewTestimonial(prev => ({ ...prev, comment: e.target.value }))}
                    placeholder="شاركنا تجربتك مع منتجاتنا..."
                    className="text-right min-h-[100px]"
                    required
                  />
                </div>

                <div className="flex space-x-4 rtl:space-x-reverse">
                  <Button type="submit" className="flex-1 bg-gradient-primary">
                    إرسال الرأي
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    إلغاء
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-primary rounded-2xl p-8 mt-16 text-center shadow-elegant">
          <h2 className="font-gabriela text-2xl font-bold text-primary-foreground mb-4">
            انضم إلى عائلة Ice Karem
          </h2>
          <p className="text-primary-foreground/90 mb-6">
            جرب بوظتنا اليوم واكتشف الطعم الأصيل الذي يحبه الآلاف
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant"
          >
            اطلب الآن
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Testimonials;