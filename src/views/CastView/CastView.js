import { useState, useEffect } from "react";
import fetch from "../../sevices/moviesAPI";
import photoDefault from "../../images/noimages.png";

import styles from "./CastView.module.css";

export default function CastView({ id }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch.getActors(id).then((response) => setActors(response.cast));
  }, [id]);

  const getActorData = actors.map((actor) => {
    let photo = photoDefault;
    if (actor.profile_path) {
      photo = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    }

    return (
      <li key={actor.id}>
        <img className={styles.photo} src={photo} alt={actor.name} />
        <p className={styles.name}>{actor.name}</p>
        <p>as {actor.character}</p>
      </li>
    );
  });

  return <ul className={styles.actors}>{getActorData}</ul>;
}
