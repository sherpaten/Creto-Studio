import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
  title: "Creto Studio — Next-Gen Digital Engineering",
  description:
    "Creto Studio designs and builds scalable software, immersive interfaces, and resilient digital systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}