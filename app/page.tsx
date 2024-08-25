"use client"
import Aboutsection from "./components/aboutsection";
import Herosection from "./components/herosection";
import Navbar from "./components/navbar";
import Projectsection from "./components/projectsection";

import ContactForm from "./components/emailsection";

export default function Home() {
  return (
    <>
      <main className="bg-black min-h-screen flex-col" >
        <div className="flex align-center ">
          <Navbar />
          <div className="container mx-auto px-12 py-4 mt-24">
            <Herosection />

            <Aboutsection />

            <Projectsection />
            <ContactForm />

          </div>
        </div>
      </main>
    </>
  );
}
