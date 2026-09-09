/**
 * Then 고객지원 페이지 본문.
 *
 * App Store 의 필수 Support URL, Google Play 의 권장 지원 웹사이트로
 * 제출하는 주소입니다. 앱 안의 화면이 아니라 공개 웹페이지입니다.
 *
 * 본문 블록의 표기 규칙(백틱 · 이메일)은 data/prose.ts 에 있습니다.
 */

import type { Block } from "@/data/prose";

export type Faq = { question: string; blocks: Block[] };

export type SupportDocument = {
  title: string;
  intro: string;
  /** 스토어 심사자가 한눈에 확인하는 값이라 페이지 상단에 그대로 둡니다. */
  identity: { label: string; value: string }[];
  faqs: Faq[];
  /** 문의 메일에 함께 담아주면 확인이 빨라지는 정보. */
  checklist: { intro: string; items: string[] };
};

/** 문의 이메일 — 본문에서 자동으로 mailto 링크가 됩니다. */
export const THEN_SUPPORT_EMAIL = "then@vivaspace.co.kr";

export const thenSupport: SupportDocument = {
  title: "Then 고객지원",
  intro:
    "Then을 사용하면서 도움이 필요하거나 의견을 보내고 싶다면 아래 이메일로 문의해 주세요. 앱에서 생긴 문제, 일반적인 의견, 기능 제안 모두 같은 주소로 받습니다.",

  identity: [
    { label: "운영자", value: "비바스페이스" },
    { label: "앱 이름", value: "Then : 언제 했더라?" },
  ],

  faqs: [
    {
      question: "기록은 어디에 저장되나요?",
      blocks: [
        {
          type: "p",
          text: "항목 이름, 날짜, 반복주기는 운영자 서버로 전송되지 않고 사용자의 기기에만 저장됩니다. 로그인과 클라우드 동기화는 제공하지 않습니다.",
        },
      ],
    },
    {
      question: "앱을 삭제하거나 휴대폰을 바꾸면 기록을 복구할 수 있나요?",
      blocks: [
        {
          type: "p",
          text: "Then은 기록의 서버 사본을 보관하지 않으므로 운영자가 복구해 드릴 수 없습니다. 운영체제 또는 기기 제조사의 백업·기기 이전 기능에 따라 일부 데이터가 보존될 수 있지만, 그 과정과 결과는 해당 플랫폼의 설정을 따릅니다.",
        },
      ],
    },
    {
      question: "알림이 오지 않아요.",
      blocks: [
        {
          type: "ol",
          items: [
            "항목의 반복주기가 `없음`이 아닌지 확인해 주세요.",
            "휴대폰 설정에서 Then의 알림 권한이 켜져 있는지 확인해 주세요.",
            "최신 기록일을 기준으로 다음 알림 시간이 아직 지나지 않았는지 확인해 주세요.",
          ],
        },
        {
          type: "p",
          text: "Then의 알림은 서버에서 보내는 푸시가 아니라 휴대폰 안에 예약되는 로컬 알림입니다.",
        },
      ],
    },
    {
      question: "기록을 삭제하려면 어떻게 하나요?",
      blocks: [
        {
          type: "ul",
          items: [
            "개별 날짜: 항목 상세 화면의 `기록한 날`에서 삭제할 수 있습니다.",
            "항목 전체: 항목 상세 화면의 `이 항목 모두 삭제`를 사용할 수 있습니다.",
            "모든 기록: `설정 → 모든 기록 삭제`를 사용할 수 있습니다.",
          ],
        },
        {
          type: "p",
          text: "삭제한 기록은 운영자 서버에 사본이 없으므로 복구할 수 없습니다.",
        },
      ],
    },
    {
      question: "공유 이미지는 어디로 전송되나요?",
      blocks: [
        {
          type: "p",
          text: "사용자가 `이미지로 공유하기`를 눌렀을 때만 기기에서 이미지가 만들어지고, 운영체제 공유창에서 직접 선택한 앱으로 전달됩니다. Then 운영자 서버에는 전송되지 않습니다.",
        },
      ],
    },
  ],

  checklist: {
    intro:
      "문제를 빠르게 확인할 수 있도록 가능한 범위에서 아래 내용을 함께 보내 주세요. 개인적인 기록 내용은 보내지 않아도 됩니다.",
    items: [
      "사용 중인 휴대폰 모델과 운영체제 버전",
      "Then 앱 버전",
      "문제가 발생한 화면과 순서",
      "개인정보가 보이지 않도록 정리한 화면 캡처",
    ],
  },
};
