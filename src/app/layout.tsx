import { type Metadata } from "next";
import "../styles/globals.css";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Time: To avoid static rendering and caching! */}
        <p>Time: {new Date().toISOString()}</p>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
