import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 5;
      });
    }, 100);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5f1e8] overflow-hidden">
      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:24px_24px]" />

      {/* FLOATING SHAPES */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-pink-400 border-4 border-black rounded-full animate-float" />

      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#00c2ff] border-4 border-black rotate-12 animate-float2" />

      {/* CARD */}
      <div className="relative w-[90%] max-w-md bg-yellow-300 border-4 border-black rounded-[35px] p-8 shadow-[12px_12px_0px_#000]">
        {/* MINI BADGE */}
        <div className="absolute -top-5 -right-5 bg-pink-400 border-4 border-black px-4 py-2 rounded-2xl font-black text-sm text-black rotate-6 shadow-[4px_4px_0px_#000]">
          PLEASE WAIT
        </div>

        {/* TITLE */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-black uppercase leading-none text-[#111]">
            Loading
          </h1>

          <p className="font-bold mt-3 text-lg text-[#222]">
            Menyiapkan Portfolio...
          </p>
        </div>

        {/* LOADING BAR */}
        <div className="bg-white border-4 border-black rounded-2xl p-2 shadow-[6px_6px_0px_#000] mb-5">
          <div
            className="h-6 bg-[#00c2ff] border-2 border-black rounded-xl transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* PERCENT */}
        <div className="flex items-center justify-between font-black text-lg text-[#111]">
          <span>Loading Assets...</span>
          <span>{progress}%</span>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-5 h-5 bg-black rounded-full animate-bounce" />

          <div
            className="w-5 h-5 bg-black rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />

          <div
            className="w-5 h-5 bg-black rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PreLoader;