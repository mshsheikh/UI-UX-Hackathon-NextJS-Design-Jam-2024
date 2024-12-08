"use client"

import React from "react";
import ContactHeroSection from "@/components/sections/shop/ContactHeroSection";
import ShopBannerSection from "@/components/sections/shop/ShopBannerSection";
import ContactForm2 from "@/components/contact/ContactForm2"; // Ensure this matches the file path

function ContactPage() {
  return (
    <div>
      <ContactHeroSection />
      <ContactForm2
      
        addressIcon="/images/locationicon.png"
        address="123 Main Street"

        phone="/images/phoneicon.png"
        mobile="(123) 456-7890"
        hotline="(987) 654-3210"


        workingTime="/images/clockicon.png"
        weekdayWorkingTime="Mon-Fri: 9:00 AM - 5:00 PM"
        weekendWorkingTime="Sat-Sun: 10:00 AM - 4:00 PM"

        values={{ yourName: "", email: "", subject: "", message: "" }}
        errors={{ yourName: "", email: "", subject: "", message: "" }}
        handleChange={() => {}}
        handleSubmit={() => {}}
        handleSubmitBtnClick={() => {}}
      />
      <ShopBannerSection />
    </div>
  );
}

export default ContactPage;
