"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a phone number"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(5, "Tell us a bit more"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    const webhook = process.env.NEXT_PUBLIC_GHL_CONTACT_WEBHOOK_URL;
    if (!webhook) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source: "gregs-cuts.com/contact",
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[var(--color-surface)] border border-[var(--color-accent)] p-8 text-center">
        <CheckCircle2 size={32} className="mx-auto text-[var(--color-accent)]" />
        <h3 className="mt-4 font-display text-3xl text-[var(--color-ink)]">Got it.</h3>
        <p className="mt-2 text-[var(--color-ink-muted)]">
          We&rsquo;ll get back to you soon. For appointments, the booking page is faster.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Field
        label="Name"
        id="name"
        error={errors.name?.message}
        {...register("name")}
      />
      <Field
        label="Phone"
        id="phone"
        type="tel"
        error={errors.phone?.message}
        {...register("phone")}
      />
      <Field
        label="Email"
        id="email"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />
      <div>
        <label htmlFor="message" className="eyebrow block mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full bg-[var(--color-surface)] border border-[var(--color-line)] focus:border-[var(--color-accent)] outline-none px-4 py-3 text-[var(--color-ink)]"
          {...register("message")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-[var(--color-danger)]">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-2 text-sm text-[var(--color-danger)]">
          <AlertTriangle size={16} className="mt-0.5" />
          Something went wrong. Try again or call us.
        </div>
      ) : null}

      <Button size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}

type FieldProps = {
  label: string;
  id: string;
  type?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Field = function Field(props: FieldProps) {
  const { label, id, type = "text", error, ...rest } = props;
  return (
    <div>
      <label htmlFor={id} className="eyebrow block mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full bg-[var(--color-surface)] border border-[var(--color-line)] focus:border-[var(--color-accent)] outline-none px-4 py-3 text-[var(--color-ink)]"
        {...rest}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm text-[var(--color-danger)]">
          {error}
        </p>
      ) : null}
    </div>
  );
};
