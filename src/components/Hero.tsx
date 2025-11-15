import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1626233558206-28a3e90ef311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzYzMTg1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="موقع بناء"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
          نبني أحلامك بإتقان وجودة عالية
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          شركة رائدة في مجال المقاولات العامة والبناء والتشطيبات بخبرة تمتد لأكثر من 20 عامًا
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            asChild
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6"
            size="lg"
          >
            <Link to="/contact">
              احصل على استشارة مجانية
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Link>
          </Button>
          {/* <Button
            asChild
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6"
            size="lg"
          >
            <Link to="/portfolio">
              شاهد أعمالنا
            </Link>
          </Button> */}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl text-orange-500 mb-2">+20</div>
            <div className="text-gray-300">سنة خبرة</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-orange-500 mb-2">+500</div>
            <div className="text-gray-300">مشروع منجز</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-orange-500 mb-2">+300</div>
            <div className="text-gray-300">عميل سعيد</div>
          </div>
          <div className="text-center">
            <div className="text-4xl text-orange-500 mb-2">100%</div>
            <div className="text-gray-300">رضا العملاء</div>
          </div>
        </div>
      </div>
    </section>
  );
}