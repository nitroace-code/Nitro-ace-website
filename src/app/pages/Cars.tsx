import { Car, Trophy } from "lucide-react";
import { Link } from "react-router";
import carImage from "@/imports/IMG_20260329_125407.jpg";

export function Cars() {
  const carSpecs = [
    { label: "Vehicle Model", value: "EV001" },
    { label: "Type", value: "Electric Racing Car" },
    { label: "Competition", value: "DKDC Season 3" },
    { label: "Achievement", value: "AIR 1" },
    { label: "Team", value: "NITRO-ACE Racing" },
    { label: "College", value: "ACE Engineering College" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Car className="w-10 h-10 text-red-600" />
            <h1 className="text-4xl font-bold text-white">Our Racing Car</h1>
          </div>
          <p className="text-zinc-400">Meet our championship-winning electric racing vehicle</p>
        </div>

        {/* Main Car Image with WIN BADGE */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="relative h-[600px]">
              <img
                src={carImage}
                alt="NITRO-ACE Racing Car"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>

              {/* WIN RIBBON BADGE — top right */}
              <div className="absolute top-6 right-6 z-20 flex flex-col items-center">
                {/* Ribbon shape */}
                <div className="relative">
                  <div className="bg-yellow-400 text-zinc-900 px-5 py-3 rounded-t-xl font-black text-center shadow-2xl shadow-yellow-400/40 border-2 border-yellow-300">
                    <div className="flex items-center gap-2 justify-center mb-0.5">
                      <Trophy className="w-5 h-5 text-red-600" />
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-800">DKDC Season 3</span>
                      <Trophy className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="text-3xl font-black text-zinc-900 leading-none">AIR 1</div>
                    <div className="text-xs font-bold text-red-700 tracking-wide mt-0.5">ALL INDIA RANK</div>
                  </div>
                  {/* Ribbon tails */}
                  <div className="flex">
                    <div className="flex-1 h-4 bg-yellow-500" style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}></div>
                    <div className="w-0.5 bg-yellow-600"></div>
                    <div className="flex-1 h-4 bg-yellow-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%)" }}></div>
                  </div>
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-xl blur-xl bg-yellow-400/30 -z-10 scale-110"></div>
              </div>

              {/* Bottom car label */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">EV001</h2>
                    <p className="text-lg text-zinc-300">Electric Racing Championship Vehicle</p>
                  </div>
                  {/* Mini badge bottom left */}
                  <div className="hidden sm:flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/40 rounded-lg px-4 py-2 backdrop-blur-sm">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-yellow-300 font-bold text-sm leading-none">1st Competition</p>
                      <p className="text-yellow-400/70 text-xs">1st Win 🏆</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* First Competition First Win Banner */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-yellow-500/10 via-amber-400/10 to-yellow-500/10 border border-yellow-400/30 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Trophy className="w-12 h-12 text-yellow-400 flex-shrink-0 animate-pulse" />
            <div className="flex-1">
              <h3 className="text-yellow-300 font-black text-xl tracking-wide">FIRST COMPETITION. FIRST WIN.</h3>
              <p className="text-zinc-300 text-sm mt-1">
                NITRO-ACE Racing secured <span className="text-yellow-400 font-bold">All India Rank 1 in the EV Category</span> at DKDC Season 3 — the very first competition we ever entered.
              </p>
            </div>
            <Link
              to="/our-story"
              className="flex-shrink-0 px-5 py-2 bg-yellow-400 text-zinc-900 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors"
            >
              Our Story →
            </Link>
          </div>
        </div>

        {/* Car Specifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Vehicle Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {carSpecs.map((spec, index) => (
              <div
                key={index}
                className={`bg-zinc-900 border rounded-lg p-6 hover:border-red-600 transition-colors ${
                  spec.label === "Achievement" ? "border-yellow-400/40 bg-yellow-400/5" : "border-zinc-800"
                }`}
              >
                <p className="text-zinc-400 text-sm mb-1">{spec.label}</p>
                <p className={`text-xl font-semibold ${spec.label === "Achievement" ? "text-yellow-400" : "text-white"}`}>
                  {spec.label === "Achievement" && <Trophy className="inline w-5 h-5 mr-2 mb-1" />}
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About EV001 */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">About EV001</h3>
            <p className="text-zinc-400 text-justify leading-relaxed mb-4">
              EV001 is NITRO-ACE Racing's flagship electric racing vehicle, designed and built by our talented team of engineering students at ACE Engineering College. This vehicle represents the culmination of months of research, design, testing, and refinement.
            </p>
            <p className="text-zinc-400 text-justify leading-relaxed">
              Our team achieved All India Rank 1 in DKDC Season 3 with this vehicle, demonstrating our commitment to excellence in engineering, innovation, and competitive motorsport. The EV001 showcases cutting-edge electric vehicle technology, optimized aerodynamics, and superior handling characteristics that set it apart on the race track.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
