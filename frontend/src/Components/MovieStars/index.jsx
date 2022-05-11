import "./styles.css";
import { ReactComponent as StarFull } from "assets/Img/star-full.svg";
import { ReactComponent as StarHalf } from "assets/Img/star-half.svg";
import { ReactComponent as StarEmpty } from "assets/Img/star-empty.svg";
const MovieStars = () => {
  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
};
export default MovieStars;
