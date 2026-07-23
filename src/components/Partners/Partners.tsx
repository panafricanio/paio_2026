'use client';

import { FC } from 'react';
import Image from 'next/image';
import { partners } from '../../../data/partners';

const PartnersSection: FC = () => {
  console.log("partners: ", partners);
  return (
    <section id="partners" className="w-full bg-gray-50 section-spacing">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Partners</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-6 rounded-xl border border-gray-200 hover:shadow-sm transition-all duration-200 min-h-[80px]"
            >
              {partner.logoUrl ? (
                <img
                  src={'/sponsors/minict.png'}
                  alt={partner.name}
                  // width={160}
                  // height={80}
                  className="max-w-full h-auto object-contain"
                />
              ) : (
                <span className="text-gray-600 group-hover:text-black transition-colors duration-200 text-center text-sm font-medium">
                  {partner.name}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
