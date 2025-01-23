import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full text-white py-36">
      {/* Responsive Background Images */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.png')",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center hidden lg:block"
        style={{
          backgroundImage: "url('/bgwide.png')",
        }}
      ></div>

      {/* Content Section */}
      <main className="relative flex flex-col items-center justify-center">
        {/* Video Section */}
        <div className="relative w-full flex justify-center">
          <video
            className="max-w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
            poster="/kdcu2.png"
          >
            <source src="/kdcu.webm" type="video/webm" />
            {/* Fallback Image */}
            <div className="w-auto h-auto">
              <Image
                src="/kdcu2.png"
                alt="KDCU 2 Logo"
                width={470}
                height={229}
                priority
              />
            </div>
          </video>
        </div>

        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-4xl font-normal tracking-wider">COMING SOON</h1>
          <p className="text-2xl font-light mt-2">22.02.25</p>
        </div>
      </main>
    </div>
  );
}
