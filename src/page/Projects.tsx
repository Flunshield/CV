import Layout from "components/ComposantsCommun/Layout.tsx";
import ProjectCard from "../project/ProjectCard.tsx";
import clsx from "clsx";
import {isMobile} from "react-device-detect";
import {PROJETS} from "../constante.ts";

const Projects = () => {

    return (
        <Layout>
            <div className={clsx(isMobile ? "" : "mt-60", "container mx-auto py-8")}>
                <h1 className="text-3xl font-bold text-center text-secondary mb-8">Mes Projets</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJETS.map(project => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Projects;