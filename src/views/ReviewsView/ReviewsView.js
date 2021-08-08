import { useState, useEffect } from "react";
import fetch from "../../sevices/moviesAPI";

import styles from "./ReviewsView.module.css";

export default function ReviewsView({ id }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetch
      .getReviews(id)
      .then((response) => setReviews(response.results))
      .catch();
  }, [id]);

  const renderReviews = () => {
    if (!reviews) {
      return null;
    }

    if (!reviews.length) {
      return <p>We don't have any review for this movie</p>;
    }

    return reviews.map((review) => {
      return (
        <li className={styles.reviewCard} key={review.id}>
          <p className={styles.author}>{review.author}</p>
          <span className={styles.content}>{review.content}</span>
        </li>
      );
    });
  };

  return <ul>{renderReviews()}</ul>;
}
