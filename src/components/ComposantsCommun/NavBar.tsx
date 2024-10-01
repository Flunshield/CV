import Card from "./Card.tsx";
import Button from "./Button.tsx";
import iconeMenu from "../../assets/menu.png";
import btnClose from "../../assets/btnClose.png";
import React, {useEffect, useState} from "react";
import clsx from "clsx";

interface HeaderOrdinateurProps {
    handleClickProjects: () => void;
    handleClickFormations: () => void;
    handleClickExperiences: () => void;
    handleClickCompetence: () => void;
    handleClickContact: () => void;
    btnCss: string;
}

const NavBar: React.FC<HeaderOrdinateurProps> = ({
                                                     handleClickProjects,
                                                     handleClickFormations,
                                                     handleClickExperiences,
                                                     handleClickCompetence,
                                                     handleClickContact,
                                                     btnCss
                                                 }) => {
    const mainFooter = document.getElementById("main")
    const [currentPage, setCurrentPage] = useState<string>();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            mainFooter?.classList.add("blur-sm")
            document.body.style.overflow = "hidden";
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth" // Ajoute une animation douce
            });
        } else {
            mainFooter?.classList.remove("blur-sm")
            document.body.style.overflow = "auto";
        }

        const currentUrl = window.location.href;
        const segments = currentUrl.split('/');
        const lastSegment = segments[segments.length - 1];
        setCurrentPage(lastSegment)
    }, [isOpen, mainFooter?.classList]);
    
    return (
        <div className="flex start-0 top-0 absolute w-full">
            <Button
                type="button"
                id="navBarButton"
                onClick={toggleNavbar}
                className="border-0 ml-5 mt-0.5"
            >
                <img src={iconeMenu} alt="icone menu" className={clsx(isOpen ? "hidden" : "w-10 mt-2")}/>
            </Button>
            <h1 className={clsx(isOpen ? "hidden" : "ml-10", "text-secondary text-2xl m-3 font-bold")}>BERTRAND Julien</h1>
            {isOpen && (
                <Card
                    className="w-2/3 md:w-1/3 border-0 border-r border-b h-screen rounded-tr-2xl rounded-br-2xl rounded-tl-none rounded-bl-none top-0 bg-primary border-white">
                    <nav className="block flex-col text-secondary text-2xl font-bold">
                        <div className="flex flex-row items-baseline justify-between">
                            <h1 className="text-secondary text-2xl m-3 font-bold">
                                BERTRAND Julien
                            </h1>
                            <Button
                                type="button"
                                id="navBarButtonClose"
                                onClick={toggleNavbar}
                                className="border-0"
                            >
                                <img src={btnClose} alt="icone bouton clsoe" className="w-6 h-6 mt-3 mr-3"/>
                            </Button>
                        </div>
                        <Button
                            type="button"
                            id="formations"
                            className={clsx(btnCss, currentPage === "formations" ? "bg-secondary" : "")}
                            onClick={handleClickFormations}
                        >
                            Formations
                        </Button>
                        <div className="flex items-baseline">
                            <Button
                                type="button"
                                id="carriere"
                                className={clsx(btnCss, currentPage === "carriere" ? "bg-secondary" : "")}
                                onClick={handleClickExperiences}
                            >
                                Expériences
                            </Button>
                        </div>
                        <div className="flex items-baseline">
                            <Button
                                type="button"
                                id="competence"
                                className={clsx(btnCss, currentPage === "competence" ? "bg-secondary" : "")}
                                onClick={handleClickCompetence}
                            >
                                Compétences
                            </Button>
                        </div>
                        <div className="flex items-baseline">
                            <Button
                                type="button"
                                id="projets"
                                className={clsx(btnCss, currentPage === "projets" ? "bg-secondary" : "")}
                                onClick={handleClickProjects}
                            >
                                Projets
                            </Button>
                        </div>
                        <div className="flex items-baseline">
                            <Button
                                type="button"
                                id="contact"
                                className={clsx(btnCss, currentPage === "contact" ? "bg-secondary" : "")}
                                onClick={handleClickContact}
                            >
                                Contact
                            </Button>
                        </div>
                    </nav>
                </Card>
            )}
        </div>
    );
};

export default NavBar;
