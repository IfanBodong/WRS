import { motion } from 'motion/react'

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
      }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2"
    >
      <nav className="flex h-16 items-center justify-between rounded-2xl border-4 border-black bg-white px-5 shadow-[5px_5px_0px_0px_#000]">

        {/* LOGO */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl border-3 border-black bg-[#FFDE59] px-3 py-1 text-2xl font-black tracking-tight shadow-[3px_3px_0px_0px_#000]"
        >
          WRS<span className="text-black">.</span>
        </motion.a>

        {/* MENU */}
        <div className="hidden items-center gap-6 md:flex">

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
            x: -2,
            y: -2,
            boxShadow: '5px 5px 0px 0px #000',
          }}
          whileTap={{
            x: 0,
            y: 0,
            boxShadow: '0px 0px 0px 0px #000',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 15,
          }}
          className="rounded-xl border-3 border-black bg-[#FF5964] px-4 py-2 text-sm font-black uppercase shadow-[3px_3px_0px_0px_#000] text-black"
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
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="rounded-lg px-3 py-1.5 text-sm font-bold text-black transition-colors hover:bg-[#FFDE59] hover:border-2 hover:border-black"
    >
      {children}
    </motion.a>
  )
}

export default Header
