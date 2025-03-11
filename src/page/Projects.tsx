import { useState } from "react";
import Layout from "components/ComposantsCommun/Layout.tsx";
import ProjectCard from "../project/ProjectCard.tsx";
import clsx from "clsx";
import { isMobile } from "react-device-detect";
import { PROJETS } from "../constante.ts";
import TechnologiesFilter from "components/ComposantsCommun/TechnologiesFilter.tsx";
import { motion } from "framer-motion"; // Importation de framer-motion

const Projects = () => {
    const [selectedTechnology, setSelectedTechnology] = useState<string>("Tous");

    const filteredProjects = selectedTechnology === "Tous"
        ? PROJETS
        : PROJETS.filter(project => project.technologies.includes(selectedTechnology));

    return (
        <Layout>
            <div className={clsx(isMobile ? "py-6 px-4" : "mt-32 container mx-auto py-12")}>
                <h1 className="text-4xl font-bold text-center text-secondary mb-10">Mes projets</h1>
                <div className="flex flex-col space-y-10">
                    <TechnologiesFilter onFilterChange={setSelectedTechnology}/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="transition-transform duration-300 ease-in-out shadow-lg hover:shadow-2xl"
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    x: -20,
                                    y: -20
                                }} // Départ de l'élément
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                    y: 0
                                }} // Fin de l'animation
                                transition={{
                                    delay: index * 0.1, // Délai progressif entre chaque projet
                                    duration: 0.6,       // Durée de l'animation
                                    ease: "easeOut",     // Transition fluide
                                }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
