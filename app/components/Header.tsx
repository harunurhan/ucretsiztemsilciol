import Link from "next/link"
import { MessageCircleQuestion } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm py-4 sticky top-0 z-50 shadow-glow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            UCRETSIZ TEMSİLCİ OL
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="https://wa.me/905062365626" className="text-gray-600 hover:text-primary transition-colors">
              <MessageCircleQuestion style={{ display: "inline-block", marginRight: 4}}/>
              <span>WHATSAPP</span>
            </Link>
            <Link href="https://kozmetik.avon.com.tr/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
              AVON
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

