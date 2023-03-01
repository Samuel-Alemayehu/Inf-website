/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import NavBar from "../../components/navBar/navBar";
import { Cloud, Camera } from "react-bootstrap-icons";
import Testmonials from "../../components/It/Testmimonials";
import Footer from "../../components/Footer/footer";
import OurPartners from "../../components/It/ourpartners";
import Rightbar from "../../components/navBar/Rightnavbar";
import Link from "next/link";
import { Carousel } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/autoplay";
import { padding } from "@mui/system";
export default function It() {
  const [imageUrls, setImageUrls] = useState([
    "/adi-goldstein-EUsVwEOsblE-unsplash (1).jpg",
    "/farzad-p-xSl33Wxyc-unsplash.jpg",
    "/luke-peters-B6JINerWMz0-unsplash (1).jpg",
    "/fotis-fotopoulos-SyvsTmuuZyM-unsplash.jpg",
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
      <div className="w-full h-full">
        <Carousel slide={true} interval={3000}>
          <Carousel.Item>
            <img
              className="h-screen w-screen"
              src="/adi-goldstein-EUsVwEOsblE-unsplash (1).jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="h-screen w-screen"
              src="/farzad-p-xSl33Wxyc-unsplash.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="h-screen w-screen"
              src="/luke-peters-B6JINerWMz0-unsplash (1).jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <h1 className="absolute top-[75%] left-[33%] bg-slate-700 p-2 text-white opacity-75">
          INFORMATION TECHNOLOGY
        </h1>
        <div className="h-screen flex">
          {" "}
          <div className=" bg-white max-w-[85%] m-auto  ">
            <div className="flex">
              <div
                className="mr-8"
                data-aos="zoom-in-right"
                data-aos-delay="300"
              >
                {" "}
                <h3
                  class="text-primary text-uppercase text-center"
                  style={{ letterSpacing: "5px" }}
                >
                  About Us
                </h3>{" "}
                <p>
                  Infinity Advanced Technology solutions PLC (formerly known as
                  Boston Consulting) provides a complete portfolio of services
                  tailored to its clients’ businesses and IT needs for today
                  while catering for the future. Using our core areas of
                  expertise in consulting, implementing business critical data
                  center, Network/security, PACS and RIS Implementation, Banking
                  solution implementation, training and support, we enable our
                  clients to maximize their competitive advantage. The number of
                  successful implementations support that we continue to provide
                  at various client sites over the past several years have
                  helped us develop a good reputation in this highly competitive
                  market place.
                </p>
              </div>

              <img
                src="/farzad-p-xSl33Wxyc-unsplash.jpg"
                height={100}
                width={500}
                data-aos="zoom-in-left"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="container">
            <div class="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
              <h3
                class="text-primary text-uppercase"
                style={{ letterSpacing: "5px" }}
              >
                Services
              </h3>
              {/* <h1 class="display-5 mb-0">
                Our Excellent Services
              </h1> */}
            </div>
            <div class="row g-5">
              <div
                class="col-lg-4 col-md-6 wow zoomIn"
                data-aos="zoom-in-left"
                data-aos-delay="300"
              >
                <div class="service-item bg-light border-bottom border-5 border-primary rounded">
                  <div class="position-relative p-5">
                    <Camera size={80} />

                    {/* <i class="flaticon-cctv d-block display-1 fw-normal text-secondary mb-3"></i> */}
                    {/* <h5 class="text-primary mb-0">CCTV</h5> */}
                    <h3 class="mb-3 text-primary">Cloud computing</h3>
                    <p>
                      Kasd dolor no lorem sit tempor at justo rebum rebum stet
                      justo elitr dolor amet sit
                    </p>
                    {/* <a href="">
                      Read More<i class="bi bi-arrow-right ms-2"></i>
                    </a> */}
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
                    <Camera size={80} />

                    {/* <i class="flaticon-surveillance d-block display-1 fw-normal text-secondary mb-3"></i> */}
                    {/* <h5 class="text-primary mb-0">CCTV</h5> */}
                    <h3 class="mb-3 text-primary">Cloud computing</h3>
                    <p>
                      Kasd dolor no lorem sit tempor at justo rebum rebum stet
                      justo elitr dolor amet sit
                    </p>
                    {/* <a href="">
                      Read More<i class="bi bi-arrow-right ms-2"></i>
                    </a> */}
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
                    {/* <i class="flaticon-camera d-block display-1 fw-normal text-secondary mb-3"></i> */}
                    <Camera size={80} />
                    {/* <h5 class="text-primary mb-0">Cloud computing</h5> */}
                    <h3 class="mb-3 text-primary">Cloud computing</h3>
                    <p>
                      Kasd dolor no lorem sit tempor at justo rebum rebum stet
                      justo elitr dolor amet sit
                    </p>
                    {/* <a href="">
                      Read More<i class="bi bi-arrow-right ms-2"></i>
                    </a> */}
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
        <Testmonials />
        <Footer />
      </div>
    </>
  );
}
