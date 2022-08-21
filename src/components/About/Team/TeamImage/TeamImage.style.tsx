import styled from '@emotion/styled';

export const Root = styled.section`
  display: flex;
  column-gap: 15px;
  width: 515px;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    justify-content: flex-start;
    width: 340px;

    & div:first-child {
      width: 147px;
    }

    & div:nth-child(2) {
      width: 165px;
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & img:nth-child(odd) {
    object-fit: cover;
    border-radius: 12px;
  }

  .timi__button {
    width: 185px;

    span {
      &:first-child {
        margin-right: 8px !important;

        /* 모바일 뷰 */
        @media (max-width: 1279px) {
          margin-right: 5px !important;
        }
      }
    }

    /* 모바일 뷰 */
    @media (max-width: 1279px) {
      width: 132px;
    }
  }

  .media__button {
    width: 152px;

    span {
      &:first-child {
        margin-right: 8px !important;

        /* 모바일 뷰 */
        @media (max-width: 1279px) {
          margin-right: 5px !important;
        }
      }
    }
  }
`;

export const Tag = styled.p`

  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 15px;
  letter-spacing: -0.03em;
  font-family: 'SUIT';
  font-size: 18px;
  font-weight: 700;
  font-style: normal;

  /* 모바일 뷰 */
  @media (max-width: 1279px) {
    font-size: 12px;
  }
`;
