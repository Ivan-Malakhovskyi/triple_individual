import { mockReviews } from "@/dataSeed/reviews";
import styles from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div>
      <p>Відгукb {mockReviews.length}</p>

      <ul className={styles.list}>
        {mockReviews.map(({ id, author, rating, text, date }) => (
          <li key={id} className={styles.review}>
            <div>
              <span>{author}</span>
              <span>{"⭐".repeat(rating)}/</span>

              <p>{date}</p>
            </div>

            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
