import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fetch from "../../sevices/moviesAPI";

// import styles from "./HomePageView.module.css";

export default function HomePageView() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch
      .getTrending()
      .then((response) => setMovies(response))
      .catch();
  }, []);

  return (
    <div className="container">
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
