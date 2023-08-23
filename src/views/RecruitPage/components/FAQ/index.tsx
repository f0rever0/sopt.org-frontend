import styled from '@emotion/styled';
import { useState } from 'react';
import { ExtraPart, Part, PartExtraType } from '@src/lib/types/universal';
import QuestionBox from '@src/views/FAQPage/components/faq/QuestionBox';
import { questionList } from '@src/views/FAQPage/lib/constants';
import TabBar from '../common/Tabs';
import { SectionSubTitle, SectionTitle } from '../common/styles';

const faqMap: Record<ExtraPart, { question: string; answer: string }[]> = {
  [PartExtraType.ALL]: questionList,
  [Part.PLAN]: [
    {
      question: 'Q. 개발지식이 필요한가요?',
      answer:
        '아니요 무관합니다!\n협업에 있어 기초적인 개발지식은 알면 좋지만, 이는 세미나를 통해 충분히 다뤄질 것이므로 걱정하지 않으셔도 됩니다.',
    },
    {
      question: 'Q. 포트폴리오는 필수인가요?',
      answer: '포트폴리오는 필수가 아닌 선택입니다.\n제출하지 않으셔도 불이익은 없습니다.',
    },
    {
      question: 'Q. 서비스 기획에 대한 경험과 경력이 없어도 괜찮을까요?',
      answer:
        '경험과 실력보다는 기획에 대한 열정과 기획파트를 통해 이루고자 하는 명확한 목표를 더 중요시합니다.\n시장에 대한 관심, 열정, 그리고 실행력 이 세가지만 있다면 기획파트 지원에 전혀 무리가 없습니다.',
    },
  ],
  [Part.DESIGN]: [
    {
      question: 'Q. 디자인 경험이 없는데 지원해도 되나요?',
      answer:
        '네! 경험이 없어도 세미나와 파트 내 스터디를 통해 충분히 배워나갈 수 있습니다. 디자인을 배우고자 하는 의지와 솝트 활동에 참여하겠다는 열정만 있으면 누구든지 지원해도 좋습니다.',
    },
    {
      question: 'Q. 디자인 파트에서 어떤 툴을 주로 사용하나요?',
      answer:
        '정규 세미나에서는 협업툴 Figma를 주로 사용하며, 협업 시 필요한 경우 Zeplin을 사용하기도 합니다.',
    },
    {
      question: 'Q. 세미나는 어떻게 진행되나요?',
      answer:
        '세미나에서는 UXUI 디자인과 관련된 이론을 배우고, 팀원들과 함께 배운 것을 적용해 보는 실습 시간을 가지게 됩니다. 자세한 내용은 33기 커리큘럼을 참고해 주세요!',
    },
  ],
  [Part.ANDROID]: [
    {
      question: 'Q. 아이폰, 맥북을 사용하고 있는데 지원이 가능한가요?',
      answer:
        '당연히 가능합니다! 갤럭시 핸드폰 또는 공기계가 없어도 본인이 개발한 앱을 확인해 볼 수 있습니다. MacOS 환경에서도 충분히 개발이 가능합니다.',
    },
    {
      question: 'Q. 개발 경험이 거의 없는데 지원이 가능한가요?',
      answer:
        '저 역시 SOPT에서 처음으로 개발 커리어를 시작했습니다! 몰입과 실천의 마음가짐을 겸비하고, 안드로이드에 대한 흥미가 생길 준비가 되신 모든 분들을 환영합니다. 왕초보 스터디를 통해 빠른 성장을 이룰 수 있습니다!',
    },
    {
      question: 'Q. 안드로이드 파트는 어떤 활동을 진행하나요?',
      answer:
        '먼저, 세미나에서는 안드로이드 앱 제작에 필요한 전반적인 이론에 대해 배우고, 파트원들과의 페어 프로그래밍 실습 시간을 가집니다. 이후, 다양한 난이도의 과제와 코드리뷰 환경을 통해 성장하실 수 있는 환경을 제공합니다. 합동 세미나와 솝커톤, SOPT의 꽃인 5주동안의 해커톤 앱잼을 통해 협엄 경험을 하실 수 있습니다. 다양한 취미 또는 학술 스터디를 통해 자유로운 네트워킹을 하실 수 있습니다.',
    },
  ],
  [Part.IOS]: [
    {
      question: 'Q. MacOS를 가진 장비가 필수인가요? 맥북이 필수인가요?',
      answer:
        'iOS 파트는 매주 정해진 공간에 모여 세미나및 실습을 진행하기 때문에, ‘맥북’이 필수입니다.',
    },
    {
      question: 'Q. 개발 경험이 아예 없는데 지원해도 되나요?',
      answer:
        '매주 세미나를 통해 iOS의 기본부터 함께 배워가기 때문에, 개발경험은 상관이 없습니다. 하고자 하는 열정이 가장 중요한 요소라고 생각합니다.',
    },
    {
      question: 'Q. UIKit을 이용해서 개발하나요?',
      answer:
        '33기 iOS파트의 정규 세미나는 UIKit으로 진행됩니다. 하지만, 스터디를 통해 SwiftUI와 같은 선언형 UI도 파트원들과 함께 공부해볼 수 있습니다!',
    },
  ],
  [Part.WEB]: [
    {
      question: 'Q. 개발 경험이 거의 없는데 지원이 가능한가요?',
      answer:
        '물론입니다. 모든 파트원분들이 33기 웹파트에서 큰 성장을 얻어 가실 수 있도록 최선을 다해 준비하고 있는 만큼, 그에 걸맞은 웹에 대한 진심과 열정을 가장 중요한 요소로 평가할 예정입니다.',
    },
    {
      question: 'Q. 세미나 진행은 어떻게 되나요?',
      answer:
        '매주 커리큘럼에 따라 웹 개발에 필요한 이론들을 배우게 됩니다. 이후 배운 내용을 적용할 수 있는 재미있는 과제와 파트원 간 코드 리뷰를 통해 실력을 더 탄탄하게 쌓아 나가실 수 있습니다. 자세한 내용은 33기 커리큘럼을 참고해 주세요!',
    },
    {
      question: 'Q. 스터디에는 어떤 것들이 있나요?',
      answer:
        '파트 내 스터디 경우에는 대표적으로 왕초보 스터디, 웹 심화 스터디 그리고 React, JavaScript, TypeScript 등 다양한 스터디가 있습니다. 또 수요에 따라 원하는 스터디를 개설하실 수도 있습니다! :)',
    },
  ],
  [Part.SERVER]: [
    {
      question: 'Q. 개발 경험이 없거나 얼마 안되는데 지원 가능한가요?',
      answer:
        '가능합니다! 성장에 대한 뜨거운 열정이 있으신 분들은 모두 환영합니다. 정규 세미나와 스터디, 코드리뷰 등 열정을 다해',
    },
    {
      question: 'Q. 정규 세미나외에 진행하는 미니세미나는 무엇인가요?',
      answer:
        '정규 세미나는 최대한 기초적인 내용들을 토대로 모든 파트원들이 서버 애플리케이션을 구축할 수 있는 경험을 제공할 것입니다. 미니 세미나는 그 외에 프로젝트에 필요한 기술, 챌린지 요소가 있는 기술들을 구성하여, 추가로 공부할 수 있는 내용으로 구성할 예정입니다. 진행은 평일 밤에 진행될 것 같습니다.',
    },
  ],
};

const FaqInfo = () => {
  const [selectedTab, setSelectedTab] = useState<ExtraPart>(PartExtraType.ALL);
  const [status, setStatus] = useState(new Set());

  const toggleBox = (index: number) => {
    const updatedStatus = new Set(status);
    status.has(index) ? updatedStatus.delete(index) : updatedStatus.add(index);
    setStatus(updatedStatus);
  };

  return (
    <W>
      <Wrapper>
        <SectionTitle>FAQ</SectionTitle>
        <SectionSubTitle>자주 묻는 질문</SectionSubTitle>
      </Wrapper>
      <TabBar type="with-all" onTabClick={setSelectedTab} selectedTab={selectedTab} />
      {faqMap[selectedTab].map((info, index) => (
        <div key={index} onClick={() => toggleBox(index)}>
          <QuestionBox info={info} status={status.has(index)} />
        </div>
      ))}
    </W>
  );
};

const W = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 40px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 24px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* 태블릿 뷰 */
  @media (max-width: 1299px) and (min-width: 766px) {
    gap: 20px;
  }
  /* 모바일 뷰 */
  @media (max-width: 765.9px) {
    gap: 2px;
  }
`;

export default FaqInfo;
