import { motion } from 'motion/react'
import { Gamepad2, Users, Heart, Mic } from 'lucide-react'

const featuresList = [
  {
    icon: <Gamepad2 className="h-8 w-8 text-black" />,
    title: "Mabar Tiap Hari",
    desc: "Main bareng game Roblox populer seperti Muncak, Horror, Dugem, Mancing, dan banyak lagi.",
    bg: "bg-[#FFDE59]",
  },
  {
    icon: <Users className="h-8 w-8 text-black" />,
    title: "Komunitas Asik & Ramah",
    desc: "Tempat kumpul player Sunda yang asik, solid, dan saling support satu sama lain.",
    bg: "bg-[#38BDF8]",
  },
  {
    icon: <Heart className="h-8 w-8 text-black" />,
    title: "Keluarga Besar WRS",
    desc: "Rasa persaudaraan kuat ala urang Sunda, bikin suasana mabar jadi makin hangat dan betah.",
    bg: "bg-[#FF5964]",
  },
  {
    icon: <Mic className="h-8 w-8 text-black" />,
    title: "Voice Channel Ngariung",
    desc: "Ngobrol santai pake basa Sunda, sharing tips game, atau sekadar Ketawa Bareng.",
    bg: "bg-[#4ADE80]",
  },
]

function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-24">

      <div className="text-center md:text-left">
        <span className="inline-block rounded-xl border-2 border-black bg-[#FFDE59] px-3.5 py-1.5 text-xs font-black uppercase shadow-[3px_3px_0px_0px_#000]">
          KEUNGGULAN KAMI
        </span>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
          Kenapa Harus Gabung <span className="box-decoration-clone bg-[#4ADE80] px-2 py-1 border-3 border-black shadow-[4px_4px_0px_0px_#000] inline-block mt-2">WRS?</span>
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featuresList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            whileHover={{ x: -4, y: -4, boxShadow: '8px 8px_0px_0px_#000' }}
            className={`rounded-3xl border-4 border-black ${item.bg} p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between`}
          >
            <div>
              <div className="inline-flex rounded-2xl border-3 border-black bg-white p-3 shadow-[3px_3px_0px_0px_#000]">
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed opacity-90">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Features
