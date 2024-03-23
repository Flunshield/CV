// @ts-ignore
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselItem {
    image: string;
    title: string;
    description: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

export const Carousel: React.FC<CarouselProps> = ({items}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {items.map((item: CarouselItem, index: number) => (
                <div key={index}>
                    <img src={item.image} alt={item.title}/>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </Slider>
    );
};

export default Carousel;
