export const metadata = {
  title: "Forgot Password | Maintix",
  description: "Check the email",
};

import { CheckEmail } from "@/features/auth";
import { Suspense } from "react";

export default function CheckEmailPage() {
  return (
    <Suspense fallback={null}>
      <CheckEmail />
    </Suspense>
  );
}
