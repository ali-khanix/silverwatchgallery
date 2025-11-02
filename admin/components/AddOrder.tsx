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

const formSchema = z.object({
  amount: z.number().min(1, { message: "مبلغ حداقل باید 1 عدد باشد" }),
  userId: z.string().min(1, { message: "آیدی کاربر الزامی است" }),
  status: z.enum(["درحال ارسال", "در حال پردازش", "موفق", "ناموفق"]),
});

const AddOrder = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <SheetContent side="left">
      <SheetHeader className="">
        <SheetTitle className="mb-4">اضافه کردن سفارش</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="amount"
                render={(field) => (
                  <FormItem>
                    <FormLabel>مبلغ</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormDescription>مبلغ را وارد کنید.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name=""
                render={(field) => (
                  <FormItem>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input placeholder="alireza@gmail.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      فقط ادمین میتواند ایمیل شما را ببیند
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={(field) => (
                  <FormItem>
                    <FormLabel>شماره</FormLabel>
                    <FormControl>
                      <Input placeholder="09121234567" {...field} />
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

export default AddOrder;
