import { FilmDetail } from "@/components/FilmDetail";
import styles from "./film-library.module.css";
import rowStyles from "./film-row.module.css";

export function FilmLibrary() {
  return (
    <div className={styles.FilmLibrary}>
      <div className={styles.filmList}>
        <h1 className={styles.sectionTitle}>FILMS</h1>
        <div className={styles.filmListFilters}>
          <button className={`${styles.filmListFilter} ${styles.isActive}`}>
            ALL
            <span className={styles.sectionCount}>3</span>
          </button>
          <button className={styles.filmListFilter}>
            FAVES
            <span className={styles.sectionCount}>1</span>
          </button>
        </div>
        {/* First FilmRow */}
        <div className={rowStyles.FilmRow}>
          <img
            src="https://image.tmdb.org/t/p/w780/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg"
            alt="Film Title Poster"
          />
          <div className={rowStyles.filmSummary}>
            <h3>TITLE</h3>
            <p>YEAR</p>
            <div className={rowStyles.actions}>
              <button className={rowStyles.action}>
                <span className="material-icons">add_to_queue</span>
              </button>
              <button className={rowStyles.action}>
                <span className="material-icons">read_more</span>
              </button>
            </div>
          </div>
        </div>
        {/* Second FilmRow */}
        <div className={rowStyles.FilmRow}>
          <img
            src="https://image.tmdb.org/t/p/w780/pKESfn2Pdy0b7drvZHQb7UzgqoY.jpg"
            alt="Film Title Poster"
          />
          <div className={rowStyles.filmSummary}>
            <h3>TITLE</h3>
            <p>YEAR</p>
            <div className={rowStyles.actions}>
              <button className={rowStyles.action}>
                <span className="material-icons">remove_from_queue</span>
              </button>
              <button className={rowStyles.action}>
                <span className="material-icons">read_more</span>
              </button>
            </div>
          </div>
        </div>
        {/* Third FilmRow */}
        <div className={rowStyles.FilmRow}>
          <img
            src="https://image.tmdb.org/t/p/w780/dN9LbVNNZFITwfaRjl4tmwGWkRg.jpg"
            alt="Film Title Poster"
          />
          <div className={rowStyles.filmSummary}>
            <h3>TITLE</h3>
            <p>YEAR</p>
            <div className={rowStyles.actions}>
              <button className={rowStyles.action}>
                <span className="material-icons">add_to_queue</span>
              </button>
              <button className={rowStyles.action}>
                <span className="material-icons">read_more</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.filmDetails}>
        <h1 className={styles.sectionTitle}>DETAILS</h1>
        <FilmDetail />
      </div>
    </div>
  );
}
