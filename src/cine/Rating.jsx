/* eslint-disable react/prop-types */
import Starimg from "../assets/star.svg";

const Rating = ({ value }) => {
  const stars = [...Array(value).keys()];
  return (
    <>
      {stars.map((star) => (
        <img key={star} src={Starimg} width="14" height="14" alt="" />
      ))}
    </>
  );
};

export default Rating;
