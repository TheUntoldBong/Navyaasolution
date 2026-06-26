import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(20),
  city: z.string().trim().max(80).optional(),
  state: z.string().trim().max(80).optional(),
  product: z.string().trim().max(120).optional(),
  quantity: z.string().trim().max(80).optional(),
  requirement: z.string().trim().min(5).max(1500),
});

export function QuoteForm() {
  const [busy, setBusy] = useState(false);
  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = Object.fromEntries(new FormData(e.currentTarget));
        const r = schema.safeParse(fd);
        if (!r.success) {
          toast.error("Please complete required fields correctly.");
          return;
        }
        setBusy(true);
        setTimeout(() => {
          setBusy(false);
          toast.success("Thank you — our team will contact you within one business day.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
    >
      <div><Label htmlFor="name">Name *</Label><Input id="name" name="name" required className="mt-1.5" /></div>
      <div><Label htmlFor="company">Company</Label><Input id="company" name="company" className="mt-1.5" /></div>
      <div><Label htmlFor="email">Email *</Label><Input id="email" name="email" type="email" required className="mt-1.5" /></div>
      <div><Label htmlFor="phone">Phone *</Label><Input id="phone" name="phone" required className="mt-1.5" /></div>
      <div><Label htmlFor="city">City</Label><Input id="city" name="city" className="mt-1.5" /></div>
      <div><Label htmlFor="state">State</Label><Input id="state" name="state" className="mt-1.5" /></div>
      <div><Label htmlFor="product">Product of interest</Label><Input id="product" name="product" placeholder="e.g. Floor Cleaner" className="mt-1.5" /></div>
      <div><Label htmlFor="quantity">Quantity</Label><Input id="quantity" name="quantity" placeholder="e.g. 200 L / month" className="mt-1.5" /></div>
      <div className="md:col-span-2"><Label htmlFor="requirement">Requirement *</Label><Textarea id="requirement" name="requirement" required rows={4} className="mt-1.5" /></div>
      <div className="md:col-span-2">
        <Button type="submit" disabled={busy} className="bg-gradient-primary text-white shadow-elegant px-7 h-11">
          {busy ? "Sending…" : "Request Quote"}
        </Button>
      </div>
    </form>
  );
}
