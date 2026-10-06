import { motion } from 'motion/react'

function SocialMedia() {
  return (
    <motion.section
      id="social"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >

      {/* LABEL */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="inline-block rounded-xl border-2 border-black bg-[#FFDE59] px-3.5 py-1.5 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000]"
      >
        SOSIAL MEDIA
      </motion.div>

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl"
      >
        Ikuti <span className="box-decoration-clone bg-[#4ADE80] px-2 py-1 border-3 border-black shadow-[4px_4px_0px_0px_#000] inline-block">WRS.</span>
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="mt-6 max-w-xl text-base font-medium leading-7 text-black sm:text-lg"
      >
        Temukan informasi terbaru dan aktivitas seru Warga Roblox Sunda melalui sosial media resmi kami.
      </motion.p>

      {/* TIKTOK CARD (SINGLE CONTAINER, FULL MATCHING WIDTH) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          ease: 'easeOut',
        }}
        whileHover={{
          y: -4,
          x: -4,
          boxShadow: '10px 10px 0px 0px #000',
        }}
        className="mt-12 w-full rounded-3xl border-4 border-black bg-white p-8 sm:p-10 lg:p-12 shadow-[8px_8px_0px_0px_#000] transition-all"
      >

        {/* INFO */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">

          <motion.div
            whileHover={{
              scale: 1.08,
              rotate: 6,
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 12,
            }}
            className="flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-3xl border-4 border-black bg-black shadow-[5px_5px_0px_0px_#FFDE59]"
          >
            <img
              src="/tiktok.png"
              alt="TikTok"
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain filter invert"
            />
          </motion.div>

          <div className="min-w-0 flex-1">

            <span className="inline-block rounded-xl border-2 border-black bg-[#FFDE59] px-3 py-1 text-xs sm:text-sm font-black tracking-wider uppercase shadow-[3px_3px_0px_0px_#000]">
              TIKTOK OFFICIAL
            </span>

            <h3 className="mt-3 truncate text-2xl sm:text-3xl lg:text-4xl font-black text-black">
              @wargarobloxsunda
            </h3>

            <p className="mt-2 text-base sm:text-lg font-medium text-black">
              Follow TikTok Warga Roblox Sunda untuk konten video & meme seru seputar Roblox!
            </p>

          </div>

        </div>

        {/* BUTTON */}
        <motion.a
          href="https://www.tiktok.com/@wargarobloxsunda"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            x: -2,
            y: -2,
            boxShadow: '6px 6px_0px_0px_#000',
          }}
          whileTap={{
            x: 0,
            y: 0,
            boxShadow: '0px 0px_0px_0px_#000',
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 15,
          }}
          className="mt-8 flex w-full items-center justify-center rounded-2xl border-4 border-black bg-[#38BDF8] px-8 py-5 text-base sm:text-lg font-black uppercase shadow-[4px_4px_0px_0px_#000]"
        >
          Kunjungi TikTok Kami →
        </motion.a>

      </motion.div>

    </motion.section>
  )
}

export default SocialMedia
