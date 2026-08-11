export const metadata = {
  title: "Accept Invite | Maintix",
};

import { VerifyInvitation } from "@/features/auth";
import { Suspense } from "react";

export default function AcceptInvitationPage() {
  return (
    <Suspense>
      <VerifyInvitation />
    </Suspense>
  );
}
