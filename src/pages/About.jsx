import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import chefImg from "../assets/images/about-chef.jpg";
import spicesImg from "../assets/images/spices.jpg";
import passion from "../assets/images/passion.svg";
import community from "../assets/images/community.svg";
import authenticity from "../assets/images/authenticity.svg";
import localRoots from "../assets/images/local-roots.svg";

const About = () => {
    return (
        <div className="bg-[#0A0A0A] text-white min-h-screen">

            <Header />
            {/* ================= ABOUT HERO ================= */}
            <section className="bg-[#141414] w-full h-[500px] flex flex-col items-center justify-center text-center pt-[180px]">

                {/* OUR STORY */}
                <p className="font-helvetica text-[14px] leading-[20px] tracking-[1.4px] uppercase text-[#F43325] mb-[28px]">
                    OUR STORY
                </p>

                {/* MAIN HEADING */}
                <h1 className="font-bebas text-[72px] leading-[72px] tracking-[1.44px] text-[#F5F3F0] max-w-[1123px]">
                    THE JOURNEY OF REAL INDIAN STREET FLAVOURS.
                </h1>

                {/* SUBTEXT */}
                <p className="font-helvetica text-[18px] leading-[28px] text-[#999999] max-w-[693px] mt-[20px]">
                    HIMY was created from a passion for Indian street food—the vibrant sights,
                    sizzling sounds, and unforgettable flavours of the streets.
                </p>

            </section>

            {/* ================= THE HIMY STORY ================= */}
            <section className="bg-[#0A0A0A] py-[140px] px-6">
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="font-inter font-bold text-[48px] tracking-[-0.6px] text-[#FAFAFA] mb-10">
                            THE HIMY STORY
                        </h2>

                        <p className="font-inter text-[16px] leading-[28px] text-white max-w-[541px]">
                            From Warangal to the UK – The HIMY Journey
                            HIMY’s journey began in Warangal, where he grew up surrounded by the bold flavours and vibrant energy of Indian street food. The sizzling sounds from roadside stalls, the aroma of spices in the air, and the joy of sharing food with friends shaped his love for authentic street cuisine.
                            <br /><br />
                            With big dreams and a passion for flavour, he moved to the United Kingdom to create something of his own. Inspired by the tastes of his hometown, he founded HIMY—bringing real Indian street food to a new audience.
                            <br /><br />
                            His vision was simple: serve authentic Indian street flavours, fast and fresh, while keeping the heart and soul of the streets alive.
                            <br /><br />
                            From Warangal to the UK, HIMY is more than a brand—it’s a journey of passion, culture, and bold taste.
                        </p>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="relative flex justify-center">

                        <img
                            src={chefImg}
                            alt="Chef Cooking"
                            className="w-full max-w-[520px] rounded-[16px] shadow-2xl"
                        />

                        <img
                            src={spicesImg}
                            alt="Spices"
                            className="absolute -bottom-10 -left-10 w-[280px] rounded-[16px] border-4 border-[#0A0A0A] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                        />

                    </div>

                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="bg-[#141414] py-[60px]">

                <div className="max-w-[1200px] mx-auto px-6">

                    {/* Section Heading */}
                    <div className="text-center mb-10">
                        <p className="font-helvetica text-[14px] tracking-[1.4px] uppercase text-[#F43325] mb-4">
                            WHY CHOOSE US
                        </p>

                        <h2 className="font-bebas text-[48px] tracking-[0.96px] text-[#F5F3F0]">
                            OUR VALUES
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-4 gap-8">

                        {/* Card 1 */}
                        <div className="bg-[rgba(20,20,20,0.5)] border border-white/10 backdrop-blur-[12px] rounded-[12px] p-10 text-center shadow-[0px_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition duration-300">

                            <div className="w-[64px] h-[64px] mx-auto mb-8 rounded-[16px] bg-gradient-to-br from-[#F43325] to-[#F98006] flex items-center justify-center">
                                <span className="text-white text-xl"><img src={passion} alt="" /></span>
                            </div>

                            <h3 className="font-bebas text-[24px] tracking-[0.48px] text-[#F5F3F0] mb-4">
                                PASSION
                            </h3>

                            <p className="font-helvetica text-[14px] leading-[20px] text-[#999999]">
                                Every bite carries the same love and tradition found on India’s streets.
                            </p>

                        </div>

                        {/* Card 2 */}
                        <div className="bg-[rgba(20,20,20,0.5)] border border-white/10 backdrop-blur-[12px] rounded-[12px] p-10 text-center shadow-[0px_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition duration-300">

                            <div className="w-[64px] h-[64px] mx-auto mb-8 rounded-[16px] bg-gradient-to-br from-[#F43325] to-[#F98006] flex items-center justify-center">
                                <span className="text-white text-xl"><img src={community} alt="" /></span>
                            </div>

                            <h3 className="font-bebas text-[24px] tracking-[0.48px] text-[#F5F3F0] mb-4">
                                COMMUNITY
                            </h3>

                            <p className="font-helvetica text-[14px] leading-[20px] text-[#999999]">
                                A restaurant for everyone—food lovers, students, and families under one roof.
                            </p>

                        </div>

                        {/* Card 3 */}
                        <div className="bg-[rgba(20,20,20,0.5)] border border-white/10 backdrop-blur-[12px] rounded-[12px] p-10 text-center shadow-[0px_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition duration-300">

                            <div className="w-[64px] h-[64px] mx-auto mb-8 rounded-[16px] bg-gradient-to-br from-[#F43325] to-[#F98006] flex items-center justify-center">
                                <span className="text-white text-xl"><img src={authenticity} alt="" /></span>
                            </div>

                            <h3 className="font-bebas text-[24px] tracking-[0.48px] text-[#F5F3F0] mb-4">
                                AUTHENTICITY
                            </h3>

                            <p className="font-helvetica text-[14px] leading-[20px] text-[#999999]">
                                Authentic techniques. Real ingredients. The taste of India in every bite.
                            </p>

                        </div>

                        {/* Card 4 */}
                        <div className="bg-[rgba(20,20,20,0.5)] border border-white/10 backdrop-blur-[12px] rounded-[12px] p-10 text-center shadow-[0px_8px_32px_rgba(0,0,0,0.4)] hover:-translate-y-2 transition duration-300">

                            <div className="w-[64px] h-[64px] mx-auto mb-8 rounded-[16px] bg-gradient-to-br from-[#F43325] to-[#F98006] flex items-center justify-center">
                                <span className="text-white text-xl"><img src={localRoots} alt="" /></span>
                            </div>

                            <h3 className="font-bebas text-[24px] tracking-[0.48px] text-[#F5F3F0] mb-4">
                                LOCAL ROOTS
                            </h3>

                            <p className="font-helvetica text-[14px] leading-[20px] text-[#999999]">
                                From Indian roots to UK kitchens—locally sourced, authentically made.
                            </p>

                        </div>

                    </div>
                </div>
            </section>

            {/* ================= OUR JOURNEY ================= */}
            <section className="bg-[#0A0A0A] py-[140px] px-6">

                <div className="max-w-[1280px] mx-auto">

                    {/* Section Heading */}
                    <div className="text-center mb-20">
                        <p className="text-[14px] tracking-[1.4px] uppercase text-[#F43325] font-inter mb-4">
                            OUR JOURNEY
                        </p>

                        <h2 className="font-bebas text-[48px] tracking-[0.96px] text-[#F5F3F0]">
                            HOW WE GOT HERE
                        </h2>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative max-w-[900px] mx-auto">

                        {/* Vertical Line */}
                        <div className="absolute left-0 top-2 w-[2px] h-full bg-[#2E2E2E]" />

                        {/* Timeline Items */}
                        <div className="space-y-20">

                            {/* Item 1 */}
                            <div className="relative pl-16">
                                <div className="absolute left-[-7px] top-2 w-[16px] h-[16px] bg-[#F43325] rounded-full"></div>

                                <h3 className="font-bebas text-[24px] tracking-[0.48px] text-[#F5F3F0] mb-3">
                                    THE DREAM BEGINS
                                </h3>

                                <p className="text-[16px] leading-[24px] text-[#999999] font-inter max-w-[620px]">
                                    Inspired by a trip to Indian street food markets, our founder envisioned bringing authentic Indian street food to the UK.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div className="relative pl-16">
                                <div className="absolute left-[-7px] top-2 w-[16px] h-[16px] bg-[#F43325] rounded-full"></div>

                                <h3 className="font-bebas text-[24px] tracking-[0.48px] text-[#F5F3F0] mb-3">
                                    RECIPE PERFECTION
                                </h3>

                                <p className="text-[16px] leading-[24px] text-[#999999] font-inter max-w-[620px]">
                                    Spent two years perfecting recipes with street vendors in India, learning the secrets passed down through generations.
                                </p>
                            </div>

                            {/* Item 3 */}
                            <div className="relative pl-16">
                                <div className="absolute left-[-7px] top-2 w-[16px] h-[16px] bg-[#F43325] rounded-full"></div>

                                <h3 className="font-bebas text-[24px] tracking-[0.48px] text-[#F5F3F0] mb-3">
                                    HIMY IS BORN
                                </h3>

                                <p className="text-[16px] leading-[24px] text-[#999999] font-inter max-w-[620px]">
                                    Opened our first location in London's Brick Lane, bringing the heat and heart of Indian streets to Britain.
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div className="relative pl-16">
                                <div className="absolute left-[-7px] top-2 w-[16px] h-[16px] bg-[#F43325] rounded-full"></div>

                                <h3 className="font-bebas text-[24px] tracking-[0.48px] text-[#F5F3F0] mb-3">
                                    GROWING FAMILY
                                </h3>

                                <p className="text-[16px] leading-[24px] text-[#999999] font-inter max-w-[620px]">
                                    Expanding to serve more street food lovers across the UK while staying true to our authentic roots.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CTA SECTION ================= */}
            <section className="bg-[#141414] py-[60px] px-6">

                <div className="max-w-[800px] mx-auto text-center">

                    {/* Heading */}
                    <h2 className="font-bebas text-[48px] leading-[48px] tracking-[0.96px] text-[#F5F3F0] mb-6">
                        COME TASTE THE STORY
                    </h2>

                    {/* Description */}
                    <p className="font-inter text-[16px] leading-[24px] text-[#999999] mb-10 max-w-[450px] mx-auto">
                        Every dish we serve is a chapter in our journey. Visit us and become part of the HIMY story.
                    </p>

                    {/* Button */}
                    <button className="w-[202px] h-[49px] rounded-[12px] bg-gradient-to-r from-[#F43325] to-[#F98006] shadow-[0px_0px_40px_rgba(244,51,37,0.3)] text-white font-inter font-bold text-[16px] hover:scale-105 transition duration-300">
                        Find Our Location
                    </button>

                </div>

            </section>

            <Footer />
        </div>
    );
};

export default About;