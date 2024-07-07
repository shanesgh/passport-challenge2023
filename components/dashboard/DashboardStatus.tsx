"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, ChevronsUpDown } from "lucide-react";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const status = [
  {
    value: "received!",
    label: "Received!",
    icon: CheckCircle2,
    done: true,
  },
  {
    value: "processing !",
    label: "Processing",
    icon: XCircle,
    done: false,
  },
  {
    value: "awaiting shipment !",
    label: "Awaiting Shipment",
    icon: XCircle,
    done: false,
  },
  {
    value: "shipped !",
    label: "Shipped",
    icon: XCircle,
    done: false,
  },
];

export default function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className="w-[180px] justify-between border border-input bg-background hover:bg-accent hover:text-accent-foreground text-black"
        >
          {status.find((stats) => stats.done == false)!.value || "finished!"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandGroup>
            {status.map((status) => (
              <CommandItem
                key={status.value}
                onSelect={(currentValue: any) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <status.icon className={cn("mr-2 h-4 w-4")} />
                <span>{status.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
