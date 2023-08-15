import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
    const title: string = "{Hello World :)}";

    return (
        <main className="flex h-screen w-screen flex-col items-center justify-center">
            <h1>{title}</h1>
        </main>
    );
}
