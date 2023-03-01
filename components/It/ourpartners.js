import { Facebook, Alarm, HeadsetVr } from "react-bootstrap-icons";
import { useRef } from "react";
import { motion } from "framer-motion";
export default function OurPartners() {
  const divRef = useRef();
  const scrollRight = () => {
    divRef.current.scrollLeft += divRef.current.clientWidth;
  };
  const handleScroll = () => {
    const scrollWidget = divRef.current;
    if (scrollWidget.scrollLeft == 0) {
      setScrollStatus("start");
    } else if (
      scrollWidget.scrollWidth - scrollWidget.clientWidth ==
      scrollWidget.scrollLeft
    ) {
      setScrollStatus("end");
    } else {
      setScrollStatus("middle");
    }
  };

  const scrollLeft = () => {
    divRef.current.scrollLeft -= divRef.current.clientWidth;
  };

  return (
    <div className="bg-darkGrey ">
      <div className=" flex justify-between  text-textGrey py-8">
        <div className="relative overflow-x-hidden overflow-y-hidden w-full">
          <div
            className="flex justify-between scroll-smooth overflow-x-auto snap-x snap-mandatory scrollbar-hide "
            ref={divRef}
          >
            <div className="absolute xs:top-24 top-[calc(50%-56px)] -left-3">
              <button
                className="bg-slate-50  rounded-full w-[56px] h-[56px] flex items-center justify-center shadow-lg"
                onClick={scrollLeft}
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
            </div>
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>{" "}
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>{" "}
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>{" "}
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>{" "}
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>{" "}
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>{" "}
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>{" "}
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>{" "}
            <div className="w-full sm:w-fit sm:max-w-[256px] rounded-xl snap-start shrink-0 text-center  flex flex-col items-center py-4 px-5 ">
              <Facebook size={96} className="border rounded-full px-8" />
              <h1 className="font-bold text-2xl uppercase xs:text-sm my-2">
                Oracle{" "}
              </h1>
              <p className="text-sm">sads</p>
            </div>
            {/* <About /> */}
            <div className="absolute xs:top-24 top-[calc(50%-56px)] -right-3 ">
              <button
                className="bg-slate-50  rounded-full w-[56px] h-[56px] flex items-center justify-center shadow-lg"
                onClick={scrollRight}
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
                </svg>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
