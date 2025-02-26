import profile from "../../assets/profile.png";
import clsx from "clsx";
import {isMobile} from "react-device-detect";

const HomeOrdinateur = () => {
  return (
      <section>
          <div className="flex flex-col lg:flex-row justify-center items-center mt-80 mb-96 h-96 font-bold">
              <img src={profile} alt="profile"
                   className={clsx(isMobile ? "" : "hidden", "sm:block rounded-3xl w-36 border-4 mt-52 border-white lg:hidden")}/>
              <div className="w-2/3 text-secondary text-justify">
                  <p className="mt-20 mb-10">Bonjour et bienvenue sur mon site !</p>

                  <p className="mb-5">Je m'appelle BERTRAND Julien, et je suis développeur !</p>
                  <p className="mt-10 mb-10">Après 5 ans d’expériences dans les télécommunications (2 ans en tant que
                      technicien radio et droniste, puis 3 ans en qualité de chef de projet), j’ai décidé d’acquérir
                      de nouvelles compétences en informatique.</p>

                  <p className="mb-5">Actuellement en Master Expert en Systèmes d’Information (M2) à ISITECH, je
                      développe mes compétences en développement (JavaScript, React, TypeScript, Symfony, etc.) et en
                      gestion de projets IT.</p>

                  <p className="mb-5">Mon objectif est de combiner mes compétences techniques et managériales pour
                      contribuer efficacement à des projets innovants dans le secteur du numérique.</p>

                  <p className="mb-10">Merci de votre visite !</p>
              </div>
              <img src={profile} alt="profile"
                   className="rounded-full hidden mb-96 border-4 border-white lg:block lg:w-52"/>
          </div>
      </section>
  );
}

export default HomeOrdinateur;
