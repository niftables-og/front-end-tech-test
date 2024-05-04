/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
// import HeroBackImg from "@/assets/mainvideogradient195ff22ca768f7dc4ce8-1@2x.png";
import SectionTwoImg from "@/assets/230627_upres (2160p) 1.svg";

const Entry = () => {

  const buttonsData = [
    {
      text: "Pre-launch investment opportunities for upcoming AI projects",
      width: "auto",
    },
    {
      text: "Free and early access to Creon built AI projects",
      width: "auto",
    },
    {
      text: "Higher allocation limits on the Creon AI Launchpad",
      width: "auto",
    },
    {
      text: "Revenue share distribution from Creon built AI projects",
      width: "auto",
    },
  ];

  return (
    <div
      className="w-full bg-black relative overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[82px] box-border leading-[normal] tracking-[normal]"
      style={{
        backgroundImage:
          "url('../../assets/mainvideogradient195ff22ca768f7dc4ce8-1@2x.png')",
      }}
    >
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[81px] box-border max-w-full text-left mq925:pb-[34px] mq925:box-border mq1350:pb-[53px] mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-[30px] pb-[102px] pr-0 pl-[50px] box-border relative gap-[442px] bg-[url('/mainvideogradient-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq925:gap-[110px] mq925:pb-[43px] mq925:box-border mq1350:gap-[221px] mq1350:pl-[25px] mq1350:pt-5 mq1350:pb-[66px] mq1350:box-border">
          <div className="w-full h-full absolute !m-[0] top-[970px] right-[-1920px] bottom-[-970px] left-[1920px] [background:linear-gradient(174.64deg,_#000,_#3d8bff_47.14%,_#ab23ff_99.28%)] [transform:_rotate(-180deg)] [transform-origin:0_0] mix-blend-soft-light z-[1]" />
          <header className="self-stretch h-[83px] flex flex-row items-start justify-start gap-[45px] top-[0] z-[99] sticky max-w-full text-center text-lg text-white mq925:gap-[22px]">
            <Navbar />
          </header>
          <div className="w-[1820px] flex flex-row items-start justify-center py-0 px-0 box-border max-w-full text-49xl text-white">
            <div className="w-[1440px] flex flex-col items-start justify-start gap-[40px] max-w-full mq925:gap-[20px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[110%] uppercase font-normal font-inherit z-[2] mq925:text-35xl mq925:leading-[60px] mq450:text-22xl mq450:leading-[45px] font-monument">
                <p className="m-0">
                  The world's first <br />
                  platform for Tokenizing
                  <br />
                  AI blockchain projects
                </p>
              </h1>
              <div className="w-[656px] box-border overflow-hidden flex flex-row items-start justify-start pt-[5px] px-0 pb-2.5 max-w-full z-[2] text-3xl font-satoshi border-t-[1px] border-solid border-blue border-b-[1px]">
                <b className="flex-1 relative leading-[29px] inline-block text-transparent !bg-clip-text [background:linear-gradient(90deg,_#3d8bff,_#ab23ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-full mq450:text-lg mq450:leading-[23px]">
                  Hold the Creon Pass NFT and earn passive income from AI Tools
                </b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[1812px] flex flex-row items-start justify-center pt-0 px-5 pb-[201px] box-border max-w-full text-left text-49xl text-white font-monument-extended mq925:pb-[85px] mq925:box-border mq1350:pb-[131px] mq1350:box-border">
        <div className="w-[700px] basis-1/4 items-start justify-start pt-[55px] px-0 pb-0 box-border min-w-[700px] max-w-full mq925:pt-9 mq925:box-border mq925:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[72px] max-w-full mq925:gap-[36px] mq450:gap-[18px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <h1 className="m-0 self-stretch h-[150px] relative text-inherit leading-[110%] uppercase font-normal font-monument font-inherit inline-block mq925:text-35xl mq925:leading-[60px] mq450:text-22xl mq450:leading-[45px]">
                creon pass <br />
                nft
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[30px] text-3xl font-satoshi">
                <div className="self-stretch h-px relative bg-grey-line" />
                <b className="self-stretch h-[87px] relative leading-[130%] flex text-transparent !bg-clip-text [background:linear-gradient(90deg,_#3d8bff,_#ab23ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] items-center mq450:text-lg mq450:leading-[23px]">
                  The Creon NFT pass unlocks access to AI projects, the Creon
                  <br />
                  launchpad, and a ticket to generate passive income through AI-
                  <br />
                  driven tools
                </b>
              </div>
              <div className="w-[522px] flex flex-col items-start justify-start gap-[10px] max-w-full">
                <div>
                  {buttonsData.map((button, index) => (
                    <button
                      key={index}
                      className="cursor-pointer pt-2.5 px-[17px] pb-3.5 bg-[transparent] rounded-md box-border overflow-hidden flex flex-row items-start justify-start max-w-full border-[1px] border-solid border-grey-line hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100"
                      style={{ width: button.width, marginTop: 15 }}
                    >
                      <div className="flex-1 relative  text-lg leading-[130%] font-satoshi text-white text-left inline-block max-w-full">
                        {button.text}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button className="w-[453px] h-[54px] rounded-md [background:linear-gradient(90deg,_#3d8bff,_#ab23ff)] cursor-pointer overflow-hidden shrink-0 flex flex-col items-center justify-start pt-4 pb-[18px] pr-5 pl-[22px] box-border gap-[20px] max-w-full text-center text-lg text-white font-satoshi">
              <p className="w-[131px] relative text-white leading-[20px] inline-block shrink-0 [debug_commit:1de1738]">
                Buy Creon Pass
              </p>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start relative bg-[url('/230627-upres-2160p-1@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[525px] max-w-full mq925:min-w-full">
          <div className="h-full basis-1/4 w-full absolute !m-[0] top-[808px] right-[-808px] bottom-[-808px] left-[808px] [background:linear-gradient(174.64deg,_rgba(61,_139,_255,_0.44),_#ab23ff)] [transform:_rotate(-180deg)] [transform-origin:0_0] mix-blend-soft-light z-[1]" />
          <Image
            className="h-[808px] flex-1 relative max-w-full overflow-hidden z-[2]"
            loading="lazy"
            alt=""
            src={SectionTwoImg}
            width={100}
            height={100}
          />
        </div>
      </section>
    </div>
  );
};

export default Entry;
