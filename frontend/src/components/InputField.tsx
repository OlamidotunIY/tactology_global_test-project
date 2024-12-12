"use client"

import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  showError?: boolean;
  label?: string;
  important?: boolean;
}

export const InputField = ({
  error,
  showError,
  label,
  ...props
}: Props) => {
  return (
    <div>
      <div className="grid gap-2">
        <Label htmlFor={props.name}>
          {label}
          {props.required && <span className="text-red-600">*</span>}
        </Label>
        <Input {...props} />
      </div>

      {showError &&
        error &&
        error.split(",").map((error, index) => (
          <div key={index} className="flex items-center mt-2 gap-2">
            {/* <Cross /> */}
            <span className="text-xs text-red-600">{error}</span>
          </div>
        ))}
    </div>
  );
};
