import React from "react";

const index = () => {
  const UserTitles = ["Profile", "Phone", "City", "State", "country", "Action"];
  const people = [
    {
      name: "Jane Cooper",
      title: "03103102166",
      city: "Hyderabad",
      state: "Sindh",
      country: "Pakistan",
      role: "Admin",
      email: "jane.cooper@example.com",
      image: "https://bit.ly/33HnjK0",
    },
    {
      name: "John Doe",
      title: "03103102166",

      role: "Tester",
      email: "john.doe@example.com",
      image: "https://bit.ly/3I9nL2D",
    },
    {
      name: "Jane Cooper",
      title: "03103102166",
      city: "Hyderabad",
      state: "Sindh",
      country: "Pakistan",
      role: "Admin",
      email: "jane.cooper@example.com",
      image: "https://bit.ly/33HnjK0",
    },
    {
      name: "Jane Cooper",
      title: "03103102166",
      city: "Hyderabad",
      state: "Sindh",
      country: "Pakistan",
      role: "Admin",
      email: "jane.cooper@example.com",
      image: "https://bit.ly/33HnjK0",
    },
    {
      name: "Jane Cooper",
      title: "03103102166",
      city: "Hyderabad",
      state: "Sindh",
      country: "Pakistan",
      role: "Admin",
      email: "jane.cooper@example.com",
      image: "https://bit.ly/33HnjK0",
    },
    {
      name: "Veronica Lodge",
      title: "03103102166",

      role: " Software Engineer",
      email: "veronica.lodge@example.com",
      image: "https://bit.ly/3vaOTe1",
    },
    // More people...
  ];
  return (
    <div>
      <h1 className="h2 font-bold capitalize text-gray-700 py-4">
        Users Management
      </h1>
      <div className="flex flex-col ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {UserTitles.map((title, index) => {
                      return (
                        <th
                          key={index}
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {title}
                        </th>
                      );
                    })}
    
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {person.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className="px-2 inline-flex text-xs leading-5
                          font-semibold rounded-full bg-green-100 text-green-800"
                        >
                          {person.city}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.state}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.country}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                        <a href="#" className="text-red-600 hover:text-red-900">
                          <i class="fa-solid fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
