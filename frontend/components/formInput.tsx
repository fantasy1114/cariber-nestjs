import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface FormInputProps {
  id: string;
  label?: string;
  description?: string;
  type: HTMLInputTypeAttribute;
  required: boolean;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  minLength: number;
}

export default function FormInput({ id,
  label,
  type,
  description,
  required,
  placeholder,
  onChange,
  minLength }: FormInputProps) {

  return (
    <div className={`${id}-field form-group`}>
      {label && (
        <label className="control-label string color-black" htmlFor={`form_submission_${id}`}>
          {label} {required && (<span className="color-red">*</span>)}
        </label>
      )}
      {description && (
        <p className="color-black f-s-12">
          {description}
        </p>
      )}
      <input id={`form_submission_${id}`}
        className="form-control"
        type={type}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        minLength={minLength} />
    </div>
  )
}