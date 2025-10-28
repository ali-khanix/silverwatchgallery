import { iranYekan } from "@/public/font/iran-yekan-web/fonts";

import "./globals.css";

export const metadata = {
  title: "پنل ادمین گالری ساعت سیلور",
  description: "فروشگاه ساعت های مردانه و زنانه",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranYekan.className} antialiased flex`}>
        {children}
      </body>
    </html>
  );
}
