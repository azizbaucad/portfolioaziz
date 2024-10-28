"use client";
import Image from "next/image";
import port from "../img/aziz_update.png";
import sonatel from "../img/sonatel.png";
import ird from "../img/ird.png";
import bicis from "../img/bicis.png";
import innov from "../img/innov.png";
import dgid from "../img/dgid.png";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { MdOutlineCall } from "react-icons/md";
import Link from "next/link";
import { useRef } from "react";
import { ScrollButtons } from "./scroll";

export const WelcomePage = () => {
  const mainRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <ScrollButtons contentRef={mainRef} />
      
      {/* Header */}
      <header className="p-4 md:p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold">Abdou Aziz Ba</h1>
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/abdou-aziz-ba-172871158/"
            target="_blank"
            className="hover:text-gray-400 flex items-center space-x-2"
          >
            <FiLinkedin size={20} />
            <span className="hidden sm:block">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/azizbaucad"
            target="_blank"
            className="hover:text-gray-400 flex items-center space-x-2"
          >
            <FiGithub size={20} />
            <span className="hidden sm:block">GitHub</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-4 mt-0 md:mt-20 text-left space-y-8 md:space-y-0">
        {/* Text Section */}
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Un plaisir de vous rencontrer! <br /> Je suis{" "}
            <span className="text-gray-900 text-4xl sm:text-5xl p-2 sm:p-0 bg-teal-400 rounded-md inline-block sm:text-md">
              Abdou Aziz Ba
            </span>
          </h1>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto md:mx-0">
            Consultant, freelance et prestataire passionné par les nouvelles
            technologies de développement du logiciel. Je suis la personne
            idéale pour transformer vos besoins en solutions numériques
            concrètes, simples et universelles.
          </p>

          <h2 className="text-2xl font-bold mb-4">Me Contacter via</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <span className="inline-block border-2 border-rose-400 text-gray-200 py-2 px-6 rounded-lg text-lg">
              <MdOutlineCall size={20} className="inline-block" /> +221 77 126
              86 75
            </span>
            <Link
              href="https://wa.me/221771268675"
              target="_blank"
              className="inline-block border-2 border-teal-400 text-gray-200 py-2 px-6 rounded-lg text-lg hover:bg-teal-400 hover:text-black transition"
            >
              <PiWhatsappLogoBold size={20} className="inline-block" /> WhatsApp
            </Link>
            <Link
              href="mailto:youremail@example.com"
              target="_blank"
              className="inline-block border-2 border-purple-400 text-gray-200 py-2 px-6 rounded-lg text-lg hover:bg-purple-400 hover:text-black transition"
            >
              <CgMail size={20} className="inline-block" />{" "}
              baabdouaziz898@gmail.com
            </Link>
          </div>
        </div>

        {/* Developer Image */}
        <Image
          src={port}
          alt="Abdou Aziz Ba"
          width={260}
          height={260}
          className="items-center sm:mx-auto md:ml-20 rounded-lg"
        />
      </main>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto p-4 md:p-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Projets réalisés
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="project-card p-4 bg-teal-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">
              Plateforme de Reporting - Sonatel
            </h3>
            <p className="text-gray-400 mb-4">
              Plateforme de reporting pour les KPIs critiques en temps réel,
              avec dashboards personnalisés pour les différentes directions.
            </p>
            <p className="text-gray-400 mb-4 text-sm">
              React, Next.js, Chakra UI, Docker, Jenkins
            </p>
          </div>
          {/* Project 2 */}
          <div className="project-card p-4 bg-red-400 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">
              Suivi démographique - IRD France
            </h3>
            <p className="text-gray-200 mb-4">
              Ajout de nouvelles fonctionnalités sur la plateforme de suivi
              démographique OpenHDS et ODK.
            </p>
            <p className="text-gray-200 mb-4 text-sm">Android, Java, Spring, PostgreSQL</p>
          </div>
        </div>
      </section>

      {/* Ils ont fait confiance Section */}
      <section className="max-w-6xl mx-auto p-4 md:p-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Ils ont fait confiance
        </h2>
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll whitespace-nowrap">
            <div className="company-logo flex-shrink-0 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <Image src={sonatel} alt="Sonatel" width={100} height={50} className="mx-auto" />
            </div>
            {/* Additional company logos */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto p-4 md:p-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="skill-box p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Frontend Development</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 flex justify-between">
                <span>React.js & Next.js</span>
                <span className="badge bg-blue-600 text-white px-2 py-1 rounded">Expert</span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Chakra UI & Tailwind CSS</span>
                <span className="badge bg-green-600 text-white px-2 py-1 rounded">Advanced</span>
              </li>
            </ul>
          </div>
          {/* Additional skill sections */}
        </div>
      </section>
      
      {/* Animation for scrolling logos */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-150px * 5)); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

