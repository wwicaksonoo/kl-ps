export default function History() {
  return (
    <div className="min-h-screen bg-gray-50 text-teal-900 pb-20">

      
      <div className="relative w-full h-[180px] md:h-[300px] ">
        <img 
          src="/maps.png"
          alt="Peta Pundungsari"
          className="w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Sejarah Desa
          </h1>
        </div>
      </div>



     
      <div className="max-w-4xl mx-auto px-6 mt-10">
        <h2 className="text-3xl font-semibold mb-4 ">Asal Usul Desa Pundungsari</h2>
       <p className="leading-relaxed text-sm sm:text-lg text-gray-700 mb-6">
          Desa Pundungsari merupakan salah satu desa di Kecamatan Semin, Kabupaten Gunungkidul,
          yang memiliki sejarah panjang sejak masa kolonial hingga era modern. Nama “Pundungsari”
          berasal dari kata “Pundung” yang berarti gundukan tanah dan “Sari” yang
          berarti inti atau keindahan.
        </p>

        <p className="leading-relaxed text-sm lg:text-lg text-gray-700 mb-6">
          Menurut cerita rakyat setempat, dahulu terdapat wabah penyakit yang melanda wilayah ini dan pada akhirnya dari pundung atau gundukan tanah tersebut muncul obat untuk menyembuhkan penyakit tersebut. 
        </p>

        <p className="leading-relaxed text-sm lg:text-lg text-gray-700 mb-6">
          Pada masa dahulu, wilayah ini merupakan kawasan hutan jati dan ladang tradisional yang
          dihuni kelompok masyarakat kecil. Seiring waktu, penduduk mulai menetap dan membentuk
          permukiman baru yang kemudian berkembang menjadi desa seperti yang dikenal sekarang.
        </p>

        <p className="leading-relaxed text-sm lg:text-lg text-gray-700">
          Saat ini, Desa Pundungsari terus berkembang dengan tetap mempertahankan nilai budaya,
          tradisi lokal, serta semangat gotong royong masyarakat.
        </p>
      </div>


        
   
      <div className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-semibold mb-6">Perkembangan Desa</h2>



        <div className="mt-8 mb-10">
            <img
              src="/3.jpeg"
              alt="Gambar Tradisi Rasulan"
              className="rounded-xl shadow-md w-full object-cover max-h-[700px]"
            />
          </div>

        



        <div className="border-l-4 border-teal-700 pl-6 space-y-10">
            

          <div>
            <h3 className="font-bold text-xl text-teal-800">1900–1950</h3>
            <p className="text-gray-700">
              Awal mula pembukaan hutan dan mulai terbentuknya permukiman kecil.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl text-teal-800">1950–1980</h3>
            <p className="text-gray-700">
              Pertumbuhan penduduk meningkat, pembangunan balai desa dan sekolah dasar pertama.
            </p>
          </div>

        

          <div>
            <h3 className="font-bold text-xl text-teal-800">1980–Sekarang</h3>
            <p className="text-gray-700">
              Pengembangan infrastruktur, pertanian, dan fasilitas masyarakat secara berkelanjutan.
            </p>
          </div>



        </div>
      </div>
    </div>
  );
}
