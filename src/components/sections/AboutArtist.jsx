import React from "react";
import { Award, GraduationCap, Palette, Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/sectionheading";

export default function AboutArtist({
  photoUrl = "/images/Surya.png",
  name = "Suryanarayana Y. A.",
  education = "Masters in Fine Arts and an alumni of Karnataka Chitrakala Parishath",
  years = "30+",
  school = "Kendriya Vidyalaya AFS Yelahanka, Bengaluru",
  joinDate = "Aug 1995",
  highlights = [
    "Began career as Assistant Art Director in the Kannada Film Industry; joined Kendriya Vidyalaya in Aug 1995.",
    "Drove student participation and program improvements across regional and national art & cultural events.",
    "Skilled in traditional Tanjore (relief & gold foil), realistic oil portraits, and contemporary acrylics.",
    "Contributed designs/mascots for KVS National Sports, Annual Day and cultural events.",
  ],
  awards = ["Regional/National Incentive recognitions (years as applicable)"],
}) {
  // safe short name for the stat card
  const schoolShort = (school || "").split(",")[0] || "Kendriya Vidyalaya";

  return (
    <section id="about-artist" className="py-12 bg-amber-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <SectionHeading title="About the Artist" />

        {/* Layout: image left, content right */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Photo card */}
          <div className="mx-auto w-full max-w-sm">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-2 ring-amber-400/60 bg-white">
              <img
                src="/images/Surya.png"
                alt={name}
                className="w-full h-[420px] object-cover"
              />
              <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-100">
                <p className="text-center font-semibold text-stone-800">{name}</p>
                <p className="text-center text-sm text-stone-600">Artist</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2">
            <p className="text-stone-700 leading-relaxed text-lg mb-6">
              <strong>{name}</strong> is a multidisciplinary artist and veteran art educator,
              with <strong>{education}</strong>. With a career spanning{" "}
              <strong>{years}</strong> years, he has guided students while creating original
              works in <strong>Tanjore</strong>, <strong>Oil</strong>, and{" "}
              <strong>Acrylic</strong>.
            </p>

            {/* Stats row */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
              <Stat
                icon={<GraduationCap className="w-5 h-5" />}
                title="Educator"
                text={`ICT–Art · ${schoolShort}`}
              />
              <Stat
                icon={<Palette className="w-5 h-5" />}
                title="Mediums"
                text="Tanjore · Oil · Acrylic · Mixed Media"
              />
              <Stat
                icon={<Trophy className="w-5 h-5" />}
                title="Recognition"
                text="Regional and National Incentive award by KVS"
              />
              <Stat
                icon={<Award className="w-5 h-5" />}
                title="Since"
                text={joinDate}
              />
            </div>

            {/* Bullets */}
            <ul className="space-y-2 text-stone-800">
              {highlights.map((line, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600/80 shrink-0" />
                  <span>{line}</span>
                </li>
              ))}

              {awards?.length > 0 && (
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-600/80 shrink-0" />
                  <span>
                    Honoured with{" "}
                    <span className="font-medium">{awards.join(" · ")}</span>; continues
                    to teach, mentor and accept commissioned work for patrons in India and abroad.
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, title, text }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-amber-100 rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-2 text-amber-700 font-semibold">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-stone-700 mt-1 text-sm">{text}</div>
    </div>
  );
}
