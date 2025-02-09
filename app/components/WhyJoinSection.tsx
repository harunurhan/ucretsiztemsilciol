import { Heart, Star, Gem } from "lucide-react"

export default function WhyJoinSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Neden Avon'a Üye Olmalıyım?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <Heart className="w-8 h-8 mx-auto text-primary" />
              <h3 className="font-semibold text-gray-800">Güzellik Tutkusu</h3>
              <p className="text-gray-600">En yeni güzellik trendlerine ilk siz ulaşın</p>
            </div>
            <div className="text-center space-y-4">
              <Star className="w-8 h-8 mx-auto text-primary" />
              <h3 className="font-semibold text-gray-800">Kaliteli Ürünler</h3>
              <p className="text-gray-600">Dünya standartlarında test edilmiş ürünler</p>
            </div>
            <div className="text-center space-y-4">
              <Gem className="w-8 h-8 mx-auto text-primary" />
              <h3 className="font-semibold text-gray-800">Kazanç Fırsatı</h3>
              <p className="text-gray-600">Kendi işinizin patronu olun</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary-light/20 to-secondary/20 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed mb-4">
              Avon'a üye olmak, size dünya çapında ünü olan bir firmanın ürünlerini çok uygun fiyata almanızı sağlar. Bu
              aldığınız ürünler çok sayıda testten geçmiş ve beğeni kazanmış ürünler olduğu için kullanırken aklınızda
              soru işaretleri kalmaz.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Avon, sadece ürün satışı yapmaktan ziyade, kendisine üye olunması avantajını da sağlayan bir firmadır. Bu
              sayede hem kendinize hem de başkalarına kazanç sağlayabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

