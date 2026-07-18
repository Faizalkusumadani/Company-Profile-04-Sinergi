import Image from "next/image";
import Link from "next/link";
import AnimatedHeading from "@/components/AnimatedHeading";

export default function Home() {
  return (
    <section id="homepages">
      <div className="relative min-h-screen w-full overflow-hidden ">
        {/* 1. Gambar Latar Belakang (Optimized) */}
        <Image
          src="/background/latar.webp"
          alt="Latar Belakang Kran Kamar Mandi Aer"
          fill
          quality={100}
          priority
          className="object-cover object-top grayscale brightness-[0.7] z-0"
        />

        {/* 2. Overlay Hitam Transparan (opsional untuk kontras teks) */}
        <div className="absolute inset-0 bg-black/10 z-10" />

        {/* 3. Konten Utama (Teks dan Tombol) */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
          {/* Logo Aer (Lingkaran Lonjong) */}
          <div className="mb-8 md:mb-10 mt-[-5%]">
            {" "}
            {/* Sedikit penyesuaian posisi */}
            <Image
              src="/logo/logo-smp.png"
              alt="Logo Sinergi Mandiri Perkasa"
              width={150}
              height={80}
              className="opacity-90"
              loading="eager"
            />
          </div>

          {/* Teks Utama (Quality of Life) */}
          <AnimatedHeading
            text="Sinergi Mandiri Perkasa"
            className="font-serif text-3xl md:text-6xl lg:text-7xl font-normal text-smp-orange mb-12 md:mb-16 tracking-tight leading-tight"
          />

          {/* Container Tombol */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none sm:justify-center">
            {/* Tombol "ENTER SITE" */}
            <Link
              href="https://build.sinergimandiriperkasa.co.id/" // Ganti dengan rute tujuan situs utama Anda
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center 
                       border border-smp-orange bg-white/10 px-8 py-3 
                       text-sm md:text-base font-medium text-smp-orange uppercase tracking-wider 
                       backdrop-blur-sm transition-all duration-300 
                       hover:bg-smp-orange hover:text-white hover:border-smp-orange"
            >
              Building Materials
            </Link>

            {/* Tombol "SHOP" */}
            <Link
              href="https://amdk.sinergimandiriperkasa.co.id/"
              className="group flex-1 sm:flex-initial inline-flex items-center justify-center 
                       border border-smp-orange bg-white/10 px-8 py-3 
                       text-sm md:text-base font-medium text-smp-orange uppercase tracking-wider 
                       backdrop-blur-sm transition-all duration-300 
                       hover:bg-smp-orange hover:text-white hover:border-smp-orange"
            >
              AMDK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
