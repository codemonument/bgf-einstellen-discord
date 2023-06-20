/**
 * Can also be async!
 * @param request
 * @returns
 */
export function GET(request: Request) {
  return new Response("Nice String response!", {
    status: 200,
  });
}
