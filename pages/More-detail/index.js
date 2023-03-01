import NavBar from "../../components/navBar/navBar";
import { Cloud } from "react-bootstrap-icons";
import Link from "next/link";
export default function MoreDetail() {
  return (
    <>
      <NavBar />
      {/* <div className="">
        <Link href="/products">
          <a className="no-underline flex justify-end">Back</a>
        </Link>
      </div> */}
      <div>
      <div className="flex justify-end">
        <div className="fixed z-50  p-2 bg-sky-900">
          <Link href="/products">
            <a className="no-underline flex justify-end text-white rounded">
              Back
            </a>
          </Link>
        </div>
      </div>
       <h1 className="text-center text-m">Products/readmore</h1></div>
      <div className=" max-w-[85%] m-auto h-screen p-[2%] rounded-lg mt-4 flex">
        <div className="flex justify-center items-center w-[100%] mr-4">
          {" "}
          <div>
            <h1 className="text-center font-bold  ">Digital Sinage</h1>

            <p className="text-center mr-4 text-bold">
              Digital Signage We offer a diverse spectrum of integrated
              end-to-end multi-purpose Donatello Digital Signage solutions
              ranging from slim designed units to large format displays. Our
              high-end signage solutions create bold and memorable experiences
              with your brand at key customer touch points. Interactive, robust
              and purposely designed solutions enable your business to engage
              customers at the right time, with the right message therefore
              creating personalized experiences.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[100%]">
          {" "}
          <img width={1000} src="/ramon-kagie-YXdQLn6ohbo-unsplash.jpg" />
        </div>
      </div>
      {/* Virtual Queue Management Solutions{" "}
          https://infinity-et.com/wp-content/uploads/2020/08/virtual-queuing-via-Whatsapp.png */}
    </>
  );
}
