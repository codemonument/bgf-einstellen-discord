"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data, isLoading, error } = useQuery<string>({
    queryKey: ["example"],
    queryFn: () => fetch(new URL("/api/example", location.href) ).then((res) => res.text()),
  });

  //   TODo: Switch to tanstck query
  //   const res = await fetch("/api/example", { cache: "no-store" });
  //   const text = await res.text();

  return (
    <div>
      <p>Pathname: {pathname}</p>
      <p>searchParams: {searchParams.toString()}</p>
      <p>Is /api/example loading?: {isLoading ? "true" : "false"}</p>
      <p>
        Response from /api/example: {data ? data : (error as Error)?.message}
      </p>
    </div>
  );

  // ...
}
