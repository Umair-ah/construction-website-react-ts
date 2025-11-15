import { Briefcase, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-white">البناء المتميز</h3>
                <p className="text-xs text-gray-400">شركة مقاولات عامة</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              نحن شركة رائدة في مجال المقاولات العامة والبناء، نقدم خدمات متميزة بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-white">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("about")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  من نحن
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("construction-works")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  خدماتنا
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("portfolio")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  معرض الأعمال
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("blog")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  المدونة
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  اتصل بنا
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-white">خدماتنا</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("construction-works")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  الأعمال الإنشائية
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("finishing-works")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  أعمال التشطيب
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("insulation")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  العزل والحماية
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("restoration")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  الترميم والصيانة
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("general-contracting")} className="text-gray-400 hover:text-orange-500 transition-colors">
                  المقاولات العامة
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-white">معلومات الاتصال</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400" dir="ltr">+966 50 123 4567</p>
                  <p className="text-gray-400" dir="ltr">+966 11 234 5678</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400 text-sm">info@albinaa-construction.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  شارع الملك فهد، حي العليا<br />
                  الرياض 12345، السعودية
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © 2024 البناء المتميز. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
