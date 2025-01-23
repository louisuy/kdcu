import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <nav className="bg-stone-950">
          <div className="flex flex-col sm:flex-row justify-between items-center px-8">
            {/* Navigation Links */}
            <ul className="hidden sm:flex sm:flex-row gap-12 text-white text-lg sm:text-2xl">
              <li>
                <Link href="/" className="hover:underline">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  ABOUT
                </Link>
              </li>

              {/* <li>
                <Link href="#" className="hover:underline">
                  OUR STORY
                </Link>
              </li> */}
              <li>
                <Link href="https://forms.gle/adbZ6EnmkahXntrE7" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  REGISTER
                </Link>
              </li>
            </ul>

            {/* Logo */}
            <div className="mt-4 sm:mt-0">
              <Image
                src="/greyscalelogo.png"
                alt="KDCU Logo"
                width={80}
                height={80}
                priority
              />
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-stone-950 text-white py-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
            {/* Column 1 - Takes up the maximum available width */}
            <div className="flex flex-col items-center justify-center mb-8 md:mb-0 w-full md:w-auto flex-grow">
              <Image
                src="/greyscalelogo.png"
                alt="Footer Logo"
                width={120}
                height={120}
                className="max-w-full mb-4"
              />
              <p className="text-sm font-extralight text-center">
                <span>KDCU VOL 2.0 IS IN COLLABORATION WITH</span>
                <span>
                  SANDBOX SWAPMEET AND LICENSE PARTNER PRIME STAGE DXB
                </span>
              </p>
            </div>

            {/* Columns 2 and 3 - Minimum space, aligned to the right with padding */}
            <div className="flex gap-8 justify-end w-full md:w-auto">
              {/* Column 2 - Information */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-auto px-4">
                <h4 className="text-lg font-bold mb-4">INFORMATION</h4>
                <ul className="space-y-2 font-light">
                  <li>
                    <Link href="/" className="hover:underline">
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      ABOUT
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" className="hover:underline">
                      OUR STORY
                    </Link>
                  </li> */}
                  <li>
                    <Link href="https://forms.gle/adbZ6EnmkahXntrE7" className="hover:underline" target="_blank" rel="noopener noreferrer">
                      REGISTER
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Connect with us */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-auto px-4">
                <h4 className="text-lg font-bold mb-4">CONNECT WITH US</h4>
                <ul className="space-y-2 font-light">
                  <li>
                    <Link
                      href="https://www.instagram.com/kdcu.ae/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      INSTAGRAM
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/@THEPIXIESDANCE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      YOUTUBE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://primestagedxb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      PRIMESTAGE DXB
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/sandboxswapmeet/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      SANDBOX SWAPMEET
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
