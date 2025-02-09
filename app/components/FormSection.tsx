import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { get18YearsAgo } from "@/lib/utils";
import { Sparkles } from "lucide-react";

export default function FormSection() {
  return (
    <div className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${encodeURI(
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg.jpg-JmMdfNTzd0ldurDUjsC6k6uHx5QFSN.jpeg"
          )})`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white space-y-2 mb-8">
            <span className="block">AVON</span>
            <span className="block text-primary-light">BAŞVURUSU</span>
          </h1>

          <form className="bg-white/10 backdrop-blur-md rounded-lg p-6 space-y-4 shadow-glow">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Ad Soyad
              </Label>
              <Input
                id="name"
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
                type="tel"
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
                id="birthdate"
                type="date"
                className="bg-white/10 text-white border-white/20 focus:border-white"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white group transition-all duration-300">
              HEMEN BAŞVUR
              <Sparkles className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
