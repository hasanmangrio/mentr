import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full text-xs font-semibold border",
  {
    variants: {
      variant: {
        default: "bg-[#FFF0F2] text-[#FF385C] border-[#FFD0D8] px-3 py-1",
        secondary: "bg-[#f7f7f7] text-[#717171] border-[#DDDDDD] px-3 py-1",
        success: "bg-[#F0FFF4] text-[#276749] border-[#C6F6D5] px-3 py-1",
        warning: "bg-[#FFFBEB] text-[#92400E] border-[#FDE68A] px-3 py-1",
        destructive: "bg-[#FFF5F5] text-[#C53030] border-[#FED7D7] px-3 py-1",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
