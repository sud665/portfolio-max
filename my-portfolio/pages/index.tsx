import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}>
            <h1>포트폴리오 자동배포 설정 @@ </h1>
            <p>이젠 기획단계 입니다.</p>
        </main>
    );
}
