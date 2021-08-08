import { useState, useEffect } from "react";
import { Link, useLocation, useHistory, useRouteMatch } from "react-router-dom";
import fetch from "../../sevices/moviesAPI";

import styles from "./MoviesPageView.module.css";

export default function MoviesPageView() {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const params = new URLSearchParams(location.search).get("query");

  const [searchQuery, setSearchQuery] = useState("");
  const [submitQuery, setSubmitQuery] = useState(params);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!submitQuery) {
      return;
    }

    fetch
      .searchMovies(submitQuery)
      .then((response) => setMovies(response))
      .catch();
  }, [submitQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });

    setSubmitQuery(searchQuery);
    setSearchQuery("");
  };

  const handleChangeSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          onChange={handleChangeSearchQuery}
          value={searchQuery}
        ></input>
        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>

      {movies && <h2>There is all search results</h2>}
      <ul>
        {movies &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
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
