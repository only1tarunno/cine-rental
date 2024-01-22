/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import tag from "../assets/tag.svg";
import { getImgUrl } from "../utils/imgloadfromdata";
import Rating from "./Rating";
import MovieDetails from "./MovieDetails";
import { MovieContext } from "../context";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();

    const found = cartData.find((item) => item.id === movie.id);
    if (!found) {
      setShowModal(false);
      return setCartData([...cartData, movie]);
    } else {
      return alert("added");
    }
  };

  const handleMovieSelect = (movie) => {
    setShowModal(true);
    setSelectedMovie(movie);
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <MovieDetails
          movie={selectedMovie}
          handleModalClose={handleModalClose}
          handleAddToCart={handleAddToCart}
        />
      )}
      {/* modal end here  */}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <span onClick={() => handleMovieSelect(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm w-full"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={tag} alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </span>
      </figure>
    </>
  );
};

export default MovieCard;
