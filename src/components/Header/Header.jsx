import { useEffect, useId, useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navId = useId();
  const name = "SeonBin's Portfolio";

  // 데스크탑 메뉴 (5개 - 통합된 항목)
  const desktopMenuItems = [
    { 
      id: 'about', 
      label: '소개',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    { 
      id: 'education', 
      label: '교육',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    },
    { 
      id: 'skills', 
      label: '기술',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    { 
      id: 'projects', 
      label: '프로젝트',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    { 
      id: 'experience', 
      label: '경력',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
  ];

  // 모바일 햄버거 메뉴 (7개 - 모든 항목)
  const mobileMenuItems = [
    { 
      id: 'about', 
      label: '개인정보',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    { 
      id: 'education', 
      label: '학력',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    },
    { 
      id: 'activities', 
      label: '교육/활동',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    { 
      id: 'skills', 
      label: '기술 스택',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    { 
      id: 'certifications', 
      label: '자격증',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      )
    },
    { 
      id: 'projects', 
      label: '프로젝트',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    { 
      id: 'experience', 
      label: '경력',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 조금이라도 내려가면(=상단이 아니면) 일반 헤더로 전환
      setIsAtTop(window.scrollY <= 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴가 열려있을 때 배경 스크롤 방지 + ESC로 닫기 + 리사이즈 시 자동 닫기
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    // 스크롤바 너비만큼 padding을 추가해서 레이아웃 shift 방지
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    const handleResize = () => {
      // 데스크탑으로 돌아가면 메뉴 닫기
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 오버레이를 header 밖으로 빼서 전체 화면 덮도록 */}
      <div
        className={`${styles.overlay} ${isMobileMenuOpen ? styles.overlayOpen : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />
      
      <header className={`${styles.header} ${isAtTop ? styles.atTop : styles.scrolled}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a
              href="#top"
              className={styles.logoLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {name}
            </a>
          </div>
          <nav className={styles.nav}>
            {/* 데스크탑 메뉴 (1025px 이상) */}
            <ul className={styles.desktopMenu}>
              {desktopMenuItems.map((item) => (
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

            {/* 햄버거 버튼 */}
            <button
              type="button"
              className={`${styles.menuToggle} ${isMobileMenuOpen ? styles.menuToggleOpen : ''}`}
              aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={isMobileMenuOpen}
              aria-controls={navId}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              <span className={styles.menuToggleIcon} aria-hidden="true" />
            </button>

            {/* 모바일 드로어 메뉴 (1024px 이하) */}
            <div
              id={navId}
              className={`${styles.menuDrawer} ${isMobileMenuOpen ? styles.menuDrawerOpen : ''}`}
            >
              <div className={styles.menuDrawerHeader}>
                <h2 className={styles.menuDrawerTitle}>메뉴</h2>
                <button
                  type="button"
                  className={styles.menuCloseButton}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="메뉴 닫기"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <ul className={styles.menu}>
                {mobileMenuItems.map((item) => (
                  <li key={item.id} className={styles.menuItem}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleMenuClick(e, item.id)}
                      className={styles.menuLink}
                    >
                      <span className={styles.menuLinkIcon}>{item.icon}</span>
                      <span className={styles.menuLinkText}>{item.label}</span>
                      <svg className={styles.menuLinkArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
