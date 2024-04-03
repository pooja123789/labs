import styles from "./film-detail.module.css";

export function FilmDetail(props) {
  return (
    <div className={`${styles.filmDetail} ${styles.isHydrated}`}>
      <figure className={styles.filmBackdrop}>
        <img
          src={
            "https://image.tmdb.org/t/p/w1280/goCvLSUFz0p7k8R10Hv4CVh3EQv.jpg"
          }
          alt="Baby Driver backdrop"
        />
        <h1 className={styles.filmTitle}>{"Baby Driver"}</h1>
      </figure>

      <div className={styles.filmMeta}>
        <p className={styles.filmDetailOverview}>
          <img
            src={
              "https://image.tmdb.org/t/p/w780/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg"
            }
            className={styles.filmDetailPoster}
            alt={"Baby Driver poster"}
          />
          {"Overview goes here"}
        </p>
      </div>
    </div>
  );
}

function FilmDetailEmpty() {
  return (
    <div className={styles.filmDetail}>
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  );
}
