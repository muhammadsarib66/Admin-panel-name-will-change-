import { useState, useEffect } from "react";
import NavDrawer from "./NavDrawer";
import Button from "./common/Button";
import { useSelector, useDispatch } from "react-redux";
import { setModelOpen } from "../features/slicer/QuoteSlicer";

const Navbar = () => {
  const { Navlinks } = useSelector((state) => state.QuoteSlicer);
  const dispatch = useDispatch();

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav
      className={` ${
        sticky
          ? "text-onPrimary px-4 bg-secondary   rounded-b-md "
          : " bg-transparent "
      } duration-500   sticky top-0 z-50 w-4/5 mx-auto`}
    >
      <div className=" flex justify-between  py-4  md:hidden ">
        <h1 className={`text-2xl font-900  capitalize `}> Verior Inc</h1>
        <NavDrawer />
      </div>

      <div className="hidden md:flex justify-between items-center py-4  ">
        <h1 className={`text-xl font-semibold  capitalize`}> Verior Inc</h1>

        <div className="hidden md:flex gap-8 items-center">
          <ul className=" flex gap-8">
            {Navlinks?.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" hover:border-b-2 border-b-2 border-transparent  hover:border-onPrimary cursor-pointer transform duration-300 hover:scale-105  hover:text-primary  capitalize   "
                >
                  <a href={item?.link}>{item?.title}</a>
                </li>
              );
            })}
          </ul>
          <Button
            onclick={() => dispatch(setModelOpen())}
            btnText="get quote"
            style=" text-md active:border-onPrimary active:border-[1px] active:text-onPrimary active:bg-secondary border-[1px] border-onPrimary  capitalize py-2 px-4 tracking-wider font-700 rounded-md text-primaryText bg-onPrimary "
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
