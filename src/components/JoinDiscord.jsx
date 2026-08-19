function JoinDiscord() {
  return (
    <section
      id="join"
      className="mx-3 my-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1d30] px-6 py-20 text-center sm:mx-auto sm:max-w-6xl"
    >

      <p className="text-xs font-extrabold tracking-[3px] text-blue-400">
        BERGABUNG
      </p>

      <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Hayu <span className="text-blue-500">ngariung.</span>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400">
        Gabung ke Discord Warga Roblox Sunda
        dan temukan teman baru untuk bermain Roblox.
      </p>

      <a
        href="https://discord.gg/FtKmRNDwrz"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:bg-blue-600"
      >
        <img
          src="/discord.png"
          alt="Discord"
          className="h-6 w-6 object-contain"
        />

        Join Discord
      </a>

    </section>
  )
}

export default JoinDiscord