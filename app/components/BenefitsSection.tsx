export default function BenefitsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Avon Üyeliğinin Faydaları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <svg
                className="w-12 h-12 mx-auto text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <h3 className="text-lg font-medium">Ürünlerde İndirim</h3>
              <p className="text-gray-600">Avon üyeleri, ürünlerde özel indirimlerden yararlanır.</p>
            </div>
            <div className="space-y-4">
              <svg
                className="w-12 h-12 mx-auto text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-medium">Ek Kazanç</h3>
              <p className="text-gray-600">Ürün satışlarından ve ekip gelirinizden ek kazanç elde edin.</p>
            </div>
            <div className="space-y-4">
              <svg
                className="w-12 h-12 mx-auto text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-lg font-medium">Esnek Çalışma</h3>
              <p className="text-gray-600">Kendi zamanınızda ve istediğiniz yerde çalışın.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

