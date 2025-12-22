import { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const name = "SeonBin's Portfolio";

  const menuItems = [
    { id: 'about', label: '개인정보' },
    { id: 'experience', label: '경력' },
    { id: 'education', label: '학력' },
    { id: 'skills', label: '기술 스택' },
    { id: 'certifications', label: '자격증' },
    { id: 'activities', label: '교육/활동' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 70;
      const extraOffset = 30; // 추가 여백
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - extraOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#top" className={styles.logoLink}>{name}</a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.id} className={styles.menuItem}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleMenuClick(e, item.id)}
                  className={styles.menuLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
