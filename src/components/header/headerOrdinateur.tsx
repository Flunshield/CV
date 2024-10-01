import Button from "components/ComposantsCommun/Button.tsx";
import clsx from "clsx";
import {useMediaQuery} from "@mui/material";
import NavBar from "components/ComposantsCommun/NavBar.tsx";
import React from "react";

interface HeaderOrdinateurProps {
    handleClickProjects: () => void;
    handleClickFormations: () => void;
    handleClickExperiences: () => void;
    handleClickCompetence: () => void;
    handleClickContact: () => void;
    btnCss: string;
    currentPage: string;
}

const HeaderOrdinateur: React.FC<HeaderOrdinateurProps> = ({
                                                               handleClickProjects,
                                                               handleClickFormations,
                                                               handleClickExperiences,
                                                               handleClickCompetence,
                                                               handleClickContact,
                                                               btnCss,
                                                               currentPage
                                                           }) => {
    const isSmallScreen = useMediaQuery('(max-width:640px)');

    return (
        <>
            {
                isSmallScreen ?
                    <NavBar
                        handleClickProjects={handleClickProjects}
                        handleClickFormations={handleClickFormations}
                        handleClickExperiences={handleClickExperiences}
                        handleClickCompetence={handleClickCompetence}
                        handleClickContact={handleClickContact}
                        btnCss={btnCss}/>
                    :
                    <div className="flex start-0 top-0 absolute w-full">
                        <div className="flex justify-between w-full">
                            <a className="text-secondary text-2xl m-3 font-bold ml-10" href="/">BERTRAND Julien</a>
                            <div className="flex flex-col sm:flex-row">
                                <div className="flex items-baseline">
                                    <Button
                                        type="button"
                                        id="formations"
                                        className={clsx(btnCss, currentPage === "formations" ? "bg-secondary text-black" : "")}
                                        onClick={handleClickFormations}
                                    >
                                        Formations
                                    </Button>
                                </div>
                                <div className="flex flex-col md:flex-row">
                                    <div className="flex items-baseline">
                                        <Button
                                            type="button"
                                            id="experiences"
                                            className={clsx(btnCss, currentPage === "experiences" ? "bg-secondary text-black" : "")}
                                            onClick={handleClickExperiences}
                                        >
                                            Expériences
                                        </Button>
                                    </div>
                                    <div className="flex flex-col lg:flex-row">
                                        <div className="flex items-baseline">
                                            <Button
                                                type="button"
                                                id="competence"
                                                className={clsx(btnCss, currentPage === "competence" ? "bg-secondary text-black" : "")}
                                                onClick={handleClickCompetence}
                                            >
                                                Compétences
                                            </Button>
                                        </div>
                                        <div className="flex flex-col xl:flex-row">
                                            <div className="flex items-baseline">
                                                <Button
                                                    type="button"
                                                    id="projets"
                                                    className={clsx(btnCss, currentPage === "projects" ? "bg-secondary text-black" : "")}
                                                    onClick={handleClickProjects}
                                                >
                                                    Projets
                                                </Button>
                                            </div>
                                            <div className="flex items-baseline">
                                                <Button
                                                    type="button"
                                                    id="contact"
                                                    className={clsx(btnCss, currentPage === "contact" ? "bg-secondary text-black" : "")}
                                                    onClick={handleClickContact}
                                                >
                                                    Contact
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }</>);
}
export default HeaderOrdinateur;