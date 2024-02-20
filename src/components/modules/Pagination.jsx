import styles from "./Pagination.module.css";

const Pagination = ({ page, setPage }) => {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((prevPage) => prevPage - 1);
  };
  const nextHandler = () => {
    if (page === 12) return;
    setPage((prevPage) => prevPage + 1);
  };

  const setCurrentPage = (e) => {
    const tagValue = +e.target.innerText;
    console.log(tagValue);
    setPage(tagValue);
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={previousHandler}
        className={page === 1 ? styles.disabled : null}
      >
        previous
      </button>
      <p
        className={page === 1 ? styles.selected : null}
        onClick={(e) => setCurrentPage(e)}
      >
        1
      </p>
      <p
        className={page === 2 ? styles.selected : null}
        onClick={(e) => setCurrentPage(e)}
      >
        2
      </p>
      {page > 2 && page < 11 && (
        <>
          <span>...</span>
          <p className={styles.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p
        onClick={(e) => setCurrentPage(e)}
        className={page === 11 ? styles.selected : null}
      >
        11
      </p>
      <p onClick={(e) => setCurrentPage(e)}
      className={page === 12 ? styles.selected : null}>12</p>
      <button
        onClick={nextHandler}
        className={page === 12 ? styles.disabled : null}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
