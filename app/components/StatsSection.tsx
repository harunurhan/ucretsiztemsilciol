import { ShoppingCart, PieChart, Users } from "lucide-react";

export default function StatsSection() {
  return (
    <div className="bg-gradient-to-r from-primary-light to-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-glow space-y-4 transform hover:scale-105 transition-transform">
            <ShoppingCart className="w-12 h-12 mx-auto text-primary" />
            <p className="text-gray-800 font-medium">
              Avon üyeleri <strong style={{ fontSize: "1.2em" }}>%50</strong>{" "}
              indirimli alışveriş yaparlar.
            </p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-glow space-y-4 transform hover:scale-105 transition-transform">
            <PieChart className="w-12 h-12 mx-auto text-primary" />
            <p className="text-gray-800 font-medium">
              Avon üyeleri{" "}
              <strong style={{ fontSize: "1.2em" }}>%33</strong>{" "}satış kârı
              elde ederler.
            </p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-glow space-y-4 transform hover:scale-105 transition-transform">
            <Users className="w-12 h-12 mx-auto text-primary" />
            <p className="text-gray-800 font-medium">
              Avon üyeleri ekibinin toplam cirosu üzerinden satış primi elde
              ederler.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
