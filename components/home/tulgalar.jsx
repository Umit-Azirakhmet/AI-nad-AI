import React from "react";
import Image from "next/image";
import bg from "public/bg.png";
import Link from "next/link";
// import Tree from "./components/Tree.js";
import "@/app/globals.css"
import Chat from "@/components/home/chat"

const tulgalar = [
    {
        name: "Akhmet Baitursynov",
        img: "/Akhmet.mp4",
        page: "/main",
        position: {
            top: "-320px", // Adjusted value to move the object up
            left: "230px",
            width: "120px",
            height: "auto",
        },
    },
    {
        name: "Magzhan Zhumabayev",
        img: "/Magzhan.mp4",
        page: "/main",
        position: {
            top: "-400px", // Adjusted value to move the object up
            left: "700px",
            width: "120px",
            height: "auto",
        },
    },
    {
        name: "Mirzhakyp Dulatov",
        img: "/mirzhakyp.mp4",
        page: "/main",
        position: {
            top: "-450px", // Adjusted value to move the object up
            left: "460px",
            width: "120px",
            height: "auto",
        },
    },
    {
        name: "Saken Seifullin",
        img: "/saken.mp4",
        page: "/main",
        position: {
            top: "-400px", // Adjusted value to move the object up
            left: "570px",
            width: "120px",
            height: "auto",
        },
    },
    {
        name: "Shakarim Kudaibergen",
        img: "/shakarim.mp4",
        page: "/main",
        position: {
            top: "-300px", // Adjusted value to move the object up
            left: "695px",
            width: "120px",
            height: "auto",
        },
    },
];

const Tulga = ({ tulga }) => {


    return (
        <Link href={"/chat"}>
            <div
                className="video-container space-y-4 hover:scale-105 duration-200"
                style={{
                    top: tulga.position.top,
                    left: tulga.position.left,
                    width: tulga.position.width,
                    height: tulga.position.height,
                }}
            >
                <video
                    src={tulga.img}
                    className="w-[300px] drop-shadow-md"
                    autoPlay
                    loop
                    muted
                    controls={false}
                    playsInline
                ></video>
                <div className="text-center font-light text-cyan-950-950 pt-4">
                    {tulga.name}
                </div>
            </div>
        </Link>
    );
};
const Tulgalar = () => {
    const toRender = tulgalar.map((tulga) => {
        return <Tulga tulga={tulga} key={tulga.name} />;
    });
    return (
        <div className="pt-60 pb-20 relative">
            <div className="text-3xl justify-between w-[1280px] m-auto">{toRender}</div>
        </div>
    );
};


export default function Home() {
    return (
        <div>
            <div className="bg-wrapper">
                <Image src="/bg.png" alt="Background Image" layout="fill" objectFit="cover" />
            </div>
            <nav />
            <main className="pt-10">
                <Tulgalar />
            </main>
        </div>
    );
}