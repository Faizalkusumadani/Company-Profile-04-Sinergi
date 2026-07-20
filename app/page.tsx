import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  Briefcase,
  Building2,
  Hourglass,
  ArrowRight,
} from "lucide-react";

const stats = [
  { icon: Handshake, value: "15+", label: "Brand Partners" },
  { icon: Briefcase, value: "100+", label: "Business Clients" },
  { icon: Building2, value: "2", label: "Business Divisions" },
  { icon: Hourglass, value: "2014", label: "Established Since" },
];

export default function BusinessDivisions() {
  return (
    <section
      id="tentang-kami"
      className="relative min-h-screen w-full overflow-hidden py-20 sm:py-28"
    >
      {/* Dot-grid background, subtle & non-repetitive vignette di tepi */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-linear(rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-linear(ellipse_at_center,transparent_35%,#080B14_85%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo/logo-smp.png"
            alt="Logo Sinergi Mandiri Perkasa"
            width={110}
            height={60}
            className="w-30 h-30 opacity-95"
            loading="eager"
          />
        </div>

        {/* Judul */}
        <h2 className="text-center text-white font-bold tracking-tight text-3xl md:text-5xl leading-tight">
          Sinergi Mandiri Perkasa
        </h2>

        {/* Eyebrow dengan garis */}
        <div className="mt-5 mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-smp-orange/60" />
          <span className="text-[10px] sm:text-base font-medium tracking-[0.3em] uppercase text-smp-orange/60">
            Official Distribution Company
          </span>
          <span className="h-px w-8 bg-smp-orange/60" />
        </div>

        {/* Deskripsi */}
        <p className="mx-auto max-w-3xl text-center text-white/60 font-light text-sm md:text-base leading-relaxed md:leading-loose mb-16">
          PT Sinergi Mandiri Perkasa merupakan perusahaan distribusi dengan dua
          lini bisnis utama, yaitu{" "}
          <span className="text-white font-medium">Building Materials</span> dan{" "}
          <span className="text-white font-medium">FMCG Products</span>. Kami
          menghadirkan produk berkualitas melalui layanan distribusi yang
          profesional dan terpercaya.
        </p>

        {/* Dua kartu divisi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <DivisionCard
            image="/images/building-materials.png"
            imageAlt="Building Materials"
            eyebrowLine1="BUILDING"
            eyebrowLine2="MATERIALS"
            subtitle="Building Solutions Distribution"
            description="Menyediakan material bangunan berkualitas untuk mendukung berbagai kebutuhan proyek konstruksi."
            href="https://build.sinergimandiriperkasa.co.id/"
            accent="orange"
            align="end"
          />
          <DivisionCard
            image="/images/fmcg-products.png"
            imageAlt="FMCG Products"
            eyebrowLine1="FMCG"
            eyebrowLine2="PRODUCTS"
            subtitle="Consumer Goods Distribution"
            description="Menyediakan produk kebutuhan konsumen melalui distribusi yang profesional dan terpercaya."
            href="https://amdk.sinergimandiriperkasa.co.id/"
            accent="blue"
            align="start"
          />
        </div>

        {/* Stats bar */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm px-6 py-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex items-center gap-3 justify-center md:justify-start ${
                  i > 0 ? "md:border-l md:border-white/10 md:pl-6" : ""
                }`}
              >
                <Icon
                  className={i % 2 === 0 ? "text-smp-orange" : "text-sky-400"}
                  size={50}
                  strokeWidth={1.75}
                />
                <div className="text-left">
                  <p className="text-white text-lg md:text-xl font-bold leading-none">
                    {value}
                  </p>
                  <p className="text-white/50 text-xs md:text-sm mt-1">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline penutup */}
        <div className="mt-14 text-center">
          <p className="text-white/40 text-xs md:text-sm tracking-[0.3em] uppercase">
            Building Connections <span className="text-smp-orange mx-2">•</span>{" "}
            Delivering Trust
          </p>
          <div className="mx-auto mt-6 h-px w-24 bg-linear-to-r from-transparent via-smp-orange/70 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function DivisionCard({
  image,
  imageAlt,
  eyebrowLine1,
  eyebrowLine2,
  subtitle,
  description,
  href,
  accent,
  align = "start",
}: {
  image: string;
  imageAlt: string;
  eyebrowLine1: string;
  eyebrowLine2: string;
  subtitle: string;
  description: string;
  href: string;
  accent: "orange" | "blue";
  align?: "start" | "end";
}) {
  const isEnd = align === "end";
  const isOrange = accent === "orange";
  const borderColor = isOrange ? "border-smp-orange/50" : "border-sky-500/50";
  const hoverBorder = isOrange
    ? "hover:border-smp-orange"
    : "hover:border-sky-400";
  const line2Color = isOrange ? "text-smp-orange" : "text-sky-400";
  const buttonBorder = isOrange
    ? "border-smp-orange text-smp-orange hover:bg-smp-orange hover:text-white"
    : "border-sky-400 text-sky-300 hover:bg-sky-500 hover:text-white";

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${borderColor} ${hoverBorder} transition-colors duration-300 min-h-80`}
    >
      {/* Gambar latar */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* linear overlay agar teks terbaca */}
      <div
        className={`absolute inset-0 bg-linear-to-t ${
          isOrange
            ? "from-black/90 via-black/60 to-black/20"
            : "from-[#020b1e]/95 via-[#020b1e]/60 to-transparent"
        }`}
      />

      {/* Konten */}
      <div
        className={`relative z-10 flex h-full flex-col justify-end p-6 md:p-7 ${
          isEnd ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
          {eyebrowLine1}
        </h3>
        <h3
          className={`text-xl md:text-2xl font-bold leading-tight ${line2Color}`}
        >
          {eyebrowLine2}
        </h3>
        <p className="text-white/60 text-sm mt-2">{subtitle}</p>

        <span
          className={`h-px w-10 my-4 ${isOrange ? "bg-smp-orange/60" : "bg-sky-400/60"}`}
        />

        <p className="text-white/85 text-sm leading-relaxed mb-5 max-w-sm">
          {description}
        </p>

        <Link
          href={href}
          className={`inline-flex w-fit items-center gap-2 rounded-md border px-5 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${buttonBorder} ${
            isEnd ? "flex-row-reverse" : ""
          }`}
        >
          Explore Business
          <ArrowRight
            size={16}
            className={`transition-transform duration-300 ${
              isEnd
                ? "group-hover:-translate-x-1 rotate-180"
                : "group-hover:translate-x-1"
            }`}
          />
        </Link>
      </div>
    </div>
  );
}
