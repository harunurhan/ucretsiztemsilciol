"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { get18YearsAgo } from "@/lib/utils";
import { CheckCircle, CircleAlert, Sparkles } from "lucide-react";
import { useState } from "react";

const localStorageKeyPrefix = "previousSubmissions_V1";

function getLocalStorageKey(name: string, phone: string): string {
  return `${localStorageKeyPrefix}_${name}_${phone}`;
}

function hasPreviousSubmission(name: string, phone: string): boolean {
  const localStorageKey = getLocalStorageKey(name, phone);
  return !!localStorage.getItem(localStorageKey);
}

function saveSuccessfulSubmission(name: string, phone: string): void {
  const localStorageKey = getLocalStorageKey(name, phone);
  localStorage.setItem(localStorageKey, "true");
}

export default function RegistrationForm() {
  const [isSubmitting, setSubmitting] = useState(false);
  const [hasSubmitted, setSubmitted] = useState(false);
  const [hasError, setError] = useState(false);

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const name = formData.get("name")?.toString();
        const phone = formData.get("phone")?.toString();

        if (!name || !phone) {
          // TODO: Show error message to the user
          console.error("Name or phone is missing");
          return;
        }

        if (hasPreviousSubmission(name, phone)) {
          // TODO: Show error message to the user
          console.error("Already submitted");
          return;
        }

        try {
          setSubmitting(true);
          setError(false);
          setSubmitted(false);

          const response = await fetch("/api/submit", {
            body: formData,
            method: "POST",
          });

          if (response.ok) {
            saveSuccessfulSubmission(name, phone);
            setSubmitted(true);
          } else {
            setError(true);
          }
        } catch (error) {
          setError(true);
        } finally {
          setSubmitting(false);
        }
      }}
      className="bg-white/10 backdrop-blur-md rounded-lg p-6 space-y-4 shadow-glow"
    >
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          Ad Soyad
        </Label>
        <Input
          required
          id="name"
          name="name"
          className="bg-white/10 text-white border-white/20 focus:border-white placeholder:text-white/50"
          placeholder="Adınız Soyadınız"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">
          Telefon
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          className="bg-white/10 text-white border-white/20 focus:border-white placeholder:text-white/50"
          placeholder="05XX XXX XX XX"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="birthdate" className="text-white">
          Doğum Tarihi
        </Label>
        <Input
          max={get18YearsAgo().toISOString().split("T")[0]}
          required
          id="birthdate"
          name="birthdate"
          type="date"
          className="bg-white/10 text-white border-white/20 focus:border-white"
        />
      </div>
      <Button
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white group transition-all duration-300"
      >
        HEMEN BAŞVUR
        <Sparkles className="ml-2 h-4 w-4 group-hover:animate-pulse" />
      </Button>
      {hasSubmitted && (
        <p className="text-white text-center">
          <CheckCircle style={{ display: "inline-block" }} />{" "}
          <span>
            Basvurunuz için teşekkür ederiz. En kısa sürede sizinle iletişime
            geçeceğiz.
          </span>
        </p>
      )}
      {hasError && (
        <p className="text-white text-center">
          <CircleAlert style={{ display: "inline-block" }} />{" "}
          <span>
            Basvurunuz bir hata nedeniyle gönderilemedi. Lütfen tekrar deneyin.
          </span>
        </p>
      )}
    </form>
  );
}
