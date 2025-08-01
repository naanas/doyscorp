// src/app/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Lottie from 'lottie-react';
import { useState } from 'react';

import waveBackgroundAnimation from '../../public/animations/lop.json';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

          <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          </button>

          <nav className={isMenuOpen ? 'open' : ''}>
            <ul>
              <li>
                <Link href="#hero" onClick={closeMenu}>Beranda</Link>
              </li>
              <li>
                <Link href="#services" onClick={closeMenu}>Layanan</Link>
              </li>
              <li>
                <Link href="#portfolio" onClick={closeMenu}>Portofolio</Link> {/* Tambahkan ini */}
              </li>
              <li>
                <Link href="#contact" onClick={closeMenu}>Kontak</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-lottie-bg">
            <Lottie
              animationData={waveBackgroundAnimation}
              loop={true}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
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

        {/* Bagian Portofolio Baru */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <h2>Portofolio Saya</h2>
            <div className="portfolio-grid">
              {/* Contoh Proyek 1: Aplikasi Mobile */}
              <Link href="https://link-ke-studi-kasus-proyek1.com" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                <Image
                  src="/images/project-mobile-app-1.jpg" // Ganti dengan gambar proyek Anda
                  alt="Proyek Aplikasi Mobile Medis"
                  width={400} // Sesuaikan lebar
                  height={250} // Sesuaikan tinggi
                  className="portfolio-image"
                />
                <div className="portfolio-info">
                  <h3>Aplikasi Medis Telekonsultasi</h3>
                  <p>Pengembangan aplikasi mobile (iOS/Android) untuk konsultasi dokter online dan manajemen rekam medis.</p>
                  <span className="project-tag">Mobile App</span>
                  <span className="project-tag">UI/UX Design</span>
                </div>
              </Link>

              {/* Contoh Proyek 2: Website E-commerce */}
              <Link href="https://link-ke-studi-kasus-proyek2.com" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                <Image
                  src="/images/project-web-ecommerce-1.jpg" // Ganti dengan gambar proyek Anda
                  alt="Proyek Website E-commerce"
                  width={400}
                  height={250}
                  className="portfolio-image"
                />
                <div className="portfolio-info">
                  <h3>Platform E-commerce Fashion</h3>
                  <p>Pembuatan website e-commerce responsif dengan fitur keranjang belanja, pembayaran, dan manajemen produk.</p>
                  <span className="project-tag">Web Development</span>
                  <span className="project-tag">Responsive Design</span>
                </div>
              </Link>

              {/* Contoh Proyek 3: Aplikasi Web Dashboard */}
              <Link href="https://link-ke-studi-kasus-proyek3.com" target="_blank" rel="noopener noreferrer" className="portfolio-card">
                <Image
                  src="/images/project-web-dashboard-1.jpg" // Ganti dengan gambar proyek Anda
                  alt="Proyek Aplikasi Web Dashboard Admin"
                  width={400}
                  height={250}
                  className="portfolio-image"
                />
                <div className="portfolio-info">
                  <h3>Dashboard Analitik Bisnis</h3>
                  <p>Pengembangan dashboard admin berbasis web untuk memantau data penjualan dan performa operasional.</p>
                  <span className="project-tag">Web App</span>
                  <span className="project-tag">Data Visualization</span>
                </div>
              </Link>

              {/* Anda bisa menambahkan lebih banyak proyek di sini */}
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