import { motion } from 'motion/react'

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className="mx-auto w-full max-w-6xl px-6 py-28"
    >

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-xs font-extrabold tracking-[3px] text-blue-400"
      >
        TENTANG KAMI
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
      >
        Henteu ngan saukur
        <br />
        <span className="text-blue-500">
          komunitas.
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
      >
        Warga Roblox Sunda adalah komunitas pemain Roblox
        yang menjadi tempat untuk bermain, bersosialisasi,
        dan mengikuti berbagai kegiatan bersama.
      </motion.p>

    </motion.section>
  )
}

export default About