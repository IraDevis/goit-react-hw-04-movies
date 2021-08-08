import {
  Route,
  NavLink,
  Switch,
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import fetch from "../../sevices/moviesAPI";
import photoDefault from "../../images/noimages.png";

import styles from "./MovieDetailsPageView.module.css";

const CastView = lazy(() =>
  import("../CastView/CastView.js" /* webpackChunkName: "cast-view"*/)
);
const ReviewsView = lazy(() =>
  import("../ReviewsView/ReviewsView.js" /* webpackChunkName: "reviews-view"*/)
);

export default function MovieDetailsPageView() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [poster, setPoster] = useState(photoDefault);
  const [title, setTitle] = useState("");
  const [userScore, setUserScore] = useState("");
  const [overview, setOverview] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch
      .getDetails(movieId)
      .then((response) => {
        if (response.poster_path) {
          setPoster(`https://image.tmdb.org/t/p/w500${response.poster_path}`);
        }
        setTitle(response.title);
        setUserScore(response.vote_average);
        setOverview(response.overview);
        setGenres(response.genres);
      })
      .catch();
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <div className="container">
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      <div className={styles.movieCard}>
        <img src={poster} alt="movie poster" />
        <div className={styles.movieInfo}>
          <h2>{title}</h2>
          <p className={styles.score}>User Score: {userScore}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.map((genre) => genre.name).join(", ")}</p>
          <h4>Additional information</h4>
          <ul>
            <li>
              <NavLink
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                to={{ ...location, pathname: `${url}/cast` }}
              >
                Casts
              </NavLink>
            </li>
            <li>
              <NavLink
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                to={{ ...location, pathname: `${url}/reviews` }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <Suspense fallback={<h3>Loading... Wait, please</h3>}>
        <Switch>
          <Route path={`${url}/cast`}>
            <CastView id={movieId} />
          </Route>

          <Route path={`${url}/reviews`}>
            <ReviewsView id={movieId} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
