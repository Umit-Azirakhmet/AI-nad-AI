
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import React from "react";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="wrapper">
      <div className="landing-container z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Welcome to Museum AI-nad-AI!</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            AI-nad-AI will give you the opportunity to communicate with Kazakh intelligence and other famous personalities.
          </Balancer>
        </p>
      </div>
    </div>
  );
}
