import Layout from "components/ComposantsCommun/Layout.tsx";
import {
    TAB_HARD_SKILS,
    TAB_SOFT_SKILS
} from "../constante.ts";
import clsx from "clsx";
import {isMobile} from "react-device-detect";

const Competence = () => {

    return (
        <Layout>
            <div className={clsx(isMobile ? "" : "mt-60", "flex flex-col items-center m-10")}>
                <div className="mb-5">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Mes soft skills </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {TAB_SOFT_SKILS.map((competence) => {
                            return <li key={competence.title}
                                       className="bg-tertiary p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-gray-800">{competence.title}</h2>
                                <p className="text-gray-600">{competence.description}</p>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="mt-5">
                    <h2 className="text-3xl font-bold text-secondary mb-4">Mes hard skills </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {TAB_HARD_SKILS.map((competence) => {
                            return <li key={competence.title}
                                       className="bg-tertiary p-6 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold text-gray-800">{competence.title}</h2>
                                <div className="flex flex-row justify-around mt-5">
                                    <ul className="flex flex-wrap justify-around">
                                        {competence.items.map((competence) => {
                                            return <li key={competence}
                                                       className="border-2 p-2 border-black rounded-lg m-1">{competence}</li>
                                        })}
                                    </ul>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Competence;