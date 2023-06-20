import { NextResponse } from "next/server";

/**
 * Can also be async!
 * @param request
 * @returns
 */
export function GET(request: Request) {
  const data = { hello: "world!" };

  return NextResponse.json({ data });
}
