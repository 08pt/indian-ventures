"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import max from "@/assets/clients/max.jpg";
import ipca from "@/assets/clients/ipca.webp";

const brands = [ipca, max, ipca, max, ipca, max, ipca, max];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1424 }, items: 4 },
  desktop: { breakpoint: { max: 1424, min: 1000 }, items: 3 },
  tablet: { breakpoint: { max: 1000, min: 740 }, items: 2 },
  mobile: { breakpoint: { max: 740, min: 0 }, items: 1 },
};

const Brands = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % brands.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (step) => {
    setCurrentSlide(
      (prevSlide) => (prevSlide + step + brands.length) % brands.length
    );
  };

  return (
    <div className="w-full text-black">
      <h3 className="text-center font-bold text-lg sm:text-2xl">
        VALUABLE CLIENTS
      </h3>
      <div className="max-w-screen-2xl mx-auto">
        <Carousel
          autoPlay={true}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
          arrows={false}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="max-w-xs overflow-hidden justify-center items-center mx-auto mt-10"
            >
              <div className="flex items-center justify-center bg-white shadow-inner rounded-md py-3 mx-4 shadow-black">
                <Image
                  src={brand}
                  alt={`Brand ${index}`}
                  className="w-24 h-32"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Brands;