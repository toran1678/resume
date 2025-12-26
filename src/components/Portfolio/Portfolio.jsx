import { useEffect, useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './Portfolio.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import LogoLoop from '../LogoLoop/LogoLoop';
import TextType from '../TextType/TextType';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiPython, 
  SiNodedotjs, 
  SiMysql, 
  SiGit, 
  SiDocker, 
  SiRedis,
  SiFastapi,
  SiNginx,
  SiVite
} from 'react-icons/si';

function Portfolio() {
  // 배너 데이터
  const name = "김선빈";
  const bannerSubtitle = "프론트엔드 개발자 포트폴리오";
  const bannerName = name;
  const bannerEnding = "입니다.";
  
  // TextType용 텍스트 배열
  const typingTexts = [
    "다양한 기술을 배우고 적용하며 성장하는",
    "끊임없이 도전하는",
    "새로운 것을 탐구하는"
  ];

  // 타이핑 애니메이션 (프론트엔드 개발자 포트폴리오) - 주석 처리
  // const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  
  // useEffect(() => {
  //   let currentIndex = 0;
  //   const typingInterval = setInterval(() => {
  //     if (currentIndex < bannerSubtitle.length) {
  //       setDisplayedSubtitle(bannerSubtitle.slice(0, currentIndex + 1));
  //       currentIndex++;
  //     } else {
  //       clearInterval(typingInterval);
  //     }
  //   }, 100); // 타이핑 속도 (ms)

  //   return () => clearInterval(typingInterval);
  // }, [bannerSubtitle]);

  // 개인정보
  const email = "toran16784@gmail.com";
  const location = "경기 안양시";
  const portfolio = "https://toran1678.github.io/my-blog";
  const birthYear = 2001;
  const birthDate = "4월 19일";
  //const age = 24;
  // public 폴더의 이미지는 절대 경로로 접근 (base 경로 자동 처리)
  const photoPath = import.meta.env.BASE_URL + "images/profile.jpg";
  const bannerImagePath = import.meta.env.BASE_URL + "images/banner.png";

  // 경력
  const experience = [
    {
      company: "(주) 예시회사",
      logo: "images/banner.png", // 임시 배너 이미지
      period: "2024.01 ~ 재직중",
      duration: "1년",
      description: "혁신적인 기술로 세상을 변화시키는 IT 기업",
      roles: ["Frontend 개발", "Backend 개발"],
      projects: [
        {
          title: "사용자 대시보드 개발",
          period: "2024년 상반기",
          description: "React 기반의 관리자 대시보드 전체 개발 및 성능 최적화"
        },
        {
          title: "API 서버 구축",
          period: "2024년 하반기",
          description: "RESTful API 설계 및 FastAPI를 활용한 백엔드 서버 구축"
        }
      ]
    },
    {
      company: "(주) 이전회사",
      logo: "images/banner.png", // 임시 배너 이미지
      period: "2022.03 ~ 2023.12",
      duration: "1년 9개월",
      description: "고객 중심의 서비스를 제공하는 스타트업",
      roles: ["웹 개발", "데이터베이스 설계"],
      projects: [
        {
          title: "쇼핑몰 웹사이트 리뉴얼",
          period: "2022년 하반기 ~ 2023년 상반기",
          description: "사용자 경험 개선을 위한 전체 UI/UX 리뉴얼 및 반응형 웹 구현"
        },
        {
          title: "재고 관리 시스템 개발",
          period: "2023년 하반기",
          description: "MySQL 기반의 재고 관리 시스템 설계 및 구현"
        }
      ]
    }
    // 실제 경력으로 교체하세요
  ];

  // 기술 스택 로고 (LogoLoop용) - 주석 처리
  /* const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/ko/docs/Web/JavaScript" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/ko/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/ko/docs/Web/CSS" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiFastapi />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiNginx />, title: "Nginx", href: "https://www.nginx.com" },
    { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  ]; */

  // 학력
  const education = [
    {
      school: "안양대학교",
      major: "소프트웨어학과",
      period: "2020.03 ~ 2026.02",
      status: "졸업예정",
      type: "대학교(4년)"
    },
    {
      school: "인천정보산업고등학교",
      major: "전산과",
      period: "2017.03 ~ 2020.02",
      status: "졸업",
      type: "전문(실업)계"
    }
  ];

  const universityLabel = education?.[0]
    ? `${education[0].school} (${education[0].major})`
    : "";

  // 기술 스택 (카테고리 분리)
  const skillGroups = [
    {
      title: "Language",
      variant: "language",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C/C++"]
    },
    {
      title: "Frontend",
      variant: "frontend",
      items: ["React", "VITE", "HTML", "CSS"]
    },
    {
      title: "Backend",
      variant: "backend",
      items: ["FastAPI", "MySQL", "Redis"]
    },
    {
      title: "DevOps",
      variant: "devops",
      items: ["Docker", "Git", "GitHub"]
    },
    {
      title: "Tools",
      variant: "tools",
      items: ["Figma", "Obsidian", "VS Code"]
    }
  ];

  const skillPillVariants = {
    JavaScript: "javascript",
    TypeScript: "typescript",
    Python: "python",
    Java: "java",
    "C/C++": "ccpp",
    React: "react",
    VITE: "vite",
    HTML: "html",
    CSS: "css",
    FastAPI: "fastapi",
    MySQL: "mysql",
    Redis: "redis",
    Git: "git",
    GitHub: "github",
    Docker: "docker",
    Figma: "figma",
    Obsidian: "obsidian",
    "VS Code": "vscode"
  };

  const SkillGroupIcon = ({ variant }) => {
    switch (variant) {
      case "language":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.categoryIcon} aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m10 15-3-3 3-3" />
            <path d="m14 9 3 3-3 3" />
          </svg>
        );
      case "frontend":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="14" rx="2"></rect>
            <path d="M7 20h10"></path>
            <path d="M12 18v2"></path>
          </svg>
        );
      case "backend":
        return (
          <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.categoryIcon} aria-hidden="true">
            <path d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 21C4 21 4 18 4 18V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 22H19.5H21M19.5 19.4286H21.8333V16H17.1666V19.4286H19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "devops":
        return (
          <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={styles.categoryIcon} aria-hidden="true">
            <title>dev-ops-solid</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none" />
              </g>
              <g id="icons_Q2" data-name="icons Q2">
                <path d="M46,24A12,12,0,0,0,34,12c-5.2,0-9.5,4.1-11.9,11.4C20.3,28.9,17.3,32,14,32a8,8,0,0,1,0-16h1.2l-1.6,1.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l4.9-5a1.9,1.9,0,0,0,0-2.8l-4.9-5a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L15.2,12H14a12,12,0,0,0,0,24c5.2,0,9.5-4.1,11.9-11.4C27.7,19.1,30.7,16,34,16a8,8,0,0,1,0,16H32.8l1.6-1.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-4.9,5a1.9,1.9,0,0,0,0,2.8l4.9,5a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L32.8,36H34A12,12,0,0,0,46,24Z" fill="currentColor" />
              </g>
            </g>
          </svg>
        );
      case "tools":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2 2-2-2 2-2z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  // 프로젝트
  const projects = [
    {
      title: "AI 기반 가상 피팅 및 패션 커뮤니티 서비스",
      period: "2025.03 ~ 2025.12",
      teamSize: "3인 팀 프로젝트",
      role: "전체 시스템 설계 및 풀스택 개발",
      description: "사용자가 자신의 사진과 의류 이미지를 업로드하면 AI가 가상으로 착용한 모습을 생성해주는 서비스. 커뮤니티 기능을 통해 사용자들이 패션 아이디어를 공유할 수 있습니다.",
      techStack: ["React", "FastAPI", "MySQL", "Redis", "Celery", "Docker", "Nginx"],
      links: {
        github: "https://github.com/toran1678/VirtualFitting",
        demo: null,
        readme: "https://github.com/toran1678/VirtualFitting#readme"
      },
      images: [
        "images/projects/virtualfitting/img1.JPG",
        "images/projects/virtualfitting/img2.JPG",
        "images/projects/virtualfitting/img3.JPG",
        "images/projects/virtualfitting/img4.JPG",
        "images/projects/virtualfitting/img5.JPG",
        "images/projects/virtualfitting/img6.JPG",
        "images/projects/virtualfitting/img7.JPG",
        "images/projects/virtualfitting/img8.JPG",
        "images/projects/virtualfitting/img9.JPG",
        "images/projects/virtualfitting/img10.JPG",
        "images/projects/virtualfitting/img11.JPG",
        "images/projects/virtualfitting/img12.JPG",
        "images/projects/virtualfitting/img13.JPG",
        "images/projects/virtualfitting/img14.JPG",
        "images/projects/virtualfitting/img15.JPG",
      ],
      highlights: [
        "웹 서버(Nginx) - WAS(FastAPI) - 비동기 큐(Redis/Celery) - DB(MySQL)로 이어지는 전체 아키텍처 설계 및 구축",
        "고해상도 AI 이미지 처리를 위한 비동기 태스크 큐 시스템 구현으로 응답 지연 해결",
        "15개 이상의 테이블에 대한 ERD 설계 및 정규화, OAuth2 소셜 로그인, SMTP 이메일 인증 구현",
        "Context API를 활용한 효율적인 전역 상태 관리 및 SPA 구현",
        "OOTDiffusion 모델 환경 구축 및 전처리(OpenPose, DensePose) 파이프라인 연동"
      ]
    },
    {
      title: "Java Socket 기반 실시간 오목 게임",
      period: "2024.09 ~ 2024.12",
      teamSize: "2인 팀 프로젝트",
      role: "네트워크 통신 및 게임 로직 구현",
      description: "TCP 소켓 통신을 활용한 실시간 멀티플레이어 오목 게임. 채팅 시스템, 사용자 인증, 게임 전적 관리 등을 통합한 종합 게임 플랫폼입니다.",
      techStack: ["Java", "Socket", "MySQL", "Swing/AWT", "JavaMail API", "Gson"],
      links: {
        github: "https://github.com/toran1678/Java-Socket-Omok",
        demo: null,
        readme: "https://github.com/toran1678/Java-Socket-Omok#readme"
      },
      images: [
        "images/projects/javaomok/img1.png",
        "images/projects/javaomok/img2.png",
        "images/projects/javaomok/img3.png",
      ],
      highlights: [
        "TCP 소켓을 이용한 실시간 양방향 통신 구현 (멀티스레드 환경)",
        "15×15 바둑판에서 4방향 승리 검사 알고리즘 설계 및 게임 상태 동기화",
        "MySQL 데이터베이스 연동으로 사용자 정보, 채팅 로그, 게임 전적 관리",
        "JavaMail API를 활용한 비밀번호 찾기 기능 및 SMTP 이메일 전송 구현",
        "Swing/AWT 기반 직관적인 UI/UX 설계 (실시간 상태 업데이트, 이모지 지원)"
      ]
    },
    // 추가 프로젝트는 여기에 작성하세요
  ];

  // 이미지 모달 상태
  const [selectedProjectImages, setSelectedProjectImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // README 모달 상태
  const [selectedReadmeUrl, setSelectedReadmeUrl] = useState(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [readmeLoading, setReadmeLoading] = useState(false);
  const [readmeError, setReadmeError] = useState(null);

  // 자격증
  const certifications = [
    {
      name: "정보처리기사",
      date: "2025.09",
      issuer: "한국산업인력공단",
      status: "최종합격"
    },
    {
      name: "1종보통운전면허 (오토)",
      date: "2025.02",
      issuer: "경찰청(운전면허시험관리단)",
      status: "최종합격"
    },
    {
      name: "컴퓨터활용능력2급",
      date: "2018.10",
      issuer: "대한상공회의소",
      status: "최종합격"
    }
  ];

  // 교육/활동
  const activities = [
    {
      title: "안양대학교 지식재산융합과정",
      period: "2024.09 ~ 2025.12",
      description: "지식재산융합 소단위 전공 이수 및 실무 역량 강화",
      details: [
        "이수 과정: 지식재산융합 소단위 전공 (총 9학점 이수)",
        "핵심 역량: 지식재산권의 이해부터 실무 활용까지 전 과정을 학습함",
        "특허 출원 완료: 아이디어를 구체화하여 특허 출원 완료 (출원번호: 10-2025-0189295)"
      ]
    }
  ];

  // 이미지 모달 열기
  const openImageModal = (images, index = 0) => {
    setSelectedProjectImages(images);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // 이미지 모달 닫기
  const closeImageModal = () => {
    setSelectedProjectImages(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = '';
  };

  // README 모달 열기
  const openReadmeModal = async (url) => {
    setSelectedReadmeUrl(url);
    setReadmeLoading(true);
    setReadmeError(null);
    document.body.style.overflow = 'hidden';

    try {
      // GitHub URL에서 owner/repo 추출
      const match = url.match(/github\.com\/([^/]+)\/([^/#?]+)/);
      if (!match) {
        throw new Error('유효하지 않은 GitHub URL입니다.');
      }
      
      const [, owner, repo] = match;
      
      // GitHub API로 README 메타데이터 먼저 가져오기
      const metaResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`);
      
      if (!metaResponse.ok) {
        throw new Error('README를 찾을 수 없습니다.');
      }
      
      const metadata = await metaResponse.json();
      
      // download_url로 실제 README 내용 가져오기
      const contentResponse = await fetch(metadata.download_url);
      
      if (!contentResponse.ok) {
        throw new Error('README 내용을 가져올 수 없습니다.');
      }
      
      const text = await contentResponse.text();
      setReadmeContent(text);
    } catch (error) {
      setReadmeError(error.message);
    } finally {
      setReadmeLoading(false);
    }
  };

  // README 모달 닫기
  const closeReadmeModal = () => {
    setSelectedReadmeUrl(null);
    setReadmeContent('');
    setReadmeError(null);
    document.body.style.overflow = '';
  };

  // 이전 이미지
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProjectImages.length - 1 : prev - 1
    );
  }, [selectedProjectImages]);

  // 다음 이미지
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => 
      prev === selectedProjectImages.length - 1 ? 0 : prev + 1
    );
  }, [selectedProjectImages]);

  // 스크롤 애니메이션을 위한 Hooks (triggerOnce: false로 설정하여 스크롤 올릴 때도 작동)
  const [personalInfoRef, personalInfoVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: false });
  const [educationRef, educationVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: false });
  const [activitiesRef, activitiesVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: false });
  const [skillsRef, skillsVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: false });
  const [certificationsRef, certificationsVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: false });
  const [projectsRef, projectsVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: false });
  const [experienceRef, experienceVisible] = useScrollReveal({ threshold: 0.2, triggerOnce: false });

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedProjectImages) {
          closeImageModal();
        }
        if (selectedReadmeUrl) {
          closeReadmeModal();
        }
      }
      if (selectedProjectImages) {
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectImages, selectedReadmeUrl, prevImage, nextImage]);

  return (
    <main className={styles.portfolio}>
      {/* 배너 */}
      <section className={styles.banner} style={{ backgroundImage: `url(${bannerImagePath})` }}>
        <div className={styles.bannerContainer}>
          <h1 className={styles.bannerName}>- {bannerName} -</h1>
          <p className={styles.bannerSubtitle}>
            {bannerSubtitle}
            {/* <span className={styles.cursor}>|</span> */}
          </p>
          <div className={styles.bannerContent}>
            <p className={styles.bannerDescription}>
              <TextType 
                text={typingTexts}
                typingSpeed={75}
                pauseDuration={1500}
                deletingSpeed={50}
                showCursor={true}
                cursorCharacter="_"
                as="span"
              />
            </p>
            <p className={styles.bannerDescription}>
              개발자 <span className={styles.bannerNameInline}>{bannerName}</span>{bannerEnding}
            </p>
          </div>
          <button 
            className={styles.bannerButton}
            onClick={() => {
              const personalInfo = document.querySelector(`.${styles.personalInfo}`);
              if (personalInfo) {
                const headerHeight = 70;
                const extraOffset = 30; // 추가 여백
                const elementPosition = personalInfo.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - extraOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            더 알아보기{' '}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* 개인정보 */}
      <section 
        id="about" 
        ref={personalInfoRef}
        className={`${styles.personalInfo} ${styles.scrollReveal} ${personalInfoVisible ? styles.scrollRevealVisible : ''}`}
      >
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>개인정보</h2>
          <div className={styles.personalInfoContent}>
            {/* 사진 영역 */}
            <div className={styles.photoSection}>
              <div className={styles.photoPlaceholder}>
                {photoPath ? (
                  <img src={photoPath} alt={`${name} 프로필 사진`} />
                ) : (
                  <span className={styles.photoText}>사진</span>
                )}
              </div>
            </div>
            
            {/* 정보 영역 */}
            <div className={styles.infoSection}>
              <div className={styles.nameSection}>
                <h2 className={styles.name}>{name}</h2>
              </div>
              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 4h18"></path>
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                    <path d="M8 14h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 14h.01"></path>
                  </svg>
                  <span className={styles.infoContent}>
                    <span className={styles.label}>생년월일</span>
                    <span className={styles.value}>{birthYear}년 {birthDate}</span>
                  </span>
                </div>

                {universityLabel && (
                  <div className={styles.infoItem}>
                    <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10L12 5 2 10l10 5 10-5z"></path>
                      <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5"></path>
                    </svg>
                    <span className={styles.infoContent}>
                      <span className={styles.label}>학력</span>
                      <span className={styles.value}>{universityLabel}</span>
                    </span>
                  </div>
                )}

                <div className={styles.infoItem}>
                  <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className={styles.infoContent}>
                    <span className={styles.label}>이메일</span>
                    <a href={`mailto:${email}`} className={styles.value}>{email}</a>
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span className={styles.infoContent}>
                    <span className={styles.label}>주소</span>
                    <span className={styles.value}>{location}</span>
                  </span>
                </div>
                {portfolio && (
                  <div className={styles.infoItem}>
                    <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <span className={styles.infoContent}>
                      <span className={styles.label}>링크</span>
                      <a href={portfolio} target="_blank" rel="noopener noreferrer" className={styles.value}>
                        {portfolio}
                      </a>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <div className={styles.content}>
        <div className={styles.container}>
          {/* 학력 */}
          <section 
            id="education" 
            ref={educationRef}
            className={`${styles.section} ${styles.scrollReveal} ${educationVisible ? styles.scrollRevealVisible : ''}`}
          >
            <h2 className={styles.sectionTitle}>학력</h2>
            <div className={styles.educationList}>
              {education.map((edu, index) => (
                <div key={index} className={styles.educationItem}>
                  <div className={styles.educationHeader}>
                    <div className={styles.left}>
                      <h3 className={styles.school}>{edu.school}</h3>
                      <span className={styles.major}>{edu.major}</span>
                      {edu.type && <span className={styles.type}>{edu.type}</span>}
                    </div>
                    <div className={styles.right}>
                      <span className={styles.period}>{edu.period}</span>
                      <span className={styles.status}>{edu.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 교육/활동 */}
          <section 
            id="activities" 
            ref={activitiesRef}
            className={`${styles.section} ${styles.scrollReveal} ${activitiesVisible ? styles.scrollRevealVisible : ''}`}
          >
            <h2 className={styles.sectionTitle}>교육/활동</h2>
            <div className={styles.activitiesList}>
              {activities.map((activity, index) => (
                <div key={index} className={styles.activityItem}>
                  <div className={styles.activityHeader}>
                    <h3 className={styles.activityTitle}>{activity.title}</h3>
                    <span className={styles.period}>{activity.period}</span>
                  </div>
                  <p className={styles.description}>{activity.description}</p>
                  {activity.details && activity.details.length > 0 && (
                    <ul className={styles.details}>
                      {activity.details.map((detail, idx) => (
                        <li key={idx} className={styles.detailItem}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 기술 스택 */}
          <section 
            id="skills" 
            ref={skillsRef}
            className={`${styles.section} ${styles.scrollReveal} ${skillsVisible ? styles.scrollRevealVisible : ''}`}
          >
            <h2 className={styles.sectionTitle}>기술 스택</h2>
            <div className={styles.skillsPanel}>
              {skillGroups.map((group) => (
                <div key={group.title} className={styles.skillRow}>
                  <div className={styles.skillRowHeader}>
                    <span className={`${styles.skillGroupIcon} ${styles[`skillGroupIcon--${group.variant}`] ?? ''}`}>
                      <SkillGroupIcon variant={group.variant} />
                    </span>
                    <span className={styles.skillRowTitle}>{group.title}</span>
                  </div>
                  <div className={styles.skillRowBody}>
                    {group.items.map((item) => (
                      <span
                        key={`${group.title}-${item}`}
                        className={`${styles.skillPill} ${styles[`skillPill--${skillPillVariants[item] ?? 'default'}`] ?? ''}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 자격증 */}
          <section 
            id="certifications" 
            ref={certificationsRef}
            className={`${styles.section} ${styles.scrollReveal} ${certificationsVisible ? styles.scrollRevealVisible : ''}`}
          >
            <h2 className={styles.sectionTitle}>자격증</h2>
            <div className={styles.certificationsList}>
              {certifications.map((cert, index) => (
                <div key={index} className={styles.certificationItem}>
                  <div className={styles.left}>
                    <h3 className={styles.certName}>{cert.name}</h3>
                    <span className={styles.issuer}>{cert.issuer}</span>
                  </div>
                  <div className={styles.right}>
                    <span className={styles.date}>{cert.date}</span>
                    {cert.status && <span className={styles.status}>{cert.status}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 프로젝트 */}
          <section 
            id="projects" 
            ref={projectsRef}
            className={`${styles.section} ${styles.scrollReveal} ${projectsVisible ? styles.scrollRevealVisible : ''}`}
          >
            <h2 className={styles.sectionTitle}>프로젝트</h2>
            <div className={styles.projectsList}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectCardHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectPeriod}>{project.period}</span>
                      {project.teamSize && <span className={styles.projectTeamSize}>{project.teamSize}</span>}
                    </div>
                  </div>
                  {project.role && <p className={styles.projectRole}>{project.role}</p>}
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className={styles.projectHighlights}>
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className={styles.highlightItem}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  
                  {project.techStack && project.techStack.length > 0 && (
                    <div className={styles.projectTechStack}>
                      {project.techStack.map((tech, tIndex) => (
                        <span key={tIndex} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  )}
                  
                  {(project.links || (project.images && project.images.length > 0)) && (
                    <div className={styles.projectLinks}>
                      {project.links?.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.images && project.images.length > 0 && (
                        <button 
                          onClick={() => openImageModal(project.images)} 
                          className={`${styles.projectLink} ${styles.projectLinkButton}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                          Images ({project.images.length})
                        </button>
                      )}
                      {project.links?.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          Demo
                        </a>
                      )}
                      {project.links?.readme && (
                        <button 
                          onClick={() => openReadmeModal(project.links.readme)} 
                          className={`${styles.projectLink} ${styles.projectLinkButton}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                          README
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 경력 */}
          <section 
            id="experience" 
            ref={experienceRef}
            className={`${styles.section} ${styles.scrollReveal} ${experienceVisible ? styles.scrollRevealVisible : ''}`}
          >
            <h2 className={styles.sectionTitle}>경력</h2>
            <div className={styles.experienceList}>
              {experience.map((exp, index) => (
                <div key={index} className={styles.careerCard}>
                  <div className={styles.careerLogo}>
                    {exp.logo ? (
                      <img src={import.meta.env.BASE_URL + exp.logo} alt={`${exp.company} 로고`} />
                    ) : (
                      <div className={styles.careerLogoPlaceholder}>
                        {exp.company.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className={styles.careerContent}>
                    <div className={styles.careerHeader}>
                      <div className={styles.careerTitleRow}>
                        <h3 className={styles.careerCompany}>{exp.company}</h3>
                        <span className={styles.careerPeriod}>
                          {exp.period}
                          {exp.duration && <span className={styles.careerDuration}> ({exp.duration})</span>}
                        </span>
                      </div>
                    </div>
                    {exp.description && (
                      <p className={styles.careerDescription}>{exp.description}</p>
                    )}
                    {exp.roles && exp.roles.length > 0 && (
                      <div className={styles.careerRoles}>
                        {exp.roles.map((role, rIdx) => (
                          <span key={rIdx} className={styles.roleTag}>{role}</span>
                        ))}
                      </div>
                    )}
                    {exp.projects && exp.projects.length > 0 && (
                      <div className={styles.careerProjects}>
                        {exp.projects.map((project, pIdx) => (
                          <div key={pIdx} className={styles.careerProject}>
                            <h4 className={styles.careerProjectTitle}>{project.title}</h4>
                            <span className={styles.careerProjectPeriod}>{project.period}</span>
                            <p className={styles.careerProjectDescription}>{project.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* 기술 스택 로고 루프 */}
      {/* <div style={{ 
        padding: '60px 0', 
        background: '#f3f4f6',
        display: 'flex', 
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: '100%',
          maxWidth: '1400px',
          overflow: 'hidden'
        }}>
          <LogoLoop
            logos={techLogos}
            speed={100}
            direction="left"
            logoHeight={56}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut={true}
            fadeOutColor="#f3f4f6"
            ariaLabel="기술 스택"
          />
        </div>
      </div> */}

      {/* 이미지 갤러리 모달 */}
      {selectedProjectImages && (
        <div className={styles.imageModal} onClick={closeImageModal}>
          <div className={styles.imageModalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.imageModalClose} onClick={closeImageModal} aria-label="닫기">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            {selectedProjectImages.length > 1 && (
              <>
                <button className={styles.imageModalPrev} onClick={prevImage} aria-label="이전 이미지">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className={styles.imageModalNext} onClick={nextImage} aria-label="다음 이미지">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}
            
            <div className={styles.imageModalImageWrapper}>
              <img 
                src={import.meta.env.BASE_URL + selectedProjectImages[currentImageIndex]} 
                alt={`프로젝트 스크린샷 ${currentImageIndex + 1}`}
                className={styles.imageModalImage}
              />
            </div>
            
            {selectedProjectImages.length > 1 && (
              <div className={styles.imageModalCounter}>
                {currentImageIndex + 1} / {selectedProjectImages.length}
              </div>
            )}
            
            {selectedProjectImages.length > 1 && (
              <div className={styles.imageModalThumbnails}>
                {selectedProjectImages.map((img, idx) => (
                  <button
                    key={idx}
                    className={`${styles.imageThumbnail} ${idx === currentImageIndex ? styles.imageThumbnailActive : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  >
                    <img src={import.meta.env.BASE_URL + img} alt={`썸네일 ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* README 모달 */}
      {selectedReadmeUrl && (
        <div className={styles.readmeModal} onClick={closeReadmeModal}>
          <div className={styles.readmeModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.readmeModalHeader}>
              <h3 className={styles.readmeModalTitle}>프로젝트 README</h3>
              <button className={styles.readmeModalClose} onClick={closeReadmeModal} aria-label="닫기">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className={styles.readmeModalBody}>
              {readmeLoading && (
                <div className={styles.readmeLoading}>
                  <div className={styles.spinner}></div>
                  <p>README를 불러오는 중...</p>
                </div>
              )}
              {readmeError && (
                <div className={styles.readmeError}>
                  <p>❌ {readmeError}</p>
                  <a href={selectedReadmeUrl} target="_blank" rel="noopener noreferrer">
                    GitHub에서 직접 보기
                  </a>
                </div>
              )}
              {!readmeLoading && !readmeError && readmeContent && (
                <div className={styles.markdownContent}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {readmeContent}
                  </ReactMarkdown>
                </div>
              )}
            </div>
            <div className={styles.readmeModalFooter}>
              <a href={selectedReadmeUrl} target="_blank" rel="noopener noreferrer" className={styles.readmeExternalLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                GitHub에서 열기
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Portfolio;

