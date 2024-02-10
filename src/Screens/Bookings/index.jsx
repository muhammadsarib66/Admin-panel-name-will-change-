import React from "react";

const index = () => {
  const BookingMainTags = [
    {
      title: "Earning ",
      value: "Rs 1000",
      color: "bg-green-500",
      icon: <i class="fa-solid fa-dollar-sign"></i>,
    },
    {
      title: "Total Bookings",
      value: "10",
      icon: <i class="fa-solid fa-calendar-check"></i>,
      color: "bg-blue-500",
    },
    {
      title: "Total Customers",
      value: "10",
      icon: <i class="fa-solid fa-users"></i>,
      color: "bg-yellow-500",
    },
    {
      title: "Total Service Providers",
      value: "10",
      icon: <i class="fa-solid fa-user"></i>,
      color: "bg-red-500",
    },
  ];

  const BookingTable = [
    {
      name: "Aliya ",
      id: 1,
      email: "alia@gmail.com",
      phone: "03100000000",
      service: "Cleaning",
      serviceProvider: "Ahmed",
      date: "12-12-2021",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      name: "Aliya ",
      id: 1,
      email: "alia@gmail.com",
      phone: "03100000000",
      service: "Cleaning",
      serviceProvider: "Ahmed",
      date: "12-12-2021",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      name: "Aliya ",
      id: 1,
      email: "alia@gmail.com",
      phone: "03100000000",
      service: "Cleaning",
      serviceProvider: "Ahmed",
      date: "12-12-2021",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      name: "Aliya ",
      id: 1,
      email: "alia@gmail.com",
      phone: "03100000000",
      service: "Cleaning",
      serviceProvider: "Ahmed",
      date: "12-12-2021",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      name: "Aliya ",
      id: 1,
      email: "alia@gmail.com",
      phone: "03100000000",
      service: "Cleaning",
      serviceProvider: "Ahmed",
      date: "12-12-2021",
      time: "12:00 PM",
      status: "Pending",
    },
  ];
  return (
    <section>
      <div>
        <h1 className="h2 font-bold capitalize text-gray-700 py-4">
          Booking Management
        </h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BookingMainTags.map((tag, index) => (
              <div
                key={index}
                className={` shadow-lg rounded-lg p-4  ${tag.color}`}
              >
                <div className="flex justify-center">
                  <div className="text-white text-2xl">{tag.icon}</div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-xl text-white font-semibold">
                    {tag.title}
                  </p>
                  <p className="text-white mt-2">{tag.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h1 className="h2 font-bold capitalize text-gray-700 py-4">
                Bookings
              </h1>
              <div>
                <button className="bg-blue-600  text-white px-4 py-2 rounded-lg">
                  Add Booking 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
