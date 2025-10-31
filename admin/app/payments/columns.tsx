"use client";

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Payment = {
  id: string;
  amount: number;
  username: string;
  email: string;
  status: "در حال ارسال" | "در حال پردازش" | "موفق" | "ناموفق";
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>اقدام ها</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              کپی کردن کد پرداخت
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>نمایش مشتری</DropdownMenuItem>
            <DropdownMenuItem>نمایش جزئیات پرداخت</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "username",
    header: "کاربر",
  },
  {
    accessorKey: "status",
    header: "وضعیت",
    cell: ({ row }) => {
      const status = row.getValue("status");

      return (
        <div
          className={cn(
            `p-1 rounded-md w-max text-xs`,
            status === "در حال ارسال" && "bg-yellow-500/40",
            status === "موفق" && "bg-green-500/40",
            status === "ناموفق" && "bg-red-500/40"
          )}
        >
          {status as string}
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "ایمیل",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">مقدار (تومان)</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // ✅ Convert Rial → Toman
      const tomanValue = amount / 10;

      // ✅ Format with Persian digits and thousand separators
      const formatted = new Intl.NumberFormat("fa-IR").format(tomanValue);

      return (
        <div className="text-right font-medium">
          {formatted} <span className="text-muted-foreground">تومان</span>
        </div>
      );
    },
  },
];
