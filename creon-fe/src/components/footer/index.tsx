import React from "react";
import Image from "next/image";
import Link from "next/link";

import TelegramIcon from "../../../public/assets/telegram.svg";
import DiscordIcon from "../../../public/assets/discord.svg";
import TwitterIcon from "../../../public/assets/twitter.svg";
import LogoIcon from "../../../public/assets/frame-692.svg";

const Footer = () => {
  return (
    <footer className="bg-black flex-1 overflow-hidden flex flex-row items-end fixed bottom-0 w-full justify-between pt-[15px] px-60 pb-[20px] box-border max-w-full gap-[20px] z-[3] text-left text-base text-white font-satoshi mq925:pl-[60px] mq925:pr-[60px] mq925:box-border mq1350:flex-wrap mq1350:pl-[120px] mq1350:pr-[120px] mq1350:box-border">
      <div className="w-[453px] flex flex-row items-start justify-start gap-[90px] max-w-full mq925:flex-wrap mq450:gap-[45px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[167px]">
          <p className="self-stretch relative leading-[21px]">
            © Creon 2023. All rights reserved.
          </p>
        </div>
        <div className="flex flex-row items-start pt-[17px] px-0 pb-0 box-border justify-start gap-[8px]">
          <Link href="/" className="cursor-pointer">
            <Image
              className="h-[34px] w-[34px] relative min-h-[34px]"
              loading="lazy"
              alt=""
              src={TelegramIcon}
            />
          </Link>
          <Link href="/" className="cursor-pointer">
            <Image
              className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
              loading="lazy"
              alt=""
              src={DiscordIcon}
            />
          </Link>

          <Link href="/" className="cursor-pointer">
            <Image
              className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
              loading="lazy"
              alt=""
              src={TwitterIcon}
            />
          </Link>
        </div>
      </div>
      <div className="w-[190px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[6px]">
          <div className="relative leading-[21px] inline-block min-w-[83px]">
            Powered by
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <Image
              className="self-stretch h-[18px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={LogoIcon}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
