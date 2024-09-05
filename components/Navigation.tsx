"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = () => {
  const path = usePathname();
  return (
    <nav>
      <h1>It's Nav</h1>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🐷" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "🐷" : ""}
        </li>
      </ul>
    </nav>
  );
};
export default navigation;
