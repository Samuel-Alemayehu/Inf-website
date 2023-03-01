import Footer from "../../components/Footer/footer";
import NavBar from "../../components/navBar/navBar";
import Link from "next/link";
export default function Surgical() {
  return (
    <>
      <NavBar />
      <div className="bg-[url('../public/coffee2.jpg')] h-screen bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="h-screen flex justify-center items-end text-white text-center pb-12">
          <h1 className="mb-4 ">Digital imaging solutions</h1>
        </div>
      </div>
      <h1 className="text-center text-3xl mb-2 mt-2">1.Radiography</h1>
      <div className=" bg-white max-w-[100%] m-auto p-[2%]  mt-4 mb-4 flex pl-2">
        <div className="bg-white max-w-[30%] max-h-[20%] m-auto drop-shadow-2xl p-[2%] ">
          <h2 className="text-2xl">1.1 Digital X-ray</h2>
          <div className="flex justify-center">
            <img
              src="https://www.infinity-et.com/wp-content/uploads/2019/11/image1-300x169.jpeg"
              alt="image not found"
              className="w-[30%]"
            />
          </div>
          <h1 className="text-sm">BRIVO DR-F</h1>
          <p>
            The DR-F is a floor mounted general purpose, digital radiographic
            system with a single detector, high frequency generator, integrated
            table and wall stand, providing you the latest technology. It has an
            improved workflow and high reliability in a cost-effective and
            easy-to-use system.
          </p>
        </div>
        <div className="bg-white max-w-[30%] max-h-[20%] m-auto drop-shadow-2xl p-[2%]">
          <h1 className="text-2xl">Optima XR646 Digital RAD</h1>
          <div className="flex justify-center">
            <img
              src="https://www.infinity-et.com/wp-content/uploads/2019/11/image2-300x239.jpg"
              alt="image not found"
              className="w-[30%]"
            />
          </div>
          <h1 className="text-sm">Optima XR646 Digital RAD</h1>
          <p>
            The GE Optima XR646—a ceiling suspended digital radiography system
            featuring the FlashPad, the ultra-wideband wireless detector,is
            designed to effectively address and overcome daily imaging
            challenges and is optimized for the way you work.
          </p>
          <a href="http://www3.gehealthcare.com/en/products/categories/radiography/fixed_rad_systems/optima_xr646">
            Read more
          </a>
        </div>
        <div className="bg-white max-w-[30%] max-h-[20%] m-auto drop-shadow-2xl p-[2%]">
          <h1 className="text-2xl">Optima XR646 Digital RAD</h1>
          <div className="flex justify-center">
            <img
              src="https://www.infinity-et.com/wp-content/uploads/2019/11/image3-300x202.jpg"
              alt="image not found"
              className="w-[30%]"
            />
          </div>
          <h1 className="text-sm">Digital Mobile X-ray</h1>
          <p>
            {" "}
            The Optima XR220amx is a self-contained battery operated mobile
            radiographic digital X-Ray imaging system designed for performing
            radiographic exams at the point of care
          </p>
          <a href="http://www3.gehealthcare.com/en/products/categories/radiography/mobile_x-ray_systems/optima_xr220amx">
            Read more
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
