import React from "react";
import { DEPLOY_URL } from "@/lib/constants";
import "./museum.css";

export default function museum() {
    return (
        <div className="wrapper">
            <div className="landing-container z-10 w-full max-w-xl px-5 xl:px-0">
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    <span>Welcome to Museum AI-nad-AI!</span>
                </h1>
                <p
                    className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
                    style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                    AI-nad-AI will give you the opportunity to communicate with Kazakh intelligence and other famous personalities.
                </p>
                <div
                    className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
                    style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
                >
                    <a
                        className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
                        href={DEPLOY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            className="h-4 w-4 group-hover:text-black"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 4L20 20H4L12 4Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p>Deploy to Vercel</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
