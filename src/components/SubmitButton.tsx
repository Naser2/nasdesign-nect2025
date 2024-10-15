import type { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";

// Constrain ButtonProps type to match valid button types
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

type Props = ButtonProps;

function SubmitButton({ children, ...props }: Props) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} {...props}>
      {children}
    </button>
  );
}

export default SubmitButton;
