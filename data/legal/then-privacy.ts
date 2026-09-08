/**
 * Then 개인정보처리방침 (국문 · 영문).
 *
 * 백틱으로 감싼 부분은 앱 안의 UI 값으로 렌더됩니다. 예: `없음`
 */

export type Locale = "ko" | "en";

export const locales = ["ko", "en"] as const;

export function resolveLocale(value: string | string[] | undefined): Locale {
  const raw = Array.isArray(value) ? value[0] : value;
  return raw === "en" ? "en" : "ko";
}

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Section = { heading: string; blocks: Block[] };

export type PolicyDocument = {
  title: string;
  effectiveLabel: string;
  effectiveDate: string;
  intro: string;
  sections: Section[];
  /** 언어 전환 탭에 쓰는 이름 */
  tabLabel: string;
};

export const thenPrivacy: Record<Locale, PolicyDocument> = {
  ko: {
    title: "Then 개인정보처리방침",
    tabLabel: "국문",
    effectiveLabel: "시행일",
    effectiveDate: "2026년 9월 8일",
    intro:
      "비바스페이스(이하 “운영자”)는 Then(이하 “앱”) 사용자의 개인정보를 중요하게 생각합니다. 앱은 사용자가 어떤 일을 마지막으로 했던 날짜를 기기에 기록하는 로컬 전용 앱입니다.",
    sections: [
      {
        heading: "1. 수집하거나 전송하는 정보",
        blocks: [
          {
            type: "p",
            text: "운영자는 앱을 통해 개인정보, 사용 기록, 기기 식별자, 위치 정보 또는 진단 정보를 수집하거나 운영자 서버로 전송하지 않습니다. 앱에는 회원가입, 로그인, 광고 SDK, 사용자 분석 SDK 및 원격 데이터 서버가 없습니다.",
          },
        ],
      },
      {
        heading: "2. 기기에 저장되는 정보",
        blocks: [
          {
            type: "p",
            text: "사용자가 입력한 항목 이름과 날짜는 앱 운영자 서버가 아닌 로컬 SQLite 데이터베이스에 저장됩니다. 반복주기와 로컬 알림 예약 정보도 기기 안에서만 처리되며 운영자는 이 정보에 접근할 수 없습니다.",
          },
        ],
      },
      {
        heading: "3. 로컬 알림",
        blocks: [
          {
            type: "p",
            text: "사용자가 반복주기를 켜고 알림 권한을 허용하면 앱은 최신 기록일을 기준으로 기기 운영체제에 로컬 알림을 예약합니다. 알림은 서버에서 전송되는 원격 푸시가 아닙니다. 알림 문구에는 사용자가 입력한 항목 이름이 포함될 수 있으며, 잠금 화면 표시 여부와 표시 범위는 사용자의 운영체제 알림 설정을 따릅니다.",
          },
          {
            type: "p",
            text: "사용자는 앱에서 반복주기를 `없음`으로 바꾸거나 운영체제 설정에서 알림 권한을 끌 수 있습니다.",
          },
        ],
      },
      {
        heading: "4. 공유",
        blocks: [
          {
            type: "p",
            text: "공유 카드는 사용자가 직접 항목을 선택하고 공유 버튼을 눌렀을 때만 기기에서 이미지로 생성됩니다. 사용자가 운영체제 공유창에서 외부 앱을 선택하면 해당 이미지가 그 앱에 전달되며, 전달 이후에는 선택한 외부 앱의 개인정보처리방침과 보관 정책이 적용됩니다.",
          },
        ],
      },
      {
        heading: "5. 운영체제 백업과 기기 이전",
        blocks: [
          {
            type: "p",
            text: "앱은 Android 클라우드 자동 백업을 비활성화합니다. 다만 운영체제 또는 기기 제조사의 백업·기기 이전 설정에 따라 로컬 앱 데이터가 보존되거나 새 기기로 전송될 수 있습니다. 이 처리는 해당 플랫폼과 사용자의 설정에 따르며 앱 운영자는 그 사본에 접근할 수 없습니다.",
          },
        ],
      },
      {
        heading: "6. 보관과 삭제",
        blocks: [
          {
            type: "p",
            text: "기록은 사용자가 앱 안에서 개별 기록 또는 모든 기록을 삭제하거나 앱을 제거할 때까지 로컬 데이터베이스에 보관됩니다. 운영체제 백업이나 기기 이전으로 생긴 사본의 보관은 해당 플랫폼 설정을 따르며, 앱 운영자는 서버 사본을 보관하지 않습니다.",
          },
        ],
      },
      {
        heading: "7. 아동의 개인정보",
        blocks: [
          {
            type: "p",
            text: "앱은 아동을 대상으로 하지 않으며 아동의 개인정보를 고의로 수집하지 않습니다.",
          },
        ],
      },
      {
        heading: "8. 방침의 변경",
        blocks: [
          {
            type: "p",
            text: "앱의 기능이나 데이터 처리 방식이 변경되면 이 방침을 수정하고 시행일을 갱신합니다. 중요한 변경사항이 있는 경우 앱 또는 공식 홈페이지를 통해 알립니다.",
          },
        ],
      },
      {
        heading: "9. 문의",
        blocks: [
          {
            type: "ul",
            items: ["운영자: 비바스페이스", "이메일: then@vivaspace.co.kr"],
          },
        ],
      },
    ],
  },

  en: {
    title: "Then Privacy Policy",
    tabLabel: "English",
    effectiveLabel: "Effective date",
    effectiveDate: "September 8, 2026",
    intro:
      "Then (the “App”) is a local-only app for recording the last date on which a user did something. The App is operated by VIVASPACE (the “Operator”).",
    sections: [
      {
        heading: "1. Information collected or transmitted",
        blocks: [
          {
            type: "p",
            text: "The Operator does not collect or transmit personal information, usage history, device identifiers, location, or diagnostics through the App. The App has no account system, advertising SDK, user analytics SDK, or remote data server.",
          },
        ],
      },
      {
        heading: "2. Information stored on the device",
        blocks: [
          {
            type: "p",
            text: "Item names and dates entered by the user are stored in a local SQLite database, not on a server operated by the Operator. Repeat intervals and local notification schedule information are also processed only on the device. The Operator cannot access this information.",
          },
        ],
      },
      {
        heading: "3. Local notifications",
        blocks: [
          {
            type: "p",
            text: "When the user enables a repeat interval and grants notification permission, the App schedules a local notification with the device operating system based on the latest recorded date. This is not a remote push notification sent by a server. The notification may contain an item name entered by the user. Its visibility on the lock screen is controlled by the user's operating-system notification settings.",
          },
          {
            type: "p",
            text: "The user can select `None` for the repeat interval or disable notification permission in the operating-system settings.",
          },
        ],
      },
      {
        heading: "4. Sharing",
        blocks: [
          {
            type: "p",
            text: "A share card is generated on the device only after the user selects items and taps the share button. If the user sends the image to an external app through the operating-system share sheet, that external app's privacy and retention policies apply after transfer.",
          },
        ],
      },
      {
        heading: "5. Operating-system backup and device transfer",
        blocks: [
          {
            type: "p",
            text: "The App disables Android cloud Auto Backup. However, local app data may still be preserved or moved according to operating-system or device-manufacturer backup and device-transfer settings. Those processes are controlled by the platform and the user, and the Operator cannot access their copies.",
          },
        ],
      },
      {
        heading: "6. Retention and deletion",
        blocks: [
          {
            type: "p",
            text: "Records remain in the local database until the user deletes individual records, uses the in-app delete-all control, or uninstalls the App. Copies created by operating-system backup or device transfer follow the platform's settings. The Operator retains no server copy.",
          },
        ],
      },
      {
        heading: "7. Children's privacy",
        blocks: [
          {
            type: "p",
            text: "The App is not directed to children and does not knowingly collect children's personal information.",
          },
        ],
      },
      {
        heading: "8. Changes to this policy",
        blocks: [
          {
            type: "p",
            text: "If the App's features or data-handling practices change, this policy and its effective date will be updated. Material changes will be announced in the App or on the official website.",
          },
        ],
      },
      {
        heading: "9. Contact",
        blocks: [
          {
            type: "ul",
            items: ["Operator: VIVASPACE", "Email: then@vivaspace.co.kr"],
          },
        ],
      },
    ],
  },
};

/** 문의 이메일 — 본문에서 자동으로 mailto 링크가 됩니다. */
export const THEN_CONTACT_EMAIL = "then@vivaspace.co.kr";
