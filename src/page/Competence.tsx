import Layout from "components/ComposantsCommun/Layout.tsx";
import { TAB_HARD_SKILS, TAB_SOFT_SKILS } from "../constante.ts";
import clsx from "clsx";
import { isMobile } from "react-device-detect";
import { motion } from "framer-motion"; // Importation de framer-motion

const Competence = () => {
    return (
        <Layout>
            <div className={clsx(isMobile ? "m-4" : "mt-60 m-10", "flex flex-col items-center")}>
                <div className="mb-5">
                    <h2 className="text-4xl font-bold text-center text-secondary mb-6">Mes soft skills</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TAB_SOFT_SKILS.map((competence, index) => (
                            <motion.li
                                key={competence.title}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300"
                                initial={{ opacity: 0, scale: 0.8 }} // Démarre plus petit et transparent
                                animate={{ opacity: 1, scale: 1 }} // Agrandissement et apparition douce
                                transition={{
                                    delay: index * 0.2, // Délai progressif entre les éléments
                                    duration: 0.5,      // Durée d'animation
                                    ease: "easeOut",    // Courbe de transition fluide
                                }}
                            >
                                <h2 className="text-2xl font-semibold text-gray-900">{competence.title}</h2>
                                <p className="text-gray-500 mt-2">{competence.description}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-4xl font-bold text-center text-secondary mb-6">Mes hard skills</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TAB_HARD_SKILS.map((competence, index) => (
                            <motion.li
                                key={competence.title}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300"
                                initial={{ opacity: 0, rotateX: -10 }} // Rotation initiale légère
                                animate={{ opacity: 1, rotateX: 0 }} // Fin de la rotation
                                transition={{
                                    delay: index * 0.2,  // Délai progressif entre les éléments
                                    duration: 0.6,       // Durée d'animation
                                    ease: "easeInOut",   // Transition douce avec une courbe d'accélération/décélération
                                }}
                            >
                                <h2 className="text-2xl font-semibold text-gray-900">{competence.title}</h2>
                                <div className="flex flex-wrap justify-around mt-4">
                                    <ul className="flex flex-wrap justify-start gap-2">
                                        {competence.items.map((item) => (
                                            <li
                                                key={item}
                                                className="border p-2 border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-amber-300"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
};

export default Competence;
