// Contact.tsx

import React from 'react';
import Layout from "components/ComposantsCommun/Layout.tsx";

const Contact: React.FC = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-center">
                    <h1 className="text-4xl text-secondary font-bold mb-4">Contactez-moi !</h1>
                    <div className="text-xl mb-8 text-secondary italic text-justify">
                        <p>La technologie est à la fois une œuvre d'ingéniosité et une quête philosophique. Elle
                            représente la fusion entre la logique rigoureuse et la créativité humaine.</p>
                        <p>Derrière chaque ligne de code se cache une décision consciente, une série de compromis et une
                            vision de l'avenir.</p>
                        <p>Contactez-moi pour discuter de votre prochain projet technologique et explorons ensemble les
                            vastes possibilités offertes par le monde numérique.</p>
                    </div>
                    <div className="text-secondary flex flex-col justify-center">
                        <h2 className="text-2xl font-semibold mb-2">Informations de contact</h2>
                        <div className="flex flex-col items-start justify-center">
                            <p><span className="font-bold text-xl">Email:</span> j.bertrand.sin@gmail.com</p>
                            <p><span className="font-bold text-xl">Téléphone:</span> +33 6 51 23 03 75</p>
                            <p><span className="font-bold text-xl">Localisation:</span> Lyon</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
