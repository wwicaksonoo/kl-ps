import { Cookie, History, Fence, ServerCrash, Earth, TreePalm } from "lucide-react";
import Stats from "./components/stats";
import Media from "./components/media";
import MediaCarousel from "./components/media";
import { Link } from "react-router-dom";
import AppRouter from "./Routing";

export default function Homesec() {
  return ( 










    <div className="w-full min-h-screen bg-white font-sans">
      <main className="min-h-screen bg-linear-to-b from-teal-900 to-white">
        <section className=" bg-cover bg-center relative flex items-center justify-center text-white">



          <div className="relative text-center">
            <h1 className="text-3xl sm:text-3xl md:text-5xl mt-30 font-bold" data-aos="fade-up">
              Kalurahan Pundungsari
            </h1>

            <p className="mt-2 text-xs sm:text-base px-4 md:px-0 max-w-md mx-auto" data-aos="fade-up">
              Kecamatan Semin, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta
            </p>

            <div className="mt-5">




              {/* <img
                src="/pundungsari.jpeg"
                alt="Foto Pundungsari"
                className="mx-auto w-60 sm:w-62 md:w-74 rounded-md"
            /> */}
            </div>
          </div>
        </section>

        <Stats />



      </main>





  <div className="px-6 text-center relative -top-40 md:-top-30">
  <h1 className="text-3xl md:text-5xl text-center font-bold text-teal-900 ">Media</h1>
      <p className="text-gray-600 py-4 text-xs md:text-lg">
    Foto suasana di Desa Pundungsari
  </p>
  <div className="relative items-center">
    <img
      src="/pundungsari.jpeg"
      alt="Foto Pundungsari"
      className="mx-auto w-90 sm:w-62 md:w-120 rounded-md"
    />

  </div>
</div>  





    {/* <div className="px-6">
      <MediaCarousel
        images={[
          "/pundungsari.jpeg",
          "/maps.png",
          "/1.jpg",
          "/pundungsari4.jpeg",
          "/pundungsari5.jpeg",
        ]}
        interval={4000}
      />
    </div> */}






      {/* menu menu */}
<section className="px-6 text-center pt-0 md:pt-24 ">
  <h2 className="text-3xl md:text-5xl font-bold text-teal-900">Sektor Desa</h2>
  <p className="text-gray-600 mt-2 text-xs md:text-lg">
    Daftar kegiatan wisata atau layanan desa.
  </p>
        <div className="grid grid-cols-2 py-15 sm:grid-cols-3 gap-6 mt-6 md:gap-12 lg:gap-16">
          <div className="flex flex-col items-center">
            <Link to="/history" className="flex flex-col items-center cursor-pointer">


            <History size={28} className="block sm:hidden" />
            <History size={40} className="hidden sm:block" />
            <p className="mt-2 py-4 font-semibold text-sm/tight sm:text-base md:text-lg">
              Sejarah Desa
            </p>
            </Link>
          </div>



          <div className="flex flex-col items-center">
            <Link to="/culture" className="flex flex-col items-center cursor-pointer">


            <Earth size={28} className="block sm:hidden" />
            <Earth size={40} className="hidden sm:block" />
            <p className="mt-2 py-4 font-semibold text-sm sm:text-base md:text-lg">
              Kebudayaan
            </p>
            </Link>
          </div>





          <div className="flex flex-col items-center">
            <Link to="/teritory" className="flex flex-col items-center cursor-pointer">
            <Fence size={28} className="block sm:hidden" />
            <Fence size={40} className="hidden sm:block" />
            <p className="mt-2 py-4 font-semibold text-sm sm:text-base md:text-lg">
              Daftar Wilayah
            </p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/toga" className="flex flex-col items-center cursor-pointer">
            <TreePalm size={28} className="block sm:hidden" />
            <TreePalm size={40} className="hidden sm:block" />
            <p className="mt-2 py-4 font-semibold text-sm sm:text-base md:text-lg">
              TOGA
            </p>
            </Link>
          </div>

          <div className="flex flex-col items-center">
<Link to="/umkm" className="flex flex-col items-center cursor-pointer">
            <Cookie size={28} className="block sm:hidden" />
            <Cookie size={40} className="hidden sm:block" />
            <p className="mt-2 py-4 font-semibold text-sm sm:text-base md:text-lg">
              UMKM
            </p>
</Link>
          </div>

          <div className="flex flex-col items-center">
<Link to="/potential" className="flex flex-col items-center cursor-pointer">
            <ServerCrash size={28} className="block sm:hidden" />
            <ServerCrash size={40} className="hidden sm:block" />
</Link>
            <p className="mt-2 py-4 font-semibold text-sm sm:text-base md:text-lg">
              Masalah dan Potensi
            </p>
          </div>
        </div>
      </section>




      {/* LOCATIONS */}
      {/* <section className="py-12 bg-linear-to-b from-white to-teal-900 text-teal-900">
        <h2 className="text-2xl font-bold text-center">Locations</h2>
        <p className="text-sm text-center mt-2 opacity-80">
          Tempat-tempat menarik di desa kamu
        </p>
      </section> */}
    </div>
  );
}
