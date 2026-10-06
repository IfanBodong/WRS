import { motion } from 'motion/react'
import { useState } from 'react'

const faqData = [
  {
    q: "Apakah harus orang Sunda asli untuk gabung?",
    a: "Tidak harus! Siapa pun boleh gabung asalkan seru, sopan, dan siap ngariung bareng warga Roblox Sunda."
  },
  {
    q: "Bagaimana cara bergabung ke komunitas?",
    a: "Cukup klik tombol 'Join Discord' di web ini, verifikasi akunmu, dan langsung nimbrung di server Discord kami!"
  },
  {
    q: "Apakah ada syarat usia atau rank tertentu?",
    a: "Tidak ada syarat khusus rank atau usia. Yang penting bisa menghormati member lain dan patuh pada aturan komunitas."
  },
  {
    q: "Game Roblox apa saja yang sering dimainkan?",
    a: "Kami sering mabar Muncak, Horror, Dugem, Mancing, dan game populer Roblox lainnya."
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="text-center md:text-left">
        <span className="inline-block rounded-xl border-2 border-black bg-[#FF5964] text-white px-3.5 py-1.5 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000]">
          TANYA JAWAB
        </span>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
          Pertanyaan Umum <span className="box-decoration-clone bg-[#FFDE59] px-2 py-1 border-3 border-black shadow-[4px_4px_0px_0px_#000] inline-block mt-2">(FAQ)</span>
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {faqData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="rounded-2xl border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="flex w-full items-center justify-between p-6 text-left font-black text-lg sm:text-xl hover:bg-[#FFFDF4] transition-colors"
            >
              <span>{item.q}</span>
              <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-[#FFDE59] font-black text-lg shadow-[2px_2px_0px_0px_#000]">
                {openIndex === idx ? '−' : '+'}
              </span>
            </button>

            {openIndex === idx && (
              <div className="px-6 pb-6 pt-2 border-t-2 border-black/10 text-base font-medium text-black bg-[#FFFDF4]">
                {item.a}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
