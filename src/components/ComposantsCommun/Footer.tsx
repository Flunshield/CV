import React from 'react';
import {
    ACCEUIL_URL,
    COMPETENCES_URL,
    CONTACT_URL,
    EXPERIENCES_URL,
    FORMATION_URL,
    PROJECTS_URL
} from "../../constante.ts";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
    const year = new Date().getFullYear();
  return (
      <footer className="bg-gray-800 text-white py-4 relative flex flex-col">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-4 lg:mb-0">
                  <p className="text-sm">Lyon | France</p>
                  <p className="text-sm">Téléphone : +33 6 51 23 03 75</p>
                  <p className="text-sm">Email : j.bertrand.sin@gmail.com</p>
              </div>
              <div className="flex justify-items-start lg:justify-end">
                  <ul className="flex flex-col sm:flex-row sm:space-x-4">
                      <li><a href={ACCEUIL_URL}>Accueil</a></li>
                      <li><a href={FORMATION_URL}>Formations</a></li>
                      <li><a href={EXPERIENCES_URL}>Expériences</a></li>
                      <li><a href={COMPETENCES_URL}>Compétences</a></li>
                      <li><a href={PROJECTS_URL}>Projets</a></li>
                      <li><a href={CONTACT_URL}>Contact</a></li>
                  </ul>
              </div>
          </div>
          <div className="flex flex-row text-center justify-between text-sm m-5">
              <p className="mr-5">© {year} BERTRAND Julien. Tous droits réservés.</p>
              <p>Version 1</p>
          </div>
      </footer>


  );
};

export default Footer;
