import { InputHTMLAttributes, forwardRef } from "react";

interface FieldProps {
  name: string;
  placeholder: string;
  type?: string;
  errorText?: string;
  label?: string;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps;
interface IMyField extends TypeInputPropsField {}

const Field = forwardRef<HTMLInputElement, IMyField>(
  ({ name, placeholder, errorText, type = "text", label, ...props }, ref) => {
    return (
      <div>
        {label && <label htmlFor="">{label}</label>}
        <input name={name} placeholder={placeholder} ref={ref} {...props} />
        {errorText && <p>{errorText}</p>}
      </div>
    );
  }
);

Field.displayName = "Field";
export default Field;
