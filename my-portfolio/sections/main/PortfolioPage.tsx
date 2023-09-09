import Image from "next/image";
import { Inter } from "next/font/google";

import { useEffect, useState } from "react";

interface MyArray {
    [index: number]: string;
}

export default function PortfolioPage() {
    const title: string = "Portfolio";

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
