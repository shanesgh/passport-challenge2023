"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const locations = [
  {
    label: "TTPost",
    value: "TTPost",
    locations: [
      {
        lat: "10.64352",
        long: "-61.36157",
        area: "arima",
        address: "",
        info: "",
        openingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        contact: ["687-1092"],
      },
    ],
  },
  {
    label: "Immigration Division",
    value: "Immigration Division",
    locations: [
      {
        lat: "10.64352",
        long: "-61.36157",
        area: "arima",
        address: "",
        info: "",
        openingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        contact: ["687-1092"],
      },
    ],
  },
  {
    label: "Photo Studio",
    value: "Photo Studio",
    locations: [
      {
        lat: "10.64352",
        long: "-61.36157",
        area: "arima",
        address: "",
        info: "",
        openingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        contact: ["687-1092"],
      },
    ],
  },
  {
    label: "Justice of the Peace",
    value: "Justice of the Peace",
    locations: [
      {
        lat: "10.64352",
        long: "-61.36157",
        area: "arima",
        address: "",
        info: "",
        openingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        contact: ["687-1092"],
      },
    ],
  },
  {
    label: "Commissioner of Affidavits",
    value: "Commissioner of Affidavits",
    locations: [
      {
        lat: "10.64352",
        long: "-61.36157",
        area: "arima",
        address: "",
        info: "",
        openingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        contact: ["687-1092"],
      },
    ],
  },
  {
    label: "Police Station",
    value: "Police Station",
    locations: [
      {
        lat: "10.64352",
        long: "-61.36157",
        area: "arima",
        address: "",
        info: "",
        openingHours: {
          Monday: "",
          Tuesday: "",
          Wednesday: "",
          Thursday: "",
          Friday: "",
          Saturday: "",
          Sunday: "",
        },
        contact: ["687-1092"],
      },
    ],
  },
] as const;

const FormSchema = z.object({
  location: z.string({
    required_error: "Please select a location",
  }),
});

export function LocationSelect() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <>
      <div>Try our list of location Resources</div>
      <div className="flex justify-center items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="sr-only">locations label</FormLabel>
                  {/* <Button type="submit">Select a Location</Button> */}

                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[250px] justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? locations.find(
                                (location) => location.value === field.value
                              )?.label
                            : "Select Location"}
                          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[300px] z-40 p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search location..."
                          className="h-9"
                        />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {locations.map((location) => (
                            <CommandItem
                              value={location.label}
                              key={location.value}
                              onSelect={() => {
                                form.setValue("location", location.label);
                                // rendermap location
                              }}
                            >
                              {location.label}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  location.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription className="sr-only">
                    The dropdown for each location
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </>
  );
}
