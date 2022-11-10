import React, { useEffect, useState } from 'react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/20/solid'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Menubutton = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  // START OF Framer-Motion Variants
  const parent = {
    hide: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  }
  const motionItem = {
    hide: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }
  // END OF Framer-Motion Variants

  const linkList = [
    {
      name: 'Главная',
      icon: <img src="/static/house.svg" className="w-4 h-4" alt="" />,
      slug: '/',
    },
    {
      name: 'Тотемы',
      icon: <img src="/static/totem.svg" className="w-4 h-4" alt="" />,
      slug: '/totems',
    },
    {
      name: 'Сборки',
      icon: <img src="/static/cardboard_box.svg" className="w-4 h-4" alt="" />,
      slug: '/modpacks',
    },
  ]

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`transition z-[60] relative p-2 ${
          open && 'bg-neutral-300 dark:bg-neutral-800'
        } rounded-lg`}>
        {open ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars2Icon className="w-6 h-6" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed inset-0 z-50 bg-neutral-800/70 dark:bg-neutral-700/60 flex justify-center py-32"
            onClick={() => setOpen(!open)}>
            <motion.nav
              className="flex flex-col gap-4 w-full max-w-md mx-12"
              variants={parent}
              animate="show">
              {linkList.map((item, index) => (
                <motion.div variants={motionItem} animate="show" initial="hide">
                  <Link href={item.slug} key={index}>
                    <a
                      onClick={() => setOpen(!open)}
                      className={`transition ${
                        router.pathname === item.slug
                          ? 'bg-emerald-600 dark:bg-emerald-700'
                          : 'bg-neutral-600 dark:bg-neutral-700'
                      } py-5 px-5 rounded-xl text-white flex gap-3 items-center`}>
                      {item.icon}
                      {item.name}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menubutton
