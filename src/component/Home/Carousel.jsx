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
        speed: 2000, // Slower transition speed
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Delay between slides
        arrows: false,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024, // For medium screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // For small screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // For very small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ], // Smooth continuous transition
    };
    console.log("Settings: ", settings);
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