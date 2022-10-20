import {
  DeepMap,
  FieldError,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export type InputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
  type?: string;
  placeholder?: string;
};

export const Input = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  type,
  placeholder,
}: InputProps<TFormValues>) => {
  const error = errors && errors[name];
  return (
    <>
      <input
        type={type}
        id={name}
        className={error ? "form-control is-invalid" : "form-control"}
        placeholder={placeholder}
        {...(register && register(name, rules))}
      />
      <div className="invalid-feedback">{error && error.message}</div>
    </>
  );
};
