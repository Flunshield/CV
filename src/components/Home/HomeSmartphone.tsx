import { motion } from 'framer-motion';
import profile from "../../assets/profile.png";

const HomeSmartphone = () => {
    return (
        <section>
            <div className="flex flex-col lg:flex-row justify-center items-center font-bold">
                
                {/* Image animée avec framer-motion */}
                <motion.img 
                    src={profile} 
                    alt="profile" 
                    className="sm:block rounded-3xl w-36 border-4 border-white lg:hidden"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }} 
                />
                
                <div className="w-2/3 text-secondary text-justify">
                    <motion.p 
                        className="mt-20 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                    >
                        Bonjour et bienvenue sur mon site !
                    </motion.p>

                    <motion.p
                        className="mb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        Je m'appelle BERTRAND Julien, et je suis développeur !
                    </motion.p>

                    <motion.p 
                        className="mt-10 mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                    >
                        Après 5 ans d’expériences dans les télécommunications (2 ans en tant que technicien radio et droniste, puis 3 ans en qualité de chef de projet), j’ai décidé d’acquérir de nouvelles compétences en informatique.
                    </motion.p>

                    <motion.p 
                        className="mb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        Actuellement en Master Expert en Systèmes d’Information (M2) à ISITECH, je développe mes compétences en développement (JavaScript, React, TypeScript, Symfony, etc.) et en gestion de projets IT.
                    </motion.p>

                    <motion.p 
                        className="mb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        Mon objectif est de combiner mes compétences techniques et managériales pour contribuer efficacement à des projets innovants dans le secteur du numérique.
                    </motion.p>

                    <motion.p 
                        className="mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                    >
                        Merci de votre visite !
                    </motion.p>
                </div>

                {/* Image animée avec framer-motion */}
                <motion.img 
                    src={profile} 
                    alt="profile"
                    className="rounded-full hidden mb-96 border-4 border-white lg:block lg:w-52"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>
        </section>
    );
}

export default HomeSmartphone;
