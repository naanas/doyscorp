// src/app/page.tsx
import Image from 'next/image'; // Pastikan Image diimpor
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <Link href="/" className="logo">
            {/* Tambahkan Image komponen di sini */}
            <Image
              src="/images/logo.png" // Path ke logo Anda di folder public/images
              alt="DoysCorp Logo"
              width={100} // Sesuaikan lebar sesuai kebutuhan
              height={100} // Sesuaikan tinggi sesuai kebutuhan
              priority // Rekomendasi untuk logo di header agar dimuat lebih cepat
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
                  width={80} // Set appropriate width
                  height={80} // Set appropriate height
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
                  width={80} // Set appropriate width
                  height={80} // Set appropriate height
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
          <p>&copy; 2025 DoysCorp. Semua Hak Dilindungi.</p> {/* Ubah juga di footer */}
        </div>
      </footer>
    </>
  );
}