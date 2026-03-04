import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import heroImg from "../assets/images/shutterstock_1477286099.jpg.jpeg";
import flavours from "../assets/images/flavours.svg";
import time from "../assets/images/fast-fresh.svg";
import ingredients from "../assets/images/ingredients.svg";

import riceImg from "../assets/images/veg-fried-rice.jpg";
import noodlesImg from "../assets/images/veg-noodles.jpg";
import dosaImg from "../assets/images/masala-dosa.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  const menuItems = [
    {
      title: "RICE",
      desc: "Tangy, crunchy street snacks",
      items: "3 ITEMS",
      img: riceImg,
    },
    {
      title: "NOODLES",
      desc: "Grilled fillings in flaky parathas",
      items: "3 ITEMS",
      img: noodlesImg,
    },
    {
      title: "DOSA",
      desc: "Fiery fusion favourites",
      items: "5 ITEMS",
      img: dosaImg,
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40"></div>

        <div className="relative z-10 w-full px-6 md:px-16 lg:px-32 xl:px-60 pt-32 md:pt-40">
          <div className="max-w-[650px]">

            <div className="w-fit px-5 py-2 rounded-full border border-[#F43325]/40 bg-[#F43325]/20">
              <span className="text-[#F43325] text-[12px] md:text-[14px] font-bold">
                🔥 Now Open in London
              </span>
            </div>

            <h1 className="mt-6 font-bold 
                     text-[38px] sm:text-[50px] md:text-[70px] lg:text-[90px]
                     leading-[1.1] tracking-[2px]">
              UK'S STREET.
              <br />
              <span className="bg-gradient-to-r from-[#F43325] to-[#F98006] bg-clip-text text-transparent">
                INDIA'S HEAT.
              </span>
            </h1>

            <p className="mt-6 text-[15px] md:text-[18px] leading-[26px] text-white/90">
              Authentic Indian street flavours, served quick. From sizzling
              chaats to spicy rolls — taste the streets of India, right here in
              the UK.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">

              <Link to="/menu">
                <button className="w-full sm:w-[150px] h-[50px] rounded-[12px] 
          bg-gradient-to-r from-[#F43325] to-[#F98006] 
          shadow-[0_0_40px_rgba(244,51,37,0.3)] hover:scale-105 transition">
                  View Menu
                </button>
              </Link>

              <Link to="/contact#visit">
                <button className="w-full sm:w-[150px] h-[50px] rounded-[12px] 
          border border-white hover:bg-white hover:text-black transition">
                  Find Us
                </button>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="w-full bg-[#141414] py-[120px]">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-[#F43325] text-[18px] font-bold uppercase tracking-wider">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-white text-[44px] font-bold">
            The HIMY Street Cuisine
          </h2>

          <div className="mt-[80px] grid md:grid-cols-3 gap-[40px]">
            {[{
              img: flavours,
              title: "Authentic Flavours",
              desc: "Authentic Indian street food recipes, passed down through generations — no shortcuts, only bold flavors."
            },
            {
              img: time,
              title: "Fast & Fresh",
              desc: "Cooked fresh in minutes — hot, made to order, and ready for takeaway."
            },
            {
              img: ingredients,
              title: "Fresh Ingredients",
              desc: "We use fresh produce and hand-ground spices daily."
            }].map((card, i) => (
              <div
                key={i}
                className="bg-[#2E2E2E] rounded-[24px] p-10 flex flex-col items-center text-center hover:scale-105 transition"
              >
                <div className="w-[64px] h-[64px] rounded-[16px] bg-gradient-to-br from-[#F43325] to-[#F98006] flex items-center justify-center">
                  <img src={card.img} alt="" className="w-6 h-6" />
                </div>

                <h3 className="mt-6 text-[18px] font-bold uppercase">
                  {card.title}
                </h3>

                <p className="mt-5 text-[#A6A6A6] leading-[26px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPLORE MENU ================= */}
      <section className="w-full bg-black py-[120px]">
        <div className="max-w-[1368px] mx-auto px-6">

          {/* Heading */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#F43325] text-[16px] font-semibold uppercase tracking-[0.4px]">
              Explore Our Menu
            </p>

            <h2 className="text-[44px] leading-[36px] tracking-[-0.75px] font-semibold text-white text-center">
              ALL YOUR FAVOURITES, ALL IN ONE PLACE.
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-8">

            {menuItems.map((item, index) => (
              <Link
                to="/menu"
                key={index}
                onClick={() => setActiveMenu(index)}
                className="w-full"
              >
                <div
                  className={`cursor-pointer rounded-[16px] p-[32px] flex items-center justify-between transition-all duration-300
            ${activeMenu === index
                      ? "border border-[#F43325]"
                      : "border border-[#333333] bg-[#262626]/30 hover:border-[#F43325]/50"
                    }`}
                >
                  {/* Left Side */}
                  <div className="flex items-center gap-4">

                  

                    {/* Text */}
                    <div className="flex flex-col gap-1">
                     
                      <h3 className="text-[20px] font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="text-[14px] text-[#A6A6A6]">
                        {item.desc}
                      </p>

                       <p className="text-[12px] uppercase tracking-[0.3px] text-[#A6A6A6]/70">
                        {item.items}
                      </p>

                    </div>
                  </div>

                  {/* Arrow */}
                  <span className="text-[#A6A6A6] text-[16px] group-hover:text-white transition">
                    →
                  </span>
                </div>
              </Link>
            ))}

          </div>

          {/* Button */}
          <div className="flex justify-center mt-[80px]">
            <Link to="/menu">
              <button className="h-[48px] px-[32px] rounded-[6px] bg-gradient-to-r from-[#F21C0D] to-[#F97415] shadow-[0_0_40px_rgba(242,28,13,0.3)] text-white text-[16px] font-bold uppercase tracking-[0.4px] hover:scale-105 transition">
                VIEW FULL MENU
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="w-full bg-black py-[140px] relative overflow-hidden">

        {/* Background glow */}
        <div className="absolute -left-40 top-40 w-[400px] h-[400px] bg-[#F43325]/20 blur-[180px] rounded-full"></div>
        <div className="absolute -right-40 top-60 w-[400px] h-[400px] bg-[#F98006]/20 blur-[180px] rounded-full"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6">

          {/* Heading */}
          <div className="text-center">
            <p className="text-[#F43325] text-[18px] font-bold uppercase tracking-[0.7px]">
              Love From Our Guests
            </p>

            <h2 className="mt-6 text-[48px] leading-[48px] tracking-[0.96px] text-[#F5F3F0] font-semibold">
              WHY LONDON LOVES US.
            </h2>
          </div>

          {/* Review Cards */}
          {/* Contact CTA */}
          <div className="flex justify-center mt-8">
            <a
              href="tel:+447767973685"
              className="text-[#F43325] font-bold text-lg hover:underline"
            >
              Call to order: +447767973685
            </a>
          </div>

          <div className="mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: `Absolutely delicious! Every bite was full of flavor. Can’t wait to come back! The food was outstanding! Fresh ingredients, perfectly cooked, and beautifully presented. The service was quick and friendly too. Highly recommend this place to anyone looking for a great dining experience.`,
                name: 'Emma R.',
                location: 'London',
              },
              {
                text: `Himy cuisine serves really tasty food. I tried the punugulu and Bagara rice at Himy Cuisine, and both were really good. The punugulu were hot, crispy, and full of flavor—perfect as a snack. The bagara rice was aromatic and rich, with a comforting homemade taste that went really well on its own. Everything felt fresh and satisfying. Definitely enjoyed the food! 😋`,
                name: 'Amit K.',
                location: 'UK',
              },
              {
                text: `I recently visited this amazing Indian stall and had an incredible experience! I tried the Punugulu, Chicken Fried Rice, and Chicken Noodles—everything was absolutely delicious and tasted just like authentic Indian street food. The flavors were spot on, and it instantly reminded me of home.\n\nThe staff at the stall were extremely polite, friendly, and welcoming, which made the visit even more enjoyable. The atmosphere was warm and inviting. Highly recommend this place if you're craving real Indian street-style food with great service!`,
                name: 'Ravi P.',
                location: 'London',
              },
            ].map((rev, index) => (
              <div
                key={index}
                className="relative p-8 rounded-[12px] bg-[#141414]/50 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[12px]"
              >
                {/* Stars */}
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-[18px] h-[18px]"
                      viewBox="0 0 24 24"
                      fill="#F9B81F"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.826 1.52 8.24L12 18.896l-7.456 4.476 1.52-8.24L0 9.306l8.332-1.151z" />
                    </svg>
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-[#F43325]/30 text-[40px] font-bold">
                  ”
                </div>

                {/* Review Text */}
                <p className="mt-6 whitespace-pre-line text-[16px] leading-[26px] text-[#F5F3F0]">
                  {rev.text}
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-8">
                  {/* Avatar */}
                  <div className="w-[40px] h-[40px] rounded-full bg-gradient-to-br from-[#F43325] to-[#F98006] flex items-center justify-center text-white font-bold text-[14px]">
                    {rev.name.charAt(0)}
                  </div>

                  <div>
                    <p className="text-[16px] font-medium text-[#F5F3F0]">
                      {rev.name}
                    </p>
                    <p className="text-[14px] text-[#999999]">
                      {rev.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Rating Pill */}
          <div className="flex justify-center mt-[100px]">
            <div className="flex items-center gap-4 px-8 h-[50px] bg-[#141414] border border-[#2E2E2E] rounded-full">

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-[20px] h-[20px]"
                    viewBox="0 0 24 24"
                    fill="#F9B81F"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.826 1.52 8.24L12 18.896l-7.456 4.476 1.52-8.24L0 9.306l8.332-1.151z" />
                  </svg>
                ))}
              </div>

              <span className="text-[16px] text-[#F5F3F0] font-medium">
                4.9 / 5
              </span>

              <span className="text-[14px] text-[#999999]">
                from 500+ reviews
              </span>

            </div>
          </div>

        </div>
      </section>

      {/* ================= INSTAGRAM SECTION ================= */}
      <section className="w-full bg-[#141414] py-[120px]">
        <div className="max-w-[1437px] mx-auto px-6">

          {/* Heading */}
          <div className="text-center">
            <p className="text-[#F43325] text-[16px] font-bold uppercase tracking-[0.7px]">
              Follow Our Journey
            </p>

            <a href="https://instagram.com/himy_the_street_cuisine" target="_blank" rel="noopener noreferrer">
              <h2 className="mt-6 text-[44px] leading-[44px] tracking-[0.96px] text-[#F5F3F0] font-semibold hover:underline">
                @HIMY_THE_STREET_CUISINE
              </h2>
            </a>

            <p className="mt-6 text-[16px] text-white">
              Love street food? Join our community and share your HIMY moments.
            </p>
          </div>

          {/* Images Row */}
          <div className="mt-[80px] flex justify-center gap-[47px] flex-wrap">

            <img
              src={require("../assets/images/gallery3.jpg")}
              alt="food1"
              className="w-[250px] h-[227px] object-cover rounded-[24px]"
            />

            <img
              src={require("../assets/images/gallery2.jpg")}
              alt="food2"
              className="w-[250px] h-[227px] object-cover rounded-[24px]"
            />

            <img
              src={require("../assets/images/gallery4.jpg")}
              alt="food3"
              className="w-[250px] h-[227px] object-cover rounded-[24px]"
            />

            <img
              src={require("../assets/images/gallery6.jpg")}
              alt="food4"
              className="w-[250px] h-[227px] object-cover rounded-[24px]"
            />

          </div>

          {/* Follow Link */}
          <a
            href="https://instagram.com/himy_the_street_cuisine"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 mt-[80px] hover:opacity-90"
          >
            {/* Instagram Icon */}
            <svg
              className="w-[20px] h-[20px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F43325"
              strokeWidth="1.8"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>

            <span className="text-[#F43325] text-[16px] font-bold uppercase tracking-[0.45px]">
              Follow Us On Instagram
            </span>
          </a>

        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Home;
