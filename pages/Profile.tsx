import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 p-4 pb-32">
      <div className="sticky top-0 z-10 bg-surface-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-100 dark:border-white/5 transition-colors -mx-4 px-4">
        <div className="flex items-center justify-between h-14">
          <button onClick={() => navigate(-1)} className="flex w-12 items-center justify-start cursor-pointer hover:opacity-70">
            <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">arrow_back_ios_new</span>
          </button>
          <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Profile & Ethics</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="text-primary-dark dark:text-primary text-base font-bold leading-normal shrink-0 hover:opacity-80 transition-opacity">Save</button>
          </div>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-white/5">
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div 
              className="h-16 w-16 rounded-full bg-cover bg-center border-2 border-white dark:border-background-dark shadow-md"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuDvXunNxqfTgim1aLDgoBcAFtwra8TH-79pvWvfJez1ULb_iRDeQkkP2ko_HZPcygOjv1AKpDc1vqA0eCqm70jfF-tlNMwmY66tl-e-J0Mxf7LaBnDzz5OeNwQ3c9tEHOjLa8oCXAIQz_0tmRgB0rDCXSteK_zCy0JnmF8zK_wAG_h_Z6UEjkzCObp2w96jluUjJSr2fvJVzJEK_9TIIKv6oplLua3Sep1HfLY0PGJtOs4JlXJVbR3IFdybmATnfE38nmceZkUbY4")' }}
            ></div>
            <div className="absolute bottom-0 right-0 h-4 w-4 bg-primary rounded-full border-2 border-white dark:border-background-dark"></div>
          </div>
          <div className="flex flex-col justify-center flex-1 min-w-0">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight truncate">Budi</h3>
            <p className="text-primary-dark dark:text-primary/90 text-sm font-medium leading-normal truncate">Type 2 Diabetes Management</p>
          </div>
          <button className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-50 dark:bg-white/10 text-slate-400 hover:text-primary hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined text-[20px]">edit</span>
          </button>
        </div>
      </div>

      <section className="flex flex-col gap-3">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold px-1">My Vitals</h3>
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-white/5 flex flex-col gap-5">
          <div className="flex gap-4">
            <label className="flex flex-col flex-1 gap-2">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Weight</span>
              <div className="relative flex items-center">
                <input type="number" defaultValue="185" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-300" placeholder="0" />
                <span className="absolute right-4 text-slate-400 text-sm font-medium">lbs</span>
              </div>
            </label>
            <label className="flex flex-col flex-1 gap-2">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Height</span>
              <div className="relative flex items-center">
                <input type="text" defaultValue="5' 11''" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-300" placeholder="0' 0''" />
              </div>
            </label>
          </div>
          <div className="h-px bg-slate-100 dark:bg-white/5 w-full"></div>
          <div className="flex flex-col gap-3">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Dietary Preference</span>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-primary text-[#10221f] border border-primary">Low Carb</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary/50">Vegan</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary/50">Keto</button>
              <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-primary/50 flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">add</span> Add
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-slate-900 dark:text-white text-lg font-bold">AI & Privacy Standards</h3>
          <span className="text-xs font-bold text-accent-orange bg-accent-orange/10 px-2 py-1 rounded">STRICT MODE</span>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-white/5 overflow-hidden">
          <div className="p-5 flex gap-4 items-start border-b border-slate-100 dark:border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">lock</span>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark dark:text-primary">
              <span className="material-symbols-outlined filled">encrypted</span>
            </div>
            <div className="flex flex-col gap-1 relative z-10">
              <h4 className="text-slate-900 dark:text-white font-bold text-base">End-to-End Encryption</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Your health data is locked to your device. Even MetaHealth cannot see your raw entries.</p>
            </div>
          </div>
          <div className="p-5 flex gap-4 items-start relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-primary">psychology</span>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark dark:text-primary">
              <span className="material-symbols-outlined filled">visibility</span>
            </div>
            <div className="flex flex-col gap-1 relative z-10">
              <div className="flex items-center gap-2">
                <h4 className="text-slate-900 dark:text-white font-bold text-base">Transparent AI</h4>
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-300 px-1.5 py-0.5 rounded uppercase tracking-wider">Beta</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Inspect the logic behind every recommendation. Tap any AI insight to see the source.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold px-1">Data Control</h3>
        <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-white/5 flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-900 dark:text-white font-medium text-base">Contribute to Research</span>
              <span className="text-slate-500 dark:text-slate-400 text-xs">Share anonymous, aggregated data</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className="h-px bg-slate-100 dark:bg-white/5 w-full"></div>
          <button className="flex items-center justify-between w-full py-2 group">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">download</span>
              <span className="text-slate-700 dark:text-slate-200 font-medium text-sm group-hover:text-primary transition-colors">Export my raw health data</span>
            </div>
            <span className="material-symbols-outlined text-slate-300 text-sm">arrow_forward_ios</span>
          </button>
          <button className="flex items-center justify-between w-full py-2 group">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-accent-orange group-hover:text-red-600 transition-colors">delete</span>
              <span className="text-accent-orange dark:text-accent-orange font-medium text-sm group-hover:text-red-600 transition-colors">Delete account & wipe data</span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Profile;