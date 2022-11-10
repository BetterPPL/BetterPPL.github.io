import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HomeIcon } from '@heroicons/react/20/solid'
import ThemeChanger from '../ThemeChanger'
import Menubutton from './Menubutton'
import { useRouter } from 'next/router'

const Navigation = ({ children }: any) => {
  const router = useRouter()
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 100)
      )
    }
  }, [])

  const linkList = [
    {
      name: 'Главная',
      slug: '/',
    },
    {
      name: 'Тотемы',
      slug: '/totems',
    },
    {
      name: 'Сборки',
      slug: '/modpacks',
    },
  ]

  return (
    <>
      <header
        className={`transition fixed w-full border-zinc-800/50 ${
          small ? 'bg-zinc-900/90 backdrop-blur-xl border-b ' : ''
        }`}>
        <div className={`container mx-auto py-6 `}>
          <div className="px-6 grid grid-flow-col grid-cols-3 items-center">
            <div className="mr-auto hidden lg:flex">
              <nav className="flex gap-4">
                {linkList.map((item, index) => (
                  <Link href={item.slug}>
                    <a
                      className={`transition flex text-black dark:text-white py-2 px-4 rounded-lg gap-2 ${
                        router.pathname === item.slug
                          ? 'bg-neutral-200 dark:bg-neutral-800'
                          : 'hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:shadow-lg'
                      } items-center`}>
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="mr-auto lg:hidden">
              <Menubutton />
            </div>
            <div className="mx-auto">
              <motion.div
                initial={{ scale: 1 }}
                whileTap={{
                  scale: 0.9,
                  transition: { ease: 'backOut', duration: 0.3 },
                }}>
                <Link href="/">
                  <img src="/static/logo.svg" height={32} width={32} />
                </Link>
              </motion.div>
            </div>
            <div className="ml-auto">
              <div className="flex items-center p-2">
                <ThemeChanger />
              </div>
            </div>
          </div>
        </div>
      </header>

      {children}
    </>
  )
}

export default Navigation
