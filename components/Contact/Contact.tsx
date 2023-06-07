import { FC } from "react";

import ContactForm from "./ContactForm";

import Container from "../elements/Container";
import Heading from "../elements/Heading";

import CommunicationSvg from "@/assets/CommunicationSvg";

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <section id="contact">
      <Container>
        <Heading>Contact</Heading>
        <div className="flex items-center justify-between gap-10">
          <div>
            <h3>Let's have a conversation</h3>
            <CommunicationSvg />
          </div>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
