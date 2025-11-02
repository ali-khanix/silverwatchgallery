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
import { Textarea } from "./ui/textarea";

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
                      <Input placeholder="" {...field} />
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
                      <Input placeholder="" {...field} />
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
                    <FormLabel>توضیح محصول</FormLabel>
                    <FormControl>
                      <Textarea placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>توضیح محصول را وارد کنید</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={(field) => (
                  <FormItem>
                    <FormLabel>قیمت</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormDescription>قیمت محصول را وارد کنید</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={(field) => (
                  <FormItem>
                    <FormLabel>دسته بندی</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="یک دسته بندی را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          {cateogries.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>دسته بندی را وارد کنید</FormDescription>
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
