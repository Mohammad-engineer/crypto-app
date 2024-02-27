import Styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={Styles.header}>
        <h1>Crypto App</h1>
        <p>
          {" "}
          <a href="google.com">Chita App</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={Styles.footer}>
        <p>Dveloped by Mohammad Mohammadi</p>
      </footer>
    </>
  );
};

export default Layout;
