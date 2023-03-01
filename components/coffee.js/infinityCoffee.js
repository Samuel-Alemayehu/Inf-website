import Image from "next/image";
import React, { useState, useEffect } from "react";
import NavBar from "../navBar/navBar";
import Rightbar from "../navBar/Rightnavbar";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer/footer";
import { Link } from "react-bootstrap-icons";
function Coffee() {
  const [imageUrls, setImageUrls] = useState([
    "/sun.jpg",
    "/nut.jpg",
    "/seed.jpg",
  ]);
  const [currentImage, setCurrentImage] = useState(0);
  const switchImages = () => {
    if (currentImage < imageUrls.length - 1) {
      setCurrentImage((prev) => prev + 1);
    } else {
      setCurrentImage(0);
    }
  };
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <>
      <NavBar />
      <div className="flex justify-end">
        <Rightbar />
      </div>
      <Carousel slide={true} interval={3000}>
        <Carousel.Item>
          <img
            className="h-screen w-screen"
            src="./coffee.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-screen w-screen"
            src="./coffee2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-screen w-screen"
            src="./coffee3.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className="absolute top-[75%] left-[40%] bg-slate-700 p-2 text-white opacity-75">
         INFINITY EXPORT
        </h1>
      <div class="container-fluid py-5">
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
              <div
                class="position-relative h-100"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <img
                  class="position-absolute w-100 h-100 rounded "
                  data-wow-delay="0.3s"
                  src="./coffee3.jpeg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div
              class="col-lg-7 m-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="mb-4">
                <h3
                  class="text-primary text-uppercase mb-3"
                  style={{ letterSpacing: "5px" }}
                >
                  About us {" "}
                </h3>
                <p className=" mb-3">
            Infinity Coffee, Oil Seeds and Pulses, was founded and incorporated
            in Ethiopia in 2019. We export specialty, premium and commercial
            coffee through our well integrated quality management and special
            commitment to our clients. And has since developed into a trust
            worthy exporter of high quality oil seeds, pulses, cereals,
            vegetables and fruits worldwide. Our primary objective over the last
            years has always been towards customer satisfaction and are
            committed to providing quality products with attractive prices,
            which have enabled us to build and maintain a longstanding and
            strong relationship with our customers.
          </p>
                <h3    class="text-primary text-uppercase"
                  style={{ letterSpacing: "5px" }}>
                  Our story
                </h3>
              </div>

              <p class="mb-3">
              Infinity Coffee was founded and incorporated in Ethiopia in 2021. We
            export specialty, premium and commercial coffee through our well
            integrated quality management and special commitment to our clients.
            We credit our success to dedication in quality control and tailored
            customer service. Our customers know that every coffee we ship is
            inspected and deliver you with coffee of the highest standard and
            consistent qualit
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3  class="text-primary text-uppercase text-center"
                  style={{ letterSpacing: "5px" }}>OUR PRODUCTS</h3>
      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="container">
            <div class="row g-5">
              <div
                class="col-lg-4 col-md-6 wow zoomIn"
                data-aos="zoom-in-left"
                data-aos-delay="300"
              >
                <div class="service-item bg-light border-bottom border-5 border-primary rounded">
                  <div class="position-relative p-5">
                    <div className="flex justify-center" >
                  <img src="/sun.jpg" class="w-[100%] h-[30%] rounded-lg " alt="" />
                   </div> 
                   <h3 className="mb-3 text-center pt-3">Sunflower</h3>
                    <ul>
                     <li>Oil Content:-Min11%</li>
                     <li> Acidity:-Not Excessive</li>
                     <li> Admixture:-0.05%</li>
                     <li>Moisture:-Max 8%</li>
                     <li>Color:-white/black</li>
                     <li>Impurities:- Max 3%</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.6s"
                data-aos="zoom-in-left"
                data-aos-delay="500"
              >
                <div class="service-item bg-light border-bottom border-5 border-primary rounded">
                  <div class="position-relative p-5">
                  <div className="flex justify-center" >
                  <img src="/nut.jpg" className="max-w-[100%] h-[30%]  rounded-lg" alt="" />
                   </div> 
                   <h3 className="mb-3 text-center pt-3">Ground nut</h3>
                   <ul>
                     <li>Oil Content:-Min11%</li>
                     <li> Acidity:-Not Excessive</li>
                     <li> Admixture:-0.05%</li>
                     <li>Moisture:-Max 8%</li>
                     <li>Color:-white/black</li>
                     <li>Impurities:- Max 3%</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                class="col-lg-4 col-md-6 wow zoomIn"
                data-wow-delay="0.9s"
                data-aos="zoom-in-left"
                data-aos-delay="600"
              >
                <div class="service-item bg-light border-bottom border-5 border-primary rounded">
                  <div class="position-relative p-5">
                  <div className="flex justify-center" >
                  <img src="/seed.jpg" className="max-w-[100%] h-[30%]  rounded-lg" alt=""/>
                   </div> 
                    <h3 class="mb-3 text-center pt-3">Flax Seeds</h3>
                    <ul>
                     <li>Oil Content:-Min11%</li>
                     <li> Acidity:-Not Excessive</li>
                     <li> Admixture:-0.05%</li>
                     <li>Moisture:-Max 8%</li>
                     <li>Color:-white/black</li>
                     <li>Impurities:- Max 3%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mx-auto mt-5" style={{ maxWidth: "600px" }}>
             
            <Link href={"/our-services"}>
                <a className="no-underline p-2 bg-primary text-white rounded ">
                  View more
                </a>
              </Link>
            
            </div>
          </div>
        </div>
        <Footer/>
    </>
  );
}

export default Coffee;
