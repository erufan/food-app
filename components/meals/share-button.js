"use client";

import { useFormStatus } from "react-dom";

const ShareButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending && "submitting..."}
      {!pending && "Share Meal"}
    </button>
  );
};

export default ShareButton;
