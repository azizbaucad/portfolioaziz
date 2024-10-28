"use client";
import Image from "next/image";
import port from "../img/aziz_update.png";
import sonatel from "../img/sonatel.jpg";
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
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Abdou Aziz Ba</h1>
        <div className="flex space-x-4">
          <Link
            href="https://www.linkedin.com/in/abdou-aziz-ba-172871158/"
            target="_blank"
            className="hover:text-gray-400 flex items-center space-x-2"
          >
            <FiLinkedin size={24} />
            <span>LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/azizbaucad"
            target="_blank"
            className="hover:text-gray-400 flex items-center space-x-2"
          >
            <FiGithub size={24} />
            <span>GitHub</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-4 mt-0 md:mt-40 text-left space-y-10 md:space-y-0">
        {/* Text Section */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-7xl font-bold mb-6">
            Un plaisir de vous rencontrer! <br /> Je suis{" "}
            <span className="text-gray-900 text-5xl p-2 bg-teal-400 rounded-md">
              Abdou Aziz Ba
            </span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl">
            Consultant, freelance et prestataire passionné par les nouvelles
            technologies de développement du logiciel. Je suis la personne
            idéale pour transformer vos besoins en solutions numériques
            concrètes, simples et universelles.
          </p>
          {/* Contact Me Button */}
          <h1 className="text-3xl font-bold mb-2">Me Contacter via</h1>
          <div className="gap-2 space-y-2 space-x-2">
            <span className="inline-block border-2 border-rose-400 text-gray-200 py-2 px-6 rounded-lg text-lg">
              <MdOutlineCall size={24} className="inline-block" /> +221 77 126
              86 75
            </span>
            <Link
              href="https://wa.me/221771268675" // Remplacez par votre numéro en format international
              target="_blank"
              className="inline-block border-2 border-teal-400 text-gray-200 py-2 px-6 rounded-lg text-lg hover:bg-teal-400 hover:text-black transition"
            >
              <PiWhatsappLogoBold size={24} className="inline-block" /> WhatsApp
            </Link>
            <Link
              href="mailto:youremail@example.com"
              target="_blank"
              className="inline-block border-2 border-purple-400 text-gray-200 py-2 px-6 rounded-lg text-lg hover:bg-purple-400 hover:text-black transition"
            >
              <CgMail size={24} className="inline-block" />{" "}
              baabdouaziz898@gmail.com
            </Link>
          </div>
        </div>

        {/* Developer Image */}
        <Image
          src={port} // Place your image in the public folder
          alt="Adam Keyes"
          width={320}
          height={320}
          className="items-center ml-20 rounded-lg"
        />
      </main>

      <section className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Projets réalisés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              Ajout de nouvelles fonctionnalités sur la plateforme de suivi démographique OpenHDS et ODK.
            </p>
            <p className="text-gray-200 mb-4 text-sm">
              Android, Java, Spring, PostgreSQL
            </p>
          </div>
          {/* Project 3 */}
          <div className="project-card p-4 bg-yellow-200 rounded-lg hover:bg-gray-400 transition">
            <h3 className="text-xl text-gray-900 font-semibold mb-2">
              Saytu-DRPS Monitoring - Sonatel
            </h3>
            <p className="text-gray-900 mb-4">
              Développement d'APIs pour le monitoring en tepmps réel de la fibre optique.
            </p>
            <p className="text-gray-900 mb-4 text-sm">
              Python, Flask, PostgreSQL
            </p>
          </div>
          {/* Project 4 */}
          <div className="project-card p-4 bg-purple-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">
              Analyse de données - BICIS/BNP Paribas
            </h3>
            <p className="text-gray-400 mb-4">
              Analyse sur les données des comptes et des délais de traitements. Reporting avancés sur les données issues du data warehouse.
            </p>
            <p className="text-gray-400 mb-4 text-sm">Tableau, Alteryx</p>
          </div>
          {/* Project 5 */}
          <div className="project-card p-4 bg-blue-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">
              Développement Android - Innov4Africa
            </h3>
            <p className="text-gray-400 mb-4">
              Développement d’applications Android, refonte de l’application
              i-pay Marchand, et intégration de la technologie NFC.
            </p>
            <p className="text-gray-400 mb-4 text-sm">
              Java, SOAPUI, JSON, Restful API, Android Studio, SQLite, NFC
            </p>
          </div>
          {/* Project 6 */}
          <div className="project-card p-4 bg-fuchsia-400 rounded-lg hover:bg-gray-400 transition">
            <h3 className="text-xl font-semibold mb-2">
              Webscraping - DGID/DRSCOF
            </h3>
            <p className="text-gray-900 mb-4">
              Développement d'un projet de webscraping pour la DRSCOF, incluant
              benchmarks, développement d'algorithmes, et stockage des données.
            </p>
            <p className="text-gray-900 mb-4 text-sm">
              Python, BeautifulSoup, Selenium, MySQL, Heroku, Google Cloud AI
              Platform
            </p>
          </div>
          {/* Project 7 */}
          <div className="project-card p-4 bg-pink-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-xl font-semibold mb-2">
              Application de Saisie - DGID/DRSCOF
            </h3>
            <p className="text-gray-400 mb-4">
              Conception et mise en place d’une application de saisie des
              données de sources internes pour le compte de la DRSCOF.
            </p>
            <p className="text-gray-400 mb-4 text-sm">
              MySQL, Google Cloud AI Platform, Notebooks, phpMyAdmin, PHP, HTML,
              CSS, Heroku
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* Skills Section */}
      <section className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development Skills */}
          <div className="skill-box p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Frontend Development
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300 flex justify-between">
                <span>React.js & Next.js</span>
                <span className="badge bg-blue-600 text-white px-2 py-1 rounded">
                  Advanced
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Chakra UI & Tailwind CSS</span>
                <span className="badge bg-green-600 text-white px-2 py-1 rounded">
                  Advanced
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>HTML & CSS</span>
                <span className="badge bg-green-500 text-white px-2 py-1 rounded">
                  Advanced
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>JavaScript (ES6+)</span>
                <span className="badge bg-yellow-500 text-white px-2 py-1 rounded">
                  Expert
                </span>
              </li>
            </ul>
          </div>

          {/* Backend Development Skills */}
          <div className="skill-box p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">
              Backend Development
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300 flex justify-between">
                <span>Spring Boot</span>
                <span className="badge bg-purple-600 text-white px-2 py-1 rounded">
                  Intermediate
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Python & Flask</span>
                <span className="badge bg-green-600 text-white px-2 py-1 rounded">
                  Advanced
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>RESTful & SOAP APIs</span>
                <span className="badge bg-yellow-500 text-white px-2 py-1 rounded">
                  Advanced
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Node.js</span>
                <span className="badge bg-gray-500 text-white px-2 py-1 rounded">
                  Beginner
                </span>
              </li>
            </ul>
          </div>

          {/* Data & Cloud Technologies */}
          <div className="skill-box p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-4 text-orange-400">
              Data & Cloud Technologies
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300 flex justify-between">
                <span>MySQL & PostgreSQL</span>
                <span className="badge bg-blue-600 text-white px-2 py-1 rounded">
                  Advanced
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Google Cloud AI Platform</span>
                <span className="badge bg-green-600 text-white px-2 py-1 rounded">
                  Intermediate
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Heroku Deployment</span>
                <span className="badge bg-blue-500 text-white px-2 py-1 rounded">
                  Intermediate
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>SQL & Data Analysis</span>
                <span className="badge bg-yellow-500 text-white px-2 py-1 rounded">
                  Expert
                </span>
              </li>
            </ul>
          </div>

          {/* Tools & Version Control */}
          <div className="skill-box p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-4 text-red-400">
              Tools & Version Control
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300 flex justify-between">
                <span>Docker & Jenkins</span>
                <span className="badge bg-purple-600 text-white px-2 py-1 rounded">
                  Intermediate
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Git & GitHub</span>
                <span className="badge bg-green-600 text-white px-2 py-1 rounded">
                  Advanced
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Zeplin & Figma</span>
                <span className="badge bg-yellow-500 text-white px-2 py-1 rounded">
                  Advanced
                </span>
              </li>
            </ul>
          </div>

          {/* Data Visualization & Reporting */}
          <div className="skill-box p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-4 text-teal-400">
              Data Visualization & Reporting
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300 flex justify-between">
                <span>Tableau</span>
                <span className="badge bg-blue-600 text-white px-2 py-1 rounded">
                  Advanced
                </span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Alteryx Designer</span>
                <span className="badge bg-green-500 text-white px-2 py-1 rounded">
                  Intermediate
                </span>
              </li>
            </ul>
          </div>

          <div className="skill-box p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">
              Soft Skills
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300 flex justify-between">
                <span>Autonome</span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Passionné</span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Esprit d'équipe</span>
              </li>
              <li className="text-gray-300 flex justify-between">
                <span>Résilient</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* Projects Section */}

      {/* Projects Section */}

      {/* Contact Section */}
      {/* Ils ont fait confiance Section */}
      <section className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-left">
          Ils ont fait confiance
        </h2>
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll whitespace-nowrap">
            {/* Company 1 */}
            <div className="company-logo flex-shrink-0 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <Image
                src={sonatel}
                alt="Sonatel"
                width={128}
                height={64}
                className="mx-auto"
              />
            </div>
            {/* Company 2 */}
            <div className="company-logo flex-shrink-0 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <Image
                src={ird}
                alt="IRD France"
                width={128}
                height={64}
                className="mx-auto"
              />
            </div>
            {/* Company 3 */}
            <div className="company-logo flex-shrink-0 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <Image
                src={bicis}
                alt="BICIS - Groupe BNP Paribas"
                width={128}
                height={64}
                className="mx-auto"
              />
            </div>
            {/* Company 4 */}
            <div className="company-logo flex-shrink-0 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <Image
                src={innov}
                alt="Innov4Africa"
                width={128}
                height={64}
                className="mx-auto"
              />
            </div>
            {/* Company 5 */}
            <div className="company-logo flex-shrink-0 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              <Image
                src={dgid}
                alt="DGI Sénégal"
                width={128}
                height={64}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Tailwind CSS animation for smooth scrolling */}
      <style>
        {`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-250px * 5)); }
  }
  .animate-scroll {
    display: flex;
    animation: scroll 20s linear infinite;
  }
`}
      </style>
      {/* <section id="contact" className="max-w-6xl mx-auto p-6 mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400 mb-6">
          Interested in working together? Feel free to reach out!
        </p>
        <Link
          href="https://github.com"
          target="_blank"
          className="hover:text-gray-400"
        >
          GitHub
        </Link>
      </section> */}

      {/* Footer */}
      {/*  <footer className="p-6 mt-20 text-center">
        <p className="text-gray-400">© 2024 Adam Keyes. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};
