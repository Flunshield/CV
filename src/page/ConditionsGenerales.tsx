import Layout from 'components/ComposantsCommun/Layout';
import React from 'react';

const ConditionsGenerales: React.FC = () => {
    return (
        <Layout>
        <div className="m-16 p-6 max-w-3xl mx-auto shadow-lg rounded-lg text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">Conditions Générales</h1>
            <p className="mb-4">
                Bienvenue sur jbertrand.fr ! Ces conditions générales décrivent les règles et règlements pour l'utilisation de notre site web.
            </p>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptation des Conditions</h2>
            <p className="mb-4">
                En accédant à ce site web, vous acceptez pleinement ces conditions générales. Ne continuez pas à utiliser jbertrand.fr si vous n'acceptez pas toutes les conditions indiquées sur cette page.
            </p>
            <h2 className="text-2xl font-semibold mb-4">2. Droits de Propriété Intellectuelle</h2>
            <p className="mb-4">
                Sauf indication contraire, jbertrand.fr et/ou ses concédants détiennent les droits de propriété intellectuelle pour tout le matériel présent sur ce site. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez consulter et/ou imprimer des pages de jbertrand.fr pour votre usage personnel, sous réserve des restrictions définies dans ces conditions générales.
            </p>
            <h2 className="text-2xl font-semibold mb-4">3. Restrictions</h2>
            <p className="mb-4">
                Vous ne devez pas :
            </p>
            <ul className="list-disc ml-8 mb-4">
                <li>Reproduire, dupliquer ou copier du contenu de jbertrand.fr</li>
                <li>Utiliser le contenu à des fins commerciales sans autorisation écrite</li>
                <li>Modifier, redistribuer ou republier le contenu sans notre consentement</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">4. Limitation de Responsabilité</h2>
            <p className="mb-4">
                Nous ne serons en aucun cas responsables des dommages résultant de l'utilisation de notre site web.
            </p>
            <p className="mb-4">
                Ces termes peuvent être modifiés à tout moment, et il est de votre responsabilité de vérifier régulièrement cette page pour être informé des changements.
            </p>
            <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
            <p className="mb-4">
                Si vous avez des questions concernant ces conditions générales, vous pouvez nous contacter via le formulaire de contact sur notre site.
            </p>
        </div>
        </Layout>
    );
};

export default ConditionsGenerales;
