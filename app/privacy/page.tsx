import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: `${company.nameKo}가 운영하는 웹사이트의 개인정보처리방침입니다.`,
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE_DATE = "2026년 9월 3일";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="개인정보처리방침"
        description={`시행일 ${EFFECTIVE_DATE}`}
      />

      <Container>
        <div className="pb-24 sm:pb-32">
          <div className="legal-prose">
            <p>
              {company.nameKo}(이하 &lsquo;회사&rsquo;)는 「개인정보 보호법」 등
              관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 다음과 같은
              처리방침을 두고 있습니다.
            </p>

            <h2>1. 적용 범위</h2>
            <p>
              본 방침은 회사가 운영하는 웹사이트({company.siteUrl})에 적용됩니다.
              회사가 제공하는 개별 서비스(모바일 애플리케이션 및 웹 서비스)는 각
              서비스의 성격에 따라 별도의 개인정보처리방침을 두고 있으며, 해당
              서비스 이용 시에는 각 서비스의 방침이 우선합니다.
            </p>

            <h2>2. 수집하는 개인정보 항목 및 수집 방법</h2>
            <p>
              회사는 본 웹사이트에서 회원가입 절차를 두고 있지 않으며, 이용자가
              별도로 입력하는 개인정보를 수집하지 않습니다. 다만 이용자가 자발적으로
              이메일 문의를 보내는 경우 다음 정보가 수집됩니다.
            </p>
            <ul>
              <li>필수 항목: 이메일 주소, 문의 내용에 포함된 정보</li>
              <li>수집 방법: 이용자의 이메일 발송</li>
            </ul>

            <h2>3. 개인정보의 이용 목적</h2>
            <ul>
              <li>문의 사항의 확인 및 회신</li>
              <li>서비스 이용 관련 기술 지원 및 불편 사항 처리</li>
              <li>비즈니스 제안 및 제휴 관련 연락</li>
            </ul>

            <h2>4. 개인정보의 보유 및 이용 기간</h2>
            <p>
              문의 처리를 위해 수집된 개인정보는 문의 처리 완료 후 3년간 보관 후
              지체 없이 파기합니다. 다만 관련 법령에 따라 보존할 필요가 있는 경우
              해당 법령이 정한 기간 동안 보관합니다.
            </p>

            <h2>5. 개인정보의 제3자 제공</h2>
            <p>
              회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 다음의
              경우는 예외로 합니다.
            </p>
            <ul>
              <li>이용자가 사전에 동의한 경우</li>
              <li>
                법령에 따라 요구되거나, 수사 목적으로 법령에 정해진 절차와 방법에
                따라 수사기관의 요구가 있는 경우
              </li>
            </ul>

            <h2>6. 개인정보 처리의 위탁</h2>
            <p>
              회사는 안정적인 서비스 제공을 위해 웹사이트 호스팅 및 이메일 수발신
              업무를 외부 사업자에게 위탁할 수 있습니다. 위탁 계약 시 개인정보의
              안전한 관리에 관한 사항을 명시하고 이를 관리·감독합니다.
            </p>

            <h2>7. 개인정보의 파기 절차 및 방법</h2>
            <p>
              보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 지체 없이
              파기합니다. 전자적 파일 형태의 정보는 복구할 수 없는 방법으로
              영구 삭제하며, 출력물은 분쇄하거나 소각합니다.
            </p>

            <h2>8. 이용자의 권리와 행사 방법</h2>
            <p>
              이용자는 언제든지 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지를
              요구할 수 있습니다. 요청은 아래 연락처를 통해 접수되며, 회사는 지체
              없이 필요한 조치를 취합니다.
            </p>

            <h2>9. 쿠키 등 자동 수집 장치의 운영</h2>
            <p>
              본 웹사이트는 이용자를 식별하거나 행태를 추적하기 위한 쿠키, 광고
              식별자, 제3자 분석 도구를 사용하지 않습니다.
            </p>

            <h2>10. 개인정보의 안전성 확보 조치</h2>
            <ul>
              <li>개인정보 취급자의 최소화 및 접근 권한 관리</li>
              <li>전송 구간 암호화(HTTPS) 적용</li>
              <li>개인정보가 포함된 문서 및 파일의 접근 통제</li>
            </ul>

            <h2>11. 개인정보 보호책임자</h2>
            <p>
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 관련 불만 처리
              및 피해 구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고
              있습니다.
            </p>
            <ul>
              <li>성명: {company.ceo}</li>
              <li>직책: 대표</li>
              <li>
                연락처: <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>

            <h2>12. 권익침해 구제 방법</h2>
            <p>
              개인정보 침해로 인한 신고나 상담이 필요한 경우 아래 기관에 문의하실
              수 있습니다.
            </p>
            <ul>
              <li>개인정보분쟁조정위원회 (국번없이 1833-6972)</li>
              <li>개인정보침해신고센터 (국번없이 118)</li>
              <li>대검찰청 사이버수사과 (국번없이 1301)</li>
              <li>경찰청 사이버수사국 (국번없이 182)</li>
            </ul>

            <h2>13. 개인정보처리방침의 변경</h2>
            <p>
              본 방침의 내용 추가, 삭제 및 수정이 있을 경우 시행 최소 7일 전부터 본
              페이지를 통해 공지합니다.
            </p>
            <p>
              <strong>시행일: {EFFECTIVE_DATE}</strong>
            </p>
          </div>

          <p className="mt-14 border-t border-line pt-8 text-sm text-faint">
            이용약관은{" "}
            <Link
              href="/terms"
              className="text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
            >
              이 페이지
            </Link>
            에서 확인하실 수 있습니다.
          </p>
        </div>
      </Container>
    </>
  );
}
