import { motion } from 'motion/react'
import logo from '../assets/logo.png'

function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-2 lg:gap-20"
    >

      {/* TEXT */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >

        <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-3px] sm:text-6xl md:text-7xl lg:text-8xl">
          Warga Roblox
          <br />
          <span className="text-blue-500">
            Sunda.
          </span>
        </h1>

        <motion.p
          className="mx-auto mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Tempat berkumpulnya para pemain Roblox
          dari tanah Sunda. Main bareng,
          bersosialisasi, dan bikin kenangan bareng.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >

          <motion.a
            href="#join"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-500/20"
          >
            Gabung Komunitas
          </motion.a>

          <motion.a
            href="#about"
            whileHover={{ y: -4, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-slate-300 hover:border-blue-500/40 hover:text-white"
          >
            Tentang Kami →
          </motion.a>

        </motion.div>

      </motion.div>

      {/* LOGO */}
      <motion.div
        className="mx-auto w-full max-w-sm"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative overflow-hidden rounded-3xl border border-blue-500/15 bg-[#0d1d30] p-8 shadow-2xl shadow-black/30"
        >

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

        </motion.div>

      </motion.div>

    </section>
  )
}

export default Hero