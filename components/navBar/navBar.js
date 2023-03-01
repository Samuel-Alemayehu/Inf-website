import { useState, useEffect, useRef, useContext } from "react";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import SplitButton from "react-bootstrap/SplitButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import { DropdownButton } from "react-bootstrap";
// import ButtonGroup from "react-bootstrap";
import Link from "next/link";
import { List } from "react-bootstrap-icons";
import { styleContext } from "../../pages/_app";
import Rightbar from "./Rightnavbar";
const NavBar = () => {
  const ctx = useContext(styleContext);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 150 ? true : false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const toggleShow = () => setShow((s) => !s);
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
    <>
      <div>
        <div id="mySidenav" className={`${ctx.sideBar ? "sidenav" : "hidden"}`}>
          {/* <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a> */}

          <Link href="/">
            <a
              class="hover:bg-gray-100 dark:hover:bg-gray-600 no-underline text-white hover:underline hover:bg-gray-500 "
              onClick={closeNav}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                  className="mt-2 mr-1"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />{" "}
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />{" "}
                </svg>
                Home
              </div>
            </a>
          </Link>

          <Link href="/It">
            <a
              class=" hover:bg-gray-100 dark:hover:bg-gray-600 no-underline text-white hover:underline hover:bg-gray-500 "
              onClick={closeNav}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-laptop"
                  viewBox="0 0 16 16"
                  className="mt-2 mr-1"
                >
                  {" "}
                  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />{" "}
                </svg>
                Infinity It
              </div>
            </a>
          </Link>
          <Link href="/coffee">
            <a
              class=" hover:bg-gray-100 dark:hover:bg-gray-600 no-underline text-white hover:underline hover:bg-gray-500 "
              onClick={closeNav}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrows-expand"
                  viewBox="0 0 16 16"
                  className="mt-2 mr-1"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10z"
                  />{" "}
                </svg>
                Infinity export
              </div>
            </a>
          </Link>
          <Link href="/Infinityk">
            <a
              class=" hover:bg-gray-100 dark:hover:bg-gray-600 no-underline text-white hover:underline hover:bg-gray-500 "
              onClick={closeNav}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-flag"
                  viewBox="0 0 16 16"
                  className="mt-2 mr-1"
                >
                  {" "}
                  <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />{" "}
                </svg>
                Infinity Kenya
              </div>
            </a>
          </Link>

          <Link href="/service-and-support">
            <a
              class=" hover:bg-gray-100 dark:hover:bg-gray-600 no-underline text-white hover:underline hover:bg-gray-500 "
              onClick={closeNav}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart-dash"
                  viewBox="0 0 16 16"
                  className="mt-2 mr-1"
                >
                  {" "}
                  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />{" "}
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />{" "}
                </svg>
                Services & support
              </div>
            </a>
          </Link>
          <Link href="/Medical">
            <a
              class=" hover:bg-gray-100 dark:hover:bg-gray-600 no-underline text-white hover:underline hover:bg-gray-500 "
              onClick={closeNav}
            >
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bag-x"
                  viewBox="0 0 16 16"
                  className="mt-2 mr-1"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"
                  />{" "}
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />{" "}
                </svg>
                Medical Services
              </div>
            </a>
          </Link>
        </div>
        <div>
          <div
            className={`fixed top-0 w-full z-50 h-[5%] ${
              isScrolled ? "bg-white" : ""
            }  flex`}
          >
            <button
              className={`flex bg-sky-900 text-white w-[5%] h-10 justify-center items-center `}
              onClick={openNav}
            >
              {!ctx.sideBar ? <List size={30} /> : <>&times;</>}
            </button>
            <div className="w-[10%] flex justify-center">
              <Link href="/">
                <a>
                  <img src="http://www.infinity-et.com/wp-content/uploads/2019/12/22.png" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
// <>
//   <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
//     <Offcanvas.Header closeButton>
//       <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//     </Offcanvas.Header>
//     <Offcanvas.Body>
//       <button>x</button>
//     </Offcanvas.Body>
//   </Offcanvas>
//   <div
//     className={`fixed top-0 w-full z-50 h-[10%] ${
//       isScrolled ? "bg-white" : ""
//     }  flex`}
//   >
//     <div className="max-w-[10%] m-auto phone:max-w-[50%] phone:m-0">
//       <img src="http://www.infinity-et.com/wp-content/uploads/2019/12/22.png" />
//     </div>
//     <div className="max-w-[70%]  m-auto  ">
//       <ul className=" phone:hidden 2xl:flex xl:flex lg:flex md:hidden Tab:hidden sm:hidden ">
//         <li>
//           <Link href="/">
//             <a className="no-underline mr-4 text-slate-700">Home</a>
//           </Link>
//         </li>
//         {/* <li>
//           <Link href="/About Us">
//             <a className="no-underline mr-4">About Us</a>
//           </Link>
//         </li> */}
//         <li>
//           <Link href="/It">
//             <a className="no-underline mr-4 ">Infinity It</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/coffee">
//             <a className="no-underline mr-4">Infinity Coffee</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/service-and-support">
//             <a className="no-underline mr-4">Services & support</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/Contact Us">
//             <a className="no-underline mr-2">Contact Us</a>
//           </Link>
//         </li>
//       </ul>

//       <button className="phone:flex 2xl:hidden xl:hidden lg:hidden md:flex Tab:flex sm:flex">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="18"
//           style={{ marginBottom: "4px" }}
//           fill="currentColor"
//           className="bi bi-list "
//           viewBox="0 0 16 16"
//         >
//           <path
//             fill-rule="evenodd"
//             d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
//           />
//         </svg>
//       </button>
//     </div>
//   </div>
// </>
