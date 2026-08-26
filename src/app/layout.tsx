import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zac Crumpton — Designer + Creative Developer",
  description:
    "Portfolio of Zac Crumpton, a designer and creative developer based in Nashville, Tennessee.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}