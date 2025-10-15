"use client";


import Link from "next/link";
import { useTranslation } from "react-i18next";

const applicationAreas = [
  {
    titleKey: "applicationAreas.finance.title",
    href: "/application-areas/finance",
    descriptionKey: "applicationAreas.finance.description",
    image: "/application-areas/finance/thumbnail.jpg",
  },
  {
    titleKey: "applicationAreas.government.title",
    href: "/application-areas/government",
    descriptionKey: "applicationAreas.government.description",
    image: "/application-areas/government/thumbnail.jpg",
  },
  {
    titleKey: "applicationAreas.manufacturing.title",
    href: "/application-areas/manufacturing",
    descriptionKey: "applicationAreas.manufacturing.description",
    image: "/application-areas/manufacturing/thumbnail.jpg",
  },
  {
    titleKey: "applicationAreas.building.title",
    href: "/application-areas/building",
    descriptionKey: "applicationAreas.building.description",
    image: "/application-areas/building/thumbnail.jpg",
  },
  {
    titleKey: "applicationAreas.seaport.title",
    href: "/application-areas/seaport",
    descriptionKey: "applicationAreas.seaport.description",
    image: "/application-areas/seaport/thumbnail.jpg",
  },
];

export default function ApplicationAreasPage() {
  const { t } = useTranslation();
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
      <h1 className="text-3xl font-bold mb-8 text-center opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">{t('applicationAreas.title')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
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
                alt={t(area.titleKey)}
                className="w-full aspect-[4/3] object-cover rounded-t-xl shadow-md border-b border-border bg-white dark:bg-card"
                loading="lazy"
              />
            </div>
            <div className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{t(area.titleKey)}</div>
            <div className="text-sm text-muted-foreground">{t(area.descriptionKey)}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
