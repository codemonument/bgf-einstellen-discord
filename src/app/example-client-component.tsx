"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data, isLoading } = useQuery<string>({
    queryKey: ["example"],
    queryFn: () => fetch("/api/example").then((res) => res.json()),
  });

  //   TODo: Switch to tanstck query
  //   const res = await fetch("/api/example", { cache: "no-store" });
  //   const text = await res.text();

  return (
    <div>
      <p>Pathname: {pathname}</p>
      <p>searchParams: {searchParams.toString()}</p>
      <p>Is /api/example loading?: {isLoading}</p>
      <p>Response from /api/example: {data}</p>
    </div>
  );

  // ...
}
