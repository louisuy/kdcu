import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex flex-col items-center gap-8">
        <Image
          src="/kdcu2.png"
          alt="KDCU 2 Logo"
          width={470}
          height={229}
          priority
        />
        <div className="text-center">
          <span className="text-3xl">COMING SOON</span>
          <span className="text-2xl font-light block">22.02.25</span>
        </div>
      </main>
    </div>
  );
}
