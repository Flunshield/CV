import Layout from "components/ComposantsCommun/Layout.tsx";
import { isMobile } from "react-device-detect";
import clsx from "clsx";
import { EXPERIENCES } from "../constante.ts";
// @ts-ignore
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const Experience = () => {

    // @ts-ignore
    const NextArrow = ({ onClick }) => (
        <div
            className="absolute right-4 cursor-pointer z-10 bg-white p-2 mr-5 rounded-full shadow-lg hover:bg-gray-600"
            onClick={onClick}
        >
            <FaChevronRight className="text-black" size={20} />
        </div>
    );

    // @ts-ignore
    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute left-5 -bottom-8 cursor-pointer z-10 bg-white p-2 mr-5 rounded-full shadow-lg hover:bg-gray-600"
            onClick={onClick}
        >
            <FaChevronLeft className="text-black" size={20} />
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <NextArrow onClick={Event} />, // Use custom Next arrow
        prevArrow: <PrevArrow onClick={Event} />, // Use custom Prev arrow
    };

    return (
        <Layout>
            <div className={clsx(isMobile ? "p-4" : "mt-40", "w-full lg:w-2/3 mx-auto mb-12 relative")}>
                <h1 className="text-4xl font-extrabold text-secondary text-center mb-8">
                    Expériences Professionnelles
                </h1>
                <Slider {...settings}>
                    {EXPERIENCES.map((experience) => (
                        <div key={experience.id} className="p-4">
                            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:shadow-xl">
                                <div className="flex justify-center mb-5">
                                    {experience.logo && (
                                        <img
                                            src={experience.logo}
                                            alt="logo"
                                            className="border-2 border-gray-300 rounded-lg w-auto h-32 object-cover"
                                        />
                                    )}
                                </div>
                                <h2 className="text-3xl font-semibold text-gray-900 text-center mb-3">
                                    {experience.title}
                                </h2>
                                <p className="text-lg text-gray-500 text-center mb-3">{experience.date}</p>
                                <p className="text-lg text-gray-600 text-center">{experience.location}</p>
                                <p className="text-gray-700 mt-5 leading-relaxed text-justify">
                                    {experience.description}
                                </p>
                                {experience.technologies && (
                                    <div className="mt-8">
                                        <h3 className="font-bold text-gray-800 text-lg">Technologies utilisées</h3>
                                        <ul className="flex flex-wrap justify-center mt-3 gap-2">
                                            {experience.technologies.map((tech) => (
                                                <li
                                                    key={tech}
                                                    className="bg-gray-100 text-gray-800 border-2 border-gray-200 p-2 rounded-lg shadow-sm"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {experience.tasks && (
                                    <div className="mt-8">
                                        <h3 className="font-bold text-gray-800 text-lg">Tâches principales</h3>
                                        <ul className="list-disc list-inside mt-3 text-gray-700">
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
    );
};

export default Experience;
