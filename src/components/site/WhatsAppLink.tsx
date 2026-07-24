import type { AnchorHTMLAttributes, ReactNode } from "react";
import { CLINIC } from "@/lib/site-data";

type WhatsAppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

export function WhatsAppLink({ children, target = "_blank", rel = "noopener noreferrer", ...props }: WhatsAppLinkProps) {
  return (
    <a {...props} href={CLINIC.whatsapp} target={target} rel={rel}>
      {children}
    </a>
  );
}