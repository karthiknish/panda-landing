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

export const metadata = {
  title: "Panda Puzzle",
  description: "Panda Puzzle Therapy and Assessment Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
