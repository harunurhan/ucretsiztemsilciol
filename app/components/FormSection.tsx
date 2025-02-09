import RegistrationForm from "./RegistrationForm";

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
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
