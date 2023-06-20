import ExampleClientComponent from "./example-client-component";
import Link from "next/link";

/**
 * This function can be async!
 * @returns
 */
export default function Page() {
  return (
    <section>
      <h1>This is my debug page!</h1>
      <ExampleClientComponent />

      <Link className="my-4 inline-block bg-teal-600 p-4 shadow-md" href="/">
        Back to HomePage
      </Link>
    </section>
  );
}
