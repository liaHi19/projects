import { FC } from "react";
import Image from "next/image";

import { FiLinkedin } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import Container from "./elements/Container";

const Top: FC = () => {
  return (
    <section className="pt-20 md:pt-28">
      <Container>
        <div className="min-h-[calc(50vh-5rem)] md:min-h-[calc(100vh-7rem)] flex flex-col justify-center">
          <div className="flex items-center justify-between p-5 gap-6">
            <div className=" flex-1 xl:max-w-2xl text-center dark:text-text">
              <h1 className="font-bold text-lg sm:text-3xl  lg:text-5xl  font-secondary text-primary uppercase text-lg dark:text-primary mb-1">
                Nataliia Hirniak
              </h1>
              <h3 className="mb-5 italic text-lg sm:text-2xl lg:text-4xl">
                <b>Software Developer</b>
              </h3>
              <p className="text-justify font-semibold text-sm sm:text-lg lg:text-xl mb-6">
                Skilled developer with a strong command over React.js and
                Node.js, equipped to build exceptional web applications. Feel
                free to reach out and discover more about my work.
              </p>

              <ul className="flex items-center justify-center gap-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/nataliia-hirniak-075537255/"
                    target="_blank"
                  >
                    <FiLinkedin className="text-2xl hover:text-primary transition-transition" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/liaHi19" target="_blank">
                    <FaGithub className="text-2xl hover:text-primary transition-transition" />
                  </a>
                </li>
                <li>
                  <a href="mailto:gn.natalia19@gmail.com" target="_blank">
                    <GrMail className="text-2xl hover:text-primary transition-transition" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex items-center justify-center  border-border dark:border-bgAlt border-4 bg-gradient-to-b from-primary rounded-full overflow-hidden">
              <Image
                src="/avatar.png"
                alt="Natalia Hirniak"
                width={300}
                height={300}
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
