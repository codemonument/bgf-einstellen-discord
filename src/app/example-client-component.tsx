"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //   TODo: Switch to tanstck query
  //   const res = await fetch("/api/example", { cache: "no-store" });
  //   const text = await res.text();

  return (
    <div>
      <p>Pathname: {pathname}</p>
      <p>searchParams: {searchParams.toString()}</p>
      {/* <p>Response from /api/example: {text}</p> */}
    </div>
  );

  // ...
}
