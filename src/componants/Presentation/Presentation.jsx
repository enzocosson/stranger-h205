/* eslint-disable */
import styles from "./Presentation.module.scss";

export function Presentation() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.presentation}>
          <img className={styles.title} src="images/presentation.webp" alt="" />
          <p>
            Explorez le monde captivant de la réalité virtuelle avec notre
            projet de validation de module. En binôme, nous avons eu
            l'opportunité de concevoir un "mini escape game" en réalité
            virtuelle.
            <br />
            <br />
            Le défi était le suivant : choisir une salle de l'IUT (la salle H205
            pour nous) comme toile de fond pour notre expérience immersive.
            Notre mission était de créer une mini-énigme qui permettra aux
            participants de "sortir" de la salle après avoir accompli avec
            succès au moins quatre actions interactives.
          </p>

          <img
            className={styles.h205__cover}
            src="images/h205-cover.webp"
            alt="h205-cover"
          />

          <div className={styles.container__section__info__illu}>
            <div className={styles.container__info}>
              <div className={styles.info}>
                <h2 className={styles.title}>Lancement d’une partie</h2>
                <p>
                  Avant de lancer une partie vous aurez la possibilité de
                  choisir les paramètres de celle-ci, comme l’activation du son,
                  de la musique ou encore du choix de difficulté
                  (facile/normale/difficile).
                  <br />
                  <br />
                  Puis cliquez sur “JOUER” et amusez-vous !
                </p>
              </div>
              <div className={styles.illu}>
                <img src="images/3.webp" alt="illu-1" />
              </div>
            </div>
            <div className={styles.container__info}>
              <div className={styles.illu}>
                <img src="images/6.webp" alt="illu-1" />
              </div>
              <div className={styles.info}>
                <h2 className={styles.title}>Sortir vivant !</h2>
                <p>
                  Vous vous retrouverez immédiatement dans la salle{" "}
                  <span>Stranger 205</span>, piégé. Votre objectif sera de vous
                  échapper de cet endroit angoissant le plus rapidement
                  possible. Pour cela, vous devrez découvrir un maximum
                  d'indices afin de déverrouiller la porte à l'aide d'un code
                  secret.
                  <br />
                  <br />
                  Bonne chance !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner}>
        <img
          className={styles.img__banner}
          src="images/img-banner.webp"
          alt="banner"
        />
        <img
          className={styles.banner__logo}
          src="images/allez-vous-reussir.webp"
          alt=""
        />
      </div>
    </>
  );
}
