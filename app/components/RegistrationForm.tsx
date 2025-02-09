'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { get18YearsAgo } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function RegistrationForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        fetch("/api/submit", {
          body: formData,
          method: "POST",
        })
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
      <Button className="w-full bg-primary hover:bg-primary/90 text-white group transition-all duration-300">
        HEMEN BAŞVUR
        <Sparkles className="ml-2 h-4 w-4 group-hover:animate-pulse" />
      </Button>
    </form>
  );
}
