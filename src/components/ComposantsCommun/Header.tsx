import {useNavigate} from "react-router-dom";
import {isMobile} from 'react-device-detect';
import HeaderOrdinateur from "components/header/headerOrdinateur.tsx";
import HeaderSmartphone from "components/header/headerSmartphone.tsx";
import {useEffect, useState} from "react";
import {COMPETENCES_URL, CONTACT_URL, EXPERIENCES_URL, FORMATION_URL, PROJECTS_URL} from "../../constante.ts";

const Header = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState<string>("");

    const handleClickProjects = () => {
        navigate(PROJECTS_URL);
    };

    const handleClickFormations = () => {
        navigate(FORMATION_URL);
    };

    const handleClickExperiences = () => {
        navigate(EXPERIENCES_URL);
    };

    const handleClickCompetence = () => {
        navigate(COMPETENCES_URL);
    };

    const handleClickContact = () => {
        navigate(CONTACT_URL);
    };

    const btnCss = "border-2 text-secondary text-1xl m-3 border-2 border-white rounded-md p-1 w-52 font-bold hover:bg-secondary hover:text-black hover:border-black transition duration-500 ease-in-out";

    const currentUrl = window.location.href;
    const segments = currentUrl.split('/');
    const lastSegment = segments[segments.length - 1];
    useEffect(() => {
        setCurrentPage(lastSegment)
    }, [currentUrl, lastSegment]);
    return (
        <header className="z-20" >
            {
                isMobile ?
                    <HeaderSmartphone
                        handleClickProjects={handleClickProjects}
                        handleClickFormations={handleClickFormations}
                        handleClickExperiences={handleClickExperiences}
                        handleClickCompetence={handleClickCompetence}
                        handleClickContact={handleClickContact}
                        btnCss={btnCss}
                        currentPage={currentPage}
                    />
                    :
                    <HeaderOrdinateur
                        handleClickProjects={handleClickProjects}
                        handleClickFormations={handleClickFormations}
                        handleClickExperiences={handleClickExperiences}
                        handleClickCompetence={handleClickCompetence}
                        handleClickContact={handleClickContact}
                        btnCss={btnCss}
                        currentPage={currentPage}
                    />
            }
        </header>
    );
};

export default Header;
