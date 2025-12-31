import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SmartwatchConnect: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col h-full min-h-screen w-full bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
      <div className="flex flex-col bg-background-light dark:bg-background-dark pt-4 sticky top-0 z-20">
        <div className="flex items-center justify-between px-4 pb-2">
          <button onClick={() => navigate(-1)} className="text-background-dark dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 cursor-pointer transition-colors focus:outline-none">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex gap-2 flex-1 mx-4 max-w-[200px]">
            <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
            <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
            <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="size-12"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-[180px] scrollbar-hide">
        <div className="px-5 pt-2 pb-6">
          <div 
            className="w-full aspect-[4/3] rounded-2xl bg-gray-100 dark:bg-gray-800 bg-center bg-cover relative overflow-hidden flex items-end justify-center shadow-sm"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAO-oZSv-lhYPQR9628CE_lWQNFdPKATJOe_4SKz-MV0rE1JrgDg7S2XjYOn5PBujvA9Te-yYmRw95FHJrrgvHoPWrtk5BUg8lMkQP1omdoXzyBn0zUU07uuXIF0QRTPcBKAxTvbeYlViVUFHgVO1pgE0zwN3HRVPh53GDdkMaE2dG0dPDNvmy9AS8wvy3z5e437Ej-vDIbAsBro-2IBknM8-vdlvcZ9HcedBawie5-_Vr2aKoIvvRLur907dhpYxZgh4LLCOFbjMKB")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        <div className="px-6 flex flex-col items-center text-center">
          <h1 className="text-[#111817] dark:text-white tracking-tight text-[28px] md:text-[32px] font-bold leading-tight pb-3">
            Sync Your Health Data
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed pb-6 max-w-[320px]">
            Connect your smartwatch to let MetaHealth analyze your vitals alongside your glucose levels for deeper insights.
          </p>
        </div>

        <div className="px-6 space-y-6 mt-2">
          <div className="flex items-start gap-4">
            <div className="shrink-0 size-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#10aa90] dark:text-[#13ecc8] text-[28px]">directions_run</span>
            </div>
            <div className="pt-1">
              <h3 className="font-bold text-[#111817] dark:text-white text-lg leading-tight">Track Activity</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-normal mt-1">See how movement impacts your daily levels.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="shrink-0 size-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-indigo-500 dark:text-indigo-400 text-[28px]">bedtime</span>
            </div>
            <div className="pt-1">
              <h3 className="font-bold text-[#111817] dark:text-white text-lg leading-tight">Sleep Insights</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-normal mt-1">Understand rest and recovery patterns.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="shrink-0 size-12 rounded-xl bg-rose-50 dark:bg-rose-500/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-rose-500 dark:text-rose-400 text-[28px]">ecg_heart</span>
            </div>
            <div className="pt-1">
              <h3 className="font-bold text-[#111817] dark:text-white text-lg leading-tight">Heart Health</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-normal mt-1">Monitor stress and heart rate variability.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 px-6 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Works seamlessly with</p>
          <div className="flex justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex flex-col items-center gap-1 group cursor-default">
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                <span className="material-symbols-outlined text-gray-800 dark:text-white">watch</span>
              </div>
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">Apple</span>
            </div>
            <div className="flex flex-col items-center gap-1 group cursor-default">
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                <span className="material-symbols-outlined text-gray-800 dark:text-white">android</span>
              </div>
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">Android</span>
            </div>
            <div className="flex flex-col items-center gap-1 group cursor-default">
              <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                <span className="material-symbols-outlined text-gray-800 dark:text-white">monitor_heart</span>
              </div>
              <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">Fitbit</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full px-6 py-6 pb-8 bg-gradient-to-t from-background-light via-background-light via-80% to-transparent dark:from-background-dark dark:via-background-dark z-10 flex flex-col items-center gap-3">
        <button className="w-full bg-primary hover:bg-[#0fd6b5] text-[#10221f] font-bold text-[17px] h-14 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all active:scale-[0.98]" onClick={() => navigate('/home')}>
          <span className="material-symbols-outlined filled">watch_screentime</span>
          Connect Smartwatch
        </button>
        <Link to="/home" className="text-gray-500 dark:text-gray-400 font-medium text-sm py-2 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
          Skip for now
        </Link>
        <div className="flex items-center gap-1.5 mt-1 opacity-60">
          <span className="material-symbols-outlined text-[14px] text-gray-500 dark:text-gray-400">lock</span>
          <span className="text-[11px] text-gray-500 dark:text-gray-400">Your health data is encrypted and private.</span>
        </div>
      </div>
    </div>
  );
};

export default SmartwatchConnect;