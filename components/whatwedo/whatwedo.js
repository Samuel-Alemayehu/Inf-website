import Link from "next/link";
import { useState } from "react";
// import {} from 'react-bootstrap-icons'
export default function WhatWeDo() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <div className="mt-32">
        <div className="  max-w-[85%] m-auto p-[2%] rounded-lg mt-8 py-8">
          <h1 className="text-center text-sky-900 mb-16">Who we are</h1>
          <p>
            Identify, introduce, deliver and install the latest diagnostic //
            medical equipment that is relevant for the needs of health care //
            providers in the markets we serve. Build long-lasting, mutually //
            beneﬁcial relationships with customers, by providing excellent //
            service with attention to detail in all that we do. To provide a //
            turnkey solution to prospective clients. Consult clients on all //
            aspects of Medical Equipment and supplies. Continuously invest in //
            our Engineers to be the best Medical support service team in the //
            region.
          </p>
        </div>
      </div> */}
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
                  src="/barrett-ward-5WQJ_ejZ7y8-unsplash.jpg"
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
                  class="text-primary text-uppercase"
                  style={{ letterSpacing: "5px" }}
                >
                  Who we are{" "}
                </h3>
                <h5 class=" mb-0">
                  We Offer Wide Variety of Quality Services and products
                </h5>
              </div>

              <p class="mb-4">
                Identify, introduce, deliver and install the latest diagnostic
                medical equipment that is relevant for the needs of health care
                providers in the markets we serve. Build long-lasting, mutually
                beneﬁcial relationships with customers, by providing excellent
                service with attention to detail in all that we do. To provide a
                turnkey solution to prospective clients. Consult clients on all
                aspects of Medical Equipment and supplies. Continuously invest
                in our Engineers to be the best Medical support service team in
                the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
}
