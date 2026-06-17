'use client';

import { FC } from 'react';
import Image from 'next/image';
import { sponsors } from '../../../data/sponsors';

const SponsorsSection: FC = () => {
  return (
    <section id="sponsors" className="w-full bg-gray-50 section-spacing">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Our Partners</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">Sponsors</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-6 rounded-xl border border-gray-200 hover:shadow-sm transition-all duration-200 min-h-[80px]"
            >
              {sponsor.logoUrl ? (
                <img
                  src={sponsor.logoUrl}
                  alt={sponsor.name}
                  // width={160}
                  // height={80}
                  className="max-w-full h-auto object-contain"
                />
              ) : (
                <span className="text-gray-600 group-hover:text-black transition-colors duration-200 text-center text-sm font-medium">
                  {sponsor.name}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
