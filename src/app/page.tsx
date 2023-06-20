import Link from "next/link";
import ExampleClientComponent from "./debug/example-client-component";

/**
 * This function can be async!
 * @returns
 */
export default function Page() {
  return (
    <section>
      <h1>This is the Bot&apos;s Homepage!</h1>
      <Link
        href="/debug"
        className="my-4 inline-block bg-teal-600 p-4 shadow-md"
      >
        GoTo Debug Page
      </Link>
    </section>
  );
}
