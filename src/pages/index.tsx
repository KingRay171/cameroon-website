import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const tabs = [
    {
      title: "Statistiques et Infos Générales",
      desc: "Capitale, Chef du Gouvernement, et plus!",
      page: "/general",
    },
    {
      title: "Galerie de Photos",
      desc: "10 photos du Cameroun",
      page: "/gallery",
    },
    {
      title: "La Mode du Cameroun",
      desc: "Un Lookbook de 4 tenues populaires du Cameroun",
      page: "/fashion",
    },
    {
      title: "La Musique du Cameroun",
      desc: "2 artistes du Cameroun, votre mini-biographies et musique!",
      page: "/music",
    },
  ];

  const sources = [
    "https://fr.wikipedia.org/wiki/Cameroun#/media/Fichier:Flag_of_Cameroon.svg",
    "https://fr.wikipedia.org/wiki/Cameroun#/media/Fichier:Coat_of_arms_of_Cameroon.svg",
    "https://fr.wikipedia.org/wiki/Cameroun#/media/Fichier:Carte_cameroun_francais.gif",
    "https://www.prc.cm/images/actes_pr/Signature_des_actes_inter.jpg",
    "https://i0.wp.com/fintalk-mag.com/wp-content/uploads/2019/09/commerce-de-devise-cameroun.jpg?w=1000&ssl=1",
    "https://www.youtube.com/watch?v=Zuup01dBEP0",
    "https://forestsnews.cifor.org/wp-content/uploads/2015/11/8002355319_35b81cbcc8_z-640x415.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iX2zgOsdCR6FxL1r7nuXrKD44-nEzov-oA:https://library.sportingnews.com/2022-01/vincent-aboubakar-cameroon-january-2022_od3ugxy7vki417m8449jt681n.jpg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRil5gT3OLnCLr3msCWzOCkfwHMcwhTNCDRA:https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/8e/7d/e0/monument-de-la-reunification.jpg%3Fw%3D500%26h%3D-1%26s%3D1&usqp=CAU",
    "https://www.researchgate.net/profile/Boniface-Epo/publication/322869954/figure/fig3/AS:995002373140480@1614238460043/Scene-courante-dusage-dune-rue-de-la-ville-de-Yaounde_Q320.jpg",
    "https://www.bouger-voyager.com/wp-content/uploads/2021/10/ekom.jpg",
    "https://static.dw.com/image/60583563_1004.jpg",
    "https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/27/thumbs_b_c_b4bbeb9ede1d90e0b5b05fe428ddc696.jpg?v=145742",
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Manengouba_2.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Mont-Cameroun.jpg",
    "https://media.routard.com/image/67/8/photo.1455678.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpnaJAN3VSxAib_Rm4O7Joq7rESfjGH75Wlpa5NuVmWRB8TM5mmTxuSffv0SMI3yYseg&usqp=CAU",
    "https://www.jeuneafrique.com/cdn-cgi/image/q=100,f=auto,metadata=none,width=1256,height=628/https://www.jeuneafrique.com/medias/2021/03/09/jad20210309-objectif-cameroun-tissus-ndop-1.jpg",
    "https://dzaleu.net/wp-content/uploads/2019/12/desiree-babassagana-miss-nord-cameroun-en-kaba-robe-pagne-925x540-925x540.jpg",
    "https://www.camer237.com/les-top-tenues-traditionelles-au-cameroun/",
    "https://fr.wikipedia.org/wiki/Libianca_Fonji",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrbQtJXiaDrbUHdb-8_PCQitK-5KHSXL-Aw&usqp=CAU",
    "https://www.youtube.com/watch?v=MniqxLXANS4",
    "https://fr.wikipedia.org/wiki/Krys_M",
    "https://www.newstoriesafrica.com/wp-content/uploads/2023/01/Krys-M-7.jpg.webp",
    "https://www.youtube.com/watch?v=s8v9Utq4nhg",
  ];

  const citations = [""];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300
                      bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
        >
          L&apos;Afrique Francophone
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          Ray Ikome, Tarek Ibrahim
        </div>
      </div>

      <div className="relative flex place-items-center text-6xl before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <p>Le Cameroun</p>
      </div>

      <div className="mt-6 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/flag.svg"
          alt="Drapeau du Cameroun"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 mt-28 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {tabs.map((tab) => (
          <Link
            href={tab.page}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {tab.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{tab.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mb-32 mt-28 text-center text-4xl lg:mb-0 ">
        <p>Bibliographie</p>
        <div className="mb-12 mt-12 text-center text-2xl ">
          <p>Photos:</p>
          <div className="mb-12 mt-12 text-center text-sm ">
            {sources.map((source) => (
              <>
                <a href={source}> {source}</a>
                <br></br>
              </>
            ))}
          </div>
        </div>
        <div className="mb-12 mt-12 text-center text-2xl ">
          <p>Citations:</p>
          <div className="mb-12 mt-12 text-center text-sm ">
            <a href="https://fr.wikipedia.org/wiki/Cameroun">
              “Cameroun.” Wikipedia, The Free Encyclopedia, Wikimedia
              Foundation, 5 mai 2023, https://fr.wikipedia.org/wiki/Cameroun.
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
