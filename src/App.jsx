import { Header } from "./componants/Header/Header";
import { Footer } from "./componants/Footer/Footer";
import { Home } from "./componants/Home/Home";
import { Presentation } from "./componants/Presentation/Presentation";
import { Map } from "./componants/Map/Map";
import { Visite } from "./componants/Visite/Visite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./componants/Loader/Loader";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Router>
        <div className={`${styles.main}`}>
          <div className={`${styles.container__particules}`}>
            {Array.from({ length: 100 }, (_, i) => (
              <div className={styles["circle-container"]} key={i}>
                <div className={styles.circle}></div>
              </div>
            ))}
          </div>

          <Loader />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/visite-3d" element={<Visite />} />
            <Route path="/map" element={<Map />} />
          </Routes>
          <Footer />

          <div className={`${styles.background}`}>
            <div className={`${styles.container__color__background}`}>
              <span
                className={`${styles.red__circle} ${styles.red__circle__1}`}
              ></span>
              <span
                className={`${styles.red__circle} ${styles.red__circle__2}`}
              ></span>
              <span
                className={`${styles.red__circle} ${styles.red__circle__3}`}
              ></span>
            </div>
            <img className={`${styles.img__bg}`} src="images/3.webp" alt="" />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
