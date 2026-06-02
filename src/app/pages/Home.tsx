import { Link } from "react-router";
import { Trophy, Users, Zap, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useEffect } from "react";
import heroImage1 from "../../imports/IMG_6458-1.JPG";
import heroImage2 from "../../imports/IMG_6823.jpg";
import heroImage3 from "../../imports/IMG_3114_(1).JPG";
import heroImage4 from "../../imports/IMG20260303135127.jpg";
import heroImage5 from "../../imports/IMG20260303131605.jpg";

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];

  const words = ["NITRO-ACE RACING", "STUDENT ENGINEERS", "A MOTORSPORT TEAM", "FAST","RELENTLESS","UNBREAKABLE","THE FUTURE"];

  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));

        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));

        if (typedText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <ImageWithFallback
              key={index}
              src={image}
              alt="Racing car on track"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl text-white mb-6 font-bold">
            WE ARE{" "}
            <span className="text-red-500">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Engineering excellence, racing passion. Join the fastest team on campus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/team"
              className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Meet the Team
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors font-semibold"
            >
              Join Us
            </Link>
          </div>
        </div>
        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-red-600 w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Achievement Highlight Banner */}
      <section className="py-12 bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Trophy className="w-12 h-12 md:w-16 md:h-16 text-red-600 animate-pulse" />
            <h2 
              className="text-4xl md:text-6xl lg:text-7xl text-zinc-900 tracking-wider"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              AIR 1 AT DKDC SEASON 3
            </h2>
            <Trophy className="w-12 h-12 md:w-16 md:h-16 text-red-600 animate-pulse" />
          </div>
          <div 
            className="text-2xl md:text-4xl lg:text-5xl text-red-600 mb-2 tracking-wide"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            OUR FIRST COMPETITION. OUR FIRST WIN.
          </div>
          <div className="text-lg md:text-xl text-zinc-800 font-semibold mt-4">
            Making history from day one
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-red-500 mb-2">50+</div>
              <div className="text-zinc-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-red-500 mb-2">2</div>
              <div className="text-zinc-400">Competitions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-red-500 mb-2">1</div>
              <div className="text-zinc-400">Podium Finishes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-red-500 mb-2">3</div>
              <div className="text-zinc-400">Racing Cars</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white text-center mb-16">
            Why Join NITRO-ACE?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <Trophy className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl text-white mb-2">Compete & Win</h3>
              <p className="text-zinc-400">
                Participate in regional and national motorsport competitions.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl text-white mb-2">Build Skills</h3>
              <p className="text-zinc-400">
                Gain hands-on experience in engineering, design, and project management.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <Zap className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl text-white mb-2">Innovation</h3>
              <p className="text-zinc-400">
                Work with cutting-edge technology and push the limits of performance.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">
              <Calendar className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl text-white mb-2">Network</h3>
              <p className="text-zinc-400">
                Connect with industry professionals and like-minded enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">
            Ready to Join the Team?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            We're always looking for passionate students interested in motorsport, engineering, and teamwork.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-zinc-100 transition-colors font-semibold"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}