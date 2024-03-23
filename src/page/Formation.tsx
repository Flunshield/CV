import Layout from "components/ComposantsCommun/Layout.tsx";
import {FORMATIONS} from "../constante.ts";
import {isMobile} from "react-device-detect";
import clsx from "clsx";
import {MouseEventHandler} from "react";

const Formation = () => {
    return (
        <Layout>
            <div className={clsx(isMobile ? "" : "mt-40", "flex flex-col items-center")}>
                <h1 className="text-5xl mb-20 font-bold text-secondary">Formations</h1>
                <ul className="flex flex-col mb-20">
                    {FORMATIONS.map((experience) => (
                        <li key={experience.id} className="flex flex-row items-center mt-10">
                            <img src={experience.logo} alt="logo"
                                 className="bg-secondary rounded-lg p-2 w-32 mr-5 cursor-pointer"
                                 onClick={experience.onClick as unknown as MouseEventHandler<HTMLImageElement>}/>
                            <div className="flex flex-col justify-center">
                                <h2 className="text-3xl font-bold text-secondary">{experience.date}</h2>
                                <p className="text-2xl font-bold text-secondary">{experience.title}</p>
                                <p className="text-2xl font-bold text-secondary">{experience.etablissement} - {experience.location}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}

export default Formation;