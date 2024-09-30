import {useState} from "react";
import Layout from "components/ComposantsCommun/Layout.tsx";
import ProjectCard from "../project/ProjectCard.tsx";
import clsx from "clsx";
import {isMobile} from "react-device-detect";
import {PROJETS} from "../constante.ts";
import TechnologiesFilter from "components/ComposantsCommun/TechnologiesFilter.tsx";

const Projects = () => {
    const [selectedTechnology, setSelectedTechnology] = useState<string>("Tous");

    const filteredProjects = selectedTechnology === "Tous"
        ? PROJETS
        : PROJETS.filter(project => project.technologies.includes(selectedTechnology));

    return (
        <Layout>
            <div className={clsx(isMobile ? "" : "mt-60", "container mx-auto py-8")}>
                <h1 className="text-3xl font-bold text-center text-secondary mb-8">Mes Projets</h1>
                <div className="flex flex-col space-y-8">
                    <TechnologiesFilter onFilterChange={setSelectedTechnology}/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project}/>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
