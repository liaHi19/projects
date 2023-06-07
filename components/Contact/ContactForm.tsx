"use client";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Field from "../elements/Field";
import MyTextarea from "../elements/MyTextarea";

import { IContactForm } from "@/types/contactForm";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactForm>();

  const onSubmit: SubmitHandler<IContactForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        placeholder="Your Name"
        {...register("name", {
          required: "Name is required",
          maxLength: { value: 30, message: "Max length is 30" },
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Field name should be text",
          },
        })}
        label="Name"
        errorText={errors?.name?.message}
      />
      <Field
        placeholder="Your email"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        label="Email"
        errorText={errors?.email?.message}
      />
      <MyTextarea
        placeholder="Your Message"
        {...register("message", {
          required: "Message is required",
          maxLength: { value: 1000, message: "Max length is 1000" },
        })}
        label="Message"
        errorText={errors?.message?.message}
      />
      <a
        href={`mailto:gn.natalia19@gmail.com?Subject=${data.email}&body=${data.message}`}
      >
        {" "}
        <button type="submit">Send a message</button>
      </a>
    </form>
  );
};

export default ContactForm;
