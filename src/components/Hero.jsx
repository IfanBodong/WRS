import { motion } from 'motion/react'

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-[85vh] w-full max-w-5xl flex-col items-center justify-center px-6 pb-20 pt-16 sm:pt-24 text-center"
    >

      {/* BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 rounded-xl border-3 border-black bg-[#FFDE59] px-4 py-2 text-xs sm:text-sm font-black uppercase shadow-[4px_4px_0px_0px_#000]"
      >
        Komunitas Roblox di Tanah Sunda
      </motion.div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mt-8 text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
      >
        Warga Roblox
        <br />
        <span className="box-decoration-clone bg-[#FF5964] text-white px-4 py-1.5 border-4 border-black shadow-[6px_6px_0px_0px_#000] inline-block mt-3">
          Sunda.
        </span>
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-8 max-w-2xl text-base font-medium leading-7 text-black sm:text-lg lg:text-xl"
      >
        Tempat nongkrong & mabar paling seru buat warga Roblox Sunda. Ngariung bareng, seru-seruan, dan bangun komunitas solid ti unggal kota nepi ka pelosok lembur!
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
      >
        <motion.a
          href="#join"
          whileHover={{ x: -3, y: -3, boxShadow: '7px 7px 0px 0px #000' }}
          whileTap={{ x: 0, y: 0, boxShadow: '0px 0px 0px 0px #000' }}
          className="rounded-2xl border-3 border-black bg-[#4ADE80] px-8 py-4 text-center text-base font-black shadow-[4px_4px_0px_0px_#000] text-black"
        >
          Gabung Discord Sekarang
        </motion.a>

        <motion.a
          href="#features"
          whileHover={{ x: -3, y: -3, boxShadow: '7px 7px 0px 0px #000' }}
          whileTap={{ x: 0, y: 0, boxShadow: '0px 0px_0px_0px #000' }}
          className="rounded-2xl border-3 border-black bg-white px-8 py-4 text-center text-base font-black shadow-[4px_4px_0px_0px_#000] text-black"
        >
          Jelajahi Aktivitas
        </motion.a>
      </motion.div>

      {/* STATS */}
      <motion.div 
        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="rounded-2xl border-3 border-black bg-[#38BDF8] p-5 text-center shadow-[5px_5px_0px_0px_#000]">
          <div className="text-3xl font-black">100+</div>
          <div className="text-sm font-bold mt-1">Warga WRS</div>
        </div>
        <div className="rounded-2xl border-3 border-black bg-[#FFDE59] p-5 text-center shadow-[5px_5px_0px_0px_#000]">
          <div className="text-3xl font-black">Seru</div>
          <div className="text-sm font-bold mt-1">Main Bareng</div>
        </div>
        <div className="rounded-2xl border-3 border-black bg-[#FF5964] text-white p-5 text-center shadow-[5px_5px_0px_0px_#000]">
          <div className="text-3xl font-black">100%</div>
          <div className="text-sm font-bold mt-1">Solid Pisan</div>
        </div>
      </motion.div>

    </section>
  )
}

export default Hero
