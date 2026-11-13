import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import TechWorldIntro from "@/components/TechWorldIntro";
import { SoundProvider } from "@/components/SoundProvider";
import { plusJakarta, inter } from "./fonts";

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
        <SoundProvider>
          <TechWorldIntro />
          <CustomCursor />
          <ScrollProgress />
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}
