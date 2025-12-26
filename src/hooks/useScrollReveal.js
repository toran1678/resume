import { useEffect, useRef, useState } from 'react';

/**
 * 스크롤 시 요소가 화면에 나타날 때 애니메이션을 트리거하는 커스텀 Hook
 * @param {Object} options - Intersection Observer 옵션
 * @param {number} options.threshold - 요소가 얼마나 보여야 트리거할지 (0~1)
 * @param {string} options.rootMargin - 뷰포트 마진
 * @param {boolean} options.triggerOnce - 한 번만 트리거할지 여부
 * @returns {Array} [ref, isVisible] - 요소에 연결할 ref와 표시 여부
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const previousY = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.y;
        const isScrollingDown = currentY < previousY.current;
        
        // 요소가 임계값을 넘어 화면에 들어오면 나타남
        if (entry.isIntersecting) {
          setIsVisible(true);
          // triggerOnce가 true면 관찰 중지
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          // triggerOnce가 false일 때, 위로 스크롤할 때만 숨김
          // 스크롤이 위로 올라가는 경우에만 (isScrollingDown이 false) 사라지게 함
          if (!isScrollingDown) {
            setIsVisible(false);
          }
        }
        
        // 현재 위치 저장
        previousY.current = currentY;
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

