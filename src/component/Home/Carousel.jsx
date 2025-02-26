import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { carouselFood } from "./carouselFood";
import CarouselItem from "./CarouselItem";


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="pt-10 max-w-screen overflow-hidden">
            <Slider key={window.innerWidth} {...settings}>
                {carouselFood.map((item) =>
                    <CarouselItem
                        image={item.image}
                        title={item.title}
                    />)}
            </Slider>
        </div>
    )
}

export default Carousel