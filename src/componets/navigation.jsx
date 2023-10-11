import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isClosed, setCloseButton] = useState(false);
  return (
    <>
      <div className="top-0 sticky z-50">
        <div className="flex justify-between items-center bg-blue-950 flex-cols px-3">
          <div className="">
            <h1 className="text-white p-5">
              <img
                src="./logo.PNG"
                alt="image Logo not found"
                className="rounded-xl w-[90px] h-[70px] "
              />
            </h1>
            <span
              className={`text-white text-xl absolute w-fit text-center ${
                isClosed ? "" : "hidden"
              } hover:cursor-pointer md:hidden right-2 p-[5px] rounded top-3 hover:bg-white hover:text-blue-950 border`}
              onClick={() => {
                setCloseButton(false);
              }}
            >
              <i className="fa fa-bars"></i>
            </span>
          </div>
          <div
            className={`md:flex ${
              isClosed ? "hidden" : "flex flex-col absolute h-screen"
            }  items-center  text-white md:flex-row  left-0 gap-5 md:justify-between md:relative p-4  top-0 bg-blue-950  md:h-[14vh]`}
          >
            <span
              className="text-right hover:cursor-pointer w-fit absolute right-1"
              onClick={() => {
                setCloseButton(true);
              }}
            >
              <i className="fa fa-close hover:bg-white text-red-600 text-[20px] hover:border-blue-50 bg-green-900 md:hidden rounded"></i>
            </span>
            <div className="md:flex flex md:flex-row flex-col w-fit gap-5  text-white">
              <p className=" cursor-pointer font-serif md:text-[20px] text-[0.7rem] ">
                Browse
              </p>
              <Link to="/">
                <p className=" cursor-pointer font-serif md:text-[20px] text-[0.7rem]  ">
                  Movies
                </p>
              </Link>
              <p className="  cursor-pointer  font-serif md:text-[20px] text-[0.7rem] ">
                Series
              </p>
            </div>
            <div className=" md:flex flex flex-col gap-3 md:flex-row mt-3 md:justify-center">
              <input
                type="text"
                placeholder="Search..."
                className="font-mono text-black bg-blue-300 "
              />
              <button className="bg-green-800 text-white hover:text-blue-600 tracking-wider font-serif hover:bg-white hover:border-blue-50 md:px-5 md:py-2 border-blue-700hover:text-blue-600 rounded-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
