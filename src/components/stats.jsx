import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-transparent text-teal-900 py-42" data-aos="fade-up">
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-3 px-4 gap-8 text-center">

  
        <div>
          <h2 className="text-2xl sm:text-5xl font-bold">
            {inView && <CountUp end={4791} duration={3} separator="." />}+
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-teal-900">Jumlah Penduduk</p>
        </div>

  
        <div>
          <h2 className="text-2xl sm:text-5xl font-bold">
            {inView && <CountUp end={658} duration={3} />}
            <span className="text-xl ml-1">Jiwa</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-teal-900">Kepadatan Penduduk /Km</p>
        </div>


        <div>
          <h2 className="text-2xl sm:text-5xl font-bold">
            {inView && <CountUp end={728} duration={2} separator="," />}
            <span className="text-xl ml-1">Ha</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-teal-900">Luas</p>
        </div>

      </div>
    </section>
  );
}
