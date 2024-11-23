import Image from "next/image";
import NavBar from "../components/NavBar";
import Link from "next/link";

export default function Home() {

    const teams = [
        { name: "McLaren", src: "https://dl.memuplay.com/new_market/img/mclaren.mobile.icon.2023-02-16-09-21-09.png", href: "/teams/mclaren" },
        { name: "Red Bull", src: "https://wallpapers.com/images/high/red-bull-pictures-zo19obew3axn6w2g.webp", href: "/teams" },
        { name: "Mercedes", src: "https://seeklogo.com/images/M/mercedes-amg-f1-logo-1ED622D95E-seeklogo.com.png", href: "/teams/mercedes" },
        { name: "Aston Martin", src: "https://media.astonmartin.com/wp-content/uploads/2021/01/588489-scaled-1500x1370.jpg", href: "/teams" },
        { name: "Scuderia Ferrari", src: "https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2023%2F12%2F17092406%2Fferrari-badge.jpg", href: "/teams/ferrari" },
    ]

    return (
        <div className="justify-around">
            <NavBar />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8 w-full h-full">
                {teams.map((team, index) => (
                    <div key={index} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-700">
                        <Link className="flex flex-col gap-4 items-center md:p-4 py-2 block text-black font-F1R font-semibold" href={team.href}>
                            <div className="w-full h-full relative">
                                <img
                                    className="w-full h-full object-cover rounded-3xl cursor-pointer filter "
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


