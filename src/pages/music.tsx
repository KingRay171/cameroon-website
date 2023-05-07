import { Inter } from "next/font/google";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export default function Music() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div
        className="relative flex place-items-center text-6xl
            before:absolute before:h-[300px] before:w-[480px]  before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-['']
            after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']
            before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"
      >
        <h1>
          Musique du <br></br>Cameroun
        </h1>
      </div>

      <div className="flex flex-wrap w-full -m-4 mt-32 ">
        <div className="flex flex-wrap sm:w-2/3 w-100 p-4">
          <div className="sm:w-1/2 w-100 h-full">
            <div className="px-4 py-4 items-center relative z-10 w-full h-full bg-gray-900 ">
              <h1 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Libianca
              </h1>
              <br></br>
              <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Nom: Libianca Kenzonkinboum Fonji
              </h2>
              <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Lieu de Naisance: Minneapolis, E-U
              </h2>

              <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Genre de Musique: Afrobeats, R&B
              </h2>

              <br></br>

              <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Libianca - People \/
              </h2>

              <br></br>

              <audio controls src="/people.mp3">
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
          <div className="sm:w-1/2 w-100 h-full">
            <div className="px-4 py-4 relative bg-gray-900 m-auto">
              <Tooltip content={"nice"}>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] m-auto"
                  src="/libianca.jpg"
                  alt="Paul Bija"
                  width={280}
                  height={57}
                  priority
                />
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="sm:w-1/3 w-100 p-4 m-auto">
          <Tooltip content={"Blazon du Cameroun"}>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/coatofarms.png"
              alt="Paul Bija"
              width={280}
              height={37}
              priority
            />
          </Tooltip>
        </div>
      </div>

      <div className="flex flex-wrap w-full -m-4 mt-32 ">
        <div className="sm:w-1/3 w-100 p-4 m-auto">
          <Tooltip content={"nice"}>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] m-auto"
              src="/flag.svg"
              alt="Paul Bija"
              width={280}
              height={37}
              priority
            />
          </Tooltip>
        </div>

        <div className="sm:w-2/3 w-100 p-4">
          <div className="flex relative h-full w-full">
            <div className="sm:w-1/2 w-100 px-4 py-4 relative z-10 w-full bg-gray-900 ">
              <Tooltip content={"nice"}>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  src="/krys-m.jpg"
                  alt="Paul Bija"
                  width={380}
                  height={77}
                  priority
                />
              </Tooltip>
            </div>
            <div className="sm:w-1/2 w-100 px-4 py-4 relative z-10 w-full bg-gray-900 ">
              <h1 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Krys-M
              </h1>
              <br></br>
              <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Nom: Megne Noubissi Christelle
              </h2>
              <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Lieu de Naisance: Yaoundé, Cameroun
              </h2>

              <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Genre de Musique: Folk
              </h2>

              <br></br>

              <h2 className="tracking-widest text-lg title-font font-medium font-mono mb-1 ">
                Krys-M - Chacun sa chance \/
              </h2>

              <br></br>

              <audio controls src="/chacun.mp3">
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
        </div>
      </div>

      <div className="float-left">
        <h2 className="float-right"></h2>
      </div>
    </main>
  );
}
