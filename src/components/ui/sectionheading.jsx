// components/ui/SectionHeading.jsx
import React from "react";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
