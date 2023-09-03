import confusedSpaceMan from "../../../public/svgs/password-recovery/confused-space-man.svg";
import Image from "next/image";
export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full h-screen flex items-center justify-center relative">
      {children}
    </section>
  );
}
