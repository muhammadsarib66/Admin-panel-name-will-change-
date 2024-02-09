import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Footer = () => {
  const { Navlinks } = useSelector((state) => state.QuoteSlicer);
  const SocialMedia = [
    {
      name: "fa-linkedin-in",
      color: "text-blue-600",
      link: "https://pk.linkedin.com/company/verior-inc",
    },
    {
      name: "fa-facebook-f",
      color: "text-blue-500",
      link: "https://www.facebook.com/Verior.inc/",
    },
    {
      name: "fa-instagram",
      color:
        "bg-clip-text text-transparent bg-gradient-to-t from-orange-600 to-violet-600 ",
      link: "https://www.instagram.com/verior.inc/?hl=en",
    },
  ];

  return (
    <footer className="   grid grid-col-1  lg:grid-cols-5 gap-8 md:gap-4 px-10 py-16 md:px-12 lg:px-24 bg-onSecondary">
      <div className=" col-span-2 ">
        <div className="flex flex-col gap-8 ">
          <h2 className="text-3xl font-700">Verior Inc</h2>
          <p className="text-primary text-sm">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
          <p className=" text-primary text-md font-700">
            {" "}
            Office 218, 7th floor, Dawood center, Auto Bahn Rd, Latifabad Unit 7
            Latifabad, Hyderabad, Sindh 71000
          </p>
          <p className="text-primary text-sm font-700">
            Phone : +92-345-3531876{" "}
          </p>
        </div>
      </div>
      <div className="col-span-2  md:w-96 h-52">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dawood%20Mart%20Autobhan%20,%20Hyderabad%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">Population mapping</a>
        </iframe>
      </div>
      <div>
        <h3 className="text-2xl font-700">Links</h3>
        <ul className="flex flex-col gap-2">
          {Navlinks?.map((item, index) => {
            return (
              <li
                key={index}
                className="capitalize hover:text-onPrimary text-primary cursor-pointer "
              >
                <a href={item.link}>{item?.title}</a>
              </li>
            );
          })}
          <li className="capitalize hover:text-onPrimary text-primary cursor-pointer ">
            <Link to="/verifycerti">Verify Certificate</Link>
          </li>
          <div className="flex gap-8 pt-4">
            {SocialMedia.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={`fab ${item.name} ${item.color} text-2xl`}></i>
                </a>
              );
            })}
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
