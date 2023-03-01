import Footer from "../Footer/footer";
import NavBar from "../navBar/navBar";
import Rightbar from "../navBar/Rightnavbar";
import { Carousel } from "react-bootstrap";
export default function Techinical() {
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
      <h1 className="absolute top-[75%] left-[32%] bg-slate-700 p-2 text-white opacity-75">
          INFINITY SERVICE AND SUPPORT
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
          Infinity Advanced Technology Solutions technical services department
          uses an organized structure and workflow that ensure delivery of
          effective and quality service to its customers. Infinity has supplied
          and installed medical equipment in more than 500 Health facilities in
          Ethiopia. This amounts to greater than 2,000 equipment. Technical
          services have a total of 32 technical resources; which is a team of
          well trained, experienced and equipment specialized Biomedical,
          Electrical and Mechanical engineers. The team has proved its technical
          and operational capability through successful implementation of
          various complex turnkey projects.
        </p>
        <p>
          Infinity implements continuous improvement and invests on tools,
          trainings and stocking spare parts. Infinity uses IT infrastructure to
          track real-time digital records on equipment and corresponding
          documentations. This enables quality service delivery, proactive
          planning and assists in making informed decision to reduce risk of
          unplanned interruption to patient care and workflow. Through the use
          of real-time power, environment and equipment monitoring tools,
          infinity advises customer and take necessary proactive actions to
          reduce equipment downtime.
        </p>
        <p>
          A fully equipped workshop space has been operational since January
          2017. The workshop is furnished with biomedical, electrical,
          mechanical and safety tools. Infinity service has extended its reach
          by providing services to 98 Kenyan Hospitals under the Kenyan MOH
          program. Infinity has a dedicated service call center to receive
          customer calls and process service requests accordingly. Customers can
          contact Infinity’s Service Call Centre through below listed contact
          details.
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
      <div className=" bg-white max-w-[85%] m-auto  p-[0%] rounded-lg mt-4 pb-5" >
        <div className="grid grid-cols-2">
          <div className="drop-shadow-2xl rounded-lg bg-white mr-12 p-3">
            <h3   class="text-primary text-uppercase text-center"
                  style={{ letterSpacing: "5px" }}>
              Our vision
            </h3>
            <li >
              To be the leading healthcare service provider in East Africa with
              unparalleled technical and operational capabilities.
            </li>
            <h3 class="text-primary text-uppercase text-center"
                  style={{ letterSpacing: "5px" }}>
              {" "}
              Our mission
            </h3>
            <li >
              Provide quality service by continuously investing on technical and
              operational capabilities.
            </li>
            <li >
              Build and maintain long-lasting relationship with customers.
            </li>
            <li >
              {" "}
              Serve the society with honesty and diligent enthusiasm.
            </li>
            <li > Ensure customer satisfaction.</li>
          </div>

          <div>
            <img src="/image3.png" alt="image not found" className="w-[80%]" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
