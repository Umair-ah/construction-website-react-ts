import { Building2, Paintbrush, Shield, Wrench, Hammer, FileCheck } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Services() {
  const services = [
    {
      id: "construction-works",
      icon: Building2,
      title: "الأعمال الإنشائية",
      description: "نقدم خدمات البناء والإنشاءات بأحدث التقنيات وأعلى معايير السلامة والجودة",
      features: ["صب الخرسانة", "أعمال الحديد", "الأساسات القوية", "الهياكل الإنشائية"],
    },
    {
      id: "finishing-works",
      icon: Paintbrush,
      title: "أعمال التشطيب",
      description: "تشطيبات داخلية وخارجية بأفخر المواد وأجود التصاميم العصرية",
      features: ["الدهانات والديكورات", "تركيب السيراميك", "الأرضيات الخشبية", "الأسقف المستعارة"],
    },
    {
      id: "insulation",
      icon: Shield,
      title: "العزل والحماية",
      description: "حلول عزل متكاملة للحماية من الحرارة والرطوبة والصوت",
      features: ["العزل الحراري", "العزل المائي", "العزل الصوتي", "معالجة التسربات"],
    },
    {
      id: "restoration",
      icon: Wrench,
      title: "الترميم والصيانة",
      description: "خدمات ترميم وصيانة شاملة للمباني والمنشآت القديمة والحديثة",
      features: ["ترميم المباني", "الصيانة الدورية", "إعادة التأهيل", "معالجة التشققات"],
    },
    {
      id: "complementary",
      icon: Hammer,
      title: "الأعمال التكميلية",
      description: "جميع الأعمال التكميلية اللازمة لإتمام المشاريع بكفاءة عالية",
      features: ["السباكة", "الكهرباء", "التكييف", "الأعمال الصحية"],
    },
    {
      id: "general-contracting",
      icon: FileCheck,
      title: "المقاولات العامة",
      description: "مقاولات عامة متكاملة لجميع أنواع المشاريع السكنية والتجارية",
      features: ["إدارة المشاريع", "التخطيط والإشراف", "التسليم بالمفتاح", "الاستشارات الهندسية"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">خدماتنا</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من خدمات البناء والمقاولات لتلبية جميع احتياجاتكم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                id={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-600"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
