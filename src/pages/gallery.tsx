import { Inter } from "next/font/google";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });

export default function Gallery() {
  const images = [
    {
      src: "/forest.webp",
      alt: "Man in forest",
      tooltip: "Un homme inspecte un foret",
      key: "img1",
    },
    {
      src: "/soccer.jpg",
      alt: "Soccer player",
      tooltip: "Vincent Aboubakar, un joueur de football du Cameroun",
      key: "img2",
    },
    {
      src: "/statue.jpg",
      alt: "Statue",
      tooltip: "La Monument de la Reunification en Yaoundé",
      key: "img3",
    },
    {
      src: "/yaounde.png",
      alt: "Yaounde",
      tooltip: "Vue nocturne de Yaoundé",
      key: "img4",
    },
    {
      src: "/waterfall.webp",
      alt: "Waterfall",
      tooltip: "Les Chutes d'Ekom au Cameroun",
      key: "img5",
    },
    {
      src: "/yaounde-aerial.jpg",
      alt: "Yaounde",
      tooltip: "Vue ariale de Yaoundé",
      key: "img6",
    },
    {
      src: "/giraffes.webp",
      alt: "Giraffes",
      tooltip: "Vue ariale de Yaoundé",
      key: "img7",
    },
    {
      src: "/manengouba.jpg",
      alt: "Mountain",
      tooltip: "Mont Manengouba",
      key: "img8",
    },
    {
      src: "/mtcmr.jpg",
      alt: "Mountain",
      tooltip: "Mont Cameroun",
      key: "img9",
    },
    {
      src: "/kribi.jpg",
      alt: "Beach",
      tooltip: "Plage de Kribi",
      key: "img10",
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
          Galerie <br></br>de Photos
        </h1>
      </div>

      <div className="flex flex-wrap w-full -m-4 mt-32 ">
        {images.map((image) => (
          <div className="sm:w-1/2 w-100 p-4" key={image.key}>
            <div className="flex relative h-full ">
              <div className="px-4 py-4 relative z-10 border-4 border-gray-800 bg-gray-900 rounded-lg place-self-center">
                <Tooltip content={image.tooltip}>
                  <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] place-self-center"
                    src={image.src}
                    alt={image.alt}
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
