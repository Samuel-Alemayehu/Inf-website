import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Rightbar from "../navBar/Rightnavbar";
import NavBar from "../navBar/navBar";
import Link from "next/link";
export default function Model1() {
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
      <div className="App">
        <div id="model1" style={{ marginTop: "20px" }}>
          <h1 className="model-title">Meet our Team</h1>
          <div className="divider"></div>
          <div className="members">
            <div className="member">
              <img
                width={400}
                height={400}
                style={{ zIndex: "10" }}
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg"
              />
              <div className="description">
                <h1>Ahmed ALAMI</h1>
                <h2>CEO</h2>
                <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                  dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
              </div>
            </div>
            <div className="member">
              <img
                width={400}
                height={400}
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg"
              />
              <div className="description">
                <h1>Ahmed ALAMI</h1>
                <h2>CEO</h2>
                <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                  dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
              </div>
            </div>
            <div className="member">
              <img
                width={400}
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg"
              />
              <div className="description">
                <h1>Ahmed ALAMI</h1>
                <h2>CEO</h2>
                <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                  dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
              </div>
            </div>
            <div className="member">
              <img
                width={400}
                src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg"
              />
              <div className="description">
                <h1>Ahmed ALAMI</h1>
                <h2>CEO</h2>
                <p>
                  Consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum
                  dolor sit amet consectet.
                </p>
                <div className="social-media">
                  <InstagramIcon />
                  <LinkedInIcon />
                  <PinterestIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
