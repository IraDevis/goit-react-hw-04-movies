import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import "modern-normalize";
import "./styles.css";

const HomePageView = lazy(() =>
  import(
    "./views/HomePageView/HomePageView.js" /* webpackChunkName: "homepage-view"*/
  )
);
const MoviesPageView = lazy(() =>
  import(
    "./views/MoviesPageView/MoviesPageView.js" /* webpackChunkName: "movies-page-view"*/
  )
);
const MovieDetailsPageView = lazy(() =>
  import(
    "./views/MovieDetailsPageView/MovieDetailsPageView.js" /* webpackChunkName: "movie-details-page-view"*/
  )
);
const NotFoundView = lazy(() =>
  import(
    "./views/NotFoundView/NotFoundView.js" /* webpackChunkName: "not-found-view"*/
  )
);

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h3>Loading... Wait, please</h3>}>
        <Switch>
          <Route exact path="/">
            <HomePageView />
          </Route>

          <Route exact path="/movies">
            <MoviesPageView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPageView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
