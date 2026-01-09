export default function Quote() {
    return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      
      {/* Floating circles background */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-300/20 rounded-full blur-3xl animate-ping"></div>
      
      <div className="relative max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-xl shadow-2xl rounded-3xl p-12 border border-blue-200/50">

        <h2 className="text-4xl font-bold text-blue-800 mt-6 mb-4 tracking-wide">
          Inspiring Healthcare Quote
        </h2>

        <p className="text-xl text-gray-700 leading-relaxed font-medium italic animate-fadeIn">
          “Where science meets compassion,<br />
          healing becomes possible.<br />
          Every step toward wellness matters,<br />
          and every act of care<br />
          can change a life.”
        </p>

        {/* Bottom decorative divider */}
        <div className="mt-10 flex justify-center">
          <div className="h-1 w-40 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Soft overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100/40 pointer-events-none"></div>
    </section>
  );
}
