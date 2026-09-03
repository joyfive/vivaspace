import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `${company.nameKo}의 서비스 및 비즈니스 문의 안내입니다.`,
  alternates: { canonical: "/contact" },
};

const topics = [
  { label: "서비스 문의", detail: "이용 중 발생한 문제, 기능 제안, 계정 관련 문의" },
  { label: "비즈니스 문의", detail: "제휴, 협업, 그 밖의 사업 관련 제안" },
  { label: "미디어 문의", detail: "취재 및 자료 요청" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="문의하기"
        description="서비스 및 비즈니스 관련 문의는 아래 이메일로 연락해 주세요. 영업일 기준 2~3일 이내에 답변드립니다."
      />

      <Container>
        <div className="pb-24 sm:pb-32">
          <a
            href={`mailto:${company.email}`}
            className="group inline-flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
          >
            <span className="border-b-2 border-line-strong pb-1 transition-colors duration-200 group-hover:border-accent">
              {company.email}
            </span>
            <span
              aria-hidden
              className="text-lg text-accent transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>

          <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {topics.map((topic) => (
              <li key={topic.label} className="bg-bg p-7">
                <h2 className="text-[0.9375rem] font-semibold text-ink">
                  {topic.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {topic.detail}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm leading-relaxed text-faint">
            개인정보 보호책임자에게 직접 연락하실 때에도 같은 주소를 이용하실 수
            있습니다.
          </p>
        </div>
      </Container>
    </>
  );
}
