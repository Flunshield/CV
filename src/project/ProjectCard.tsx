import React from 'react';
import { Project } from "../interface.ts";
import clsx from "clsx";

interface ProjectCardProps {
    project: Project;
    className?: string;  // Ajout de la prop className
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
    const { title, commentaire, description, technologies, githubLink, demoLink } = project;

    return (
        <div className={clsx("bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 flex flex-col justify-between", className)} style={{ minHeight: '450px' }}>
            <div>
                {title && <h2 className={clsx(commentaire ? "" : "mb-8", "text-3xl font-bold text-gray-900 text-center")}>{title}</h2>}
                {commentaire && <h3 className="mb-4 text-lg text-center text-gray-700 italic">{commentaire}</h3>}
                {description && <p className="text-gray-600 mb-6 text-justify leading-relaxed">{description}</p>}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Technologies utilisées :</h3>
                    {technologies && technologies.length === 0 ? (
                        <p className="text-gray-500">Aucune technologie utilisée</p>
                    ) : (
                        <ul className="list-disc list-inside space-y-1">
                            {technologies.map((tech, index) => (
                                <li key={index} className="text-gray-700">{tech}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <div className="mt-6">
                <div className="flex justify-between items-center">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors duration-200">
                            GitHub
                        </a>
                    )}
                    {demoLink && (
                        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition-colors duration-200">
                            Voir la démo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
