import styles from "./app.module.scss";

// Components
import Navbar from "./Components/Navbar"
import Videoplayer from "./Components/Videoplayer"

function App() {
  return (
    <>
      <Navbar/>
      <div className={styles.home_container}>
        <Videoplayer/>
      </div>
    </>
  );
}

export default App;
