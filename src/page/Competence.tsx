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
            <div className={clsx(isMobile ? "m-4" : "mt-60 m-10", "flex flex-col items-center")}>
                <div className="mb-5">
                    <h2 className="text-4xl font-bold text-secondary mb-6">Mes soft skills </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TAB_SOFT_SKILS.map((competence) => {
                            return <li key={competence.title}
                                       className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300">
                                <h2 className="text-2xl font-semibold text-gray-900">{competence.title}</h2>
                                <p className="text-gray-500 mt-2">{competence.description}</p>
                            </li>
                        })}
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-4xl font-bold text-secondary mb-6">Mes hard skills </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TAB_HARD_SKILS.map((competence) => {
                            return <li key={competence.title}
                                       className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all ease-in-out duration-300">
                                <h2 className="text-2xl font-semibold text-gray-900">{competence.title}</h2>
                                <div className="flex flex-wrap justify-around mt-4">
                                    <ul className="flex flex-wrap justify-start gap-2">
                                        {competence.items.map((competence) => {
                                            return <li key={competence}
                                                       className="border p-2 border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-amber-300">{competence}</li>
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
