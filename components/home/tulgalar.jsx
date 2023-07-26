import React from "react";
import Image from "next/image";
import bg1 from "public/bg1.png";
import Link from "next/link";
// import Tree from "./components/Tree.js";
import "@/app/globals.css"
import Chat from "@/components/home/chat"
//sdkgsmgsdkmlsdgmslgksdg
const tulgalar = [
    {
        name: "Akhmet Baitursynov",
        img: "/Akhmet.mp4",
        page: "/main",
        position: {
            top: "-10px",
            left: "-280px",
            width: "auto",
            height: "400px",
        },
    },
    {
        name: "Magzhan Zhumabayev",
        img: "/Magzhan.mp4",
        page: "/main",
        position: {
            top: "-10px",
            left: "840px",
            width: "auto",
            height: "400px",
        },
    },
    {
        name: "Mirzhakyp Dulatov",
        img: "/mirzhakyp.mp4",
        page: "/main",
        position: {
            top: "-790px",
            left: "460px",
            width: "auto",
            height: "400px",
        },
    },
    {
        name: "Saken Seifullin",
        img: "/saken.mp4",
        page: "/main",
        position: {
            top: "-1200px",
            left: "1200px",
            width: "auto",
            height: "400px",
        },
    },
    {
        name: "Shakarim Kudaibergen",
        img: "/shakarim.mp4",
        page: "/main",
        position: {
            top: "-1200px",
            left: "130px",
            width: "auto",
            height: "400px",
        },
    },
];

const Tulga = ({ tulga }) => {
    return (
        <Link href={`/chat/${tulga.name}`}>
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
                <div
                    className="text-center font-light text-cyan-950-950 pt-4"
                //style={{ color: "white" }} // Adding inline style for white color
                >
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
                <Image src="/bg1.png" alt="Background Image" layout="fill" objectFit="cover" />
            </div>
            <nav />
            <main className="pt-10">
                <Tulgalar />
            </main>
        </div>
    );
}