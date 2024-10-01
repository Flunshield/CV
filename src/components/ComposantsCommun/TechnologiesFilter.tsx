import React, { useState } from "react";
import { TECHNOLOGIES } from "../../constante.ts";
import clsx from "clsx";

interface TechnologiesFilterProps {
    onFilterChange: (tech: string) => void;
    className?: string;  // Ajout de la prop className
}

const TechnologiesFilter: React.FC<TechnologiesFilterProps> = ({ onFilterChange, className }) => {
    const [selectedOption, setSelectedOption] = useState("Tous");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        onFilterChange(value);
    };

    return (
        <div className={clsx("flex flex-col items-start w-auto", className)}>
            <label htmlFor="technologies" className="mb-2 text-secondary text-lg font-bold">
                Catégorie
            </label>
            <select
                id="technologies"
                value={selectedOption}
                onChange={handleChange}
                className="px-4 py-2 bg-white w-auto border-2 rounded-xl text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="Tous">Tous</option>
                {TECHNOLOGIES.map((tech, index) => (
                    <option value={tech} key={index}>{tech}</option>
                ))}
            </select>
        </div>
    );
}

export default TechnologiesFilter;
