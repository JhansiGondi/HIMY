import React from "react";
import { NavLink } from "react-router-dom";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import mappin from "../assets/images/map-pin.svg";
import call from "../assets/images/call.svg";
import mail from "../assets/images/mail.svg";
import TimeIcon from "../assets/images/time.svg";


const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] pt-[110px] pb-[50px]">

      <div className="max-w-[1400px] mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-5">
              <h2 className="text-[24px] font-bold text-white tracking-[-0.6px]">
                HIMY
              </h2>
              <span className="text-[12px] uppercase tracking-[2px] text-[#8A8A8A]">
                STREET CUISINE
              </span>
            </div>

            <p className="mt-8 text-[17px] leading-[30px] text-[#9A9A9A] max-w-[340px]">
              Street-Style Indian Classics, Fresh,
              Fast, and Unforgettable.
            </p>

            <div className="flex gap-6 mt-10">

              <a
                href="https://instagram.com/himy_the_street_cuisine"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[48px] h-[48px] rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-[#F43325] transition"
              >
                <img src={instagram} alt="Instagram" />
              </a>

              <div className="w-[48px] h-[48px] rounded-full bg-[#1E1E1E] flex items-center justify-center">
                <img src={facebook} alt="Facebook" />
              </div>

              <div className="w-[48px] h-[48px] rounded-full bg-[#1E1E1E] flex items-center justify-center">
                <img src={twitter} alt="Twitter" />
              </div>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[20px] font-semibold text-white uppercase tracking-[1px] mb-10">
              QUICK LINKS
            </h3>

            <ul className="space-y-7 text-[17px] text-[#9A9A9A]">
              <li><NavLink to="/menu" className="hover:text-[#F43325] transition">Menu</NavLink></li>
              <li><NavLink to="/gallery" className="hover:text-[#F43325] transition">Gallery</NavLink></li>
              <li><NavLink to="/about" className="hover:text-[#F43325] transition">About</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-[#F43325] transition">Contact</NavLink></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[20px] font-semibold text-white uppercase tracking-[1px] mb-10">
              CONTACT
            </h3>

            <div className="space-y-8 text-[17px] text-[#9A9A9A]">

              <div className="flex items-start gap-5">
                <img src={mappin} alt="" />
                <span>
                  Unit S3 34 Plashet Grove <br />
                  E6 1AE
                </span>
              </div>

              <div className="flex items-center gap-5">
                <img src={call} alt="" />
                <a href="tel:+447767973685" className="hover:text-[#F43325] transition">
                  +44 7767 973685
                </a>
              </div>

              <div className="flex items-center gap-5">
                <img src={mail} alt="" />
                <a
                  href="mailto:himythestreetcuisine@gmail.com"
                  className="hover:text-[#F43325] transition"
                >
                  himythestreetcuisine@gmail.com
                </a>
              </div>


              <div className="flex items-start gap-5">
               <img src={TimeIcon} alt="" />
                <div>
                  <span className="text-white font-semibold block mb-1">Hours:</span>
                  <div>7 Days – 12:00 PM to 11:00 PM</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-[#2A2A2A] mt-[90px]"></div>

        <div className="text-center mt-8 text-[15px] text-[#9A9A9A]">
          © 2026 HIMY Street Cuisine. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;