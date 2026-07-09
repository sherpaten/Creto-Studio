export default function Footer() {
  return (
    <footer className="bg-[#add8e6] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src="/logo.png" alt="Creto Studio" className="h-12 sm:h-14 w-auto" />
        <p className="font-mono text-xs text-white/50">
          &copy; {new Date().getFullYear()} Creto Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}