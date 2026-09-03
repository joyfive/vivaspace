import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "이용약관",
  description: `${company.nameKo}가 운영하는 웹사이트의 이용약관입니다.`,
  alternates: { canonical: "/terms" },
};

const EFFECTIVE_DATE = "2026년 9월 3일";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terms of Service"
        title="이용약관"
        description={`시행일 ${EFFECTIVE_DATE}`}
      />

      <Container>
        <div className="pb-24 sm:pb-32">
          <div className="legal-prose">
            <h2>제1조 (목적)</h2>
            <p>
              본 약관은 {company.nameKo}(이하 &lsquo;회사&rsquo;)가 운영하는
              웹사이트({company.siteUrl}, 이하 &lsquo;사이트&rsquo;)의 이용과
              관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로
              합니다.
            </p>

            <h2>제2조 (정의)</h2>
            <ol>
              <li>
                &lsquo;사이트&rsquo;란 회사가 회사 및 회사가 제공하는 서비스를
                소개하기 위해 운영하는 웹사이트를 말합니다.
              </li>
              <li>
                &lsquo;서비스&rsquo;란 회사가 개발·운영하는 모바일 애플리케이션 및
                웹 서비스를 말합니다.
              </li>
              <li>
                &lsquo;이용자&rsquo;란 사이트에 접속하여 본 약관에 따라 사이트가
                제공하는 정보를 이용하는 자를 말합니다.
              </li>
            </ol>

            <h2>제3조 (약관의 게시와 개정)</h2>
            <ol>
              <li>
                회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 사이트 내에
                게시합니다.
              </li>
              <li>
                회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수
                있으며, 개정 시 적용일자와 개정 사유를 명시하여 적용일자 7일 전부터
                사이트에 공지합니다.
              </li>
            </ol>

            <h2>제4조 (약관의 적용 범위)</h2>
            <p>
              본 약관은 사이트의 이용에 한하여 적용됩니다. 회사가 제공하는 개별
              서비스의 이용에 관하여는 각 서비스가 정한 별도의 이용약관 및
              개인정보처리방침이 우선하여 적용되며, 해당 약관에 정하지 않은 사항은
              본 약관을 준용합니다.
            </p>

            <h2>제5조 (서비스의 제공 및 변경)</h2>
            <ol>
              <li>
                회사는 사이트를 통해 회사 및 서비스에 대한 정보, 문의 창구, 정책
                문서를 제공합니다.
              </li>
              <li>
                회사는 운영상·기술상의 필요에 따라 제공하는 정보의 내용을 변경할 수
                있으며, 이 경우 변경된 내용을 사이트에 게시합니다.
              </li>
              <li>
                회사는 시스템 점검, 설비의 보수, 통신 두절 등 불가피한 사유가 있는
                경우 사이트 제공을 일시적으로 중단할 수 있습니다.
              </li>
            </ol>

            <h2>제6조 (지식재산권)</h2>
            <ol>
              <li>
                사이트에 게시된 저작물(텍스트, 이미지, 로고, 디자인, 소프트웨어
                등)에 대한 저작권 및 기타 지식재산권은 회사에 귀속됩니다.
              </li>
              <li>
                이용자는 회사의 사전 서면 동의 없이 사이트의 정보를 복제, 배포,
                전송, 출판, 2차적 저작물 작성 등의 방법으로 영리 목적에 이용하거나
                제3자에게 이용하게 할 수 없습니다.
              </li>
            </ol>

            <h2>제7조 (이용자의 의무)</h2>
            <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
            <ul>
              <li>사이트의 정상적인 운영을 방해하는 행위</li>
              <li>
                자동화된 수단을 이용하여 과도한 트래픽을 유발하거나 정보를 무단으로
                수집하는 행위
              </li>
              <li>
                회사 또는 제3자의 지식재산권, 명예, 그 밖의 권리를 침해하는 행위
              </li>
              <li>관련 법령에 위반되는 행위</li>
            </ul>

            <h2>제8조 (링크된 사이트에 대한 책임)</h2>
            <p>
              사이트는 제3자가 운영하는 외부 사이트(앱 마켓, 개별 서비스 사이트
              등)로 연결되는 링크를 제공할 수 있습니다. 회사는 해당 사이트가 제공하는
              정보나 서비스에 대하여 통제권이 없으며, 이로 인해 발생한 손해에 대하여
              책임을 지지 않습니다.
            </p>

            <h2>제9조 (면책조항)</h2>
            <ol>
              <li>
                회사는 천재지변, 불가항력, 이용자의 귀책사유로 인한 사이트 이용
                장애에 대하여 책임을 지지 않습니다.
              </li>
              <li>
                회사는 사이트에 게시된 정보의 정확성과 최신성을 유지하기 위해 노력하나,
                정보의 이용으로 인해 발생한 결과에 대하여 법령이 정한 범위를 넘어서는
                책임을 지지 않습니다.
              </li>
            </ol>

            <h2>제10조 (준거법 및 관할)</h2>
            <p>
              본 약관은 대한민국 법령에 따라 규율되고 해석되며, 회사와 이용자 간에
              발생한 분쟁에 관한 소송은 「민사소송법」에 따른 관할 법원에 제기합니다.
            </p>

            <h2>부칙</h2>
            <p>
              <strong>본 약관은 {EFFECTIVE_DATE}부터 시행합니다.</strong>
            </p>
          </div>

          <p className="mt-14 border-t border-line pt-8 text-sm text-faint">
            개인정보처리방침은{" "}
            <Link
              href="/privacy"
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
