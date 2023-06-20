import ExampleClientComponent from "./example-client-component";

/**
 * This function can be async!
 * @returns
 */
export default function Page() {
  return (
    <section>
      <h1>This is my homepage!</h1>
      <ExampleClientComponent />
    </section>
  );
}
