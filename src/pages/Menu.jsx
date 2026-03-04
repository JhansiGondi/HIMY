import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sampleImg from "../assets/images/indo-chinese.png";
import vegfriedrice from "../assets/images/veg-fried-rice.jpg";
import chickenfriedrice from "../assets/images/chicken-fried-rice.jpg";
import eggfriedrice from "../assets/images/egg-fried-rice.jpg";
import gobifriedrice from "../assets/images/gobi-fried-rice.jpg";
import vegnoodles from "../assets/images/veg-noodles.jpg";
import eggnoodles from "../assets/images/egg-noodles.jpg";
import gobinoodles from "../assets/images/gobi-noodles.jpg";
import chickennoodles from "../assets/images/chicken-noodles.jpg";
import plaindosa from "../assets/images/plain-dosa.jpg";
import masaladosa from "../assets/images/masala-dosa.jpg";
import gheekaramdosa from "../assets/images/ghee-karam-dosa.jpg";
import eggdosa from "../assets/images/egg-dosa.jpg";
import oniondosa from "../assets/images/onion-dosa.jpg";
import vegmanchurian from "../assets/images/veg-manchurian.avif";
import chickenmanchurian from "../assets/images/chicken-manchurian.jpg";
import gobiManchurian from "../assets/images/gobi-manchurian.jpg";
import chai from "../assets/images/chai.jpg";
import mangolassi from "../assets/images/mango-lassi.jpg";
import sweetlassi from "../assets/images/sweet-lassi.jpg";
import coke from "../assets/images/coke.jpg";
import ourspecialplatter from "../assets/images/our-special-plater.jpg";
import poorichicken from "../assets/images/poori-chicken.jpg";
import dosachicken from "../assets/images/dosa-chicken.jpg";
import bagararicechicken from "../assets/images/bagara-rice-chicken.jpg";
import punugulu from "../assets/images/punugulu.jpg";
import mirchibajji from "../assets/images/mirchi-bajji.jpg";
import cokezero from "../assets/images/coke-zero.png";
import sprite from "../assets/images/sprite.jpg";
import water from "../assets/images/water.png";

/* ================= MENU DATA ================= */

const menuData = {
  RICE: [
    { title: "VEG FRIED RICE", price: "4.99", img: vegfriedrice },
    { title: "GOBI FRIED RICE", price: "5.49", img: gobifriedrice },
    { title: "EGG FRIED RICE", price: "5.49", img: eggfriedrice, popular: true },
        { title: "CHICKEN FRIED RICE", price: "6.49", img: chickenfriedrice },

  ],
  NOODLES: [
    { title: "VEG NOODLES", price: "4.99", img: vegnoodles },
    { title: "GOBI NOODLES", price: "5.49", img: gobinoodles },
    { title: "EGG NOODLES", price: "5.49", img: eggnoodles, popular: true },
    { title: "CHICKEN NOODLES", price: "6.49", img: chickennoodles },
  ],
  DOSA: [
    { title: "PLAIN DOSA", price: "3.99", img: plaindosa },
    { title: "MASALA DOSA", price: "4.99", img: masaladosa, popular: true },
     { title: "GHEE KARAM DOSA", price: "4.49", img: gheekaramdosa },
    { title: "EGG DOSA", price: "4.49", img: eggdosa },
     { title: "ONION DOSA", price: "3.99", img: oniondosa },
  ],
   MANCHURIAN: [
    { title: "VEG MANCHURIAN", price: "5.99", img:  vegmanchurian,},
     { title: "CHICKEN MANCHURIAN", price: "6.49", img:   chickenmanchurian , popular: true },
    { title: "GOBI MANCHURIAN", price: "5.99", img:   gobiManchurian },
  ],
  "OUR SPECIAL PLATER": [
    { title: "RICE, NOODLES, MANCHURIAN", price: "9.99", img: ourspecialplatter },
  ],
  "SPECIAL COMBO": [
    { title: "PURI WITH CHICKEN CURRY", price: "5.99", img: poorichicken },
    { title: "DOSA WITH CHICKEN CURRY", price: "6.99", img: dosachicken },
  ],
  "OUR SPECIAL ITEMS": [
    { title: "PUNUGULU", price: "4.99", img:punugulu },
    { title: "MIRCHI BAJI", price: "4.99", img:mirchibajji },
    { title: "BAGARA RICE WITH CHICKEN CURRY", price: "8.99", img: bagararicechicken },
    { title: "CHAI", price: "1.99", img: chai },
  ],
  DRINKS: [
    { title: "MANGO LASSI", price: "3.99", img:mangolassi },
    { title: "SWEET LASSI", price: "2.99", img:sweetlassi },
    { title: "COKE", price: "1.50", img:coke },
    { title: "COKE ZERO", price: "1", img: cokezero },
    { title: "SPRITE", price: "1", img: sprite },
    { title: "WATER", price: "1", img: water },
  ],
};

/* ================= MENU CARD ================= */

const MenuCard = ({ item }) => (
  <div className="bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F]
                  border border-white/10
                  rounded-xl p-5 flex gap-5 items-center">

    <img
      src={item.img}
      alt={item.title}
      className="w-[90px] h-[90px] object-cover rounded-lg"
    />

    <div className="flex-1">
      <div className="flex justify-between items-center">
        <h3 className="font-bebas text-2xl">
          {item.title}
        </h3>

        <span className="text-[#F43325] font-semibold">
          £{item.price}
        </span>
      </div>

      {item.popular && (
        <span className="bg-[#F43325] text-xs px-3 py-1 rounded-full text-white mt-2 inline-block">
          POPULAR
        </span>
      )}

      <p className="text-gray-400 text-sm mt-2">
        Hot, smoky street-style food loaded with fresh vegetables.
      </p>
    </div>
  </div>
);

/* ================= MAIN PAGE ================= */

const Menu = () => {
  const categories = Object.keys(menuData);
  const sectionRefs = useRef({});
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  /* ===== Smooth Scroll ===== */
  const scrollToSection = (category) => {
    const section = sectionRefs.current[category];
    if (section) {
      const yOffset = -120; // Adjust if you have fixed header
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  /* ===== Active Tab On Scroll ===== */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let category of categories) {
        const section = sectionRefs.current[category];
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveCategory(category);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">

      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#141414] to-[#0A0A0A] py-32 pt-[180px] text-center">
        <p className="text-[#F43325] uppercase mb-6">OUR MENU</p>

        <h1 className="font-bebas text-4xl md:text-6xl lg:text-[72px]
                       bg-gradient-to-r from-[#F43325] to-[#F98006]
                       bg-clip-text text-transparent">
          MOST-LOVED STREET PICKS
        </h1>

        <p className="mt-4">
          From India’s vibrant streets straight to your plate.
        </p>
      </section>

      {/* CATEGORY BAR */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A] border-b border-white/10 py-5">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => scrollToSection(cat)}
              className={`px-5 py-2 rounded-full text-sm transition
                ${
                  activeCategory === cat
                    ? "bg-[#F43325] text-white"
                    : "bg-[#1F1F1F] text-gray-300 hover:bg-[#2A2A2A]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ALL SECTIONS */}
      <section className="max-w-[1200px] mx-auto px-6 py-20 space-y-32">

        {categories.map((category) => (
          <div
            key={category}
            ref={(el) => (sectionRefs.current[category] = el)}
          >
            <h2 className="font-bebas text-5xl mb-10">
              {category}
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {menuData[category].map((item, index) => (
                <MenuCard key={index} item={item} />
              ))}
            </div>
          </div>
        ))}

      </section>

      <Footer />
    </div>
  );
};

export default Menu;