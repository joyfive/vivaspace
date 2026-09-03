import { Container } from "@/components/Container";
import { ArrowLink } from "@/components/ArrowLink";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col justify-center py-24">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          주소가 변경되었거나 삭제된 페이지입니다.
        </p>
        <div className="mt-8">
          <ArrowLink href="/">홈으로 돌아가기</ArrowLink>
        </div>
      </div>
    </Container>
  );
}
