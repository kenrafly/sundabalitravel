"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div key={pathname}>{children}</div>;
}
