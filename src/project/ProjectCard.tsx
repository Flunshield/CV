import React, { useState } from 'react';
import { Project } from "../interface.ts";
import clsx from "clsx";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import Loader from 'components/ComposantsCommun/Loader.tsx';

interface ProjectCardProps {
    project: Project;
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
    const { title, commentaire, description, technologies, githubLink, demoLink } = project;
    const [showPreview, setShowPreview] = useState(false);
    const [loading, setLoading] = useState(true);

    return (
        <motion.div
            className={clsx(isMobile ? "" : "h-[700px]", "bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-6 flex flex-col justify-between", className)}
            initial={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
            <div className="mt-6 relative">
                <div className="flex justify-between items-center">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors duration-200">
                            GitHub
                        </a>
                    )}
                    {demoLink && (
                        <div className="relative" onMouseEnter={() => setShowPreview(true)} onMouseLeave={() => setShowPreview(false)}>
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md transition-colors duration-200">
                                Voir la démo
                            </a>
                            {showPreview && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[800px] h-[500px] bg-white shadow-md border border-gray-200 rounded-md overflow-hidden">
                                    {loading && (
                                        <div className="flex items-center justify-center h-full text-gray-500">
                                            <Loader />
                                        </div>
                                    )}
                                    <iframe 
                                        src={demoLink} 
                                        className="w-full h-full scale-90" 
                                        title="Preview" 
                                        onLoad={() => setLoading(false)}
                                    />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;