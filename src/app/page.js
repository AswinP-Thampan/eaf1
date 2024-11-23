import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="justify-around">
      <NavBar />
      <div className="flex flex-col justify-around items-center font-F1R h-fit">

        <div className="grid items-center justify-items-center p-8 font-F1R border-box text-[8px] xs:text-[8px] sm:text-[14px] max-w-9/12">
          {/* <div className="max-w-screen-xl px-4 py-8 mx-auto  lg:py-16 lg:px-6"> */}
          <main className="flex flex-col gap-4 md:gap-8 row-start-2  sm:items-start max-w-9/12">
            <div className="flex flex-row text-xs sm:text-3xl md:text-4xl text-wrap">
              <b className="text-site_text font-F1W">eaf1&nbsp;</b>
              <p>Everything about F1&nbsp;</p>
            </div>
            <div>
            &#x201C;eaf1&#x201D; is a passion project dedicated to Formula 1. As a new F1 fan myself, I found it challenging to understand the basics and discover what truly captivates people about the sport. This website is my attempt to break down those fundamentals and share some of the fascinating aspects that drew me in. Here, I&apos;ll explore the key elements and insights that make F1 so thrilling for fans worldwide.
            </div>
            <b className="text-site_text font-F1W">What is Formula 1?</b>

            <div>
              Formula 1 (F1) is the highest class of international single-seater auto racing, governed by the Fédération Internationale de l&apos;Automobile (FIA). It involves a series of races known as Grand Prix, held across the world on specially designed circuits or closed city streets. F1 cars are engineering marvels—lightweight, aerodynamically sophisticated, and capable of reaching speeds over 200 mph (322 km/h).
            </div>


            <b className="text-site_text font-F1W">Why is F1 Popular?</b>
            <div>
              F1’s popularity comes from its unique mix of high-tech innovation, skill, and danger. It’s a global sport with a rich history, and each season is filled with intrigue, from intense rivalries and drama on and off the track to breakthrough technological advancements.
            </div>

            {/* <b className="text-site_text font-F1W">What and Who is FIA?</b>
            <div>
              The FIA stands for the <b>Fédération Internationale de l'Automobile.</b> It's the governing body for world motorsport and is responsible for setting rules, regulations, and standards for various forms of racing, including Formula 1. Founded in 1904, the FIA oversees the organization, safety, and integrity of international motorsport events, and promotes responsible and sustainable mobility globally.
            </div>
            <ol className="list-inside list-decimal">In Formula 1, the FIA plays a crucial role in:
              <li className="mb-2 mt-4"><b>Setting and enforcing regulations:</b> The FIA sets technical and sporting rules that teams and drivers must follow.</li>
              <li className="mb-2"><b>Ensuring safety:</b> The FIA continuously works on improving safety for drivers, teams, and spectators through innovations and strict safety protocols.</li>
              <li className="mb-2"><b>Race stewardship:</b> The FIA appoints race officials and stewards to oversee each F1 race, ensuring the rules are followed and addressing incidents during races.</li>
            </ol> */}



            <b className="text-site_text font-F1W ">How does one win in F1</b>
            <div>
              Winning in F1 can mean <b>winning a single race</b> or aiming for the season-long goal of winning the <b>Driver’s Championship</b> or <b>Constructor’s Championship.</b>
            </div>
            <div></div>
          </main>
          {/* </div> */}

        </div>

      </div>
      <footer className="row-start-3 flex gap-3 md:gap-6 flex-wrap items-center justify-center font-F1R text-[8px] xs:text-[8px] sm:text-[14px] ">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
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
          href="#"
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
          href="https://www.formula1.com/"
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
      {/* <div className="bg-site_text text-site_text w-8 h-screen fixed -top-0 -right-0">.</div> */}
    </div>
  );
}
