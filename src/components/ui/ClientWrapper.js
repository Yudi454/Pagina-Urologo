"use client";

import UseLenis from "@/hooks/UseLenis";

export default function ClientWrapper({ children }) {
  UseLenis();
  return <>{children}</>;
}
