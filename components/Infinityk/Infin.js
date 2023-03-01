import Footer from "../../components/Footer/footer";
import NavBar from "../../components/navBar/navBar";
import Link from "next/link";
import Rightbar from "../navBar/Rightnavbar";
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect} from "react";


export default function Infinityken() {
  const [imageUrls, setImageUrls] = useState([
    "/optima.jpg",
    "/7089.jpg",
    "/ezgif.jpg",
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
            src="./optima.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-screen w-screen"
            src="./7089.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-screen w-screen"
            src="./ezgif.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
         
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className="absolute top-[75%] left-[40%] bg-slate-700 p-2 text-white opacity-75">
          INFINITY KENYA
        </h1> 
        <h3 class="text-primary text-uppercase text-center mt-5"
                  style={{ letterSpacing: "5px" }}>
          medical equipment 
        </h3>
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
                  <img src="/optima.jpg" class="w-[100%] max-h-[30%] rounded-lg " alt="" />
                   </div> 
                   <h3 class="text-center">Surgical Imaging</h3>
            <p>
              {" "}
              To be the premier medical equipment & supplies provider in
              Ethiopia. To develop unparalleled maintenance and service
              capabilities that will enable us to provider our services in the
              East African region.
            </p>
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
                  <img src="/7089.jpg" className="max-w-[100%] max-h-[30%]  rounded-lg" alt="" />
                   </div> 
                   <h3 className="text-center">Dignostic Imaging</h3>
            <p>
              {" "}
              To be the premier medical equipment & supplies provider in
              Ethiopia. To develop unparalleled maintenance and service
              capabilities that will enable us to provider our services in the
              East African region.
            </p>
           
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
                  <img src="/ezgif.jpg" className="max-w-[100%] h-[30%]  rounded-lg" alt=""/>
                   </div> 
                   <h3 className="text-center">Life care solutions</h3>
            <p>
              {" "}
              To be the premier medical equipment & supplies provider in
              Ethiopia. To develop unparalleled maintenance and service
              capabilities that will enable us to provider our services in the
              East African region.
            </p>
           
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center mx-auto mt-5" style={{ maxWidth: "600px" }}>
             
            <Link href="/our-services">
                <a className="no-underline p-2 bg-primary text-white rounded ">
                  View more
                </a>
              </Link>
            
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}
