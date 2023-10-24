import { VT323, Titillium_Web } from "next/font/google";
import "./global.css";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminContextProvider from "./context/AdminContext";
import imageOg from "./assets/images/AlexandreHontcharouk.webp";

//* Fonts *//
const vcr = VT323({
  weight: "400",
  variable: "--font-vcr",
  subsets: ["latin"],
  display: "swap",
});

const titi = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-titi",
  display: "swap",
});

//* MetaData *//
export const metadata = {
  title: "Alexandre Hontcharouk - Développeur Web Freelance à Lyon",
  description:
    "Découvrez le portfolio d'Alexandre Hontcharouk, développeur web front-end à Lyon, Villeurbanne. Spécialisé en JavaScript, HTML, CSS, Sass, React.js et Next.js.",
  keywords:
    "développeur web, front-end, freelance, JavaScript, HTML, CSS, Sass, React.js, Next.js, Lyon, Villeurbanne",
  author: "Alexandre Hontcharouk",
  ogTitle: "Portfolio d'Alexandre Hontcharouk - Développeur Web Freelance",
  ogDescription:
    "Explorez le portfolio d'Alexandre Hontcharouk, développeur web front-end à Lyon, Villeurbanne. Découvrez ses compétences en JavaScript, HTML, CSS, Sass, React.js et Next.js.",
  ogType: "website", 
  ogUrl: "https://alexandre-hontcharouk-portfolio.vercel.app",
  ogLocale: "fr_FR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${vcr.variable} ${titi.variable}`}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:locale" content={metadata.ogLocale} />
        <meta
          property="og:image"
          content="./opengraph-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="voici l'image de mon portfolio"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://alexandre-hontcharouk-portfolio.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Alexandre Hontcharouk - Développeur Web Freelance à Lyon"
        />
        <meta
          property="twitter:description"
          content="Découvrez le portfolio d'Alexandre Hontcharouk, développeur web front-end à Lyon, Villeurbanne. Spécialisé en JavaScript, HTML, CSS, Sass, React.js et Next.js."
        />
        <meta
          property="twitter:image"
          content="./opengraph-image.png"
        />
      </Head>
      <body>
        <AdminContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AdminContextProvider>
      </body>
    </html>
  );
}
