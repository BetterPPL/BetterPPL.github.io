import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import BlurImage from '../components/BlurImage'
const Home: NextPage = () => {
  return (
    <>
      <section className="pt-48">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center ">
            <h1 className="px-6 text-lg text-gray-600 font-inter">
              От комьюнити - для комьюнити
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-black dark:text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Дополни свою игру вместе с {` `}
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#5fdd61] via-[#5fdda0] to-[#5fddb1] blur-xl filter -z-20 opacity-40 w-full h-full absolute inset-0"></span>
                <span className="relative -z-10"> BetterPPL </span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link href="#">
                <a
                  className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-emerald-600 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:border-emerald-900"
                  role="button">
                  Скачать
                </a>
              </Link>
              <Link href="#">
                <a
                  title=""
                  className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-emerald-600 transition-all duration-200 border-2 border-emerald-600 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 focus:border-emerald-900 focus:bg-emerald-700 focus:text-white"
                  role="button">
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Смотреть видео
                </a>
              </Link>
            </div>

            <p className="mt-8 text-base text-gray-500 font-inter">
              123+ людей уже с нами · Бесплатно
            </p>
          </div>
        </div>

        <div className="mt-12 pt-12">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 "></div>
            <div className="relative mx-auto pb-24 bg-black/10">
              <div className="lg:max-w-6xl lg:mx-auto ">
                <div className="transform origin-bottom scale-105 mx-12">
                  <BlurImage
                    src="/static/hero.jpg"
                    width={1920}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
