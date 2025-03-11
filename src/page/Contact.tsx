import React from 'react';
import Layout from "components/ComposantsCommun/Layout.tsx";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { goToEmail, goToMap, goToPhone } from "../project/helper.ts";
import { motion } from 'framer-motion'; // Importation de framer-motion

const Contact: React.FC = () => {

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen px-4">
                <motion.div
                    className="text-center max-w-2xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-4xl text-secondary font-bold mb-6">Contactez-moi !</h1>
                    <motion.div
                        className="text-lg mb-10 text-secondary"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    >
                        <p className="italic">"Derrière chaque ligne de code se cache une décision consciente, une série de compromis et une vision de l'avenir."</p><br />
                        <p>Contactez-moi pour discuter de votre prochain projet technologique et explorons ensemble les vastes possibilités offertes par le monde numérique.</p>
                    </motion.div>
                    <motion.div
                        className="text-secondary flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Informations de contact</h2>
                        <div className="flex flex-col space-y-4">
                            <motion.div
                                className="flex items-center cursor-pointer hover:underline"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaEnvelope className="text-xl mr-2" />
                                <p onClick={goToEmail}><span className="font-bold">Email:</span> j.bertrand.sin@gmail.com</p>
                            </motion.div>
                            <motion.div
                                className="flex items-center cursor-pointer hover:underline"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaPhone className="text-xl mr-2" />
                                <p onClick={goToPhone}><span className="font-bold">Téléphone:</span> +33 6 51 23 03 75</p>
                            </motion.div>
                            <motion.div
                                className="flex items-center"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaMapMarkerAlt className="text-xl mr-2" />
                                <p onClick={goToMap} className="cursor-pointer hover:underline"><span
                                    className="font-bold">Localisation:</span> Auvergne-Rhône-Alpes | France
                                </p>
                            </motion.div>
                        </div>
                        <motion.button
                            className="mt-8 bg-gray-800 border-2 border-gray-500 shadow-sm shadow-black text-gris font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300 animate-bounce-twice"
                            onClick={goToEmail}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            Envoyer un message
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </Layout>
    );
}

export default Contact;
