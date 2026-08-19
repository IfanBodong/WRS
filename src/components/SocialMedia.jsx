import { motion } from 'motion/react'

function SocialMedia() {
  return (
    <motion.section
      id="social"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >

      {/* LABEL */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-xs font-extrabold tracking-[3px] text-blue-400"
      >
        SOSIAL MEDIA
      </motion.p>

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
      >
        Ikuti <span className="text-blue-500">WRS.</span>
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-6 max-w-xl text-sm leading-7 text-slate-400"
      >
        Temukan informasi terbaru dan aktivitas
        Warga Roblox Sunda melalui sosial media kami.
      </motion.p>

      {/* TIKTOK CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: 'easeOut',
        }}
        whileHover={{
          y: -5,
        }}
        className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-[#0d1d30] p-5 shadow-lg shadow-black/10"
      >

        {/* INFO */}
        <div className="flex items-center gap-5">

          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 3,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 15,
            }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-black"
          >
            <img
              src="/tiktok.png"
              alt="TikTok"
              className="h-8 w-8 object-contain"
            />
          </motion.div>

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
        <motion.a
          href="https://www.tiktok.com/@wargarobloxsunda"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 17,
          }}
          className="mt-5 flex w-full items-center justify-center rounded-xl bg-blue-500 px-4 py-3 text-xs font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600"
        >
          Kunjungi TikTok →
        </motion.a>

      </motion.div>

    </motion.section>
  )
}

export default SocialMedia