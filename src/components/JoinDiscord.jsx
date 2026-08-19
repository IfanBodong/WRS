import { motion } from 'motion/react'

function JoinDiscord() {
  return (
    <motion.section
      id="join"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className="mx-3 my-16 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1d30] px-6 py-20 text-center sm:mx-auto sm:max-w-6xl"
    >

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-xs font-extrabold tracking-[3px] text-blue-400"
      >
        BERGABUNG
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
      >
        Hayu <span className="text-blue-500">ngariung.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400"
      >
        Gabung ke Discord Warga Roblox Sunda
        dan temukan teman baru untuk bermain Roblox.
      </motion.p>

      <motion.a
        href="https://discord.gg/FtKmRNDwrz"
        target="_blank"
        rel="noreferrer"
        whileHover={{
          y: -4,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.94,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17,
        }}
        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-500/20"
      >
        <motion.img
          src="/discord.png"
          alt="Discord"
          className="h-6 w-6 object-contain"
          whileHover={{
            rotate: 8,
            scale: 1.1,
          }}
        />

        Join Discord
      </motion.a>

    </motion.section>
  )
}

export default JoinDiscord