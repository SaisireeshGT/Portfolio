import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubDark from '../../assets/github-dark.svg';
import linkdinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import linkdinLight from '../../assets/linkedin-light.svg';
import CV from '../../assets/Sai_Sireesh.pdf';
import { useTheme } from '../../comman/ThemeContext';
import { TypeAnimation } from 'react-type-animation';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkdinIcon = theme === 'light' ? linkdinLight : linkdinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile" />
        <img
          src={themeIcon}
          alt="Toggle color mode"
          onClick={toggleTheme}
          className={styles.colorMode}
        />
      </div>

      <div className={styles.info}>
        <h1>Sai Sireesh</h1>
        <TypeAnimation
            sequence={[
              'Web Developer', // Types Web Developer
              2000,             // Waits 2s
              'Machine Learning Engineer', // Backspaces and types new
              2000,
              '', // Optional pause before restart
            ]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
          />

        {/* ICONS ABOVE DESCRIPTION */}
        <div className={styles.icons}>
          <a href="https://github.com/SaisireeshGT/" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/sai-sireesh-gt-7a502b284/" target="_blank" rel="noreferrer">
            <img src={linkdinIcon} alt="LinkedIn icon" />
          </a>
        </div>

        {/* DESCRIPTION */}
        <p>A Passionate Developer from India</p>

        {/* RESUME BUTTON BELOW DESCRIPTION */}
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
