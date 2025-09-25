"use client";

import Link from "next/link";

const applicationAreas = [
  {
    title: "Tài chính - Ngân hàng - Bảo hiểm",
    href: "/application-areas/finance",
    description: "Giải pháp dashboard cho ngành tài chính, ngân hàng, bảo hiểm...",
    image: "/application-areas/finance/image.jpg",
  },
  {
    title: "Chính phủ - Cơ quan ban ngành",
    href: "/application-areas/government",
    description: "Giám sát, quản trị dữ liệu cho các cơ quan nhà nước, đô thị thông minh...",
    image: "/application-areas/government/image.jpg",
  },
  {
    title: "Công nghiệp - Sản xuất",
    href: "/application-areas/manufacturing",
    description: "Tối ưu vận hành, quản lý sản xuất, chất lượng, bảo trì...",
    image: "/application-areas/manufacturing/image.jpg",
  },
  {
    title: "Điện - Viễn thông",
    href: "/application-areas/building",
    description: "Quản lý hạ tầng, dịch vụ, khách hàng ngành viễn thông...",
    image: "/application-areas/building/image.jpg",
  },
];

export default function ApplicationAreasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(2rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <h1 className="text-3xl font-bold mb-8 text-center opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">Lĩnh vực ứng dụng</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {applicationAreas.map((area, index) => (
          <Link
            key={area.href}
            href={area.href}
            className="block bg-white dark:bg-card border border-border rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center group transform transition-transform duration-300 hover:-translate-y-2 opacity-0 translate-y-8 animate-[fadeInUp_0.6s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-6 -mx-6 -mt-6">
              <img
                src={area.image}
                alt={area.title}
                className="w-full aspect-[4/3] object-cover rounded-t-xl shadow-md border-b border-border bg-white dark:bg-card"
                loading="lazy"
              />
            </div>
            <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{area.title}</div>
            <div className="text-sm text-muted-foreground">{area.description}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
