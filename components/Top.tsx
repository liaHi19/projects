"use client";
import { FC } from "react";
import Image from "next/image";

import Container from "./elements/Container";
import LinkIcon from "./elements/LinkIcon";

import { profileData } from "@/data/profileData";

const Top: FC = () => {
  return (
    <section className="pt-20 md:pt-28  bg-no-repeat  bg-top dark:bg-topDark bg-cover bg-center">
      <Container>
        <div className="min-h-[calc(50vh-5rem)] md:min-h-[calc(100vh-7rem)] flex flex-col justify-center">
          <div className="flex items-center justify-between p-5 gap-6">
            <div className=" flex-1 xl:max-w-2xl text-center dark:text-text">
              <h1 className="font-extrabold text-lg sm:text-3xl lg:text-5xl tracking-wider  font-secondary text-accent uppercase text-2xl dark:text-accent mb-3">
                {profileData.name}
              </h1>
              <h3 className="mb-5 italic text-lg sm:text-2xl lg:text-4xl text-accentLight">
                <b>{profileData.profession}</b>
              </h3>
              <p className="text-justify font-semibold text-sm sm:text-lg lg:text-xl mb-6">
                {profileData.description}
              </p>

              <ul className="flex items-center justify-center gap-4">
                {profileData.links.map((link) => (
                  <LinkIcon key={link.key} Icon={link.icon} link={link.link} />
                ))}
              </ul>
            </div>

            <div className="hidden md:flex items-center justify-center  border-border dark:border-bgAlt border-4 bg-gradient-to-b from-primary rounded-full overflow-hidden">
              <Image
                src="/avatar.png"
                alt="Natalia Hirniak"
                width={350}
                height={350}
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Top;
