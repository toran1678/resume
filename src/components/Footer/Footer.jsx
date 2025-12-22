import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  const name = "Kim Seon Bin";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} {name}. All rights reserved.
        </p>
        <p className={styles.note}>
          이 페이지는 React와 Vite로 제작되었습니다.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
