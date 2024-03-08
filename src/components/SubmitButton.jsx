"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ thing }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-green-600 m-8 rounded-md w-24"
    >
      {pending ? `Adding ${thing}...` : `Add ${thing}`}
    </button>
  );
}
