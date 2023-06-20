"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      <p>Pathname: {pathname}</p>
      <p>searchParams: {searchParams.toString()}</p>
    </div>
  );

  // ...
}
