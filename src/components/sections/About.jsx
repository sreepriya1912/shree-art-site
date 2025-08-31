import React from "react";
import SectionHeading from "@/components/ui/sectionheading";

export default function About() {
  return (
    <section id="about" className="py-12 bg-amber-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading title="About Us" />
        <p className="text-gray-700 leading-relaxed">
          Shree School of Arts preserves traditional Indian art forms while
          embracing modern expression. Led by a Master of Fine Arts with
          decades of experience, we create Tanjore, Oil, and Acrylic paintings
          and also train students of all ages.
        </p>
      </div>
    </section>
  );
}
