import React, {useState} from "react";
import {TECHNOLOGIES} from "../../constante.ts";

const TechnologiesFilter = ({onFilterChange}: { onFilterChange: (tech: string) => void }) => {
    const [selectedOption, setSelectedOption] = useState("Tous");

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        onFilterChange(value);
    };

    return (
        <div className="flex flex-col items-start w-auto">
            <label htmlFor="technologies" className="mb-2 text-white">
                Catégorie
            </label>
            <select
                id="technologies"
                value={selectedOption}
                onChange={handleChange}
                className="px-4 py-2 bg-white w-auto border-2 border-gray-400 rounded text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
