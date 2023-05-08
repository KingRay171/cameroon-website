import { Inter } from "next/font/google";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export default function Fashion() {
  const styles = [
    {
      src: "/toghu.jpg",
      alt: "Toghu",
      tooltip: "Le Toghu",
      key: "fashion1",
    },
    {
      src: "/ndop.avif",
      alt: "Ndop",
      tooltip: "Le Ndop",
      key: "fashion2",
    },
    {
      src: "/kaba2.jpg",
      alt: "Kaba",
      tooltip: "Le Kaba-Ngondo",
      key: "fashion3",
    },
    {
      src: "/grand-nord.png",
      alt: "Grand-Nord",
      tooltip: "Le Grand-Nord",
      key: "fashion4",
    },
  ];
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
          La Mode du <br></br>Cameroun
        </h1>
      </div>

      <div className="flex flex-wrap w-full -m-4 mt-32 ">
        {styles.map((style) => (
          <div className="sm:w-1/2 w-100 p-4" key={style.key}>
            <div className="flex relative h-full ">
              <div className="px-4 py-4 relative z-10 border-4 border-gray-800 bg-gray-900 rounded-lg place-self-center">
                <Tooltip content={style.tooltip}>
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] place-self-center"
                    src={style.src}
                    alt={style.alt}
                    width={580}
                    height={77}
                    priority
                  />
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="float-left">
        <h2 className="float-right"></h2>
      </div>
    </main>
  );
}
