"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useRouter } from 'next/navigation';

function mainFile() {

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const router = useRouter();
  const redirLogin = () => {
    router.push('/login'); // Target page path
  };
  return (
    <div className="hero-page bg-container1 min-h-screen font-poppins text-white">
    <nav className="flex justify-space-between bg-white-900 py-2">
      <Link href="#" className="cursor-pointer text-white mx-4 font-semibold hover:text-blue-300 transition navitem">Home</Link>
      <Link href="/bot" className="text-white mx-4 font-semibold hover:text-blue-300 transition navitem">Chatbot</Link>
      <Link href="/nearby-hosp" className="text-white mx-4 font-semibold hover:text-blue-300 transition navitem">Nearby Hospitals</Link>
      <Link href="/contact" className="text-white mx-4 font-semibold hover:text-blue-300 transition navitem">Contact Us</Link>
      <Link href="/diseases" className="text-white mx-4 font-semibold hover:text-blue-300 transition navitem">Diseases</Link>
      <Link href="/login" className="text-white mx-4 font-semibold hover:text-blue-300 transition navitem">Join Us </Link>
      
    </nav>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold text-white text-center">
            HealHub - Your Trusted Path To Better Health
          </div>
          <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
          Caring for You, Empowering Wellness
          </div>
          <button onClick={redirLogin} className="cursor-pointer bg-white rounded-full w-fit text-black px-6 py-2">
            Join Now
          </button>
        </motion.div>
      </AuroraBackground>
      <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen font-poppins text-white">
      <section className="text-center py-16">
        <div className="w-full h-full">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl my-5 md:text-5xl font-bold text-white-800 dark:text-neutral-200 font-sans">
       Welcome to HealHub
      </h2>
    <Link href="#" className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-400 transition">
          Book an Appointment
        </Link>
      <Carousel items={cards} />
    </div>
      </section>
      <section className="text-center py-12">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="mt-2 text-lg">General Consultation | Specialist Care | Online Appointments | Emergency Services</p>
      </section>
      <footer className="text-center py-4 bg-white text-black">
        &copy; 2025 HealHub. All Rights Reserved.
      </footer>
    </div>
    </div>
  );
}
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div className="cursor-pointer">
            <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
            <p className="hover:border-red-500 text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quos, id optio ut facilis praesentium provident tenetur et vero vitae rem minus, rerum incidunt corporis reiciendis. Incidunt consequatur explicabo vel? In, atque.
              </span>{" "}
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, obcaecati labore explicabo quae reprehenderit esse optio distinctio quibusdam eius maxime.
            </p>
            </div>
            {/* <Image
              src=""
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
        );
      })}
    </>
  );
};
 
const data = [
  {
    category: "Health ChatBot",
    title: "Get instant health insights - Consult our AI-powered health chatbot",
    src: "https://i.postimg.cc/rwzRMB4r/ai-bot.jpg",
    content: <DummyContent />
  },
  {
    category: "Disease Remedies Finder",
    title: "Find the right remedies for your condition—quick, reliable, and AI-powered!",
    src: "https://i.postimg.cc/jSdpcQcz/image.jpg",
    content: <DummyContent />,
  },
  {
    category: "Nearby Hospitals",
    title: "Find the best hospitals near you. Fast, reliable, and hassle-free",
    src: "https://i.postimg.cc/Jnmc3Kc8/img.jpg",
    content: <DummyContent />,
  },
 
  {
    category: "Join Now",
    title: " Your Trusted Path To Better Health",
    src: "https://i.postimg.cc/brqPhXx5/img1.webp",
    content: <DummyContent />,
  },
  {
    category: "Contact Us",
    title: "Have questions? We're here to help Contact us today!",
    src: "https://i.postimg.cc/SN4g46nH/istockphoto-1312566254-612x612.jpg",
    content: <DummyContent />,
  },
];
export default mainFile;


