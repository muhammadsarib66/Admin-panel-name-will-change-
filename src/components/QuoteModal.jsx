import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import Button from "./common/Button";
import { useSelector, useDispatch } from "react-redux";
import { setModelOpen } from "../features/slicer/QuoteSlicer";
import { collection, addDoc, getDocs  , where, query } from "firebase/firestore";
import { db } from "../db";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLoader } from "react-spinners";
import DropDown from "./common/DropDown";

const ExampleWrapper = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isloading, setIsLoading] = useState(false);

  // for dropdown
  const [category, setCategory] = useState("Web Development");
  // const [category, setCategory] = useState("web development");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { isModelOpen } = useSelector((state) => state.QuoteSlicer);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    // Perform validation and update error state
    setNameError(newName.trim() === "" ? "Name is required" : "");
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Perform email validation and update error state
    setEmailError(!validateEmail(newEmail) ? "Invalid email address" : "");
  };

  // const handleCategoryChange = (event) => {
  //   setCategory(event.target.value);
  // };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    const isNameValid = name.trim() !== "";
    const isEmailValid = validateEmail(email);
    // Add similar validation checks for other fields
    setIsLoading(true);

    // If any field is invalid, stop the submission
    if (!isNameValid || !isEmailValid /* Add conditions for other fields */) {
      toast.warning("Please fill in all required fields with valid data.");
      setIsLoading(false);

      return;
    }

    // Dispatch action and reset form fields
    await addDoc(collection(db, "Quotation"), {
      name,
      email,
      Message :message,
      webCategory:category
     
    })
      .then((docRef) => {
        const gat = { name, email, category, message };
        console.log("Document written with ID: ", gat);
      })
      .catch((e) => {
        console.log(e.message, "error adding data");
      });
    toast.success("Form submitted successfully");
    // dispatch(setModelOpen());
    // Reset form fields
    setName("");
    setEmail("");
    setCategory("Web Development");
    setMessage("");
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isModelOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center text-start overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-onPrimary to-indigo-600 text-secondary p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="flex justify-end ">
              <div className="flex justify-center cursor-pointer items-center rounded-full bg-white text-onPrimary text-lg w-5 h-5 p-4 ">
                <i
                  onClick={() => dispatch(setModelOpen())}
                  className="fa-solid fa-times "
                ></i>
              </div>
            </div>
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-secondary w-16 h-16 mb-2 rounded-full text-3xl text-onPrimary grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Get a Quote
              </h3>
              <div className="text-sm md:text-md flex flex-col gap-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    className=" text-primary   w-full border-2 border-gray-300 focus:outline-none focus:border-indigo-600 rounded-md p-2"
                  />
                  {nameError && <p className="text-red-500">{nameError}</p>}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className=" text-primary  w-full border-2 border-gray-300 focus:outline-none focus:border-indigo-600 rounded-md p-2"
                  />
                  {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                <div>
                  <label htmlFor="Category">Category </label>
                  <DropDown category={category} setCategory={setCategory} />
                  {/* <select
                    value={category}
                    onChange={handleCategoryChange}
                    name="Category"
                    id="Category"
                    className=" text-primary  w-full border-2 border-gray-300 focus:outline-none focus:border-indigo-600 rounded-md p-2"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">
                      Mobile Development
                    </option>
                  </select> */}
                  {/* <div className="w-full"> */}

                  {/* </div> */}
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Enter your message"
                    className=" text-primary min-h-20 max-h-28  w-full border-2 border-gray-300 focus:outline-none focus:border-indigo-600 rounded-md p-2"
                  />
                </div>
                <div className=" flex justify-center text-center ">
                  <Button
                    onclick={handleSubmit}
                    btnText="Submit Request!"
                    style="bg-white hover:opacity-90 capitalize transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                  />
                </div>
              </div>
            </div>
            {isloading && (
              <div className="z-10 relative flex top-[-200px]  justify-center pt-3 gap-5">
                <HashLoader
                  color="cyan"
                  loading
                  size={50}
                  speedMultiplier={1}
                />
              </div>
            )}
          </motion.div>
          <ToastContainer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
