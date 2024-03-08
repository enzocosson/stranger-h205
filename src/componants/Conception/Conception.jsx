/* eslint-disable */
import { useState } from "react";
import styles from "./Conception.module.scss";

export function Conception() {
  const [position, setPosition] = useState(0);

  const handleInputChange = (e) => {
    setPosition(e.target.value);
  };

  const [mousePosition, setMousePosition] = useState(50);

  const handleMouseMove = (e) => {
    const containerRect = e.target.getBoundingClientRect();
    const percentage =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setMousePosition(percentage);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.conception}>
          <img className={styles.title} src="images/conception.webp" alt="" />
          <p>
            Pour aboutir a ce projet nous avons tout d’abord choisi notre salle,
            la H205 de l’IUT de Troyes, car elle est grande et offre un grand
            panel de modélisations et d’interactions possible comme les écrans,
            projecteur...
          </p>

          <div className={`${styles.section_text}`}>
            <h2 className={styles.h2}>Modélisation 3D</h2>
            <p>
              Pour modéliser la salle H205, nous avons opté pour l'utilisation
              du logiciel Blender, car nous avions davantage d'expérience pour
              la développer sur cette plateforme que directement sur Unity.
              <br />
              <br />
              Avant d'entamer la modélisation sur Blender, nous avons effectué
              un balayage rapide de la pièce à l'aide du capteur LiDAR du
              smartphone. L'objectif de ce scan n'était pas de réaliser la
              modélisation en elle-même, mais simplement d'obtenir les mesures
              les plus précises de la pièce, incluant la surface, le mobilier,
              les équipements, etc., afin de garantir le respect des échelles
              dans Blender.
              <br />
              <br />
              Voici un aperçu du scan suivi de la modélisation :
            </p>
            <div
              className={styles.container}
              style={{ "--position": `${mousePosition}%` }}
              onMouseMove={handleMouseMove}
            >
              <div class={styles.image__container}>
                <img
                  className={`${styles.image__after} ${styles.slider__image}`}
                  src="images/scan-lidar.webp"
                  alt="black and white"
                />
                <img
                  className={`${styles.image__before} ${styles.slider__image}`}
                  src="images/modelisation-3d.webp"
                  alt="color photo"
                />
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value="50"
                aria-label="Percentage of before photo shown"
                class={styles.slider}
                onChange={handleInputChange}
              />
              <div
                className={`${styles.slider__line}`}
                aria-hidden="true"
              ></div>
            </div>
          </div>

          <div className={styles.section_text}>
            <h2 className={styles.h2}>Modèles / Textures</h2>
            <p>
              Après avoir établi la structure de la page, nous avons procédé à
              son habillage avec des textures afin de lui conférer un aspect
              réaliste tout en suivant une thématique "Horreur / Sombre".
              <br />
              <br />
              Nous avons employé des fichiers de textures au format JPG pour
              l'affichage, ainsi qu'un fichier EXR pour lui donner un effet de
              relief plus réaliste.
              <br />
              <br />
              En ce qui concerne les modèles, nous avons veillé à importer des
              modèles en respectant la contrainte de 40 000 triangles pour
              l'ensemble de la modélisation.
            </p>
            <img className={styles.brique} src="images/brique.webp" alt="" />
          </div>

          <div className={styles.section_text}>
            <h2 className={styles.h2}>Export .GLB</h2>
            <p>
              Nous avons rencontré plusieurs problèmes lors de l'exportation et
              de l'optimisation. La résolution du problème a été difficile, mais
              après des recherches, nous avons constaté que les textures étaient
              en 4K, représentant environ 50 Mo pour une seule texture, ce qui
              n'était pas viable pour une exportation optimale. De plus, nos
              modèles 3D étaient trop volumineux.
              <br />
              <br />
              En rectifiant ces points, nous sommes passés d'une modélisation
              complète de <span>450Mo</span> à <span>101Mo</span>, une
              compression déjà significative. Cependant, désirant une réduction
              encore plus importante, nous avons approfondi nos recherches et
              trouvé un compresseur en ligne qui nous a permis de compresser
              notre modèle de plus de 90%. Le fichier ne fait plus que{" "}
              <span>3,5Mo</span> ! Son importation sur Unity ou sur le web est
              maintenant tout à fait envisageable.
            </p>
            <img
              className={styles.size__glb}
              src="images/size-glb.webp"
              alt=""
            />
          </div>

          <div className={styles.section_text}>
            <h2 className={styles.h2}>Unity</h2>
            <p>
              Après avoir importé le modèle sur Unity, nous avons entamé la
              création du jeu. Cependant, nous ne disposions pas d'un casque de
              réalité virtuelle pour simuler l'expérience. Nous avons donc
              installé le simulateur de périphérique{" "}
              <span>
                XR Device Simulator dans le package "XR Interaction Toolkit"
              </span>{" "}
              de Unity. Ce simulateur nous a permis de recréer un environnement
              virtuel, facilitant ainsi le développement des interactions du
              jeu.
            </p>
            <img className={styles.xr} src="images/xr.webp" alt="" />
          </div>

          <div className={styles.container__section__info__illu}>
            <div className={styles.container__info}>
              <div className={styles.illu}>
                <img src="images/interrupteur.webp" alt="illu-1" />
              </div>
              <div className={styles.info}>
                <h2 className={styles.h2}>Interaction #1</h2>
                <p>
                  Plongez-vous dans une expérience immersive où chaque action
                  compte pour réussir votre évasion de la salle virtuelle.
                  Commencez par actionner l'interrupteur pour dissiper
                  l'obscurité qui enveloppe la pièce, lançant ainsi votre
                  aventure.
                  <br />
                  <br />
                  Dirigez votre regard vers le mur à gauche de la salle et
                  repérez l'inscription rouge, énigmatiquement marquée comme
                  "2xxx".
                </p>
              </div>
            </div>

            <div className={styles.container__info}>
              <div className={styles.info}>
                <h2 className={styles.h2}>Interaction #2</h2>
                <p>
                  Continuez votre exploration vers la table du professeur, où la
                  découverte de la télécommande pour activer le projecteur en le
                  pointant dévoilera un mot de passe essentiel : "WRA207D". Ce
                  mot de passe déverrouille une tablette, marquant la deuxième
                  interaction avec une combinaison de grab et de pointer.
                </p>
              </div>
              <div className={styles.illu}>
                <img src="images/laser.webp" alt="illu-1" />
              </div>
            </div>

            <div className={styles.container__info}>
              <div className={styles.illu}>
                <img src="images/tablet.webp" alt="illu-1" />
              </div>
              <div className={styles.info}>
                <h2 className={styles.h2}>Interaction #3</h2>
                <p>
                  Déverrouillez la tablette en utilisant le mot de passe du
                  vidéoprojecteur, révélant un autre code essentiel : "x0x4".
                  Cette étape nécessite une interaction plus approfondie, avec
                  l'affichage du clavier et la saisie du code, constituant la
                  cinquième interaction.
                </p>
              </div>
            </div>

            <div className={styles.container__info}>
              <div className={styles.info}>
                <h2 className={styles.h2}>Interaction #5</h2>
                <p>
                  Le mystère se dévoile davantage lorsque vous ouvrez l'armoire,
                  révélant un code crucial inscrit sur un morceau de papier :
                  "xx2x".
                </p>
              </div>
              <div className={styles.illu}>
                <img src="images/armoire.webp" alt="illu-1" />
              </div>
            </div>

            <div className={styles.container__info}>
              <div className={styles.illu}>
                <img src="images/digicode.webp" alt="illu-1" />
              </div>
              <div className={styles.info}>
                <h2 className={styles.h2}>Interaction #6</h2>
                <p>
                  Enfin, pour conclure votre quête, manipulez les chiffres sur
                  le digicode à quatre chiffres pour ouvrir la porte et enfin
                  être libre !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
