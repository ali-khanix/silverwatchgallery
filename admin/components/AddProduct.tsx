"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

const cateogries = ["ساعت مچی مردانه", "ساعت مچی زنانه"] as const;

const colors = [
  "blue",
  "green",
  "red",
  "yellow",
  "purpule",
  "orange",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
] as const;

const formSchema = z.object({
  name: z.string().min(1, { message: "اسم محصول الزامیست" }),

  shortDescription: z
    .string()
    .min(10, { message: "توضیح مختصر محصول الزامیست" })
    .max(80, { message: "حداکثر حروب باید 80 باشد" }),
  description: z.string().min(1, { message: "توضیح کامل محصول الزامیست" }),
  price: z.string().min(1, { message: "قیمت الزامیست" }),
  category: z.enum(cateogries),
  colors: z.array(z.enum(colors)),
  images: z.record(z.enum(colors), z.string()),
});

const AddProduct = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <SheetContent side="left">
      <SheetHeader className="">
        <SheetTitle className="mb-4">اضافه کردن محصول</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={(field) => (
                  <FormItem>
                    <FormLabel>اسم محصول</FormLabel>
                    <FormControl>
                      <Input placeholder="علیرضا محمدی" {...field} />
                    </FormControl>
                    <FormDescription>اسم محصول را وارد کنید</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="shortDescription"
                render={(field) => (
                  <FormItem>
                    <FormLabel>توضیح مختصر</FormLabel>
                    <FormControl>
                      <Input placeholder="alireza@gmail.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      توضیح مختصر محصول را وارد کنید
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={(field) => (
                  <FormItem>
                    <FormLabel>شماره</FormLabel>
                    <FormControl>
                      <Input placeholder="09121234567" {...field} />
                    </FormControl>
                    <FormDescription>توضیح محصول را وارد کنید</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={(field) => (
                  <FormItem>
                    <FormLabel>لوکیشن</FormLabel>
                    <FormControl>
                      <Input placeholder="کرج" {...field} />
                    </FormControl>
                    <FormDescription>
                      فقط ادمین میتواند شماره ی شما را ببیند
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={(field) => (
                  <FormItem>
                    <FormLabel>نقش</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="نقش" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">ادمین</SelectItem>
                          <SelectItem value="user">کاربر</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      فقط کاربران تایید شده میتوانند ادمین باشند
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button>ثبت</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default AddProduct;
