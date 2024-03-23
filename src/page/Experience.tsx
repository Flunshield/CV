import Layout from "components/ComposantsCommun/Layout.tsx";
import {isMobile} from "react-device-detect";
import clsx from "clsx";
import {EXPERIENCES} from "../constante.ts";
// @ts-ignore
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Experience = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
    };

    return (
        <Layout>
            <div className={clsx(isMobile ? "" : "mt-60", "mb-12 w-2/3 mx-auto")}>
                <h1 className="text-3xl font-bold text-secondary mb-4">Expériences Professionnelles</h1>
                <Slider {...settings}>
                    {EXPERIENCES.map((experience) => (
                        <div key={experience.id} className="p-4 my-auto">
                            <div className="bg-secondary p-6 rounded-lg shadow-md mt-5 min-h-full">
                                <div className="flex justify-center mb-5">
                                    {experience.logo && <img src={experience.logo} alt="logo"
                                                             className="border-2 border-black rounded-lg w-32"/>}
                                </div>
                                <h2 className={clsx(isMobile ? "" : "text-3xl", "font-semibold text-gray-800 text-center mb-5")}>{experience.title}</h2>
                                <p className={clsx(isMobile ? "" : "text-2xl", "text-gray-600")}>{experience.date}</p>
                                <p className={clsx(isMobile ? "" : "text-2xl", "text-gray-700 mt-2 ")}>{experience.location}</p>
                                <p className="text-gray-700 mt-5 w-full text-justify">{experience.description}</p>
                                {experience.technologies && (
                                    <div className="mt-5">
                                        <h2 className="font-bold text-gray-800">Technologies utilisées</h2>
                                        <ul className="flex flex-wrap justify-around mt-5">
                                            {experience.technologies.map((tech) => (
                                                <li key={tech}
                                                    className="border-2 p-2 border-black rounded-lg m-1">{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {experience.tasks && (
                                    <div className="mt-5">
                                        <h2 className="font-bold text-gray-800">Tâches principales</h2>
                                        <ul className="list-disc list-inside mt-1">
                                            {experience.tasks.map((task) => (
                                                <li key={task}>{task}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Layout>
    )
        ;
}

export default Experience;
