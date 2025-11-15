import { Calendar, User, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Blog() {
  const posts = [
    {
      id: 1,
      title: "أحدث تقنيات البناء الحديث في 2024",
      excerpt: "تعرف على أحدث التقنيات والأساليب المستخدمة في البناء الحديث وكيف تساهم في تحسين جودة المباني وتقليل التكاليف...",
      image: "https://images.unsplash.com/photo-1626233558206-28a3e90ef311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzYzMTg1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "م. أحمد العلي",
      date: "15 نوفمبر 2024",
    },
    {
      id: 2,
      title: "دليلك الشامل لاختيار مواد البناء المناسبة",
      excerpt: "نصائح وإرشادات مهمة لاختيار أفضل مواد البناء التي تناسب مشروعك وميزانيتك مع الحفاظ على الجودة العالية...",
      image: "https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMxNzQ4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "م. فاطمة السعيد",
      date: "10 نوفمبر 2024",
    },
    {
      id: 3,
      title: "أهمية العزل في المباني السكنية",
      excerpt: "العزل الجيد هو أساس الراحة والاقتصاد في استهلاك الطاقة. تعرف على أنواع العزل المختلفة وفوائدها...",
      image: "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMjQ0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      author: "م. خالد المطيري",
      date: "5 نوفمبر 2024",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">المدونة</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آخر الأخبار والمقالات في عالم البناء والمقاولات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <button className="text-orange-600 hover:text-orange-700 flex items-center gap-2 group/btn">
                  <span>اقرأ المزيد</span>
                  <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
