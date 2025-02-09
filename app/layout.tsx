import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AVON UCRETSIZ TEMSİLCİ OL',
  description: "Avon'un net ve güvenilir kazanç dünyasında artık sen de varsın. Kullan, kazan! Sevdiğin ve hep ihtiyacın olan ürünleri kullanırken sana sunulan indirim ve kampanyalarla tasarruf edeceksin. Tavsiye et, kazan! Güvendiğin ürünleri sevdiklerine ve tanıdıklarına da kullandır, kataloğunla satış yaparak para kazanmanın tadını çıkar. Ekip kur, kazan! Arkadaşların ve onların arkadaşları da seni gördükçe bu dünyada yer almak isteyecek. Șimdi sen de Avon temsilcisi ol, kazanmaya başla!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
