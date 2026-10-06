import { motion } from 'motion/react'

function JoinDiscord() {
  return (
    <motion.section
      id="join"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >

      <div className="rounded-3xl border-4 border-black bg-[#FFDE59] p-8 md:p-12 shadow-[10px_10px_0px_0px_#000] text-center relative overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-block rounded-xl border-2 border-black bg-white px-3.5 py-1.5 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000]"
        >
          BERGABUNG
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl"
        >
          Hayu <span className="box-decoration-clone bg-[#FF5964] text-white px-3 py-1 border-3 border-black shadow-[4px_4px_0px_0px_#000] inline-block mt-2">ngariung.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mx-auto mt-6 max-w-xl text-base font-medium leading-7 text-black sm:text-lg"
        >
          Gabung ke Discord Warga Roblox Sunda dan temukan teman baru untuk mabar, ngobrol, dan seru-seruan bareng!
        </motion.p>

        <motion.a
          href="https://discord.gg/FtKmRNDwrz"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            x: -3,
            y: -3,
            boxShadow: '8px 8px_0px_0px_#000',
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
          className="mt-8 inline-flex items-center gap-3 rounded-2xl border-4 border-black bg-white px-8 py-5 text-base sm:text-lg font-black shadow-[5px_5px_0px_0px_#000]"
        >
          <motion.img
            src="/discord.png"
            alt="Discord"
            className="h-7 w-7 object-contain"
            whileHover={{
              rotate: 12,
              scale: 1.15,
            }}
          />

          Join Discord WRS
        </motion.a>

      </div>

    </motion.section>
  )
}

export default JoinDiscord
