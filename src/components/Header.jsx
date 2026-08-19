function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2">
      <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#06111f]/85 px-5 backdrop-blur-xl">

        <a href="#" className="text-2xl font-extrabold tracking-tight">
          WRS<span className="text-blue-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-slate-400 hover:text-white">
            Beranda
          </a>

          <a href="#about" className="text-sm text-slate-400 hover:text-white">
            Tentang
          </a>

          <a href="#social" className="text-sm text-slate-400 hover:text-white">
            Sosial Media
          </a>
        </div>

        <a
          href="#join"
          className="rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-bold transition hover:bg-blue-600"
        >
          Gabung
        </a>

      </nav>
    </header>
  )
}

export default Header