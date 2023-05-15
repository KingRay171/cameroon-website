import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Tooltip } from '@nextui-org/react'
const inter = Inter({ subsets: ['latin'] })

export default function General() {

    const info = [
      {
        question: "Capitale: ",
        answer: "Yaoundé"
      },
      {
        question: "Chef du gouvernement: ",
        answer: "Paul Biya"
      },
      {
        question: "Date de l’indépendance: ",
        answer: "January 1, 1960"
      },
      {
        question: "Population: ",
        answer: "27,744,989"
      },
      {
        question: "Langues: ",
        answer: "Francais, Anglais"
      },
      {
        question: "Devise:",
        answer: "CFA franc (XAF)"
      },
      {
        question: "Slogan: ",
        answer: "Paix, Travail, Patrie"
      },
      {
        question: "L'hymne national: ",
        answer: "Chant de Ralliement"
      }

    ];

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <div className="relative flex place-items-center text-6xl
            before:absolute before:h-[300px] before:w-[480px]  before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']
            after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']
            before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
                <h1>
                Statistiques et <br></br>Infos Générales
                </h1>

            </div>

            <div className="flex flex-wrap w-full -m-4 mt-32 ">
            <div className="sm:w-1/2 w-100 p-4">
                <div className="flex relative h-full">
                  <div className="px-4 py-4 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                    {info.map((e) => (
                      <>
                        <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                        {e.question} <span className='text-[#0141ff]'>{e.answer}</span>
                        </h2>
                        <br></br>
                      </>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sm:w-1/2 w-100 p-4 flex relative h-full">
                  <div className="px-4 py-4 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                    <Tooltip content={"nice"}>
                    <Image
                      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                      src="/cameroun.gif"
                      alt="Paul Bija"
                      width={280}
                      height={37}

                      priority
                    />
                    </Tooltip>
                    <br></br>
                    <Tooltip content={"Paul Bija, la chef du gouvernement du Cameroun"}>
                    <Image
                      className="relative h-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                      src="/bija.jpg"
                      alt="Paul Bija"
                      width={280}
                      height={37}

                      priority
                    />
                    </Tooltip>
                    <br></br>
                    <Tooltip content={"La Devise du Cameroun"}>
                    <Image
                      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                      src="/money.webp"
                      alt="Paul Bija"
                      width={280}
                      height={37}

                      priority
                    />
                    </Tooltip>
                    <br></br>
                    <audio
                        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
                        controls
                        src="/hymne.mp3">
                            Your browser does not support the
                            <code>audio</code> element.
                    </audio>
                  </div>
              </div>

            </div>

            <div className='float-left'>
                <h2 className='float-right'>

                </h2>
            </div>

        </main>
    )
}