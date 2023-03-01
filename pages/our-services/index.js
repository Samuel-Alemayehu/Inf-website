import NavBar from "../../components/navBar/navBar";
import { Cloud, Camera } from "react-bootstrap-icons";
import Link from "next/link";
export default function OurServices() {
  return (
    <>
      <NavBar />
      <div className="flex justify-end">
        <div className="fixed z-50  p-2 bg-sky-900">
          <Link href="/It">
            <a className="no-underline flex justify-end text-white rounded">
              Back
            </a>
          </Link>
        </div>
      </div>

      {/* <h1 className="model-title">Our services</h1>
      <div className="divider"></div>
      <div class="lg:flex mb-4 m-10 rounded mx-auto">
        <div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10 relative flex flex-col">
          <div className="w-full flex justify-center ">
            <Cloud size={100} color={"blue"} className="mt-12 mb-6" />
          </div>
          <div class="px-6 py-4 h-full text-center">
            <div class="font-bold text-xl mb-2">Information Technology</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <button class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center ">
             */}
      {/* <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg> */}
      {/* <span className="text-center">Read More</span>
          </button>
        </div>

        <div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10"> */}
      {/* <img
            class="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          /> */}
      {/* <div className="w-full flex justify-center ">
            <Cloud size={100} color={"blue"} className="mt-12 mb-6" />
          </div>
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">Digital Signage</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div> */}
      {/* <button class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center"> */}
      {/* <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg> */}
      {/* <span>Read More</span>
          </button>
        </div> */}

      {/* <div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10"> */}
      {/* <img
            class="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          /> */}
      {/* <div className="w-full flex justify-center ">
            <Cloud size={100} color={"blue"} className="mt-12 mb-6" />
          </div>
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">
              Radiological information system
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div> */}
      {/* <button class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center"> */}
      {/* <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg> */}
      {/* <span>Read More</span>
          </button>
        </div>
      </div> */}
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
            <div
              class="col-lg-4 col-md-6 wow zoomIn"
              data-wow-delay="0.9s"
              data-aos="zoom-in-left"
              data-aos-delay="300"
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
            <div
              class="col-lg-4 col-md-6 wow zoomIn"
              data-wow-delay="0.9s"
              data-aos="zoom-in-left"
              data-aos-delay="500"
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
        </div>
      </div>
    </>
  );
}
