import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">اتصل بنا</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في تحقيق مشروعكم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6 text-gray-900">أرسل لنا رسالة</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-700">الاسم الكامل</label>
                  <Input
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">رقم الهاتف</label>
                  <Input
                    type="tel"
                    placeholder="05xxxxxxxx"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">الموضوع</label>
                  <Input
                    type="text"
                    placeholder="موضوع الرسالة"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-700">الرسالة</label>
                  <Textarea
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    required
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  size="lg"
                >
                  <Send className="ml-2 h-5 w-5" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-gray-900">الهاتف</h4>
                    <p className="text-gray-600 mb-1" dir="ltr">+966 50 123 4567</p>
                    <p className="text-gray-600" dir="ltr">+966 11 234 5678</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-gray-900">البريد الإلكتروني</h4>
                    <p className="text-gray-600 mb-1">info@albinaa-construction.com</p>
                    <p className="text-gray-600">sales@albinaa-construction.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-gray-900">العنوان</h4>
                    <p className="text-gray-600">
                      شارع الملك فهد، حي العليا<br />
                      الرياض 12345، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="shadow-lg bg-gradient-to-br from-orange-600 to-orange-700 text-white">
              <CardContent className="p-6">
                <h4 className="mb-4 text-white">ساعات العمل</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>السبت - الخميس</span>
                    <span>8:00 ص - 6:00 م</span>
                  </div>
                  <div className="flex justify-between">
                    <span>الجمعة</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
