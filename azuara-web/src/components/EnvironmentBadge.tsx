import { environmentLabel } from "@/lib/env";

export default function EnvironmentBadge() {
  if (!environmentLabel) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-[60] rounded-full bg-amber-400 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg">
      {environmentLabel}
    </div>
  );
}
