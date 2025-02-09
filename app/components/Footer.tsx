import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Tüm hakları saklıdır. Resmi Avon sitesi deġildir.
        </p>
        {/* <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </footer>
  );
}
