import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePageView from "./views/HomePageView/HomePageView";
import MoviesPageView from "./views/MoviesPageView/MoviesPageView";
import MovieDetailsPageView from "./views/MovieDetailsPageView/MovieDetailsPageView";
import NotFoundView from "./views/NotFoundView";

import "modern-normalize";
import "./styles.css";

export default function App() {
  return (
    <>
      <Navigation />
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
    </>
  );
}
