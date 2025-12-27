"use client";

import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
