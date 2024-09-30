import Layout from "components/ComposantsCommun/Layout.tsx";
import {FORMATIONS} from "../constante.ts";
import {isMobile} from "react-device-detect";
import clsx from "clsx";

const Formation = () => {
    return (
        <Layout>
            <div className={clsx(isMobile ? "" : "mt-40", "flex flex-col items-center")}>
                <h1 className="text-6xl mb-10 font-extrabold text-white">Mes Formations</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-5">
                    {FORMATIONS.map((experience) => (
                        <li key={experience.id}
                            className="flex flex-col items-center cursor-pointer p-6 rounded-2xl transition duration-300 bg-white"
                            onClick={experience.onClick}>
                            <div className="flex flex-col md:flex-row">
                                <div className="flex w-full align-baseline">
                                    <img src={experience.logo} alt="logo"
                                         className="rounded-xl p-2 w-32 h-12 mr-4"/>
                                    <div className="flex flex-col justify-center">
                                        <h2 className="text-2xl font-bold text-primary">{experience.date}</h2>
                                        <p className="text-xl font-bold text-primary">{experience.title}</p>
                                        <p className="text-xl text-primary">{experience.etablissement} - {experience.location}</p>
                                    </div>
                                </div>

                            </div>
                                {experience.RNCP &&
                                <div className="mt-5 w-full flex justify-center">
                                <button className="p-3 bg-error text-white font-bold text-sm text-center mt-10 rounded-full shadow-md shadow-red border-error">Numéro de fiche - {experience.RNCPCode}</button>
                                </div>
                                }
                        </li>
                        ))}
                </ul>
                        </div>
                        </Layout>
                        );
                    }

                    export default Formation;