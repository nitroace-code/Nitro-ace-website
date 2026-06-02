import { Target, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import aboutImage1 from "../../imports/IMG20260303135127.jpg";
import aboutImage2 from "../../imports/IMG20260303131605.jpg";

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const aboutImages = [aboutImage1, aboutImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [aboutImages.length]);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white mb-6">About Us</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            NITRO-ACE Racing is a student-led motorsport team dedicated to engineering excellence and competitive racing.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Our Story</h2>
            <div className="space-y-4 text-zinc-300 text-justify" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              <p>
                Founded in 2025 at ACE Engineering College, NITRO-ACE Racing is a college motorsport team built with a vision to shape the engineers of tomorrow through real-world, hands-on experience in vehicle design, manufacturing, and racing.
              </p>
              <p>
                What began as a passionate initiative by students has quickly grown into a multidisciplinary team bringing together members from mechanical, electrical, electronics, and computer science backgrounds. Our goal is simple yet ambitious — to transform classroom knowledge into real engineering by designing and building competitive racing vehicles from the ground up.
              </p>
              <p>
                From concept and CAD design to fabrication, testing, and racing, every project gives our members invaluable industry-level practical exposure. We believe the best way to learn engineering is by building, breaking, improving, and racing.
              </p>
              <p>
                Our journey started with a strong milestone — we secured AIR 1 in DKDC Season 3, the very first event we registered for. This achievement marked the beginning of our competitive journey and reflects the dedication, teamwork, and innovation that define our club.
               </p>
              <p>
                Beyond competitions, NITRO-ACE Racing is a platform where students develop technical expertise, leadership, teamwork, and lifelong friendships while pushing the limits of student motorsport.
              </p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden relative h-[400px]">
            {aboutImages.map((image, index) => (
              <ImageWithFallback
                key={index}
                src={image}
                alt="Team garage"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <Target className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl text-white mb-4">Our Mission</h3>
            <p className="text-zinc-400">
              To provide students with hands-on engineering experience through competitive motorsport, fostering innovation, teamwork, and technical excellence.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <Award className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl text-white mb-4">Our Vision</h3>
            <p className="text-zinc-400">
              To be recognized as a leading collegiate motorsport team, known for pushing boundaries in automotive technology and developing future industry leaders.
            </p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <Heart className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl text-white mb-4">Our Values</h3>
            <p className="text-zinc-400">
              Excellence, Innovation, Teamwork, Safety, and Continuous Learning drive everything we do, from design to competition day.
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-zinc-900 rounded-xl p-8 border border-zinc-800">
          <h2 className="text-3xl text-white mb-8 text-center">Recent Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white">
                  🏆
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">DKDC Season 3</h4>
                <p className="text-zinc-400">AIR 1 in EV Category</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}