export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-teal-900 text-white">
      <div className="flex items-center gap-2">
        <img 
          src="/lg.png" 
          alt="Logo" 
          className="lg:w-10 lg:h-10 w-10  object-contain"
        />
        <span className="font-bold text-2xl lg:text-3xl py-2 p-2" style={{ fontFamily: "Larken" }}> 
        Kalurahan Pundungsari</span>
      </div>

      <button className="text-2xl hidden sm:block p-4">&#9776;</button>

    </nav>
  );
}