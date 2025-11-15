import { useState } from "react";
import { Menu, X, Users, Briefcase, Star, FileText, Phone, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    { name: "الأعمال الإنشائية", id: "construction-works" },
    { name: "أعمال التشطيب", id: "finishing-works" },
    { name: "العزل والحماية", id: "insulation" },
    { name: "الترميم والصيانة", id: "restoration" },
    { name: "الأعمال التكميلية", id: "complementary" },
    { name: "المقاولات العامة", id: "general-contracting" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-orange-600">البناء المتميز</h2>
              <p className="text-xs text-muted-foreground">شركة مقاولات عامة</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>من نحن</span>
            </button>

            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                className="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>خدماتنا</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-border py-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className="w-full px-4 py-2 text-right hover:bg-orange-50 transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              <span>معرض الأعمال</span>
            </button>

            <button
              onClick={() => scrollToSection("blog")}
              className="px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>المدونة</span>
            </button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="mr-4 bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل بنا</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-orange-50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <button
              onClick={() => scrollToSection("about")}
              className="w-full px-4 py-3 text-right hover:bg-orange-50 transition-colors flex items-center gap-2 justify-end"
            >
              <span>من نحن</span>
              <Users className="w-4 h-4" />
            </button>

            <div>
              <button
                onClick={() => setActiveDropdown(activeDropdown === "services-mobile" ? null : "services-mobile")}
                className="w-full px-4 py-3 text-right hover:bg-orange-50 transition-colors flex items-center gap-2 justify-end"
              >
                <span>خدماتنا</span>
                <Briefcase className="w-4 h-4" />
              </button>
              {activeDropdown === "services-mobile" && (
                <div className="bg-orange-50 py-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className="w-full px-8 py-2 text-right hover:bg-orange-100 transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="w-full px-4 py-3 text-right hover:bg-orange-50 transition-colors flex items-center gap-2 justify-end"
            >
              <span>معرض الأعمال</span>
              <Star className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection("blog")}
              className="w-full px-4 py-3 text-right hover:bg-orange-50 transition-colors flex items-center gap-2 justify-end"
            >
              <span>المدونة</span>
              <FileText className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full px-4 py-3 text-right bg-orange-600 text-white hover:bg-orange-700 transition-colors flex items-center gap-2 justify-end mt-2 rounded-lg"
            >
              <span>اتصل بنا</span>
              <Phone className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
