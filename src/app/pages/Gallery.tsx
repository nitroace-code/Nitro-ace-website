import { ImageWithFallback } from "../components/figma/ImageWithFallback";
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

export function Gallery() {
  const images = [
    {
      src: img9,
      title: "DKDC AIR1 EV",
      category: "Goa",
    },
    {
      src: img10,
      title: "DKDC AIR1 EV",
      category: "FMAE",
    },  
    {
      src: newImg,
      title: "Presented with the Achievement to ACE Engineering College Management",
      category: "DKDC S3",
    },
        {
      src: img11,
      title: "Presented with the Achievement to Mr. Raghu Vamshi, NITRO-ACE Racing External Boad ",
      category: "DKDC S3",
    },
     {
      src: img13,
      title: "Presented with the Achievement to ACE Engineering College Principal",
      category: "DKDC S3",
    },
    {
      src: img12,
      title: "Presented with the Achievement to ACE Engineering College Vice Principal & TPO",
      category: "DKDC S3",
    },
   {
      src: img8,
      title: "Competition Day",
      category: "DKDC S3",
    },
    {
      src: img1,
      title: "Team Meeting",
      category: "DKDC S3",
    },
    {
      src: img2,
      title: "Break Test",
      category: "DKDC S3",
    },
    {
      src: img3,
      title: "Team",
      category: "DKDC S3",
    },
    {
      src: img4,
      category: "Technical",
    },
    {
      src: img5,
      category: "Workshop",
    },
    {
      src: img6,
      category: "Workshop",
    },
    {
      src: img7,
      category: "Technical",
    },
     ];

  const categories = ["All", "Competition", "Workshop", "Technical", "DKDC S3"];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white mb-6">Gallery</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A glimpse into our journey - from the workshop to the race track.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-zinc-900 text-zinc-300 rounded-lg border border-zinc-800 hover:border-red-500 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg mb-1">{image.title}</p>
                  <p className="text-red-500 text-sm">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl text-white mb-4">See More on Social Media</h2>
          <p className="text-zinc-400 mb-8">
            Follow us on Instagram for daily updates, behind-the-scenes content, and race highlights
          </p>
          <a
            href="https://instagram.com/nitroace_racing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold"
          >
            @nitroace_racing
          </a>
        </div>
      </div>
    </div>
  );
}