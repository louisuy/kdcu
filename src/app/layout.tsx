import { Poppins } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
            {/* Navigation Links */}
            <ul className="hidden sm:flex sm:flex-row gap-12 text-white text-lg sm:text-2xl">
              <li>
                <a href="/" className="hover:underline">
                  HOME
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  ABOUT
                </a>
              </li>

              {/* <li>
                <a href="#" className="hover:underline">
                  OUR STORY
                </a>
              </li> */}
              <li>
                <a href="https://forms.gle/adbZ6EnmkahXntrE7" className="hover:underline">
                  REGISTER
                </a>
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
                    <a href="/" className="hover:underline">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:underline">
                      ABOUT
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" className="hover:underline">
                      OUR STORY
                    </a>
                  </li> */}
                  <li>
                    <a href="https://forms.gle/adbZ6EnmkahXntrE7" className="hover:underline">
                      REGISTER
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 - Connect with us */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left w-auto px-4">
                <h4 className="text-lg font-bold mb-4">CONNECT WITH US</h4>
                <ul className="space-y-2 font-light">
                  <li>
                    <a
                      href="https://www.instagram.com/thepixiesdance/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      INSTAGRAM
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@THEPIXIESDANCE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      YOUTUBE
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://primestagedxb.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      PRIMESTAGE DXB
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/sandboxswapmeet/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      SANDBOX SWAPMEET
                    </a>
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
