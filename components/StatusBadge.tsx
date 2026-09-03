import type { ServiceStatus } from "@/data/services";
import { statusLabel } from "@/data/services";

const tone: Record<ServiceStatus, string> = {
  live: "border-accent/35 text-accent",
  beta: "border-line-strong text-muted",
  preparing: "border-line-strong text-faint",
};

export function StatusBadge({ status }: { status: ServiceStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tone[status]}`}
    >
      {statusLabel[status]}
    </span>
  );
}
