import Image from "next/image";
import NavBar from "../components/NavBar";
import Link from "next/link";
import ImageFrame from "../components/ImageFrame";

export default function Home() {

    const col1 = [
        '/hallOfFame/2.jpg',
        '/hallOfFame/9.jpg',
        '/hallOfFame/6.jpg',
    ]
    const col2 = [
        '/hallOfFame/7.jpg',
        '/hallOfFame/4.jpg',
        '/hallOfFame/3.jpg',
    ]
    const col3 = [
        '/hallOfFame/1.1.jpg',
        '/hallOfFame/5.jpg',
        '/hallOfFame/8.jpg',
    ]

    return (
        <div className="justify-around">
            <NavBar type={"hall"} />

            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 m-12">
                <div class="grid gap-4">
                    {col1.map((team, index) => (
                        <div key={index}><ImageFrame src={team} /></div>
                    ))}
                </div>
                <div class="grid gap-4">
                    {col2.map((team, index) => (
                        <div key={index}><ImageFrame src={team} /></div>
                    ))}
                </div>
                <div class="grid gap-4">
                    {col3.map((team, index) => (
                        <div key={index}><ImageFrame src={team} /></div>
                    ))}
                </div>
            </div>

        </div>
    );
}


