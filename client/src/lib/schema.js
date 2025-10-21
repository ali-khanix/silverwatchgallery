import { z } from "zod";

export const shippingFormSchema = z.object({
  name: z.string().min(1, "اسم الزامیست!"),
  email: z.string().min(1, "ایمیل اشتباه است"),
  phone: z
    .string()
    .min(7, "شماره باید بین 7 تا 10 رقم باشد")
    .regex(/^\d+$/, "شماره باید عدد باشد"),

  address: z.string().min(1, "آدرس الزامیست"),
  city: z.string().min(1, "اسم شهر الزامیست"),
});

export const paymentFormSchema = z.object({
  cardHolder: z.string().min(1, "اسم روی کارت الزامیست"),
  cardNumber: z.string().regex(/^\d{16}$/, "شماره کارت باید ۱۶ رقم باشد"),
  expirationDate: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "تاریخ انقضاء باید به فرمت ماه/سال باشد (مثلاً 05/27)"
    ),

  cvv: z.string().regex(/^\d{3,4}$/, "CVV باید ۳ یا ۴ رقم باشد"),
});
