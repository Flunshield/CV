import Layout from "components/ComposantsCommun/Layout.tsx";
import {ACCEUIL_URL} from "../constante.ts";

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center h-screen">
                <div className="text-center text-secondary">
                    <h1 className="text-5xl font-bold mb-4">Erreur <a href={"https://http.cat/status/404"}>404</a> !</h1>
                    <p className="text-lg text-secondary-600">La page que vous recherchez n'a pas été trouvée.</p>
                    <p className="text-lg text-secondary-600">Retournez à <a href={ACCEUIL_URL} className="text-blue-400">la page
                        d'accueil</a>.</p>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage;