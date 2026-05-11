import type { ReactNode } from "react";

export function VintageFrame({
  children,
  className = "",
  gold = false,
}: {
  children: ReactNode;
  className?: string;
  gold?: boolean;
}) {
  return (
    <div className={`vintage-frame ${gold ? "vintage-frame--gold" : ""} ${className}`}>
      {children}
    </div>
  );
}
