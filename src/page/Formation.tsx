import Layout from "components/ComposantsCommun/Layout.tsx";
import { FORMATIONS } from "../constante.ts";
import { isMobile } from "react-device-detect";
import clsx from "clsx";
import { motion } from "framer-motion"; // Importation de framer-motion

interface FormationProps {
    id: number;
    logo: string;
    date: string;
    title: string;
    etablissement: string;
    location: string;
    RNCP?: boolean;
    RNCPCode?: string;
    onClick?: () => void;
}

const Formation = () => {
    const goToRNCP = (url: string = "nok") => {
        if (url !== "nok") {
            window.open(
                "https://www.francecompetences.fr/recherche/rncp/" + url,
                "_blank"
            );
        }
    };

    return (
        <Layout>
            <div className={clsx(isMobile ? "mt-20 mb-20" : "mt-40 mb-20", "flex flex-col items-center")}>
                <h1 className="text-6xl mb-12 font-extrabold text-secondary">Mes Formations</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
                    {FORMATIONS.map((experience: FormationProps, index: number) => (
                        <motion.li
                            key={experience.id}
                            className="flex flex-col items-center cursor-pointer p-6 rounded-3xl transition-all duration-300 bg-white transform hover:scale-105 shadow-lg hover:shadow-2xl"
                            onClick={experience.onClick}
                            initial={{ opacity: 0, y: 30 }} // Démarrage avec une légère translation vers le bas
                            animate={{ opacity: 1, y: 0 }}  // Apparition sans trop de mouvement
                            transition={{
                                delay: index * 0.15, // Un léger retard mais plus doux
                                duration: 0.7, // Durée plus longue pour un effet plus fluide
                                ease: "easeInOut", // Utilisation d'une courbe de transition plus douce
                            }}
                        >
                            <div className="flex flex-col md:flex-row w-full">
                                <div className="flex w-full align-baseline">
                                    <img
                                        src={experience.logo}
                                        alt={`Logo de ${experience.title}`}
                                        className="rounded-lg p-3 w-36 h-14 mr-4 object-contain"
                                    />
                                    <div className="flex flex-col justify-center">
                                        <h2 className="text-xl font-bold text-gray-800">{experience.date}</h2>
                                        <p className="text-lg font-bold text-gray-700">{experience.title}</p>
                                        <p className="text-lg text-gray-600">
                                            {experience.etablissement} - {experience.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {experience.RNCP && (
                                <div className="mt-4 w-full flex justify-center">
                                    <button
                                        className="p-3 bg-red-600 text-secondary font-bold text-sm text-center rounded-full shadow-md transition duration-300 bg-error"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            goToRNCP(experience.RNCPCode || "");
                                        }}
                                    >
                                        Numéro de fiche RNCP - {experience.RNCPCode}
                                    </button>
                                </div>
                            )}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Formation;
