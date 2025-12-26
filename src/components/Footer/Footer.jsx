import styles from './Footer.module.css';
import { SiGithub } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

function Footer() {
  const currentYear = new Date().getFullYear();
  const name = "Kim Seon Bin";
  const githubUrl = "https://github.com/toran1678";
  const email = "toran16784@gmail.com";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <SiGithub />
          </a>
          <a 
            href={`mailto:${email}`}
            className={styles.socialLink}
            aria-label="Email"
          >
            <HiMail />
          </a>
        </div>
        <p className={styles.copyright}>
          © {currentYear} {name}. All rights reserved.
        </p>
        {/* <p className={styles.note}>
          이 페이지는 React와 Vite로 제작되었습니다.
        </p> */}
      </div>
    </footer>
  );
}

export default Footer;
