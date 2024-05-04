"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/assets/logo.svg";

const Navbar = () => {
  return (
    <header className="flex-1 flex flex-row items-end justify-between w-full gap-[20px] text-center text-white font-satoshi">
      <div className="w-[140px] flex flex-col items-start justify-end pt-5 pl-7 box-border">
        <Link href="/">
          <Image
            className="self-stretch h-[39px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={NavLogo}
          />
        </Link>
      </div>
      <div className="w-[791px] flex flex-row items-start justify-start p-0 pr-7 gap-[58px] max-w-full mq450:gap-[29px] mq1825:w-[659px]">
        <div className="flex-1 flex flex-col items-start justify-start box-border w-full">
          <div className="self-stretch flex flex-row items-start justify-end gap-[40px] mq925:gap-[20px]">
            <div className="flex flex-row items-center justify-center text-left">
              <b className="relative leading-[20px] inline-block min-w-[95px] whitespace-nowrap">
                Creon Pass
              </b>
            </div>
            <div className="w-[92px] flex flex-row items-start justify-start gap-[4px]">
              <b className="flex-1 relative leading-[20px] inline-block min-w-[50px]">
                Token
              </b>
              <div className="rounded-81xl bg-black overflow-hidden flex flex-row items-center justify-center pt-0.5 px-1 pb-px text-3xs text-purple">
                <b className="w-[30px] relative leading-[110%] inline-block min-w-[30px]">
                  SOON
                </b>
              </div>
            </div>
            <div className="w-[136px] flex flex-row items-start justify-start gap-[4px]">
              <b className="flex-1 relative leading-[20px] inline-block min-w-[94px] whitespace-nowrap">
                AI Revenue
              </b>
              <div className="rounded-81xl bg-black overflow-hidden flex flex-row items-center justify-center pt-0.5 px-1 pb-px text-3xs text-purple">
                <b className="w-[30px] relative leading-[110%] inline-block min-w-[30px]">
                  SOON
                </b>
              </div>
            </div>
            <div className="w-[158px] flex flex-row items-start justify-start gap-[4px]">
              <b className="flex-1 relative leading-[20px] inline-block min-w-[116px] whitespace-nowrap">
                AI Launchpad
              </b>
              <div className="rounded-81xl bg-black overflow-hidden flex flex-row items-center justify-center pt-0.5 px-1 pb-px text-3xs text-purple">
                <b className="w-[30px] relative leading-[110%] inline-block min-w-[30px]">
                  SOON
                </b>
              </div>
            </div>
            <div className="h-11 w-[132px] text-white rounded-md box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[11px] px-7 pb-[13px] gap-[13px] border-[2px] border-solid border-white mq1825:hidden">
              <b className="relative leading-[20px] inline-block min-w-[72px] shrink-0">
                Connect
              </b>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
