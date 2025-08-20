import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  commentArabic: string;
  date: string;
  location: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "fill-accent text-accent"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-card shadow-warm hover:shadow-elegant transition-all duration-500 border-0 relative overflow-hidden group">
      {/* Quote Icon */}
      <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote className="w-12 h-12 text-primary" />
      </div>

      <CardContent className="p-6 space-y-4 relative">
        {/* Customer Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Avatar className="ring-2 ring-accent/20 shadow-warm">
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback className="bg-gradient-warm text-primary font-bold">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h4 className="font-semibold text-primary">{testimonial.name}</h4>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-sm text-muted-foreground">{testimonial.location}</span>
                <Badge variant="outline" className="text-xs px-2 py-0.5">
                  {testimonial.date}
                </Badge>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 rtl:space-x-reverse bg-accent/20 px-3 py-1 rounded-full">
            {renderStars(testimonial.rating)}
            <span className="text-sm font-medium text-accent-foreground mr-1">
              {testimonial.rating}
            </span>
          </div>
        </div>

        {/* Comment */}
        <div className="space-y-2">
          <blockquote className="text-foreground leading-relaxed italic relative">
            <span className="text-primary text-lg">"</span>
            {testimonial.commentArabic}
            <span className="text-primary text-lg">"</span>
          </blockquote>
          
          {testimonial.comment && (
            <p className="text-sm text-muted-foreground italic">
              "{testimonial.comment}"
            </p>
          )}
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-warm opacity-5 rounded-full transform translate-x-8 translate-y-8 group-hover:scale-110 transition-transform duration-500" />
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;