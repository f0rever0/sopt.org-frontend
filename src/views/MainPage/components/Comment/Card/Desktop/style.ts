import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 712px;
  height: 324px;
  border-radius: 19px;
  padding: 32px 46px;

  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 35.5px; /* 177.5% */
  letter-spacing: -0.8px;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font-weight: 600;
`;