import { Container } from "@/components/Container";
import { ArrowLink } from "@/components/ArrowLink";

export default function NotFound() {
  return (
    <Container wide>
      <div className="flex min-h-[60vh] flex-col justify-center py-24">
        <p className="eyebrow">404</p>
        <h1 className="display mt-6 text-[clamp(2rem,5vw,3rem)] text-ink">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          주소가 변경되었거나 삭제된 페이지입니다.
        </p>
        <div className="mt-9">
          <ArrowLink href="/">홈으로 돌아가기</ArrowLink>
        </div>
      </div>
    </Container>
  );
}
