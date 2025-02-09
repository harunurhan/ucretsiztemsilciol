import TopBanner from "./components/TopBanner"
import Header from "./components/Header"
import FormSection from "./components/FormSection"
import StatsSection from "./components/StatsSection"
import WhyJoinSection from "./components/WhyJoinSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />
      <main>
        <FormSection />
        <StatsSection />
        <WhyJoinSection />
      </main>
      <Footer />
    </div>
  )
}

