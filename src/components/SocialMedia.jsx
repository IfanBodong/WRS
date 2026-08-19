function SocialMedia() {
  return (
    <section
      id="social"
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >

      <p className="text-xs font-extrabold tracking-[3px] text-blue-400">
        SOSIAL MEDIA
      </p>

      <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Ikuti <span className="text-blue-500">WRS.</span>
      </h2>

      <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
        Temukan informasi terbaru dan aktivitas
        Warga Roblox Sunda melalui sosial media kami.
      </p>

      {/* TIKTOK */}
      <div className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-[#0d1d30] p-5">

        <div className="flex items-center gap-5">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black">
            <img
              src="/tiktok.png"
              alt="TikTok"
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[9px] font-extrabold tracking-[2px] text-blue-400">
              TIKTOK
            </p>

            <h3 className="mt-1 truncate text-base font-bold">
              @wargarobloxsunda
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Follow TikTok Warga Roblox Sunda
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <a
          href="https://www.tiktok.com/@wargarobloxsunda"
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-xs font-bold transition hover:-translate-y-0.5 hover:bg-blue-600"
        >
          Kunjungi TikTok →
        </a>

      </div>

    </section>
  )
}

export default SocialMedia