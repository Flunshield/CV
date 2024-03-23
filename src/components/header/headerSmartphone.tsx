import React from "react";
import NavBar from "components/ComposantsCommun/NavBar.tsx";

interface HeaderOrdinateurProps {
    handleClickProjects: () => void;
    handleClickFormations: () => void;
    handleClickExperiences: () => void;
    handleClickCompetence: () => void;
    handleClickContact: () => void;
    btnCss: string;
    currentPage: string;
}

const HeaderSmartphone: React.FC<HeaderOrdinateurProps> = ({
                                                               handleClickProjects,
                                                               handleClickFormations,
                                                               handleClickExperiences,
                                                               handleClickCompetence,
                                                               handleClickContact,
                                                               btnCss
                                                           }) => {

    return (<NavBar
            handleClickProjects={handleClickProjects}
            handleClickFormations={handleClickFormations}
            handleClickExperiences={handleClickExperiences}
            handleClickCompetence={handleClickCompetence}
            handleClickContact={handleClickContact}
            btnCss={btnCss}/>
    );
}
export default HeaderSmartphone;