import { List } from "react-bootstrap-icons";
import Link from "next/link";
// import "flowbite";
// import Dropdown from "react-bootstrap/Dropdown";
import { Dropdown } from "flowbite-react";

function Rightbar() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
    document.getElementById("main").style.marginLeft = "280px";
    ctx.setSideBar((prev) => !prev);
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    ctx.setSideBar(false);
  }

  return (
    <div className="fixed z-50 h-screen">
      <Dropdown
        label="DASHBOARD"
        class="text-white bg-sky-900 hover:bg-sky-900  focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-gary-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        <Dropdown.Item className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 no-underline hover:underline hover:bg-sky-700 hover:text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bag-dash"
            viewBox="0 0 16 16"
            className="mr-2"
          >
            {" "}
            <path
              fill-rule="evenodd"
              d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
            />{" "}
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />{" "}
          </svg>

          <Link href="/products" className="">
            <a href="#" className="text-dark no-underline">
              Products
            </a>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 no-underline hover:underline hover:bg-sky-700 hover:text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bookmark-check"
            viewBox="0 0 16 16"
            className="mr-2"
          >
            {" "}
            <path
              fill-rule="evenodd"
              d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />{" "}
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />{" "}
          </svg>
          <Link href="/our-services" className="">
            <a href="#" className="text-dark no-underline">
              Services
            </a>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 no-underline hover:underline hover:bg-sky-700 hover:text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-friends"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mr-2"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
            <circle cx="7" cy="5" r="2" />{" "}
            <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />{" "}
            <circle cx="17" cy="5" r="2" />{" "}
            <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />{" "}
          </svg>
          <Link href="/Partners" className="">
            <a href="#" className="text-dark no-underline">
              Partners
            </a>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 no-underline hover:underline hover:bg-sky-700 hover:text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-newspaper"
            viewBox="0 0 16 16"
            className="mr-2"
          >
            {" "}
            <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />{" "}
            <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />{" "}
          </svg>
          News and Events
        </Dropdown.Item>
        <Dropdown.Item className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 no-underline hover:underline hover:bg-sky-700 hover:text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
            className="mr-2"
          >
            {" "}
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />{" "}
          </svg>
          <Link href="/our-clients" className="">
            <a href="#" className="text-dark no-underline">
              Our clients
            </a>
          </Link>
        </Dropdown.Item>
        <Dropdown.Item className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 no-underline hover:underline hover:bg-sky-700 hover:text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-telephone"
            viewBox="0 0 16 16"
            className="mr-2"
          >
            {" "}
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />{" "}
          </svg>
          <Link href="/Contacts" className="">
            <a href="#" className="text-dark no-underline">
              Our Team
            </a>
          </Link>
        </Dropdown.Item>
      
      <Dropdown.Item className="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 no-underline hover:underline hover:bg-sky-700 hover:text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-download"
            viewBox="0 0 16 16"
            className="mr-2"
          >
            {" "}
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />{" "}
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />{" "}
          </svg>
          <Link href="/Admin" className="">
            <a href="#" className="text-dark no-underline">
              Admin
            </a>
          </Link>
        </Dropdown.Item>
         </Dropdown>
    </div>
  );
}

export default Rightbar;
