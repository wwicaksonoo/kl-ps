export default function Teritory() {
  const dusunList = [
    { name: "Bonpon", top: "22%", left: "35%" },
    { name: "Jelok", top: "28%", left: "50%" },
    { name: "Karangwetan", top: "32%", left: "40%" },
    { name: "Kutugan", top: "38%", left: "55%" },
    { name: "Pelem", top: "45%", left: "30%" },
    { name: "Pijenan", top: "50%", left: "48%" },
    { name: "Pundungsari", top: "58%", left: "37%" },
    { name: "Sedono", top: "63%", left: "53%" },
    { name: "Semin Wetan", top: "70%", left: "42%" },
    { name: "Tepus", top: "76%", left: "48%" },
  ];

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl md:text-4xl font-bold text-teal-900 text-center">
        Daftar Wilayah Padukuhan
      </h1>
      <p className="text-center text-gray-600 mt-2 mb-8 text-sm">
        Peta persebaran padukuhan di Kalurahan Pundungsari.
      </p>

      {/* MAP */}
      <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/2.png')" }}
        />

        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

        {/* DUSUN POINTS */}
        <div className="absolute inset-0">
          {dusunList.map((d, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ top: d.top, left: d.left }}
            >
              <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md"></div>
              <p className="mt-1 text-xs font-medium bg-white/90 px-2 py-0.5 rounded shadow">
                {d.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* LIST */}
      <div className="mt-10 max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-teal-800 mb-2">
          Daftar Nama Padukuhan
        </h2>
        <ul className="space-y-1 text-gray-700 text-sm md:text-lg">
          {dusunList.map((d, i) => (
            <li key={i} className="p-2 bg-gray-100 rounded-md shadow-sm">
              {i + 1}. {d.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
