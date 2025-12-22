import { useEffect, useState } from 'react';
import styles from './Portfolio.module.css';

function Portfolio() {
  // 배너 데이터
  const name = "김선빈";
  const bannerSubtitle = "프론트엔드 개발자 포트폴리오";
  const bannerGreeting = "안녕하세요.";
  const bannerDescription = "다양한 기술을 배우고 적용하며 성장하는 개발자 ";
  const bannerName = name;
  const bannerEnding = "입니다.";

  // 타이핑 애니메이션 (프론트엔드 개발자 포트폴리오)
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < bannerSubtitle.length) {
        setDisplayedSubtitle(bannerSubtitle.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // 타이핑 속도 (ms)

    return () => clearInterval(typingInterval);
  }, [bannerSubtitle]);

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
    // {
    //   company: "꼬치꼬치맛꼬치",
    //   position: "매장 운영 · 아르바이트",
    //   period: "2023.01 ~ 재직중",
    //   totalYears: "총 3년",
    //   description: "3년간 금~일 주말 피크 및 마감 시간대(17:00~01:00) 고정 근무",
    //   details: ["고객 응대 및 매장 마감"]
    // }
  ];

  // 학력
  const education = [
    {
      school: "안양대학교",
      major: "소프트웨어학과",
      period: "2020.03 ~ 2026.02",
      status: "졸업예정",
      type: "대학교(4년)",
      projects: [
        {
          title: "AI 기반 가상 피팅 및 패션 커뮤니티 서비스",
          role: "전체 시스템 설계 및 풀스택 개발",
          details: [
            {
              category: "시스템 아키텍처",
              content: "웹 서버(Nginx) - WAS(FastAPI) - 비동기 큐(Redis/Celery) - DB(MySQL)로 이어지는 전체 아키텍처 설계 및 구축. 고해상도 AI 이미지 처리를 위한 비동기 태스크 큐 시스템 구현으로 응답 지연 해결."
            },
            {
              category: "백엔드 & DB",
              content: "사용자, 피팅, 커뮤니티 등 15개 이상의 테이블에 대한 ERD 설계 및 정규화. OAuth2 소셜 로그인, SMTP 이메일 인증 등 보안 및 인증 로직 전수 구현. 가상 피팅 프로세스 및 커뮤니티(피드, 댓글, 좋아요) RESTful API 개발."
            },
            {
              category: "프론트엔드",
              content: "사용자 경험(UX)을 고려한 SPA(Single Page Application) 전체 구현. Context API를 활용하여 사용자 로그인 세션 및 전역 상태(State)를 효율적으로 관리."
            },
            {
              category: "AI 모델 서빙",
              content: "OOTDiffusion 모델 환경 구축 및 전처리(OpenPose, DensePose) 파이프라인 연동."
            }
          ]
        }
      ]
    },
    // {
    //   school: "인천정보산업고등학교",
    //   major: "전산과",
    //   period: "2017.03 ~ 2020.02",
    //   status: "졸업",
    //   type: "전문(실업)계",
    //   projects: [
    //     {
    //       title: "Super Hexagon 게임 모작",
    //       description: "구글 플레이스토어 출시 완료"
    //     }
    //   ]
    // }
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
      items: ["DevOps", "Docker", "Git", "GitHub"]
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
    DevOps: "devops",
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

  return (
    <main className={styles.portfolio}>
      {/* 배너 */}
      <section className={styles.banner} style={{ backgroundImage: `url(${bannerImagePath})` }}>
        <div className={styles.bannerContainer}>
          <h1 className={styles.bannerName}>- {bannerName} -</h1>
          <p className={styles.bannerSubtitle}>
            {displayedSubtitle}
            <span className={styles.cursor}>|</span>
          </p>
          <div className={styles.bannerContent}>
            <p className={styles.bannerGreeting}>{bannerGreeting}</p>
            <p className={styles.bannerDescription}>
              {bannerDescription} <span className={styles.bannerNameInline}>{bannerName}</span>{bannerEnding}
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
      <section id="about" className={styles.personalInfo}>
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
          {/* 경력 */}
          <section id="experience" className={styles.section}>
            <h2 className={styles.sectionTitle}>경력</h2>
            <div className={styles.experienceList}>
              {experience.map((exp, index) => (
                <div key={index} className={styles.experienceItem}>
                  <div className={styles.experienceHeader}>
                    <div className={styles.left}>
                      <h3 className={styles.company}>{exp.company}</h3>
                      <span className={styles.position}>{exp.position}</span>
                    </div>
                    <div className={styles.right}>
                      <span className={styles.period}>{exp.period}</span>
                      {exp.totalYears && <span className={styles.years}>{exp.totalYears}</span>}
                    </div>
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                  {exp.details && exp.details.length > 0 && (
                    <ul className={styles.details}>
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className={styles.detailItem}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 학력 */}
          <section id="education" className={styles.section}>
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
                  {edu.projects && edu.projects.length > 0 && (
                    <div className={styles.projects}>
                      {edu.projects.map((project, pIndex) => (
                        <div key={pIndex} className={styles.project}>
                          <div className={styles.projectHeader}>
                            <h4 className={styles.projectTitle}>[프로젝트] {project.title}</h4>
                            {project.role && <span className={styles.projectRole}>{project.role}</span>}
                          </div>
                          {project.details && project.details.length > 0 ? (
                            <div className={styles.projectDetails}>
                              {project.details.map((detail, dIndex) => (
                                <div key={dIndex} className={styles.detail}>
                                  <span className={styles.detailCategory}>{detail.category}:</span>
                                  <span className={styles.detailContent}>{detail.content}</span>
                                </div>
                              ))}
                            </div>
                          ) : project.description && (
                            <p className={styles.projectDescription}>{project.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 기술 스택 */}
          <section id="skills" className={styles.section}>
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
          <section id="certifications" className={styles.section}>
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

          {/* 교육/활동 */}
          <section id="activities" className={styles.section}>
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
        </div>
      </div>
    </main>
  );
}

export default Portfolio;

