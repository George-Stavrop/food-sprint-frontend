import React from "react";

const CarouselItem = ({image, title}) => {
    return (
        <div className=" p-1 flex flex-col justify-center items-center">
            <img className=" w-[10rem] h-[10rem] lg:h-[11rem] lg:w-[11rem] 
                rounded-full object-cover object-center" src={image} alt="" />
        
            <span className="text-[#ff6347] text-lg lg:text-xl font-bold mt-2"
                style={{
                    fontFamily: "Mansalva",
                   
                    fontSize: "1.4rem",
                    textTransform: 'capitalize',
                }}>{title}</span>
        </div>
    )
}

export default CarouselItem