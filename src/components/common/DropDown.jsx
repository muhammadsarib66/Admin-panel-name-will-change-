import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
//   import { IconType } from "react-icons";

const DropDown = ({ category, setCategory }) => {
  const [open, setOpen] = useState(false);
  // const [category, setCategory] = useState("web development");

  const Title = [
    { title: "Web Development", icon: "fa-solid fa-desktop" },
    { title: "App Development", icon: "fa-solid fa-mobile" },
    { title: "Backend Development", icon: "fa-solid fa-gear" },
    { title: "Graphic Designing", icon: "fa-solid fa-palette" },
    { title: "Digital Marketing", icon: "fa-solid fa-magnifying-glass-dollar" },
    { title: "E-commerce ", icon: "fa-solid fa-cart-shopping" },
  ];

  return (
    <div className=" flex items-center justify-start  ">
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative w-full"
      >
        <div
          onClick={() => {
            setOpen((pv) => !pv);
          }}
          className="flex items-center justify-between gap-2  px-3 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-indigo-500 transition-colors"
        >
          <span className="font-medium text-sm">{category}</span>
          <motion.span
            variants={iconVariants}
            className="flex items-center justify-center"
          >
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </motion.span>
        </div>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg  bg-white shadow-xl absolute top-[130%] left-[50%] w-full h-40 custom-scrollbar overflow-auto"
        >
          {Title?.map((item, ind) => (
            <div key={ind}>
              <Option
                setCategory={setCategory}
                setOpen={setOpen}
                Icon={item.icon}
                text={item.title}
              />
            </div>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen, setCategory, ind }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        setCategory(text);
        console.log(text);
      }}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <i className={`${Icon}`}></i>
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default DropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
