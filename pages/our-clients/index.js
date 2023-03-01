import Link from "next/link";
export default function OurClients() {
  return (
    <>
      <div className="flex justify-end">
        <div className="fixed z-50  p-2 bg-sky-900">
          <Link href="/It">
            <a className="no-underline flex justify-end text-white rounded">
              Back
            </a>
          </Link>
        </div>
      </div>
      <section id="clients" class="section-bg">
        <div class="container">
          <div class="section-header">
            <div class="text-center mb-5">
              <h5
                class="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Our Clients
              </h5>
              <h1>Meet our happy clients</h1>
            </div>
          </div>

          <div
            class="row no-gutters clients-wrap clearfix wow fadeInUp"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="/oracle.png" class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="/oracle.png" class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="/oracle.png" class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="/oracle.png" class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="/oracle.png" class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="/oracle.png" class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="/oracle.png" class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6">
              <div class="client-logo">
                <img src="/oracle.png" class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
