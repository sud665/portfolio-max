import Image from "next/image";
import { Inter } from "next/font/google";

import { useEffect, useState } from "react";

interface MyArray {
    [index: number]: string;
}

export default function MainBanner() {
    const title: string = "Hello";

    // useEffect(() => {
    //     const mainTitle: any = document.querySelector(".main-title .pr-main");

    //     const letters: MyArray = ["JavaScript", "React", "Next.js", "node.js", "JAVA"];

    //     const speed: number = 200;
    //     let i: number = 0;

    //     function wait(ms: number) {
    //         return new Promise((res) => setTimeout(res, ms));
    //     }

    //     const typing = async () => {
    //         const letter = letters[i].split("");

    //         while (letter.length) {
    //             await wait(speed);
    //             mainTitle.textContent += letter.shift();
    //         }

    //         // 잠시 대기
    //         await wait(1500);

    //         // 지우는 효과
    //         remove();
    //     };

    //     // 글자 지우는 효과
    //     const remove = async () => {
    //         const letter = letters[i].split("");

    //         while (letter.length) {
    //             await wait(speed);

    //             letter.pop();
    //             mainTitle.textContent = letter.join("");
    //         }

    //         // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    //         i = !letters[i + 1] ? 0 : i + 1;
    //         setTimeout(() => typing(), 1500); // 수정된 부분
    //     };

    //     // 초기 실행
    //     setTimeout(() => typing(), 1500);
    // }, []);

    return (
        <main className="flex h-screen w-screen flex-col items-center justify-center">
            <h1 className="main-title">
                {title}
                {/* <span className="pr-main"></span> */}
            </h1>
            <div className="p-6  flex border-2 border-white">
                <ul>
                    <li>name : </li>
                    <li>hp : </li>
                    <li>email :</li>
                </ul>
            </div>
        </main>
    );
}
