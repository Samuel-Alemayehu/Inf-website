/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import About from "../components/About/about";
import NavBar from "../components/navBar/navBar";
import WhatWeDo from "../components/whatwedo/whatwedo";
import Footer from "../components/Footer/footer";
import Rightbar from "../components/navBar/Rightnavbar";
import News from "../components/News/News";
import { Carousel } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/autoplay";
export default function Home({ data }) {
  // SwiperCore.use([Autoplay]);
  console.log(data);
  return (
    <>
      <div className="flex">
        <div>
          <div>
            <NavBar />

            <div className="w-full h-full ">
              <Carousel slide={true}>
                {data.map((data, index) => (
                  <Carousel.Item interval={1000} key={index}>
                    <img
                      className="h-screen w-screen"
                      src={data.Url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                ))}
                {/* <Carousel.Item interval={1000}>
                  <img
                    className="h-screen w-screen"
                    src="/arseny-togulev-DE6rYp1nAho-unsplash.jpg"
                    alt="First slide"
                  />
                </Carousel.Item> */}
                {/* <Carousel.Item>
                  <img
                    className="h-screen w-screen"
                    src="/farzad-p-xSl33Wxyc-unsplash.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="h-screen w-screen"
                    src="/marcel-scholte-LPurJnihmQI-unsplash.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item> */}
              </Carousel>

              <h1 className="absolute top-[75%] left-[33%] bg-slate-700 p-2 text-white opacity-75">
                Infinity – Ready for the future
              </h1>
            </div>
          </div>
        </div>
      </div>
      <WhatWeDo />
      <About />
      <News />
      <Footer />
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        <SwiperSlide> Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper> */}
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const data = await axios.get("http://localhost:3000/uploadImage");
    // console.log(res.data);

    return {
      props: { data: data.data.response },
    };
  } catch (error) {
    return {
      props: { data: [] },
    };
  }
}
