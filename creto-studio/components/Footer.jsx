export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#011032]/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src="/logo.png" alt="Creto Studio" className="h-7 w-auto" />
        <p className="font-mono text-xs text-[#012468]/50">
          &copy; {new Date().getFullYear()} Creto Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}