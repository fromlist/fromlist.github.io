import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.list}>
      <img src={coverImg} alt="" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}</p>
      {genres ? (
        <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
      ) : null}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
