/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
function Testmonials() {
  const [testmonials, setTestmonials] = useState([
    {
      name: "National Bank of Ethiopia",
      comment:
        "Infinity Advanced Technology Solutions plc (IATS) has successfully completed CISCO 890 Series router items and delivered with the agreed quality and time service.Therefore, we recommend Infinity advanced technology solutions can perform the above types of CISCO 890 series router for any other Customer.",
    },
    {
      name: "United Bank S.C",
      comment:
        "Infinity advanced technology solutions plc (IATS) have played a key role when our bank embarks on the upgrade of its Core banking system back in 2013 by suppling the license for oracle Database (11g) Middleware (Web Logic 11g) and Reporting (BI publisher) solutions.Hence it is without any reservation and hesitation that we recommended solutions for supply of oracle and related product license as we found them Quite helpful and good in our client-partner relationship scheme.",
    },
    {
      name: "Buna international Bank S.C ",
      comment:
        "We are glad to acknowledge that IATS has put the right Team with the best Skill and Capabilities for Supply and implementation of High-end servers, Storage Tape Library, Rack and SAN Switches in ensuring precise planning execution and hand over of the entire project to our satisfaction.We recommend IATS for undertaking similar technical projects and hope to see similar success results in all future projects.",
    },
  ]);
  const [currentTestmonial, setCurrentTestmonial] = useState(0);
  const switchTestmonial = () => {
    if (currentTestmonial < testmonials.length - 1) {
      setCurrentTestmonial((prev) => prev + 1);
    } else {
      setCurrentTestmonial(0);
    }
  };
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      switchTestmonial();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  const nextTestimonial = () => {
    if (currentTestmonial < testmonials.length - 1) {
      setCurrentTestmonial((prev) => prev + 1);
    } else {
      setCurrentTestmonial(0);
    }
  };
  const previousTestimonial = () => {
    if (currentTestmonial === 0) {
      setCurrentTestmonial(testmonials.length - 1);
    } else {
      setCurrentTestmonial((prev) => prev - 1);
    }
  };

  return (
    <>
      <link
        href="https://unpkg.com/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />

      <section className="bg-gray-100">
        <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
            <div className="max-w-xl text-center sm:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Don't just take our word for it...
                <br className="hidden sm:block lg:hidden" />
                Read Testmonials from our customers
              </h2>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  onClick={previousTestimonial}
                  className="prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white"
                >
                  <span className="sr-only">Previous Slide</span>
                  <svg
                    className="h-5 w-5 -rotate-180 transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextTestimonial}
                  className="next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white"
                >
                  <span className="sr-only">Next Slide</span>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div className="swiper-container !overflow-hidden">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                      <div>
                        <div className="mt-4">
                          <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
                            {testmonials[currentTestmonial].name}
                          </p>
                          <p className="mt-4 leading-relaxed text-gray-500">
                            {testmonials[currentTestmonial].comment}
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
              onClick={previousTestimonial}
            >
              <svg
                className="h-5 w-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
              onClick={nextTestimonial}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testmonials;
