import { Part } from '@src/lib/types/universal';

export const infoMap: Record<Part, { info: string; fit: string[] }> = {
  [Part.PLAN]: {
    info: '린스타트업에 기초하여 고객 시장 분석 - 문제정의 - 가설 검증 - 솔루션/BM 도출- 전략 수립까지 IT 프로덕트를 기획하고 매니징하는 전과정을 경험합니다.',
    fit: [
      '문제를 세밀하게 뜯어보는 집요함과 꼼꼼함을 갖춘 분',
      '원활한 커뮤니케이션을 위한 열린 마음을 가진 분',
      '자신의 목표를 이루기 위해 계획을 세우고, 이를 실행에 옮길 줄 아는 분',
      '열정을 가지고 기획에 진심으로 임할 분',
    ],
  },
  [Part.DESIGN]: {
    info: '피그마와 같은 협업툴을 통해 UXUI 디자인의 전반적인 과정을 배우고 기획자, 개발자와 함께 새로운 프로덕트를 만들어 내는 과정에 참여합니다.',
    fit: [
      '사용자를 위한 디자인에 대해 끊임없이 고민해 보신 분',
      '자신의 디자인을 논리적으로 설명할 수 있으신 분',
      '사람들과 협업하는 것을 즐길 줄 아시는 분',
      '솝트를 끝까지 완주해 내겠다는 열정을 가지신 분',
    ],
  },
  [Part.ANDROID]: {
    info: 'Kotlin 언어를 활용해 안드로이드 UI 구현 기초/심화부터 서버통신 등 앱 제작에 필요한 내용들을 배웁니다. 안드로이드에 몰입할 수 있는 세미나, 페어 프로그래밍을 통한 실습, 스터디, 합동세미나 등 여러 활동에 참여합니다.',
    fit: [
      '안드로이드에 흥미가 있으신 분',
      '코틀린 언어에 관심이 있으신 분',
      '스터디, 세미나, 코드리뷰 등 SOPT 활동에 적극적으로 참여할 수 있으신 분',
      '다양한 취미를 안드로이드 팀원과 함께 공유하고 즐기고 싶으신 분',
    ],
  },
  [Part.IOS]: {
    info: 'Swift와 UIKit를 이용해서 iOS 앱 서비스를 만들 수 있는 능력을 기를 수 있습니다. iOS가 처음인 분들을 위한 왕초보 스터디와 보충 세미나, 그리고 실력적 도약을 위한 심화 세미나까지. 자신의 성장을 위해 열정적으로 도전하는 사람들과 함께 활동에 필요한 부분들을 학습할 수 있습니다.',
    fit: [
      '개발에 대하나 열정이 넘치고, 애플 장비를 3개 이상 보유하신 분',
      '할 땐 하고, 놀 땐 그 누구보다 신나게 놀 수 있으신 분',
      '우리의 서비스를 만드는데 그 누구보다 진심이신 분',
      '문제를 직시하고 원인을 파악해 해결할 줄 아시는 분',
    ],
  },
  [Part.WEB]: {
    info: 'UI 구현, 서버 통신 등 웹 서비스 개발에 필요한 역량들을 기초부터 심화까지 학습합니다. 또한 기획자, 디자이너, 서버 개발자와의 협업 경험을 통해 개발 협업 방식을 익힐 수 있습니다.',
    fit: [
      '웹 프론트엔드 개발에 흥미를 느껴 푹 빠져본 경험이 있으신 분',
      '기획자, 디자이너, 개발자와의 협업을 경험하고 싶으신 분',
      '본인의 생각과 능력을 마음껏 공유하고, 공유 받고 싶으신 분',
      '개발도 취미도 웹파트원과 함께하며 단단한 소속감을 얻고 싶으신 분',
    ],
  },
  [Part.SERVER]: {
    info: 'Spring 프레임 워크, 관계형 데이터베이스와 AWS를 기반으로 서버 애플리케이션을 구축하고 운영하는 과정을 학습합니다. 또한 세미나, 코드리뷰, 스터디를 통해 개발 실력을 증진시키고, 기획자, 디자이너, 클라이언트 개발자와의 협업을 통해 협업 방식을 익힐 수 있습니다.',
    fit: [
      '뜨거운 열정을 불태워 성장할 준비가 되어있으신 분',
      '공부한 지식을 아낌없이 상호 공유하고, 이를 통해 함게 성장하는 파트를 만들어가실 분',
      '개발부터 네트워킹, 추억 쌓기 등을 통해 SOPT 최고의 서버파트를 만들고 싶으신 분',
      '프로젝트에 열정적으로 참여하여, 협업 경험과 함께 자신만의 프로덕트를 개발하고 싶으신 분',
    ],
  },
};
