import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const mytext = useRef();
  const myimg = useRef();
  useEffect(() => {
    const text1 = mytext.current;
    const image = myimg.current;
    gsap.fromTo(
      text1,
      { y: "0.5vh" },
      {
        y: "30vh",
        scrollTrigger: {
          trigger: text1,
          start: "top 15%",
          end: "bottom 30%",
          markers: true,
          toggleActions: "play reset play reset",
          // prpr
        },
      }
    );
    gsap.fromTo(
      image,
      { scale: 1 },
      {
        scale: 1.1,
        scrollTrigger: {
          trigger: image,
          start: "top 20%",
          end: "bottom 30%",
          markers: true,
          toggleActions: "play reset play reset",
          // prpr
        },
      }
    );
  }, []);

  return (
    <>
      <div className="helper"></div>
      <div className="container">
        <div className="text1" ref={mytext}>
          WE CALL THEM CHANGEMAKERS
        </div>
        <Swiper
          ref={myimg}
          direction={"vertical"}
          slidesPerView={"auto"}
          freeMode={true}
          scrollbar={true}
          mousewheel={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
          className="mySwiper"
          style={{
            height: "400px",
            width: "800px",
            position: "absolute",
          }}
        >
          <SwiperSlide className="slides">Slide 1</SwiperSlide>
          <SwiperSlide className="slides">Slide 2</SwiperSlide>
          <SwiperSlide className="slides">Slide 3</SwiperSlide>
          <SwiperSlide className="slides">Slide 4</SwiperSlide>
          <SwiperSlide className="slides">Slide 5</SwiperSlide>
        </Swiper>
      </div>
      <div className="helper"></div>
    </>
  );
};

export default Scroll;
