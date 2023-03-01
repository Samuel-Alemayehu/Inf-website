

 import { Envelope, Telephone, GeoAltFill, Facebook, Twitter,Linkedin, Telegram } from "react-bootstrap-icons";
 import Link from "next/link";
// import Script from "next/script";

export default function Footer() {
	const date= new Date()
	const year=date.getFullYear()
  return(

<footer class="footer-distributed">

			<div class="footer-left">

				<h3><img src="http://www.infinity-et.com/wp-content/uploads/2019/12/22.png" /></h3>

				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					
					<a href="/IT">IT</a>
				
					<a href="/coffee">Export</a>
				
					<a href="/Medical">Medical</a>
					
					<a href="/service-and-support">Service</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">INFINITY © {year}</p>
			</div>

			<div class="footer-center">

				<div style={{display:'flex',color:"white"}}>
					{/* <i class="fa fa-map-marker"></i> */}
					
					<GeoAltFill/>Bole Road (Africa Avenue) Alem Building, 6th Floor.
                <br></br>  P.O Box 1531 code 1000 Addis Ababa, Ethiopia
				</div>
				<br></br> <br></br> 
				<div style={{display:'flex',color:"white"}}>
					
					<Telephone/>
					+251 987 808 066 / +251 116 662 827 / +251 116 182 153 
               
				</div>
				<br></br> <br></br> 
				<div style={{display:'flex',color:"white"}}>
					<Envelope/>
					export@infinity-et.com 
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

				<Link href="/">
                      <a>
                        <Facebook
                           size={30}
                           className="mr-4 bg-slate-100 rounded-20px text-slate-600 "
                         />
                      </a>
                   </Link> <Link href="/asdasdx">
                      <a>
                         <Twitter
                           size={30}
                           className="mr-4 bg-slate-600 rounded-full text-slate-100"
                         />
                       </a>
                     </Link>
					  <Link href="/sadasdasd">
                      <a>
						<i class="fa fa-linkedin"></i>
                         <Linkedin
                           size={30}
                           className="mr-4 bg-slate-300 rounded-10px text-slate-600"
                         />
                       </a>
                     </Link>
					    <Link href="/ssad">
                       <a>
						<i class="fa fa-twitter"></i>
                         <Telegram
                           size={30}
                           className="mr-4 bg-slate-100 rounded-20px text-slate-600"
                         />
                       </a>
                     </Link>
					
					

				</div>

			</div>

		</footer>

  )
}
//   const date = new Date();
//   const year = date.getFullYear();

 // return (
//     <>
//       <div>
//         <section class="bg-gray-500 dark:bg-gray-900">
//           <div class="py-4 lg:py-16 px-4 mx-auto max-w-screen">
//             <div className="flex justify-center">
//               <a href="https://www.revolvermaps.com/livestats/5p5w7r1sdli/">
//                 <img
//                   src="//rf.revolvermaps.com/h/m/a/0/ff0000/256/0/5p5w7r1sdli.png"
//                   width="512"
//                   height="256"
//                   alt="Map"
//                   style={{ border: "0px" }}
//                 />
//               </a>
//               <div style={{ marginLeft: "80px" }}>
//                 <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
//                   Contact Us
//                 </h2>
//                 <p class="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
//                   MAIL ADDRESS export@infinity-et.com <br />
//                   <br />
//                   PHONE +251 987 808 066 / +251 116 662 827 / +251 116 182 153 /
//                   +251 11 663 9291 <br /> <br />
//                   ADDRESS Bole Road (Africa Avenue) Alem Building, 6th Floor.
//                   P.O Box 1531 code 1000 Addis Ababa, Ethiopia
//                 </p>
//                 <ul className="flex items-center justify-center">
//                   <li>
//                     <Link href="/">
//                       <a>
//                         <Facebook
//                           size={30}
//                           className="mr-4 bg-slate-100 rounded-full text-slate-600 "
//                         />
//                       </a>
//                     </Link>
//                   </li>
//                   <li>
//                    
//                   </li>
//                   <li>
//                    
//                   </li>
//                   <li>
//                  
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }
