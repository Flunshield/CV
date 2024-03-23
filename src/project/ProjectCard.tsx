import React from 'react';
import { Project } from "../interface.ts";
import clsx from "clsx";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, commentaire, description, technologies, githubLink, demoLink } = project;

    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between" style={{ minHeight: '400px' }}>
            <div>
                {title && <h2 className={clsx(commentaire ? "" : "mb-10", "text-3xl font-bold text-gray-800 text-center")}>{title}</h2>}
                {commentaire && <h3 className="mb-5 text-center">{commentaire}</h3>}
                {description && <p className="text-gray-600 mb-4 text-justify" style={{ minHeight: '200px' }}>{description}</p>}
                <div>
                    <h3 className="font-semibold">Technologies utilisées :</h3>
                    {technologies && technologies.length === 0 ?
                        <p>Aucune technologie utilisée</p>
                        :
                        <ul className="list-disc list-inside h-40">
                            {technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
            <div className="mt-auto">
                <div className="flex justify-between">
                    {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xl hover:underline">Allez sur GitHub</a>}
                    {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-xl hover:underline">Admirer la démo</a>}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
