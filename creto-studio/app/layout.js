import "./globals.css";
import Script from "next/script";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import TechWorldIntro from "@/components/TechWorldIntro";
import { SoundProvider } from "@/components/SoundProvider";
import { plusJakarta, inter } from "./fonts";
import AIChatWidget from "@/components/AIChatWidget";

export const metadata = {
  metadataBase: new URL("https://cretostudio.com"),
  title: {
    default: "Creto Studio | Web, Mobile, AI & Digital Solutions",
    template: "%s | Creto Studio",
  },
  description:
    "Creto Studio designs and builds websites, mobile apps, e-commerce experiences, custom software, AI solutions, and digital growth experiences for ambitious businesses.",
  applicationName: "Creto Studio",
  openGraph: {
    type: "website",
    url: "https://cretostudio.com",
    siteName: "Creto Studio",
    title: "Creto Studio | Digital Products Built for What's Next",
    description:
      "Websites, mobile apps, e-commerce, AI-powered software, and digital experiences built around your business goals.",
    images: [{ url: "/tabimage.jpg", width: 1200, height: 630, alt: "Creto Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creto Studio | Digital Products Built for What's Next",
    description:
      "Websites, mobile apps, e-commerce, AI-powered software, and digital experiences built around your business goals.",
    images: ["/tabimage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${inter.variable}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K7NPXSLJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K7NPXSLJ');`}
        </Script>
        <SoundProvider>
          <TechWorldIntro />
          <CustomCursor />
          <ScrollProgress />
          {children}
          <AIChatWidget />
        </SoundProvider>
      </body>
    </html>
  );
}
