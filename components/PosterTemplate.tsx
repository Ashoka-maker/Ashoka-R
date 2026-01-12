
import React from 'react';
import { PanchangaData, LABELS } from '../types';

interface PosterTemplateProps {
  data: PanchangaData;
  brandName?: string;
  astrologerName?: string;
}

const PosterTemplate: React.FC<PosterTemplateProps> = ({ 
  data, 
  brandName = "V Y A S", 
  astrologerName = "Karthik Joshi" 
}) => {
  const labels = LABELS[data.language];
  const isKannada = data.language === 'kannada';

  return (
    <div 
      id="panchanga-poster"
      className={`
        bg-[#FFFBEE] shadow-2xl mx-auto border-[min(4vw,16px)] border-[#8B0000] 
        relative flex flex-col items-center 
        ${isKannada ? 'kannada-font' : 'telugu-font'} 
        overflow-hidden w-full max-w-[500px] min-h-[min(180vw,950px)]
      `}
      style={{ height: 'auto' }}
    >
      {/* Ornate Gold Border Frame */}
      <div className="absolute inset-1 md:inset-2 border-[1px] md:border-[2px] border-[#D4AF37] pointer-events-none opacity-40"></div>
      
      {/* Decorative Gold Corners */}
      <div className="absolute top-2 left-2 md:top-4 md:left-4 w-12 h-12 md:w-24 md:h-24 border-t-[3px] md:border-t-[5px] border-l-[3px] md:border-l-[5px] border-[#D4AF37] rounded-tl-lg md:rounded-tl-xl z-20"></div>
      <div className="absolute top-2 right-2 md:top-4 md:right-4 w-12 h-12 md:w-24 md:h-24 border-t-[3px] md:border-t-[5px] border-r-[3px] md:border-r-[5px] border-[#D4AF37] rounded-tr-lg md:rounded-tr-xl z-20"></div>
      <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-12 h-12 md:w-24 md:h-24 border-b-[3px] md:border-b-[5px] border-l-[3px] md:border-l-[5px] border-[#D4AF37] rounded-bl-lg md:rounded-bl-xl z-20"></div>
      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-12 h-12 md:w-24 md:h-24 border-b-[3px] md:border-b-[5px] border-r-[3px] md:border-r-[5px] border-[#D4AF37] rounded-br-lg md:rounded-br-xl z-20"></div>

      {/* Brand Section */}
      <div className="w-full text-center mt-8 md:mt-12 mb-3 md:mb-4 z-10 flex flex-col items-center px-4">
        <h1 className="text-xl md:text-3xl font-light text-[#8B0000] tracking-[0.4em] md:tracking-[0.6em] uppercase mb-1 drop-shadow-sm">
          {brandName}
        </h1>
        <h2 className="text-lg md:text-2xl font-semibold text-[#8B0000] tracking-[0.2em] md:tracking-[0.4em] uppercase mb-2 md:mb-4">
          ASTROLOGY
        </h2>
        
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
          <h3 className="text-xl md:text-2xl font-black text-[#A0522D] tracking-wider">
            {labels.header}
          </h3>
        </div>
      </div>

      {/* Samvatsara Section */}
      <div className="w-[90%] bg-[#8B0000] py-4 md:py-6 px-4 mb-4 z-10 rounded-xl shadow-xl flex flex-col items-center justify-center border-2 border-[#D4AF37]">
        <div className="flex items-center justify-center gap-2 md:gap-4 text-white text-lg md:text-2xl font-black tracking-widest leading-relaxed text-center">
          <span className="text-xl md:text-3xl">🚩</span>
          <span className="px-1 md:px-2">{data.samvatsara} {labels.yearSuffix}</span>
          <span className="text-xl md:text-3xl">🚩</span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-[85%] h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-[#8B4513] to-transparent mb-4"></div>

      {/* Main Details Section */}
      <div className="w-full flex flex-col gap-3 md:gap-4 px-3 md:px-6 z-10 flex-grow pb-4">
        
        {/* Visesha Card */}
        <div className="bg-[#FFF4E0] border-l-[6px] md:border-l-[8px] border-[#8B0000] p-4 md:p-5 rounded-r-2xl shadow-md min-h-[100px] md:min-h-[140px] flex flex-col">
          <span className="text-[#8B4513] text-[10px] md:text-sm font-black uppercase tracking-widest block mb-1 md:mb-2 border-b-1 md:border-b-2 border-[#8B4513]/10 pb-1">
            ✨ {labels.visesha}
          </span>
          <p className="text-[#4A0E0E] font-black text-lg md:text-2xl leading-relaxed">
            {data.visesha}
          </p>
        </div>

        {/* Bottom Grid for Times and Lucky Zodiacs */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="bg-white/70 border-[1px] md:border-[2px] border-[#D4AF37] p-3 md:p-4 rounded-xl shadow-sm min-h-[120px] md:h-[160px] flex flex-col items-center justify-between text-center">
            <span className="text-[#8B4513] text-[9px] md:text-[11px] font-black uppercase tracking-wider block mb-1">
              {labels.shubha}
            </span>
            <div className="flex-grow flex items-center justify-center">
               <p className="text-[#8B0000] font-black text-sm md:text-xl leading-tight">
                {data.shubhaSamayam}
              </p>
            </div>
            <div className="w-1/2 h-[2px] md:h-1 bg-[#D4AF37]/40 rounded-full mt-1"></div>
          </div>
          
          <div className="bg-white/70 border-[1px] md:border-[2px] border-[#D4AF37] p-3 md:p-4 rounded-xl shadow-sm min-h-[120px] md:h-[160px] flex flex-col items-center justify-between text-center">
            <span className="text-[#8B4513] text-[9px] md:text-[11px] font-black uppercase tracking-wider block mb-1">
              {labels.lucky}
            </span>
             <div className="flex-grow flex items-center justify-center">
               <p className="text-[#8B0000] font-black text-sm md:text-xl leading-tight">
                {data.uthamaRashulu}
              </p>
            </div>
            <div className="w-1/2 h-[2px] md:h-1 bg-[#D4AF37]/40 rounded-full mt-1"></div>
          </div>
        </div>

        {/* Full Panchanga Info Table */}
        <div className="bg-[#8B0000]/5 backdrop-blur-md border-[1px] md:border-2 border-[#D4AF37]/30 rounded-xl p-3 md:p-4 grid grid-cols-3 gap-y-2 md:gap-y-3 gap-x-1 md:gap-x-2 text-[10px] md:text-[12px] mt-1">
            <div className="flex flex-col"><span className="font-black text-[#8B4513] uppercase text-[8px] md:text-[10px] tracking-tighter opacity-70">{labels.masa}</span> <span className="text-[#8B0000] font-black truncate">{data.masa}</span></div>
            <div className="flex flex-col"><span className="font-black text-[#8B4513] uppercase text-[8px] md:text-[10px] tracking-tighter opacity-70">{labels.paksha}</span> <span className="text-[#8B0000] font-black truncate">{data.paksha}</span></div>
            <div className="flex flex-col"><span className="font-black text-[#8B4513] uppercase text-[8px] md:text-[10px] tracking-tighter opacity-70">{labels.tithi}</span> <span className="text-[#8B0000] font-black truncate">{data.tithi}</span></div>
            <div className="flex flex-col"><span className="font-black text-[#8B4513] uppercase text-[8px] md:text-[10px] tracking-tighter opacity-70">{labels.nakshatra}</span> <span className="text-[#8B0000] font-black truncate">{data.nakshatra}</span></div>
            <div className="flex flex-col"><span className="font-black text-[#8B4513] uppercase text-[8px] md:text-[10px] tracking-tighter opacity-70">{labels.vaara}</span> <span className="text-[#8B0000] font-black truncate">{data.vaara}</span></div>
            <div className="flex flex-col"><span className="font-black text-[#8B4513] uppercase text-[8px] md:text-[10px] tracking-tighter opacity-70">{labels.yoga}</span> <span className="text-[#8B0000] font-black truncate">{data.yoga}</span></div>
        </div>
      </div>

      {/* Footer Branding - Adjusted for mobile */}
      <div className="w-full flex flex-col items-center z-30 pb-6 md:pb-12 mt-auto px-4">
        <div className="flex items-center gap-2 md:gap-4 w-[80%] mb-2 md:mb-3 opacity-40">
           <div className="h-[1px] flex-1 bg-[#8B4513]"></div>
           <div className="text-[#8B4513] text-sm md:text-lg leading-none">✦</div>
           <div className="h-[1px] flex-1 bg-[#8B4513]"></div>
        </div>
        <h4 className="text-lg md:text-2xl font-black text-[#8B0000] tracking-tight mb-1 text-center">
          Astrologer: {astrologerName}
        </h4>
        <div className="bg-[#D4AF37]/20 px-4 md:px-6 py-1 rounded-full border border-[#D4AF37]/40 mb-2">
            <p className="text-[#8B4513] font-bold tracking-[0.1em] md:tracking-[0.2em] text-[10px] md:text-sm uppercase">
              {data.date}
            </p>
        </div>
      </div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
    </div>
  );
};

export default PosterTemplate;
