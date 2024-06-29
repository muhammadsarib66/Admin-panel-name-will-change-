import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import MenuSettings from "../assets/icons/MenuSettings";
const UsersChart = () => {
  const DetailUsers = [
    {
      title: " users",
      color: "#5F27CD",
      percent: 42,
    },
    {
      title: "service provider",
      color: "#FFC029",
      percent: 61,
    },
    {
      title: "customer support",
      color: "#FF8918",
      percent: 12,
    },
    {
      title: "booking",
      color: "#FF6B6B",
      percent: 82,
    },
  ];
  // const percentage = 66;
  return (
    <div className=" flex flex-col rounded-lg shadow-xl p-4 gap-4 bg-white ">
      <div className="flex justify-between items-center">
        <span>
          <h1 className=" text-lg md:text-2xl text-[#535353] font-bold">Users</h1>
          <p className="text-[#A7A7A7] sm:text-xs md:text-base">Information About your Customers</p>
        </span>
        <MenuSettings />
      </div>
      <div className="gap-6 grid grid-cols-2 ">
        {DetailUsers.map((item, index) => {
          return (
            <div className="flex flex-col items-center justify-center text-center text-sm">
              <CircularProgressbar
                className="w-20"
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",
                  // Text size
                  textSize: "22px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  //   pathTransition: '',

                  // Colors
                  pathColor: `${item.color}`,
                  textColor: `${item.color}`,
                  //   trailColor: "grey",
                  //   backgroundColor: "#5F27CD",
                })}
                value={item.percent}
                text={`${item.percent}%`}
              />
              <p> {item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersChart;
