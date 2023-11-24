import * as S from './style';

interface MotionTitleProps {
  style: { opacity?: number; clipPath?: string } | undefined;
  content: string;
}

export default function MotionTitle({ style, content }: MotionTitleProps) {
  return <S.MotionTitle style={style} data-text={content} />;
}
