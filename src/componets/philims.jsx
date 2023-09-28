import axios from "axios";
import { useState, useEffect } from "react";

export default function Philims() {
  const [Ids, setIds] = useState([]);
  useEffect(() => {
    const getIds = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
      const options = {
        method: "get",
        headers: {
          accept: "application/jsom",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTE0MzA2NzYxNzM5OTRkMTQwNzRkMGYyMjIwODE5MSIsInN1YiI6IjY1MTI3YTVkM2E0YTEyMDExY2Y0ZGQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WGFUNuWToulRv8fr-pasymapbLe90GxlojrjLCMkXWc",
        },
      };
      try {
        const result = await axios.get(url, options);
        setIds(result.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getIds();
  }, []);
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="border">
          <div className="flex flex-center flex-col gap-3">here we go</div>
        </div>
      </div>
    </>
  );
}
