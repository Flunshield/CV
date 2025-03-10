import Layout from "components/ComposantsCommun/Layout.tsx";
import { isMobile } from "react-device-detect";
import clsx from "clsx";
import { EXPERIENCES } from "../constante.ts";
import { ExperienceInterface } from "../interface.ts";
import { useState } from "react";
import { motion } from "framer-motion"; // Importation de framer-motion

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState<ExperienceInterface | null>(null);

    const openPopup = (experience: ExperienceInterface) => {
        setSelectedExperience(experience);
    };

    const closePopup = () => {
        setSelectedExperience(null);
    };

    return (
        <Layout>
            <div className={clsx(isMobile ? "p-4" : "mt-40", "w-full lg:w-2/3 mx-auto mb-12 relative")}>
                <h1 className="text-4xl font-extrabold text-secondary text-center mb-8">
                    Expériences Professionnelles
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {EXPERIENCES.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl cursor-pointer transition duration-300"
                            onClick={() => openPopup(experience)}
                            initial={{ opacity: 0, y: 30 }} // Animation initiale avec une légère translation
                            animate={{ opacity: 1, y: 0 }}  // Apparition douce sans trop de mouvement
                            transition={{
                                delay: index * 0.2,  // Retard progressif pour chaque carte
                                duration: 0.6,       // Durée plus longue pour une transition plus fluide
                                ease: "easeInOut",   // Transition fluide avec une courbe d'accélération/décélération
                            }}
                        >
                            <div className="flex justify-center mb-4">
                                {experience.logo && (
                                    <img
                                        src={experience.logo}
                                        alt="logo"
                                        className="border-2 border-gray-300 rounded-lg w-auto h-32 object-cover"
                                    />
                                )}
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
                                {experience.title}
                            </h2>
                            <p className="text-md text-gray-500 text-center">{experience.date}</p>
                        </motion.div>
                    ))}
                </div>

                {selectedExperience && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                         onClick={closePopup}>
                        <div className="bg-white p-8 rounded-2xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 relative"
                             onClick={(e) => e.stopPropagation()}>
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                                onClick={closePopup}
                            >
                                ✕
                            </button>
                            <div className="flex justify-center mb-5">
                                {selectedExperience.logo && (
                                    <img
                                        src={selectedExperience.logo}
                                        alt="logo"
                                        className="border-2 border-gray-300 rounded-lg w-auto h-32 object-cover"
                                    />
                                )}
                            </div>
                            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-3">
                                {selectedExperience.title}
                            </h2>
                            <p className="text-lg text-gray-500 text-center mb-3">{selectedExperience.date}</p>
                            <p className="text-lg text-gray-600 text-center">{selectedExperience.location}</p>
                            <a href={selectedExperience.siteWeb} target="_blank"
                               className="text-md text-gray-600 flex justify-center" rel="noreferrer">
                                <p className="text-center">Site web </p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16"
                                     fill="currentColor" className="mercado-match m-1 " width="16" height="16"
                                     focusable="false">
                                    <path
                                        d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
                                </svg>
                            </a>
                            <p className="text-gray-700 mt-5 leading-relaxed text-justify">
                                {selectedExperience.description}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default Experience;
