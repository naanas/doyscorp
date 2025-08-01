// src/app/page.tsx
'use client'; // Penting: Lottie React menggunakan hooks, jadi komponen ini harus menjadi Client Component

import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react'; // Import Lottie component

// Import file JSON animasi Lottie Anda.
// Pastikan path-nya benar sesuai lokasi file di folder public/animations.
import waveBackgroundAnimation from '../../public/animations/lop.json';

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.png"
              alt="DoysCorp Logo"
              width={100}
              height={100}
              priority
            />
       
          </Link>
          <nav>
            <ul>
              <li>
                <Link href="#hero">Beranda</Link>
              </li>
              <li>
                <Link href="#services">Layanan</Link>
              </li>
              <li>
                <Link href="#contact">Kontak</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          {/* Ganti elemen video dengan div untuk Lottie Animation */}
          <div className="hero-lottie-bg">
            <Lottie
              animationData={waveBackgroundAnimation} // Data animasi dari file JSON
              loop={true} // Animasi akan berulang
              autoplay={true} // Animasi akan otomatis diputar
              style={{ width: '100%', height: '100%' }} // Style agar animasi mengisi kontainer div
            />
          </div>

          <div className="hero-content">
            <h1>
              Wujudkan Ide Anda Menjadi Aplikasi <br /> Mobile & Web yang
              Menakjubkan
            </h1>
            <p>
              Saya seorang *freelancer* yang berdedikasi dalam menciptakan
              solusi digital inovatif dan fungsional untuk kebutuhan bisnis
              Anda.
            </p>
            <Link href="#contact" className="btn">
              Mulai Proyek Anda Sekarang
            </Link>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2>Layanan Saya</h2>
            <div className="service-grid">
              <div className="service-card">
                <Image
                  src="/images/mobile-dev-icon.png"
                  alt="Mobile App Development Icon"
                  width={80}
                  height={80}
                />
                <h3>Pengembangan Aplikasi Mobile</h3>
                <p>
                  Membangun aplikasi Android & iOS yang intuitif, cepat, dan
                  kaya fitur, memastikan pengalaman pengguna yang luar biasa.
                </p>
              </div>
              <div className="service-card">
                <Image
                  src="/images/web-dev-icon.png"
                  alt="Web Development Icon"
                  width={80}
                  height={80}
                />
                <h3>Pengembangan Aplikasi Web</h3>
                <p>
                  Menciptakan *website* dan aplikasi *web* modern yang
                  responsif, aman, dan berkinerja tinggi menggunakan teknologi
                  terkini.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="cta">
          <div className="container">
            <h2>Siap Membangun Impian Anda?</h2>
            <p>
              Mari diskusikan proyek Anda. Saya siap membantu Anda mencapai
              tujuan digital Anda dengan solusi yang tepat dan inovatif.
            </p>
            <a href="mailto:emailanda@example.com" className="btn">
              Hubungi Saya
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 DoysCorp. Semua Hak Dilindungi.</p>
        </div>
      </footer>
    </>
  );
}