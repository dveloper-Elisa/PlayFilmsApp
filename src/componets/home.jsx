import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./filmCard";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getCards = async () => {
      const url =
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

      const options = {
        method: "GET",
        headers: {
          accept: "applications/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTE0MzA2NzYxNzM5OTRkMTQwNzRkMGYyMjIwODE5MSIsInN1YiI6IjY1MTI3YTVkM2E0YTEyMDExY2Y0ZGQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WGFUNuWToulRv8fr-pasymapbLe90GxlojrjLCMkXWc",
        },
      };

      try {
        const result = await axios.get(url, options);
        if (result) {
          setLoader(false);
        }
        setCards(result.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getCards();
  }, []);

  return (
    <div>
      {loader ? (
        <div className={`flex justify-center ${loader ? "flex" : "hidden"}`}>
          <img src="./loading.gif" alt="loading." />
        </div>
      ) : (
        <div className={`grid items-center ${loader ? "hidden" : "grid"}`}>
          <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-3">
            {cards.slice(0, 7).map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item.backdrop_path}
                  name={item.original_title}
                  id={item.id}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-3">
            {cards.slice(8, 15).map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item.backdrop_path}
                  name={item.original_title}
                  id={item.id}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-3">
            {cards.slice(13, 20).map((item, index) => {
              return (
                <Card
                  key={index}
                  image={item.backdrop_path}
                  name={item.original_title}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
