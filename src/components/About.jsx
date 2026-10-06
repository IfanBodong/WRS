import { motion } from 'motion/react'

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="mx-auto w-full max-w-6xl px-6 py-24"
    >

      <div className="rounded-3xl border-4 border-black bg-white p-8 md:p-12 shadow-[10px_10px_0px_0px_#000] relative overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="inline-block rounded-xl border-2 border-black bg-[#FFDE59] px-3.5 py-1.5 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000]"
        >
          TENTANG KAMI
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl"
        >
          Henteu ngan saukur
          <br />
          <span className="box-decoration-clone bg-[#FF5964] text-white px-3 py-1 border-3 border-black shadow-[5px_5px_0px_0px_#000] inline-block mt-2">
            komunitas.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 max-w-2xl text-base font-medium leading-7 text-black sm:text-lg"
        >
          Warga Roblox Sunda adalah komunitas pemain Roblox yang menjadi tempat untuk bermain, bersosialisasi, dan mengikuti berbagai kegiatan seru bersama player lain dari tanah Sunda.
        </motion.p>

      </div>

    </motion.section>
  )
}

export default About
