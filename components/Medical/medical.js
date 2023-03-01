import Footer from "../Footer/footer";
import NavBar from "../navBar/navBar";
import { Cloud } from "react-bootstrap-icons";
import Link from "next/link";
import Rightbar from "../navBar/Rightnavbar";
import Surgical from "../Surgical/Surgical";
import { Carousel } from "react-bootstrap";

export default function Medical() {
  return (
    <div>
      <div>
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
          INFINITY MEDICAL
        </h1> 
      </div>
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
            <Link href={"/Lifecare"}>
              <a>Read more</a>
            </Link>
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
            <Link href={"/Lifecare"}>
              <a>Read more</a>
            </Link>
           
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
            <Link href={"/Lifecare"}>
              <a>Read more</a>
            </Link>
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
        
      {/* <div className=" bg-white max-w-[85%] m-auto  p-[2%] rounded-lg mt-4">
        <div className="grid grid-cols-2">
          <div className="drop-shadow-2xl rounded-lg bg-white mr-12 p-4">
            <h1 className="font-serif text-gray-600 font-bold text-4xl">
              Surgical Solutions
            </h1>
            <li className="italic">
              To be the leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities. To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities. To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.
            </li>
          </div>
          <div>
            <img
              src="https://infinity-et.com/wp-content/uploads/2019/12/ADK-OR1-3.jpg"
              alt="image not found"
              className="w-[80%]"
            />
            <button
              type="button"
              class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              READ MORE
            </button>
          </div>
          <div></div>
        </div>
      </div> */}
      {/* <div className=" bg-white max-w-[85%] m-auto  p-[2%] rounded-lg mt-4">
        <div className="grid grid-cols-2">
          <div className="drop-shadow-2xl rounded-lg bg-white mr-12 p-4">
            <h1 className="font-serif text-gary-600 font-bold text-4xl">
              DIGITAL IMAGING{" "}
            </h1>
            <li className="italic">
              To be the leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities. To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities. To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities. To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.
            </li>
            <Link href={"/Surgical"}>
              <a>Read more</a>
            </Link>
          </div>

          <div>
            <img
              src="https://infinity-et.com/wp-content/uploads/2019/11/image17.png"
              alt="image not found"
              className="w-[80%]"
            />
          </div>

          <div></div>
        </div>
      </div>
      <div className=" bg-white max-w-[85%] m-auto  p-[2%] rounded-lg mt-4">
        <div className="grid grid-cols-2">
          <div className="drop-shadow-2xl rounded-lg bg-white mr-12 p-4">
            <h1 className="font-serif text-gray-600 font-bold text-4xl">
              LIFE CARE SOLUTIONS{" "}
            </h1>
            <li className="italic">
              To be the leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.
            </li>
            <Link href={"/Lifecare"}>
              <a>Read more</a>
            </Link>
          </div>

          <div>
            <img
              src="https://infinity-et.com/wp-content/uploads/2019/12/image004-1.jpg"
              alt="image not found"
              className="w-[80%]"
            />
          </div>
        </div>
      </div>
      <div className=" bg-white max-w-[85%] m-auto  p-[2%] rounded-lg mt-4">
        <div className="grid grid-cols-2">
          <div className="drop-shadow-2xl rounded-lg bg-white mr-12 p-4">
            <h1 className="font-serif text-gray-600 font-bold text-4xl">
              LABORATORY SOLUTIONS{" "}
            </h1>
            <li className="italic">
              To be the leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.To be the
              leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.
            </li>
          </div>

          <div>
            <img
              src="https://infinity-et.com/wp-content/uploads/2019/12/image007.jpg"
              alt="image not found"
              className="w-[80%]"
            />
          </div>
          <div>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              READ MORE
            </button>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

