import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "جميع المشاريع" },
    { id: "residential", name: "سكني" },
    { id: "commercial", name: "تجاري" },
    { id: "interior", name: "تشطيبات" },
  ];

  const projects = [
    {
      id: 1,
      title: "مشروع فيلا سكنية فاخرة",
      category: "residential",
      image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzE5MjAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "الرياض",
    },
    {
      id: 2,
      title: "مبنى تجاري حديث",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMxNzQ4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "جدة",
    },
    {
      id: 3,
      title: "تشطيبات داخلية راقية",
      category: "interior",
      image: "https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3NjMxMjQ0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "الدمام",
    },
    {
      id: 4,
      title: "مشروع بناء متكامل",
      category: "residential",
      image: "https://images.unsplash.com/photo-1626233558206-28a3e90ef311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzYzMTg1MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "مكة المكرمة",
    },
    {
      id: 5,
      title: "مجمع تجاري كبير",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1751054720514-067105f538d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnQlMjBjcmFuZXxlbnwxfHx8fDE3NjMxOTg4OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "الخبر",
    },
    {
      id: 6,
      title: "فيلا عصرية متميزة",
      category: "residential",
      image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MzE5MjAyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      location: "المدينة المنورة",
    },
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">معرض الأعمال</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            استعرض بعض من أفضل مشاريعنا المنجزة بنجاح
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? "bg-orange-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-orange-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                  <h3 className="text-2xl mb-2">{project.title}</h3>
                  <p className="text-gray-200">📍 {project.location}</p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-xl mb-1">{project.title}</h3>
                <p className="text-sm text-gray-200">📍 {project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
