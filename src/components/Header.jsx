import { motion } from 'motion/react'

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2"
    >
      <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#06111f]/85 px-5 shadow-xl shadow-black/10 backdrop-blur-xl">

        {/* LOGO */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-extrabold tracking-tight"
        >
          WRS<span className="text-blue-500">.</span>
        </motion.a>

        {/* MENU */}
        <div className="hidden items-center gap-8 md:flex">

          <NavLink href="#home">
            Beranda
          </NavLink>

          <NavLink href="#about">
            Tentang
          </NavLink>

          <NavLink href="#social">
            Sosial Media
          </NavLink>

        </div>

        {/* BUTTON */}
        <motion.a
          href="#join"
          whileHover={{
            y: -2,
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
          className="rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-600"
        >
          Gabung
        </motion.a>

      </nav>
    </motion.header>
  )
}

function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.96 }}
      className="group relative text-sm text-slate-400 transition-colors hover:text-white"
    >
      {children}

      <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />
    </motion.a>
  )
}

export default Header