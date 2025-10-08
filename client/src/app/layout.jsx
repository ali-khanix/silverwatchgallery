import Navbar from "@/components/Navbar";
import { iranYekan } from "../../public/font/iran-yekan-web/fonts";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "گالری ساعت سیلور",
  description: "فروشگاه ساعت های مردانه و زنانه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${iranYekan.className} antialiased`}>
        <div className="mx-auto p-4 sm:px-0 sm:max-w-xl  md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
