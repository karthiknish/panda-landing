import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Script from "next/script";
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
  style: ["normal", "italic"],
});

// The metadata is being used by Next.js to generate meta tags in the page head
// This provides SEO benefits and social media preview information
export const metadata = {
  title: "Panda Puzzle | Children's Therapy & Assessment Services",
  description:
    "Expert therapy and assessment services for children with autism, sensory processing challenges and learning disabilities. Evidence-based care delivered by qualified specialists.",
  keywords:
    "children's therapy, autism assessment, sensory processing, learning disabilities, occupational therapy, speech therapy, child development, pediatric therapy",
  author: "Panda Puzzle",
  openGraph: {
    title: "Panda Puzzle | Children's Therapy & Assessment Services",
    description:
      "Expert therapy and assessment services for children with autism, sensory processing challenges and learning disabilities.",
    type: "website",
    url: "https://pandapuzzle.co.uk",
    images: [
      {
        url: "https://pandapuzzle.org/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Panda Puzzle Therapy Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panda Puzzle | Children's Therapy & Assessment Services",
    description:
      "Expert therapy and assessment services for children with autism, sensory processing challenges and learning disabilities.",
    images: ["https://pandapuzzle.org/hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="your-verification-code"
        />
        <link rel="canonical" href="https://pandapuzzle.org" />
        <Script
          src="//profici.co.uk/wp-content/plugins/gravity-forms-iframe-master/assets/scripts/gfembed.min.js"
          type="text/javascript"
        ></Script>
      </head>
      <body className={`${dmSans.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
