"use client";

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section = ({ children, className, ...props }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className={cn(
        'container mx-auto py-16 md:py-24 transition-opacity duration-1000 ease-in',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export const SectionTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn("text-3xl font-bold font-headline tracking-tight md:text-4xl mb-12 text-center", className)} {...props}>
        {children}
    </h2>
)

export default Section;
