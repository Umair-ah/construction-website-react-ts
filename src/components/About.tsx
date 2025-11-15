import { CheckCircle, Award, Users, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">من نحن</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن شركة رائدة في مجال المقاولات العامة، نقدم حلول بناء متكاملة بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1718209962486-4f91ce71886b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjMxOTg3NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="فريق العمل"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-3xl mb-6 text-gray-900">رؤيتنا ورسالتنا</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              نسعى لأن نكون الخيار الأول في مجال المقاولات والبناء في المنطقة من خلال تقديم خدمات 
              استثنائية تتميز بالجودة والإبداع والالتزام بالمواعيد. نؤمن بأن كل مشروع هو فرصة لبناء 
              علاقات طويلة الأمد مع عملائنا.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-1">التزام بالجودة</h4>
                  <p className="text-gray-600">نستخدم أفضل المواد وأحدث التقنيات لضمان جودة عالية</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-1">فريق محترف</h4>
                  <p className="text-gray-600">مهندسون وعمال ذوو خبرة وكفاءة عالية</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-1">أسعار تنافسية</h4>
                  <p className="text-gray-600">نقدم أفضل الأسعار دون المساومة على الجودة</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Award className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl mb-1">+50</div>
                <div className="text-sm text-gray-600">جائزة تميز</div>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl mb-1">+100</div>
                <div className="text-sm text-gray-600">موظف محترف</div>
              </div>

              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl mb-1">98%</div>
                <div className="text-sm text-gray-600">معدل النجاح</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
