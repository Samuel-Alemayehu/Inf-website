import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import React, { createContext, useState, useEffect } from "react";
import { ArrowUp } from "react-bootstrap-icons";
import Script from "next/script";
export const styleContext = createContext();
import "../components/Contacts/Model1.css";
import "../components/Partners/Partners.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./Partners/partners.css";
function MyApp({ Component, pageProps }) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 650 ? true : false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    AOS.init();
    // dynamically load wowjs module from browser
    (async function () {
      const WOW = await import("wowjs");
      new WOW.WOW({ live: false }).init();
    })();
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.4/dist/flowbite.min.css"
        />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js" />

      <styleContext.Provider value={{ sideBar, setSideBar }}>
        <div className="w-[100%] m-0 p-0">
          <div id="main" className={`w-[100%] ${!sideBar ? "m-0 p-0" : "0"}`}>
            <Component {...pageProps} />
            {isScrolled ? (
              <a
                href="#"
                class="btn btn-lg btn-primary btn-circle rounded back-to-top"
                data-aos="zoom-in-left"
                data-aos-delay="300"
              >
                <ArrowUp />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </styleContext.Provider>
    </>
  );
}

export default MyApp;
