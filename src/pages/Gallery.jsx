import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ✅ Import Images Properly
import g1 from "../assets/images/gallery1.jpg";
import g2 from "../assets/images/gallery2.jpg";
import g3 from "../assets/images/gallery3.jpg";
import g4 from "../assets/images/gallery4.jpg";
import g5 from "../assets/images/gallery5.jpg";
import g6 from "../assets/images/gallery6.jpg";
import g7 from "../assets/images/gallery7.jpg";
import g8 from "../assets/images/gallery8.jpg";

const Gallery = () => {

  const images = [g1, g2, g3, g4, g5, g6, g7, g8];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">

      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#141414] h-[500px] pt-[180px] flex items-center justify-center text-center px-6">
        <div>
          <p className="text-[#F43325] uppercase tracking-[1.4px] text-[14px] mb-4">
            Our Visuals
          </p>

          <h1 className="font-bebas text-[72px] leading-[72px] tracking-[1.44px] text-[#F5F3F0] mb-6">
            OUR <span className="text-[#FF6A00]">GALLERY</span>
          </h1>

          <p className="text-[#999999] text-[18px] leading-[28px] max-w-[693px] mx-auto">
            Spices. Stories. Street-Style Perfection.
          </p>
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="max-w-[1200px] mx-auto px-6 pb-[160px] pt-20">
        <div className="grid md:grid-cols-2 gap-10">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[24px] bg-[#1a1a1a] h-[399px]"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default Gallery;