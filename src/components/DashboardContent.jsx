import React from "react";
import { CChart } from "@coreui/react-chartjs";
import MyTable from "./MyTable";
import TotalData from "../Screens/Total";

const DashboardContent = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Sale Graph</h1>
      <div className="flex flex-col gap-4 items-center">
        <div className="w-full">
          <CChart
            height={100}
            width={400}
            redraw={true}
            type="line"
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(220, 220, 220, 0.2)",
                  borderColor: "rgba(220, 220, 220, 1)",
                  pointBackgroundColor: "rgba(220, 220, 220, 1)",
                  pointBorderColor: "#fff",
                  data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                },
                {
                  label: "My Second dataset",
                  backgroundColor: "rgba(151, 187, 205, 0.2)",
                  borderColor: "rgba(151, 187, 205, 1)",
                  pointBackgroundColor: "rgba(151, 187, 205, 1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "red",
                  data: [50, 12, 28, 29, 7, 25, 12, 70, 60],
                },
              ],
            }}
            labels="months"
            // options={{
            //   plugins: {
            //     tension: 0.5,
            //     // title:{
            //     //   text : 'Line charts'
            //     // },
            //     legend: {
            //       labels: {
            //         color: 'green', // legend color top boxes where name shows
            //       }
            //     }
            //   },
            //   scales: {
            //     x: {
            //       grid: {
            //         color: 'red',
            //       },
            //       ticks: {
            //         color: 'blue', // x axis label xolor
            //       },
            //     },
            //     y: {
            //       grid: {
            //         color: 'gray',
            //       },
            //       ticks: {
            //         color: '#FF8918', // y axis label color
            //       },
            //     },
            //   },
            // }}
          />
        </div>
        <div className="w-full py-10">
          {/* <MyTable /> */}
          <TotalData/>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
