import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const Movies = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState([]);

  const gettrailer = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
      method: "get",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTE0MzA2NzYxNzM5OTRkMTQwNzRkMGYyMjIwODE5MSIsInN1YiI6IjY1MTI3YTVkM2E0YTEyMDExY2Y0ZGQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WGFUNuWToulRv8fr-pasymapbLe90GxlojrjLCMkXWc",
      },
    };
    try {
      const response = await axios.get(url, options);
      setTrailer(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  gettrailer();

  return (
    <>
      <div className="flex justify-center items-baseline">
        <h3 className="bg-yellow-800 text-white p-2 mt-3 animate-pulse">
          Trailers Availd to this Film are:
        </h3>
      </div>
      <div className="flex justify-center mt-20">
        <div className="border  bg-blue-600 flex-wrap">
          <div className="flex flex-col flex-center gap-3">
            {trailer.map((item, index) => {
              return (
                <Link to={`/playnow/${item.key}/${id}`} key={index}>
                  <p className="border m-1 cursor-pointer hover:bg-white hover:border-y-orange-500 transition-shadow p-3 text-white hover:text-black text-center rounded-xl">
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
