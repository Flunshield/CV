import React from 'react';
import Layout from "components/ComposantsCommun/Layout.tsx";
import {FaEnvelope, FaMapMarkerAlt, FaPhone} from 'react-icons/fa';
import {goToEmail, goToMap, goToPhone} from "../project/helper.ts";

const Contact: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen px-4">
                <div className="text-center max-w-2xl">
                    <h1 className="text-4xl text-secondary font-bold mb-6">Contactez-moi !</h1>
                    <div className="text-lg mb-10 text-secondary">
                        <p className="italic">"Derrière chaque ligne de code se cache une décision consciente, une série
                            de compromis et une vision de l'avenir."</p><br/>
                        <p>Contactez-moi pour discuter de votre prochain projet technologique et explorons ensemble les
                            vastes possibilités offertes par le monde numérique.</p>
                    </div>
                    <div className="text-secondary flex flex-col items-center">
                        <h2 className="text-2xl font-semibold mb-4">Informations de contact</h2>
                        <div className="flex flex-col space-y-4">
                            <div onClick={goToEmail} className="flex items-center cursor-pointer hover:underline">
                                <FaEnvelope className="text-xl mr-2"/>
                                <p><span className="font-bold">Email:</span> j.bertrand.sin@gmail.com</p>
                            </div>
                            <div onClick={goToPhone} className="flex items-center cursor-pointer hover:underline">
                                <FaPhone className="text-xl mr-2"/>
                                <p><span className="font-bold">Téléphone:</span> +33 6 51 23 03 75</p>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-xl mr-2"/>
                                <p onClick={goToMap} className="cursor-pointer hover:underline"><span
                                    className="font-bold">Localisation:</span> Auvergne-Rhône-Alpes | France
                                </p>
                            </div>
                        </div>
                        <button
                            className="mt-8 bg-secondary text-primary font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300"
                            onClick={goToEmail}>
                            Envoyer un message
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
