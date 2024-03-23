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
                  <p>Je suis passionné par le développement web, en particulier les technologies Frontend telles
                      que
                      React et Vue.js.</p>

                  <p className="mb-5">À travers ce site, je souhaite partager avec vous mon parcours
                      professionnel,
                      mes réalisations et mes compétences. Vous trouverez ici des informations sur mon expérience
                      professionnelle, mes projets passés, mes formations, ainsi que mes compétences
                      techniques.</p>

                  <p className="mb-5">Je suis convaincu que vous trouverez en moi le développeur que vous cherchez
                      !
                      Avec plus de 5 ans d'expérience dans l'industrie, j'ai travaillé sur une variété de projets,
                      allant des sites web personnels aux applications d'entreprise complexes.</p>

                  <p className="mb-10">N'hésitez pas à explorer mon site pour en apprendre davantage sur mon
                      parcours
                      et mes réalisations.
                      Si vous avez des questions ou si vous souhaitez discuter d'une collaboration potentielle,
                      n'hésitez
                      pas à me contacter via le formulaire de contact. Je suis ouvert aux opportunités de
                      freelance et
                      de collaboration.</p>

                  <p className="mb-10">Merci de votre visite !</p>
              </div>
              <img src={profile} alt="profile"
                   className="rounded-full hidden mb-96 border-4 border-white lg:block lg:w-52"/>
          </div>
      </section>
  );
}

export default HomeOrdinateur;