import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full min-h-screen bg-background-light dark:bg-background-dark">
      <nav className="flex items-center justify-between p-4 pt-6 pb-2">
        <button onClick={() => navigate(-1)} className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Profile Setup</h2>
        <div className="size-10"></div>
      </nav>

      <div className="flex w-full flex-row items-center justify-center gap-3 py-4">
        <div className="h-1.5 w-8 rounded-full bg-primary shadow-[0_0_10px_rgba(19,236,200,0.4)]"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
      </div>

      <main className="flex-1 flex flex-col px-6 pb-6">
        <div className="pt-4 pb-6">
          <h1 className="text-[32px] font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-3">Let's get to know you</h1>
          <p className="text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400">
            To tailor your AI health plan, we need a few basics. This helps us personalize your daily recommendations.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <label className="flex flex-col flex-1 gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Weight</span>
              <div className="relative group">
                <input 
                  type="number" 
                  placeholder="165"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 p-4 pr-12 text-lg font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400 select-none">lbs</span>
              </div>
            </label>
            <label className="flex flex-col flex-1 gap-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Height</span>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="5' 9&quot;"
                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 p-4 pr-4 text-lg font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                />
              </div>
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Chronic Condition</span>
            <div className="relative cursor-pointer group">
              <select className="w-full appearance-none rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 p-4 pr-12 text-lg font-medium text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none cursor-pointer">
                <option value="" disabled selected>Select a condition...</option>
                <option value="diabetes_type_2">Type 2 Diabetes</option>
                <option value="hypertension">Hypertension</option>
                <option value="high_cholesterol">High Cholesterol</option>
                <option value="none">None / I'd rather not say</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined align-middle">keyboard_arrow_down</span>
              </div>
            </div>
            <div className="flex items-start gap-2 mt-1">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">verified_user</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                We use this to adjust nutritional advice and activity limits safely.
              </p>
            </div>
          </label>
        </div>

        <div className="flex-1 min-h-[40px]"></div>

        <div className="mt-auto pt-6">
          <Link 
            to="/connect-watch"
            className="w-full rounded-xl bg-primary hover:bg-[#0fdcbd] text-[#10221f] h-14 text-base font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
          >
            Continue
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
          </Link>
          <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
            <span className="material-symbols-outlined text-slate-400 text-sm">lock</span>
            <p className="text-xs text-slate-400 text-center font-medium">Your data is encrypted and 100% private.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSetup;