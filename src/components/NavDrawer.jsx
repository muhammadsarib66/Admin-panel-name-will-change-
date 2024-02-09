import { useState } from "react";
import Button from "./common/Button";
import { useSelector, useDispatch } from "react-redux";
import { setModelOpen } from "../features/slicer/QuoteSlicer";
const NavDrawer = () => {
  const { Navlinks } = useSelector((state) => state.QuoteSlicer);

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
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
      color: "bg-clip-text text-transparent bg-gradient-to-t from-orange-600 to-violet-600 ",
      link: "https://www.instagram.com/verior.inc/?hl=en",
    },

    
  ];
  const handleOpenDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <div
        onClick={handleOpenDrawer}
        className="z-50 relative top-0  text-2xl cursor-pointer duration-300 transform hover:scale-110 "
      >
        <i
          className={`${!open ? "fa-solid fa-bars" : "fa-solid fa-close  "}`}
        ></i>
      </div>

      {
        <div
          className={`${
            open ? "right-0 duration-300" : "right-[-1000px]  duration-1000"
          }  fixed h-screen w-3/6 bg-secondary   top-0 pt-16  `}
        >
          <div className=" flex flex-col  h-screen justify-between  pb-24">
            <div>
              <ul className="text-primary ">
                {Navlinks.map((item, index) => {
                  return (
                    <li
                  onClick={() => setOpen(false)}

                      key={index}
                      className="cursor-pointer transform duration-300 hover:scale-105 hover:text-onPrimary   capitalize my-4 mx-4 "
                    >
                      <a href={item.link}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
              <div className="flex justify-center  ">
                <Button
                  onclick={() => dispatch(setModelOpen())}
                  btnText="get quote"
                  style=" text-sm lg:text-lg capitalize py-2  px-3 md:px-14 tracking-wider font-400 rounded-md text-primaryText bg-onPrimary "
                />
              </div>
            </div>

            <ul className="flex justify-around">
              {SocialMedia.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="py-1 px-2  rounded-lg cursor-pointer transform duration-300 hover:scale-105  hover:text-primary    "
                  >
                    <a
                     onClick={() => setOpen(false)}
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                   >
                      <i
                        className={`fab ${item.name} ${item.color} text-xl`}
                      ></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      }
    </>
  );
};

export default NavDrawer;

// <i class="fa-brands fa-facebook-f"></i>
{
  /* <i class="fa-brands fa-linkedin-in"></i> */
}
//<i class="fa-brands fa-"></i>
//<i class="fa-brands fa-x-instagram"></i>
//<i class="fa-brands fa-x-youtube"></i>
