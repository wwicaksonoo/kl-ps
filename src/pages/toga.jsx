export default function TogaPage() {
  const plants = [
    {
      name: "Jahe",
      image: "/assets/.jpg",
      planting: "Tanam pada tanah gembur, lembap, dan tidak tergenang. Bisa menggunakan polybag. Letakkan di tempat yang mendapatkan sinar matahari cukup.",
      benefits: "Membantu meredakan masuk angin, mual, peradangan, meningkatkan daya tahan tubuh, dan menghangatkan badan.",
    },
    {
      name: "Kunyit",
      image: "/assets/.jpg",
      planting: "Rimpang kunyit ditanam 3–5 cm di bawah permukaan tanah. Butuh penyiraman teratur dan tanah yang subur.",
      benefits: "Baik untuk kesehatan pencernaan, antioksidan, antiperadangan, dan membantu meningkatkan imunitas.",
    },
    {
      name: "Kencur",
      image: "/toga/kencur.jpg",
      planting: "Cocok ditanam di tanah lembap dan kaya humus. Tidak membutuhkan air terlalu banyak.",
      benefits: "Digunakan untuk membuat jamu, meredakan batuk, menghangatkan tubuh, dan meningkatkan nafsu makan.",
    },
    {
      name: "Sereh",
      image: "/toga/sereh.jpg",
      planting: "Tanam pada tanah yang gembur dengan drainase baik. Pertumbuhannya cepat dan mudah dirawat.",
      benefits: "Baik untuk mengatasi masuk angin, aroma terapi, melancarkan peredaran darah, dan mengurangi stres.",
    },
    {
      name: "Temulawak",
      image: "/toga/temulawak.jpg",
      planting: "Letakkan rimpang pada tanah yang lembap dan subur. Tanaman ini membutuhkan cahaya matahari cukup.",
      benefits: "Bagus untuk meningkatkan nafsu makan, melancarkan pencernaan, dan menjaga kesehatan hati.",
    },
  ];

  return (
    <div className="px-6 py-10">
      {/* TITLE */}
      <h1 className="text-3xl md:text-5xl font-bold text-teal-900 text-center">
        Tumbuhan Obat Keluarga (TOGA)
      </h1>
      <p className="text-center text-gray-600 mt-2 mb-8">
        Informasi tanaman obat yang dapat ditanam di pekarangan rumah, sekaligus cara penanaman dan manfaatnya.
      </p>

      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 md:p-10  mb-12">
        <h2 className="text-2xl font-bold text-teal-800 mb-3">Apa itu TOGA?</h2>
        <p className="text-gray-700 leading-relaxed">
          TOGA atau <span className="font-semibold">Tumbuhan Obat Keluarga</span> adalah berbagai jenis tanaman yang
          dibudidayakan di pekarangan rumah sebagai bahan obat tradisional.
          Selain mudah ditanam, tanaman-tanaman ini memiliki banyak manfaat untuk menjaga kesehatan
          tubuh secara alami. Kebanyakan di antaranya juga dapat digunakan sebagai bumbu masakan,
          sehingga sangat berguna bagi kehidupan sehari-hari.
        </p>
      </div>

      {/* PLANT LIST */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {plants.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md  p-5 flex flex-col"
          >
            <img
              src={p.image}
              alt={p.name}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />

            <h3 className="text-xl font-bold text-teal-700 mb-2">{p.name}</h3>

            <h4 className="font-semibold text-gray-800">Tata Cara Penanaman</h4>
            <p className="text-gray-700 text-sm mb-3">{p.planting}</p>

            <h4 className="font-semibold text-gray-800">Manfaat</h4>
            <p className="text-gray-700 text-sm">{p.benefits}</p>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="text-center mt-14 opacity-80 text-sm">
        <p>Tanam TOGA di rumah untuk kesehatan keluarga secara alami.</p>
      </div>
    </div>
  );
}
