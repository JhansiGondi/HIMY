import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mapPin from "../assets/images/map-pin.svg";
import callIcon from "../assets/images/call.svg";
import mailIcon from "../assets/images/mail.svg";
import timeIcon from "../assets/images/time.svg"; 

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  React.useEffect(() => {
    const targetHash = window.location.hash;
    let el = null;
    if (targetHash === "#map") {
      el = document.getElementById("map");
    } else if (targetHash === "#visit") {
      el = document.getElementById("visit");
    }
    if (el) {
      const offset = 120;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const openWhatsApp = (text) => {
    const phone = "447767973685";
    const encoded = encodeURIComponent(text);
    // use the web API endpoint which can be more reliable on desktop
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;
    window.open(url, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.warn("API failed, sending via WhatsApp only.");
    }

    const message =
`Customer Inquiry from HIMY Website
----------------------------------------

Name   : ${form.name}
Email  : ${form.email}
Phone  : ${form.phone || "Not Provided"}

Message:
${form.message}

----------------------------------------
Business Details:
HIMY The Street Cuisine
Unit S3 34 Plashet Grove
E6 1AE
Open 7 Days – 12 PM to 11 PM
Instagram: @himy_the_street_cuisine
Email: himythestreetcuisine@gmail.com

----------------------------------------
Sent via HIMY Official Website`;

    openWhatsApp(message);

    setForm({ name: "", email: "", phone: "", message: "" });
    setSubmitting(false);
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">

      <Header />

      {/* ================= HERO ================= */}
      <section className="text-center pt-[220px] pb-[80px] px-6">

        <p className="font-helvetica text-[14px] leading-[20px] tracking-[1.4px] uppercase text-[#F43325]">
          Get In Touch
        </p>

        <h1 className="font-bebas text-[72px] leading-[72px] tracking-[1.44px] text-[#F5F3F0] mt-3">
          FIND <span className="text-[#F43325]">US</span>
        </h1>

        <p className="font-helvetica text-[16px] leading-[24px] text-[#999999] mt-4">
          Reach out your way—visit, call, or message us today.
        </p>

      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 px-6 pb-[120px]">

        {/* LEFT SIDE */}
        <div>

          <h2 className="font-bebas text-[30px] leading-[36px] tracking-[0.6px] text-[#F5F3F0] mb-10">
            Contact Information
          </h2>

          {/* location row */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-[40px] h-[40px] bg-[#2E2E2E] rounded-full flex items-center justify-center">
              <img src={mapPin} alt="" className="w-[18px] h-[18px]" />
            </div>
            <div>
              <p className="font-helvetica text-[16px] leading-[24px] text-[#999999]">
                Unit S3 34 Plashet Grove<br />
                E6 1AE
              </p>
            </div>
          </div>

          {/* phone row */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-[40px] h-[40px] bg-[#2E2E2E] rounded-full flex items-center justify-center">
              <img src={callIcon} alt="" className="w-[18px] h-[18px]" />
            </div>
            <div>
              <a href="tel:+447767973685" className="font-helvetica text-[16px] leading-[24px] text-[#999999] hover:text-[#F43325] transition">
                +44 7767 973685
              </a>
            </div>
          </div>

          {/* email row */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-[40px] h-[40px] bg-[#2E2E2E] rounded-full flex items-center justify-center">
              <img src={mailIcon} alt="" className="w-[18px] h-[18px]" />
            </div>
            <div className="flex flex-col gap-1">
              {/* primary contact email followed by legacy address */}
              <a href="mailto:himythestreetcuisine@gmail.com" className="font-helvetica text-[16px] leading-[24px] text-[#999999] hover:text-[#F43325] transition">
                himythestreetcuisine@gmail.com
              </a>
            
            </div>
          </div>

          {/* hours row */}
          <div className="flex items-start gap-4 mb-10">
            <div className="w-[40px] h-[40px] bg-[#2E2E2E] rounded-full flex items-center justify-center">
              <img src={timeIcon} alt="" className="w-[18px] h-[18px]" />
            </div>
            <div>
              <p className="font-helvetica text-[16px] leading-[24px] text-[#999999]">
                7 Days – 12:00 PM to 11:00 PM
              </p>
            </div>
          </div>

          {/* call / whatsapp buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="tel:+447767973685" className="flex items-center justify-center gap-2 px-6 h-[50px] rounded-[8px] bg-gradient-to-r from-[#F43325] to-[#F98006] text-white font-bold">
              Call Now
            </a>
            <button onClick={() => openWhatsApp('Hi!')} className="flex items-center justify-center gap-2 px-6 h-[50px] rounded-[8px] border border-white text-white font-bold">
              WhatsApp
            </button>
          </div>

          {/* delivery partners */}
          <div>
            <p className="font-bebas text-[16px] leading-[24px] tracking-[0.32px] text-[#F5F3F0] mb-2 uppercase">
              Order Delivery
            </p>
            <p className="font-helvetica text-[14px] leading-[20px] text-[#999999] mb-4">
              Can’t make it in? Order through our delivery partners:
            </p>
            <a href="https://www.ubereats.com/gb/store/himy-the-street-cuisine/Tra_8QtKRXmMNKqii6FKVQ?srsltid=AfmBOoqmJCvjkI6YMM4m3LOY8WP6KgRaD0T3BtiV_x54YhOxVLdZlxlH" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 h-[44px] rounded-[8px] bg-[#111111] border border-[#333333] hover:bg-[#1a1a1a] transition">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="#F43325" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              UBER EATS
            </a>
            <a href="https://www.just-eat.co.uk/restaurants-himy-the-street-cuisine-east-ham/menu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 h-[44px] rounded-[8px] bg-[#111111] border border-[#333333] hover:bg-[#1a1a1a] transition">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="#F43325" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              JUST EAT
            </a>
            <a href="https://deliveroo.co.uk/menu/london/upton/himy-the-street-cuisine-34-plashet-grove" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 h-[44px] rounded-[8px] bg-[#111111] border border-[#333333] hover:bg-[#1a1a1a] transition">
              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="#F43325" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              DELIVEROO
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - FORM (UNCHANGED DESIGN) */}
        <div className="bg-[rgba(20,20,20,0.5)] border border-white/10 shadow-[0px_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-[12px] rounded-[12px] p-[33px]">

          <h2 className="font-bebas text-[30px] leading-[36px] tracking-[0.6px] text-[#F5F3F0] mb-4">
            Send a Message
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange}
              className="w-full h-[50px] bg-[#262626] rounded-[12px] px-[17px] text-white"
              placeholder="Your name" required />

            <input name="email" value={form.email} onChange={handleChange}
              className="w-full h-[50px] bg-[#262626] rounded-[12px] px-[17px] text-white"
              placeholder="your@email.com" required />

            <input name="phone" value={form.phone} onChange={handleChange}
              className="w-full h-[50px] bg-[#262626] rounded-[12px] px-[17px] text-white"
              placeholder="+44 ..." />

            <textarea name="message" value={form.message} onChange={handleChange}
              className="w-full h-[146px] bg-[#262626] rounded-[12px] px-[17px] py-[13px] text-white"
              placeholder="How can we help?" required />

            <button
              type="submit"
              disabled={submitting}
              className={`w-full h-[56px] rounded-[12px] bg-gradient-to-r from-[#F43325] to-[#F98006] font-bold text-white ${submitting ? "opacity-60 cursor-wait" : ""}`}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>

      </section>

      <Footer />
    </div>
  );
};

export default Contact;