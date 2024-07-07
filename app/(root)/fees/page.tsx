"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import clsx from "clsx";
import useSidebar from "@/hooks/useSidebar";
import { useState } from "react";

const items = [
  {
    id: "Machine Readeable Passport Adult",
    label: "Machine Readeable Passport Adult",
    amount: 250,
  },
  {
    id: "Machine Readeable Passport Child (Two Years and over but Under Sixteen)",
    label:
      "Machine Readeable Passport Child (Two Years and over but Under Sixteen)",
    amount: 250,
  },
  {
    id: "Machine Readeable Passport Child Under Two Years",
    label: "Machine Readeable Passport Child Under Two Years",
    amount: 0,
  },
  {
    id: "Special 48-page Passport",
    label: "Special 48-page Passport",
    amount: 350,
  },
  {
    id: "Valid lost or misplaced Possport (Adult)",
    label: "Valid lost or misplaced Possport (Adult)",
    amount: 1000,
  },
  {
    id: "Valid lost or misplaced Possport (Child)",
    label: "Valid lost or misplaced Possport (Child)",
    amount: 1000,
  },
  {
    id: "Valid lost or misplaced Possport (Child Under Two Years)",
    label: "Valid lost or misplaced Possport (Child Under Two Years)",
    amount: 0,
  },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Test",
  }),
});

export default function Fees() {
  const { sidebarOpen } = useSidebar();
  const { toast } = useToast();
  const [tally, setTally] = useState<number>(250);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["Machine Readeable Passport Adult"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    //memoize & check for zero amount
    let total = data.items.reduce(
      (a, c) => a + items.find((item) => item.id === c)!.amount || 0,
      0
    );
    setTally(total);
    toast({
      title: "Overview of Selected Options:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(data.items, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <div className="h-[calc(100vh-85px)]">
      <div
        className={clsx(
          `h-full lg:block flex lg:space-x-4 space-x-2`,
          sidebarOpen ? "pl-80" : "pl-16"
        )}
      >
        <header className="font-extralight text-[50px] text-center mb-14">
          Estimate Your Total Fees
        </header>

        <div className=" flex items-start justify-center space-x-6 lg:space-x-10 p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base">
                        Description and Fees
                      </FormLabel>
                      <FormDescription>
                        Get an estimate of your total cost before visiting the
                        office
                      </FormDescription>
                    </div>
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value: any) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal mr-1">
                                {item.amount}
                              </FormLabel>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">tally</Button>
            </form>
          </Form>
          <div className="w-1/2 ">
            <div className="border border-b border-gray-200 mb-2 w-full" />
            <div className="text-[45px] font-extralight  ">
              <span className="hover:animate-bounce text-[50px]">$</span>
              {tally}.00
            </div>
            <div className="border mt-2 border-b border-gray-200 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
