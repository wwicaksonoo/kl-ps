export default function Culture() {
  return (
    <div className="px-6 py-10">
     
      <h1 className="text-2xl md:text-4xl font-bold text-teal-900 text-center">
        Kebudayaan Desa
      </h1>
      <p className="text-center text-gray-600 mt-2 text-sm mb-8 lg:text-base">
        Tradisi turun-temurun yang terus dilestarikan oleh masyarakat.
      </p>

   
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10 ">

          <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-4">
            Rasulan
          </h2>

          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            <span className="font-semibold">Rasulan</span> adalah salah satu
            tradisi penting di wilayah Gunungkidul yang diselenggarakan sebagai
            bentuk ungkapan syukur kepada Tuhan atas hasil panen dan rezeki yang
            telah diterima masyarakat. Tradisi ini menjadi simbol kebersamaan,
            gotong royong, serta penghormatan terhadap leluhur dan alam.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Acara Rasulan biasanya diadakan sekali dalam setahun dan
            melibatkan seluruh warga. Kegiatan yang dilakukan meliputi kirab
            budaya, seserahan hasil bumi, pertunjukan seni seperti jathilan dan
            karawitan, serta doa bersama. Setiap padukuhan biasanya memiliki
            rangkaian acara dan ciri khas masing-masing, sehingga tradisi ini
            terasa sangat meriah dan penuh makna.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Selain sebagai kegiatan adat, Rasulan juga menjadi ruang bagi
            masyarakat untuk saling berkumpul, mempererat tali persaudaraan,
            serta melestarikan warisan budaya yang sudah ada sejak lama. Generasi
            muda diharapkan terus menjaga dan mempelajari nilai-nilai luhur
            yang terkandung di dalamnya.
          </p>

          
          <div className="mt-8">
            <img
              src="/rasulan.jpeg"
              alt="Gambar Tradisi Rasulan"
              className="rounded-xl shadow-md w-full object-cover max-h-[400px]"
            />
          </div>
        </div>
      </div>

      {/* FOOTER CALL */}
      <div className="text-center mt-12 opacity-80 text-sm">
        <p>Lestarikan budaya ini agar tetap lestari dan dikenal banyak orang.</p>
      </div>
    </div>
  );
}
