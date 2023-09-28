import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Play = () => {
  const { key } = useParams();
  const { id } = useParams();
  const [allDeta, setAlldetail] = useState([]);
  useEffect(() => {
    const getDetail = async () => {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      const options = {
        method: "get",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTE0MzA2NzYxNzM5OTRkMTQwNzRkMGYyMjIwODE5MSIsInN1YiI6IjY1MTI3YTVkM2E0YTEyMDExY2Y0ZGQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WGFUNuWToulRv8fr-pasymapbLe90GxlojrjLCMkXWc",
        },
      };
      try {
        const result = await axios.get(url, options);
        setAlldetail([result.data]); // Wrap the single result in an array
      } catch (error) {
        console.log(error);
      }
    };

    getDetail();
  }, [id]); // Add id as a dependency to re-fetch when id changes

  // Find the item in allDeta that matches the id
  const theItem = allDeta.find((item) => item.id === parseInt(id));

  console.log(theItem);

  return (
    <>
      <div className="utems-center justify-center md:flex">
        <div className="flex flex-col">
          <div className="flex">
            <YouTube videoId={key} />
          </div>
          {theItem && (
            <div className="md:flex p-10 gap-1 w-[60vw] md:items-center">
              <div className="">
                <img
                  src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${theItem.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="text-black md:flex flex-col  gap-1 ">
                <div className="flex gap-1 ">
                  <p className="text-Thin border w-fit p-1 my-1 text-[10px]">
                    {theItem.original_language}
                  </p>
                  <p className="text-Thin border w-fit p-1 my-2 text-[10px]">
                    {theItem.production_companies
                      .slice(0, 1)
                      .map((idt) => idt.name)}
                  </p>
                  <p className="text-Thin border w-fit p-1 my-2 text-[10px]">
                    {theItem.release_date}
                  </p>
                  <p className="text-Thin border w-fit p-1 my-2 text-[10px]">
                    {theItem.status}
                  </p>
                  <p className="text-Thin border w-fit p-1 my-2 text-[10px]">
                    {theItem.title}
                  </p>
                </div>
                <hr />
                <span className="font-sans ">
                  <b>Content: </b>
                  {theItem.overview}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Play;
