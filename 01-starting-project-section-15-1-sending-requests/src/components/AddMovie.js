import styles from "./AddMovie.module.css";
import { useRef } from "react";

const AddMovie = (props) => {
  // Refs
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  // handlers
  const submitHandler = (event) => {
    event.preventDefault();

    // validation here

    // build object
    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
