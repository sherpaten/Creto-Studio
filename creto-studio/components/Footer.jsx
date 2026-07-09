export default function Footer() {
  return (
    <footer className="bg-[#305CDE] border-t border-white/10 py-13">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src="/logo.png" alt="Creto Studio" className="h-15 sm:h-16 w-auto" />
        <p className="font-mono text-xs text-white/60">
          &copy; {new Date().getFullYear()} Creto Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}