import logo from '../assets/logo.png'

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-2 lg:gap-20"
    >

      {/* TEXT */}
      <div className="text-center">

        <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-3px] sm:text-6xl md:text-7xl lg:text-8xl">
          Warga Roblox
          <br />
          <span className="text-blue-500">
            Sunda.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          Tempat berkumpulnya para pemain Roblox
          dari tanah Sunda. Main bareng,
          bersosialisasi, dan bikin kenangan bareng.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <a
            href="#join"
            className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-600"
          >
            Gabung Komunitas
          </a>

          <a
            href="#about"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-slate-300 transition hover:border-blue-500/40 hover:text-white"
          >
            Tentang Kami →
          </a>

        </div>

      </div>

      {/* LOGO CARD */}
      <div className="mx-auto w-full max-w-sm">

        <div className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-[#0d1d30] p-8 shadow-2xl shadow-black/30">

          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative flex h-64 items-center justify-center">
            <img
              src={logo}
              alt="Logo Warga Roblox Sunda"
              className="h-48 w-48 rounded-2xl object-contain shadow-2xl"
            />
          </div>

          <div className="relative text-center">
            <h2 className="text-xl font-bold">
              Warga Roblox Sunda
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Ngariung • Maén • Ngabagéakeun
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero