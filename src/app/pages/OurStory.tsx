import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Award, Heart, Trophy, X } from "lucide-react";

import aboutImage1 from "../../imports/IMG20260303135127.jpg";
import aboutImage2 from "../../imports/IMG20260303131605.jpg";
import img1 from "@/imports/IMG_2956.jpg";
import img2 from "@/imports/IMG_6417_(1).JPG";
import img3 from "@/imports/fcfb5c96-c48e-4301-8c55-c2f99f6027d8.jpg";
import img4 from "@/imports/IMG_20260305_162437.jpg";
import img5 from "@/imports/IMG_5667.JPG";
import img6 from "@/imports/IMG20260303135127-1.jpg";
import img7 from "@/imports/IMG20260303131605-1.jpg";
import img8 from "@/imports/IMG_6458-1.JPG";
import img9 from "@/imports/IMG_6823-1.jpg";
import img10 from "@/imports/IMG_3114_(1)-1.JPG";
import img11 from "@/imports/WhatsApp_Image_2026-04-16_at_13.12.11.jpeg";
import img12 from "@/imports/WhatsApp_Image_2026-04-16_at_13.12.13_(1).jpeg";
import img13 from "@/imports/WhatsApp_Image_2026-04-16_at_13.12.13.jpeg";
import img14 from "@/imports/WhatsApp_Image_2026-04-16_at_13.12.12.jpeg";
import img15 from "@/imports/WhatsApp_Image_2026-04-16_at_13.12.11-1.jpeg";
import newImg from "@/imports/WhatsApp_Image_2026-04-19_at_12.53.18.jpeg";

interface PopupData {
  src: string;
  title: string;
  desc: string;
}

