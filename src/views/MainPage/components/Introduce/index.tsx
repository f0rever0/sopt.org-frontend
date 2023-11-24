import { useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@src/hooks/useDevice';
import MotionTitle from './MotionTitle';
import * as S from './style';

export default function Introduce() {
  const isMobileSize = useIsMobile('768px');
  const contentRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ['end center', 'start'],
  });

  const scaleValue = useTransform(scrollYProgress, [1, 0.4], [0.9, 1]);
  const content = '전국 최대 규모의 대학생 IT 연합 동아리, SOPT를 소개합니다.';

  const [style, setStyle] = useState<{ opacity?: number; clipPath?: string }>();
  const scrollValue = useTransform(scrollYProgress, [1, 0.4], ['100%', '0%']);

  useEffect(() => {
    const unsubscribe = scrollValue.on('change', (value) => {
      const percentValue = Number(value.split('%')[0]);
      const newStyle = isMobileSize
        ? { opacity: (100 - percentValue) / 100 }
        : { clipPath: `inset(0% ${percentValue}% 0% 0%)`, opacity: 1 };
      setStyle(newStyle);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollValue, isMobileSize]);

  return (
    <S.Background ref={contentRef}>
      <S.Wrapper>
        <S.TextContainer style={{ scale: scaleValue }}>
          <MotionTitle style={style} content={content} />
          <S.BackgroundTitle>{content}</S.BackgroundTitle>
        </S.TextContainer>
      </S.Wrapper>
    </S.Background>
  );
}
