import Image from "next/image";

export default function About() {
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
          <Image
            src="/kdcu.png"
            alt="KDCU 2 Logo"
            width={470}
            height={229}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="text-center mx-96 mt-24 flex flex-col gap-8">
          <p className="text-xl font-normal">
            K-Pop Dance Competition UAE, or in short, KDCU, is a K-Pop Dance
            Competition hosted by The Pixies, where competitors all over the
            country have a chance to show their talent and compete in one of the
            biggest K-Pop dance competition in the Middle East! It is an annual
            event in which we successfully completed the first season on January
            26, 2024, and it is about to take off with the second round this
            upcoming February 22, 2025.
          </p>

          <h2 className="text-4xl font-bold mt-24">OUR STORY</h2>

          <p className="text-xl">
            KDCU started as a passion project by a group of teammates from The
            Pixies dance group. It gradually expanded its name and stamped
            itself in the K-pop community in the UAE to become a gathering of
            amazing talent to show their skills on the stage. The main
            organisers, Rim and Riya from The Pixies, are the backbone of this
            event to help sort everything out and finish what is to be met and
            needed, with an amazing hand from our collaboration with Sandbox
            Swapmeet and license partner Prime Stage DXB. Our team also
            comprises self-taught individuals who bring the vision of what
            creative direction KDCU is headed with the logo and visuals created
            by Aboudy, and with the help of Louis, Jess, and Dale.
          </p>
        </div>
      </main>
    </div>
  );
}
