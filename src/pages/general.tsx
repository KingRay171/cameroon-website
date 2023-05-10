import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Tooltip } from '@nextui-org/react'
const inter = Inter({ subsets: ['latin'] })

export default function General() {
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
            <div
                className="sm:w-1/2 w-100 p-4">

                <div className="flex relative h-full">
                  <div className="px-4 py-4 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
                    <br></br>
                    <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                    Capitale: <span className='text-[#0141ff]'>Yaoundé</span>
                    </h2>
                    <br></br>
                    <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                    Chef du gouvernement: <span className='text-[#0141ff]'>Paul Biya</span>
                    </h2>
                    <br></br>

                    <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                    Date de l’indépendance: <span className='text-[#0141ff]'>January 1, 1960</span>
                    </h2>
                    <br></br>

                    <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                    Population: <span className='text-[#0141ff]'>27,744,989</span>
                    </h2>
                    <br></br>

                    <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                    Langues: <span className='text-[#0141ff]'>Français, Anglais</span>
                    </h2>
                    <br></br>

                    <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                    Devise: <span className='text-[#0141ff]'>CFA franc (XAF)</span>
                    </h2>
                    <br></br>

                    <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                    Slogan: <span className='text-[#0141ff]'>Paix, Travail, Patrie</span>
                    </h2>
                    <br></br>

                    <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                    L’hymne national: <span className='text-[#0141ff]'>Chant de Ralliement</span>
                    </h2>

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
                        className='dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
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