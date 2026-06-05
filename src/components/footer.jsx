import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-teal-900 py-6 text-center mt-10" data-aos="fade-up">
      
      
      <div className="flex justify-center gap-6 mb-3">
        <a
          href="https://www.instagram.com/karsa.pundungsari25?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-600 transition"
        >
          <FaInstagram size={22} />
        </a>

        <a
          href="https://www.tiktok.com/@karsapundungsari25?_r=1&_t=ZS-936g5CN8bIo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-600 transition"
        >
          <FaTiktok size={22} />
        </a>
      </div>

      <p className="text-sm opacity-70">KKN-T Universitas Duta Bangsa Surakarta</p>
    </footer>
  );
}
