import type { ServiceStatus } from "@/data/services";
import { statusLabel } from "@/data/services";

const dot: Record<ServiceStatus, string> = {
  live: "bg-[var(--product-accent,var(--accent))]",
  beta: "bg-line-strong",
  preparing: "bg-transparent ring-1 ring-inset ring-line-strong",
};

export function StatusBadge({ status }: { status: ServiceStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 meta text-faint">
      <span aria-hidden className={`size-1.5 rounded-full ${dot[status]}`} />
      {statusLabel[status]}
    </span>
  );
}
