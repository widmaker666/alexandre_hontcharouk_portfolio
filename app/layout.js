import { VT323, Titillium_Web } from "next/font/google";
import "./global.css";
import Head from "next/head";

//* Fonts *//
const vcr = VT323({
  weight: "400",
  variable: "--font-vcr",
  subsets: ["latin"],
  display: "swap",
});

const titi = Titillium_Web({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-titi",
  display: "swap",
});

//* MetaData *//
export const metadata = {
  title: "Alexandre Hontcharouk",
  description: "Portfolio",
  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${vcr.variable} ${titi.variable}`}>
      <Head>
        <link rel="icon" href={metadata.favicon} sizes="any" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
