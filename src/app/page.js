import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-around items-center font-F1R min-h-screen">
      <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
        <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0" >
          <li>
            <a className="md:p-4 py-2 block hover:text-red-600 font-semibold" href="#">McLaren</a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-red-600 font-semibold" href="#">Red Bull</a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-red-600 font-semibold" href="#">Mercedes</a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-red-600 font-semibold" href="#">Ferrari</a>
          </li>
          <li>
            <a className="md:p-4 py-2 block hover:text-red-600 font-semibold" href="#">Aston Martin</a>
          </li>
        </ul>
      </div>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center py-0 p-8  gap-16 sm:p-20 sm:py-0 font-F1R border-box">
        {/* <div className="max-w-screen-xl px-4 py-8 mx-auto  lg:py-16 lg:px-6"> */}
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-row text-4xl">
            <b className="text-red-600 font-F1W">eaf1 </b>
            &nbsp; Everything about F1&nbsp;
            {/* <span className="font-F1W ">F1</span> */}
          </div>
          <p>
            "eaf1" is a passion project dedicated to Formula 1. As an F1 fan myself, I initially found it challenging to understand the basics and discover what truly captivates people about the sport. This website is my attempt to break down those fundamentals and share some of the fascinating aspects that drew me in. Here, I'll explore the key elements and insights that make F1 so thrilling for fans worldwide.
          </p>
        </main>
        {/* </div> */}

      </div>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          FIA
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Races
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          F1 official page →
        </a>
      </footer>
    </div>
  );
}
