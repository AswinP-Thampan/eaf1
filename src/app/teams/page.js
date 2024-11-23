import Image from "next/image";
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function Home() {

    const teams = [
        { name: "McLaren", src: "/team/McLaren.jpg", href: "/teams/mclaren" },
        { name: "Red Bull", src: "/team/RedBull.jpg", href: "/teams" },
        { name: "Mercedes", src: "/team/Mercedes.jpg", href: "/teams/mercedes" },
        { name: "Aston Martin", src: "/team/Aston.jpg", href: "/teams" },
        { name: "Scuderia Ferrari", src: "/team/Ferrari.jpg", href: "/teams/ferrari" },
        { name: "Alpine", src: "/team/Alpine.jpg", href: "/teams" },
        { name: "Haas", src: "/team/Haas.jpg", href: "/teams" },
        { name: "Alpha Tauri", src: "/team/AlphaTauri.jpg", href: "/teams" },
        { name: "Williams", src: "/team/Williams.jpg", href: "/teams" },
        { name: "Alfa Romeo", src: "/team/Alfa.jpg", href: "/teams" },
    ]

    return (
        <div className="justify-around">
            <NavBar />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8 w-full h-full ">
                {teams.map((team, index) => (
                    <div key={index} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-700">
                        <Link className="flex flex-col gap-4 items-center md:p-4 py-2 block text-black font-F1R font-semibold" href={team.href}>
                            <div className="w-full h-full relative">
                                <img
                                    className="w-full h-full object-cover rounded-3xl cursor-pointer filter shadow-2xl"
                                    src={team.src}
                                    alt={team.name}
                                />
                            </div>
                            <div>{team.name}</div>
                        </Link>
                    </div>
                ))}
            </div>


        </div>
    );
}


