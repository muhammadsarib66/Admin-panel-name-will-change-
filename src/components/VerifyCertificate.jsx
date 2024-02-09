import React from "react";
import { useState, useEffect } from "react";
import { db } from "../db";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ToastContainer, toast } from "react-toastify";
import logo2 from "../assets/images/logo2.png";

const DataItem = ({ label, value }) => (
  <p>
    <span className="font-900 uppercase">{label}:</span> {value}
  </p>
);

const VerifyCertificate = () => {
  const [data, setData] = useState([]);
  const [verifyId, setVerifyId] = useState("");
  const [verifyData, setVerifyData] = useState([]);
  const [tempId, setTempId] = useState("");

  const handleCheckData = () => {
    const verifyData = data.filter((item) => item.id === verifyId);
    setTempId(verifyData[0]?.id);
    if (verifyData.length > 0) {
      setVerifyData(verifyData);
      toast.success("Certificate is valid");
      setVerifyId("");
    } else {
      toast.error("Certificate is invalid");
    }
    console.log(verifyData);
  };

  useEffect(() => {
    const getCertificates = async () => {
      const getData = [];
      const querySnapshot = await getDocs(collection(db, "verifycerti"));
      querySnapshot.forEach((doc) => {
        getData.push({ id: doc.id, data: doc.data() });
      });
      setData(getData);
    };
    getCertificates();
  }, []);

  return (
    <section className="flex flex-col md:flex-row bg-onSecondary h-screen">
      <div className="flex-1 flex items-center bg-secondary">
        <div className="mx-auto">
          <img src={logo2} alt="logo" className="w-44 md:w-auto" />
        </div>
      </div>
      <div className="flex-1 justify-center bg-onSecondary py-10 md:py-2  flex flex-col gap-4 items-center">
        <div className=" text-onPrimary py-3 container   px-4">
          <h1 className="text-3xl font-900  text-center">Verify Certificate</h1>
          <p className=" text-center mt-4">
            Verify the authenticity of your certificate
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center ">
            <div className=" border rounded-md ">
              <Paper
                component="form"
                className="flex items-center w-50 sm:w-[400px] md:w-[500px] lg:w-[600px] h-14 "
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your Certificate ID"
                  inputProps={{ "aria-label": "search google maps" }}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const TrimmedValue = inputValue.trim();
                    setVerifyId(TrimmedValue);
                  }}
                  value={verifyId}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={handleCheckData}
                >
                  <SearchIcon className="text-onPrimary   " />
                </IconButton>
              </Paper>
            </div>
          </div>
        </div>

        <div className="flex flex-col     p-8 rounded-md w-50 sm:w-[400px] md:w-[500px] lg:w-[600px]     bg-gradient-to-t from-onPrimary  to-[#7C3AED]">
          <h1 className=" flex justify-center pb-4 font-900 uppercase text-secondary text-2xl underline ">
            Applicant Detail
          </h1>
          {tempId && (
            <div className="text-white rounded-md capitalize flex gap-2  px-4 flex-col">
              {verifyData.map((item, index) => {
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <DataItem
                      label="Name"
                      value={item.data.firstName + " " + item.data.lastName}
                    />
                    <DataItem label="Program" value={item.data.program} />
                    <DataItem label="Certificate Number" value={item.id} />
                    <DataItem label="Duration From" value={item.data.durationFrom} />
                    <DataItem label="Duration To" value={item.data.durationTo} />
                    <DataItem label="Year" value={item.data.year} />
                    <DataItem label="Comments" value={item.data.comments} />
                  </div>
                );
              })}
              {/* {verifyData.map((item, index) => (
      <div key={index}>
        {Object.entries(item.data).map(([key, value]) => (
          <DataItem key={key} label={key} value={value} />
        ))}
        <DataItem label="Certificate Number" value={item.id} />
      </div>
    ))} */}
              {/* {verifyData.map((item, index) => {
                return (
                  <>
                    <span key={index}>
                      <p className="">
                        <span className=" uppercase  "> Name:</span>{" "}
                        <span className="font-900"> {item.data.firstName} {item.data.lastName} </span>
                      </p>
                      <p>
                        <span className="font-900 uppercase "> Program:</span>{" "}
                        {item.data.program}
                      </p>
                      <p>
                        <span className="font-900 uppercase ">
                          {" "}
                          Certificate Number:
                        </span>{" "}
                        {item.id}
                      </p>
                      <p>
                        <span className="font-900 uppercase ">
                          {" "}
                          Duration:
                        </span>{" "}
                        {item.data.duration}
                      </p>
                      <p>
                        <span className="font-900 uppercase "> Year:</span>{" "}
                        {item.data.year}
                      </p>
                      <p>
                        <span className="font-900 uppercase "> Comments</span>{" "}
                        {item.data.comments}
                      </p>
                    </span>
                  </>
                );
              })} */}
              <div className="rounded-md text-center text-lg font-900  flex justify-center mt-4   self-center       bg-white text-onPrimary ">
                <h2 className="px-2 py-1">
                  Your certificate is valid and authentic
                </h2>
              </div>
            </div>
          )}
          {!tempId && (
            <div className="rounded-md text-center text-lg font-900  flex justify-center mt-4   self-center       bg-white text-onPrimary ">
              <h2 className="px-2 py-1">No Record Found</h2>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default VerifyCertificate;
