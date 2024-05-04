/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import HeroBackImg from "@/assets/mainvideogradient195ff22ca768f7dc4ce8-1@2x.png"

const Entry = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[82px] box-border leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[81px] box-border max-w-full text-left text-49xl text-white font-monument-extended mq925:pb-[34px] mq925:box-border mq1350:pb-[53px] mq1350:box-border">
      <div className="flex-1 flex flex-col items-start justify-start pt-[30px] pb-[102px] pr-0 pl-[50px] box-border relative gap-[442px] bg-[url('/mainvideogradient-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq925:gap-[110px] mq925:pb-[43px] mq925:box-border mq1350:gap-[221px] mq1350:pl-[25px] mq1350:pt-5 mq1350:pb-[66px] mq1350:box-border" style={{ background: "url('/mainvideogradient-1@2x.png')"}}>
        <Image
          className="w-[1920px] h-[970px] relative object-cover hidden max-w-full z-[0]"
          alt=""
          src={HeroBackImg}
          width={100}
          height={100}
        />
        <div className="w-full h-full absolute !m-[0] top-[970px] right-[-1920px] bottom-[-970px] left-[1920px] [background:linear-gradient(174.64deg,_#000,_#3d8bff_47.14%,_#ab23ff_99.28%)] [transform:_rotate(-180deg)] [transform-origin:0_0] mix-blend-soft-light z-[1]" />
        <header className="self-stretch h-[83px] flex flex-row items-start justify-start gap-[45px] top-[0] z-[99] sticky max-w-full text-center text-lg text-white font-satoshi mq925:gap-[22px]">
          <Navbar />
          {/* <div className="self-stretch flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
            <div className="w-[5px] flex-1 relative rounded-12xs bg-purple z-[6]" />
          </div> */}
        </header>
        <div className="w-[1820px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1440px] flex flex-col items-start justify-start gap-[40px] max-w-full mq925:gap-[20px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[110%] uppercase font-normal font-inherit z-[2] mq925:text-35xl mq925:leading-[60px] mq450:text-22xl mq450:leading-[45px]">
              <p className="m-0">The world's first</p>
              <p className="m-0">platform for Tokenizing</p>
              <p className="m-0">AI blockchain projects</p>
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
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-20 px-5 box-border gap-[20px] max-w-full z-[4] mq925:pt-[34px] mq925:pb-[34px] mq925:box-border mq1350:pt-[52px] mq1350:pb-[52px] mq1350:box-border">
        
      </section>
      <div className="w-[5px] h-[6162px] relative bg-black hidden z-[7]" />
    </div>
  )
}

export default Entry;