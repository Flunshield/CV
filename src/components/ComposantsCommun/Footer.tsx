import React from 'react';
import {
    ACCEUIL_URL,
    COMPETENCES_URL,
    CONTACT_URL,
    EXPERIENCES_URL,
    FORMATION_URL,
    PROJECTS_URL,
    LINKEDIN_URL,
    GITHUB_URL,
    CONDITION_GENERALES_URL
} from "../../constante.ts";
import {FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub} from 'react-icons/fa'; // Importez les icônes nécessaires
import {goToEmail, goToMap, goToPhone} from "../../project/helper.ts";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
                <div className="mb-4 lg:mb-0">
                    <p className="text-sm flex items-center cursor-pointer hover:underline" onClick={goToMap}>
                        <FaMapMarkerAlt className="mr-2"/> Auvergne-Rhône-Alpes | France
                    </p>
                    <p className="text-sm flex items-center cursor-pointer hover:underline" onClick={goToPhone}>
                        <FaPhone className="mr-2"/> Téléphone : +33 6 51 23 03 75
                    </p>
                    <p className="text-sm flex items-center cursor-pointer hover:underline" onClick={goToEmail}>
                        <FaEnvelope className="mr-2"/> Email : j.bertrand.sin@gmail.com
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-items-start lg:justify-end">
                        <ul className="flex flex-col sm:flex-row sm:space-x-4">
                            <li><a href={ACCEUIL_URL} className="hover:underline">Accueil</a></li>
                            <li><a href={FORMATION_URL} className="hover:underline">Formations</a></li>
                            <li><a href={EXPERIENCES_URL} className="hover:underline">Expériences</a></li>
                            <li><a href={COMPETENCES_URL} className="hover:underline">Compétences</a></li>
                            <li><a href={PROJECTS_URL} className="hover:underline">Projets</a></li>
                            <li><a href={CONTACT_URL} className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-row space-x-4 justify-end w-full mt-4">
                        <a href={LINKEDIN_URL} target="_blank" className="flex items-center text-sm hover:underline">
                            <FaLinkedin className="mr-2"/> LinkedIn
                        </a>
                        <a href={GITHUB_URL} target="_blank" className="flex items-center text-sm hover:underline">
                            <FaGithub className="mr-2"/> GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row text-center justify-arround text-sm m-5">
                <p className="flex-2">© {year} BERTRAND Julien. Tous droits réservés.</p>
                <a href={CONDITION_GENERALES_URL} className="hover:underline flex-1">Conditions Générales</a>
                <p className="flex-2">Version 1</p>
            </div>
        </footer>
    );
};

export default Footer;