export function OurStory() {
  const [selectedImage, setSelectedImage] = useState<PopupData | null>(null);

  // You can now manually edit the title and desc for every single image here
  const chapters = [
    {
      year: "2025",
      title: "The Beginning",
      body: "Founded at ACE Engineering College, NITRO-ACE Racing was born from a simple but bold idea — give students a real engineering challenge. A small group of passionate students from mechanical, electrical, and computer science backgrounds came together with zero budget and maximum ambition.",
      images: [
        { src: img5, title: "", desc: "Workshop" },
        { src: img4, title: "", desc: "Technical" }
      ],
    },
    {
      year: "Early 2026",
      title: "Building the Workshop",
      body: "With hands-on work sessions running 6 days a week, the team began fabricating their first electric racing vehicle — EV001. Every weld, every wire, and every CAD model was a lesson learned the hard way.",
      images: [
        { src: img6, title: "", desc: "Workshop" },
        { src: img7, title: "", desc: "Technical" }
      ],
    },
    {
      year: "March 2026",
      title: "Test & Refine",
      body: "Brake tests, powertrain trials, and suspension tuning — the team pushed EV001 to its limits before the competition. Every failure became a breakthrough.",
      images: [
        { src: img2, title: "Break Test", desc: "DKDC S3" },
        { src: img1, title: "Team Meeting", desc: "DKDC S3" }
      ],
    },
    {
      year: "DKDC Season 3",
      title: "Our First Win",
      body: "In our very first competition appearance, NITRO-ACE Racing secured AIR 1 in the EV category at DKDC Season 3. A moment that proved the vision — engineering students, given the right challenge, rise to the occasion.",
      images: [
        { src: img8, title: "Competition Day", desc: "DKDC S3" },
        { src: img9, title: "DKDC AIR1 EV", desc: "Goa" },
        { src: img10, title: "DKDC AIR1 EV", desc: "FMAE" }
      ],
      highlight: true,
    },
    {
      year: "April 2026",
      title: "Celebrated by the College",
      body: "The achievement was presented to the college management, principal, vice principal, and the external board. A proud moment not just for the team, but for ACE Engineering College.",
      images: [
        { src: newImg, title: "Presented with the Achievement to ACE Engineering College Management", desc: "DKDC S3" },
        { src: img11, title: "Presented with the Achievement to Mr. Raghu Vamshi, NITRO-ACE Racing External Boad", desc: "DKDC S3" },
        { src: img13, title: "Presented with the Achievement to ACE Engineering College Principal", desc: "DKDC S3" },
        { src: img14, title: "Presented with the Achievement to ACE Engineering College Management", desc: "DKDC S3" }
      ],
    },
    {
      year: "Ongoing",
      title: "What's Next",
      body: "The team is now preparing for MORPHINE Motorsport Series Season 2 (October 2026) and continuing to expand with 50+ active members across 6 departments. The journey has only just begun.",
      images: [
        { src: img3, title: "Team", desc: "DKDC S3" },
        { src: img12, title: "Presented with the Achievement to ACE Engineering College Vice Principal & TPO", desc: "DKDC S3" }
      ],
    },
  ];

  return (
    <div className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl text-white mb-4 tracking-tight">
            Our Story
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From an idea in a classroom to All India Rank 1 — this is how
            NITRO-ACE Racing was built.
          </p>
        </div>

        {/* Timeline Chapters */}
        <div className="space-y-28">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text Side */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      chapter.highlight
                        ? "bg-yellow-400 text-zinc-900"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {chapter.year}
                  </span>

                  {chapter.highlight && (
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  )}
                </div>

                <h2
                  className={`text-3xl md:text-4xl font-bold mb-5 ${
                    chapter.highlight ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {chapter.title}
                </h2>

                <p className="text-zinc-300 text-lg leading-relaxed text-justify">
                  {chapter.body}
                </p>

                {chapter.highlight && (
                  <div className="mt-6 inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/30 rounded-xl px-5 py-3">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-300 font-semibold">
                      AIR 1 — DKDC Season 3, EV Category
                    </span>
                  </div>
                )}
              </div>

              {/* Images Side */}
              <div
                className={`grid gap-3 ${
                  chapter.images.length === 1
                    ? "grid-cols-1"
                    : "grid-cols-2"
                } ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {chapter.images.map((imageObj, imgIdx) => (
                  <div
                    key={imgIdx}
                    // Pass the specific image object data to state
                    onClick={() => setSelectedImage(imageObj)}
                    className={`rounded-xl overflow-hidden bg-zinc-900 cursor-pointer hover:opacity-90 transition ${
                      chapter.images.length === 3 && imgIdx === 0
                        ? "col-span-2 h-52"
                        : chapter.images.length === 4
                        ? "h-44"
                        : "h-56"
                    }`}
                  >
                    <ImageWithFallback
                      src={imageObj.src}
                      alt={imageObj.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-28 border-t border-zinc-800" />

        {/* Mission / Vision / Values */}
        <div className="mb-20">
          <h2 className="text-4xl text-white text-center mb-12">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <Target className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-zinc-400">
                To provide students with hands-on engineering experience through
                competitive motorsport, fostering innovation, teamwork, and
                technical excellence.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <Award className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-zinc-400">
                To be recognized as a leading collegiate motorsport team, known
                for pushing boundaries in automotive technology and developing
                future industry leaders.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
              <Heart className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-2xl text-white mb-4">Our Values</h3>
              <p className="text-zinc-400">
                Excellence, Innovation, Teamwork, Safety, and Continuous
                Learning drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width overlay with natural image dimensions */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-red-500 transition z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>

          <div
            // Wrapper tightly hugs the natural width of the image
            className="relative rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              // Set height to 90vh and width to auto to scale perfectly without object-fit
              // Added max-w-[95vw] to prevent horizontal overflow on smaller screens
              className="h-[90vh] w-auto max-w-[95vw] block"
            />
            
            {/* Overlay spans the full width of the wrapper */}
            <div className="absolute inset-x-0 bottom-0 w-full p-8 md:p-10 text-left bg-gradient-to-t from-black/95 via-black/70 to-transparent">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 leading-snug drop-shadow-md">
                {selectedImage.title}
              </h3>
              <p className="text-red-500 text-lg md:text-xl font-bold drop-shadow-md">
                {selectedImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}