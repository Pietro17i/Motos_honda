import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-screen min-h-screen items-center justify-center bg-white">

      <div className="flex flex-wrap justify-center">

        <div className="bg-gray-400 w-60 h-60 m-1 text-center flex flex-col items-center justify-center">
          <h1>Start 160</h1>
          <Image src="/start160.webp" alt="texto" width={200} height={200} />
          <h4>Ano 2026</h4>
          <h4>km 0</h4>
        </div>

        <div className="bg-gray-400 w-60 h-60 m-1 text-center flex flex-col items-center justify-center">
          <h1>Cg Start</h1>
          <Image src="/cgstart1.webp" alt="texto" width={200} height={200} />
          <h4>Ano 2026</h4>
          <h4>km 0</h4>
        </div>

        <div className="bg-gray-400 w-60 h-60 m-1 text-center flex flex-col items-center justify-center">
          <h1>125O</h1>
          <Image src="/1250.webp" alt="texto" width={200} height={200} />
          <h4>Ano 2026</h4>
          <h4>km 0</h4>
        </div>

        <div className="bg-gray-400 w-60 h-60 m-1 text-center flex flex-col items-center justify-center">
          <h1>Crosser</h1>
          <Image src="/crosser.webp" alt="texto" width={200} height={200} />
          <h4>Ano 2026</h4>
          <h4>km 0</h4>
        </div>

        <div className="bg-gray-400 w-60 h-60 m-1 text-center flex flex-col items-center justify-center">
          <h1>F800</h1>
          <Image src="/f800.webp" alt="texto" width={200} height={200} />
          <h4>Ano 2026</h4>
          <h4>km 0</h4>
        </div>

        <div className="bg-gray-400 w-60 h-60 m-1 text-center flex flex-col items-center justify-center">
          <h1>Fan Start</h1>
          <Image src="/fanstart.webp" alt="texto" width={200} height={200} />
          <h4>Ano 2026</h4>
          <h4>km 0</h4>
        </div>

        <div className="bg-gray-400 w-60 h-60 m-1 text-center flex flex-col items-center justify-center">
          <h1>S1000RR</h1>
          <Image src="/s1000rr.webp" alt="texto" width={200} height={200} />
          <h4>Ano 2026</h4>
          <h4>km 0</h4>
        </div>

        <div className="bg-gray-400 w-60 h-60 m-1 text-center flex flex-col items-center justify-center">
          <h1>Hornet</h1>
          <Image src="/hornet.webp" alt="texto" width={200} height={200} />
          <h4>Ano 2026</h4>
          <h4>km 0</h4>
        </div>

      </div>
    </div>
  );
}
