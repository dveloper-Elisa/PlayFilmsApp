import { Link } from "react-router-dom";

const Card = (pros) => {
  return (
    <>
      <div className="flex justify-center mt-3">
        <div className="md:flex flex flex-col bg-green-50  ">
          <div className="md:flex flex flex-col  m-1">
            <Link to={`/movie/${pros.id}`}>
              <img
                width="170px"
                height="222px"
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${pros.image}`}
                alt="image not found"
                className="hover:opacity-80"
              />

              <p className="text-white bg-black opacity-70 text-center flex flex-wrap top-0 items-center w-[100%]">
                {pros.name}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
