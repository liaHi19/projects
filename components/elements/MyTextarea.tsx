import { FC, InputHTMLAttributes, forwardRef } from "react";

interface MyTextareaProps {
  name: string;
  placeholder: string;
  errorText?: string;
  label?: string;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLTextAreaElement> &
  MyTextareaProps;
interface IMyTextarea extends TypeInputPropsField {}

const MyTextarea = forwardRef<HTMLTextAreaElement, MyTextareaProps>(
  ({ name, placeholder, errorText, label, ...props }, ref) => {
    return (
      <div>
        {label && <label>{label}</label>}
        <textarea name={name} placeholder={placeholder} ref={ref} {...props} />
        {errorText && <p>{errorText}</p>}
      </div>
    );
  }
);

MyTextarea.displayName = "MyTextarea";

export default MyTextarea;
