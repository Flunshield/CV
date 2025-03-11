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
    CONDITION_GENERALES_URL, CV_URL
} from "../../constante.ts";
import {FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaBook} from 'react-icons/fa'; // Importez les icônes nécessaires
import {goToEmail, goToMap, goToPhone} from "../../project/helper.ts";
import clsx from 'clsx';
import { isMobile } from 'react-device-detect';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    const year = new Date().getFullYear();
    return (
        <footer className={clsx(isMobile ? " px-8" : "", "bg-gray-800 text-white py-6")}>
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
                            <li><a href={CONDITION_GENERALES_URL} className="hover:underline">Conditions Générales</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-row space-x-4 justify-end w-full mt-4">
                        <a href={LINKEDIN_URL} target="_blank" className="flex items-center text-sm hover:underline" rel="noreferrer">
                            <FaLinkedin className="mr-2"/> LinkedIn
                        </a>
                        <a href={GITHUB_URL} target="_blank" className="flex items-center text-sm hover:underline" rel="noreferrer">
                            <FaGithub className="mr-2"/> GitHub
                        </a>
                        <a href={CV_URL} target="_blank" className="flex items-center text-sm hover:underline" rel="noreferrer">
                            <FaBook className="mr-2"/> Mon cv
                        </a>
                    </div>
            <div className="flex flex-row text-sm justify-end mt-4 mb-4">
                <p className="flex-2 mr-8">© {year} BERTRAND Julien. Tous droits réservés.</p>
                <p className="flex-2">Version 1.1</p>
            </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
