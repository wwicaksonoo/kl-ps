export default function Potential() {
  const masalah = [
    "Maraknya judi online di kalangan warga desa.",

  
  ];

  const potensi = [
    "Sektor pertanian yang luas dan subur.",
    "Budaya yang masih kental di kalangan masyarakat lokal.",
    "Warga memiliki antusiasme tinggi untuk kegiatan sosial dan pembangunan.",
    "Produk unggulan seperti kerupuk rajang pati aci.",
  ];

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-teal-900 text-center">
        Masalah & Potensi Desa
      </h1>
      <p className="text-center text-xs md:text-sm text-gray-600 mt-3 mb-10">
        Gambaran kondisi dan potensi pengembangan di Kalurahan Pundungsari.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
     
        <div 
          data-aos="fade-right"
          className="p-6 bg-red-50 border-l-4 border-red-400 rounded-xl shadow"
        >
          <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-4">
            Masalah Utama
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-lg">
            {masalah.map((m, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                {m}
              </li>
            ))}
          </ul>
        </div>

        
        <div 
          data-aos="fade-left"
          className="p-6 bg-green-50 border-l-4 border-green-400 rounded-xl shadow text-sm md:text-lg"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Potensi Desa
          </h2>
            
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            {potensi.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-green-500 mt-1">•</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
            
      </div>

        <p className="text-xs md:text-sm text-center py-5">Update: 11 Desember 2025</p>
    </div>
    
  );
}
