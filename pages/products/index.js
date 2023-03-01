import NavBar from "../../components/navBar/navBar";
import { Cloud } from "react-bootstrap-icons";
import Link from "next/link";
export default function Products() {
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
      <h1 className="model-title">Our Products</h1>
      <div className="divider"></div>
      <div class="lg:flex mb-4 m-10 rounded mx-auto">
        <div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10 relative flex flex-col">
          <img
            class="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />

          <div class="px-6 py-4 h-full text-center">
            <div class="font-bold text-xl mb-2">Information Technology</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <Link href="/More-detail">
            <a className="no-underline w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center">
              {" "}
              <span>Read More</span>
            </a>
          </Link>
        </div>

        <div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10">
          <img
            class="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />

          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">Digital Signage</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <Link href="/More-detail">
            <a className="no-underline w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center">
              {" "}
              <span>Read More</span>
            </a>
          </Link>
        </div>

        <div class="w-full lg:w-1/3 rounded overflow-hidden shadow-lg m-10">
          <img
            class="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4 text-center">
            <div class="font-bold text-xl mb-2">
              Radiological information system
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <Link href="/More-detail">
            <a className="no-underline w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex justify-center items-center">
              {" "}
              <span>Read More</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
