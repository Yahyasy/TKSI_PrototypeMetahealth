import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';

const data = [
  { v: 65 }, { v: 78 }, { v: 85 }, { v: 82 }, { v: 68 }, { v: 75 }, { v: 92 }, { v: 88 },
  { v: 70 }, { v: 84 }, { v: 90 }, { v: 85 }, { v: 62 }, { v: 60 }, { v: 110 }, { v: 95 },
  { v: 78 }, { v: 76 }, { v: 55 }, { v: 88 }
];

const SmartwatchLive: React.FC = () => {
  return (
    <div className="flex flex-col gap-0 pb-32">
      <header className="flex p-5 items-center justify-between">
        <div className="flex gap-4 items-center">
          <Link to="/profile" className="block group">
            <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-14 border-2 border-primary group-hover:brightness-90 transition-all"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqI_qs4ChUPrIvdoozE-VK8WHIBBPS4N_D1o47pubAlps_oxn6h-c8IQXHs1n5UB4WWHebzjwGxOgTogm0sBEvbLTbi0NyZ2RAsrqf7XMq77mWvxibbxYpjANAOCIdFzkaMAEJBMCGSXgLkrGsPkoguVrBsfERWetrxGwrW0ixNABVzscNo2acaetHkZ1oIBh3GAaZ2uL5-e99rOmmYomyDXw_zTEqLUzP_5lZw--WJyy9ZoRArYK_3lZkslvQk--o7ROgZOcWIDm0")' }}
            ></div>
          </Link>
          <div className="flex flex-col justify-center">
            <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">Good Morning, Budi</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Connected to Apple Watch</p>
            </div>
          </div>
        </div>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 dark:bg-[#1e3a36] text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-[#2a4f49] transition-colors">
          <span className="material-symbols-outlined">sync</span>
        </button>
      </header>

      <div className="px-5 pb-2">
        <div className="flex flex-col gap-3 rounded-xl border border-orange-100 bg-secondary-bg dark:bg-orange-900/10 dark:border-orange-800/30 p-4 shadow-sm relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
          <div className="flex items-start gap-3 pl-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 dark:bg-secondary/20 text-secondary">
              <span className="material-symbols-outlined">accessibility_new</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-slate-900 dark:text-white text-sm font-bold leading-tight flex items-center gap-2">
                Sedentary Alert <span className="text-secondary text-xs bg-white dark:bg-transparent px-1.5 py-0.5 rounded border border-secondary/20">Action Needed</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm font-normal leading-relaxed">
                You've been sitting for 2 hours. Let's do a 5-minute stretch to help your blood sugar.
              </p>
            </div>
          </div>
          <div className="flex justify-end pl-2">
            <button className="flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-[#10221f] text-sm font-bold shadow-sm hover:brightness-105 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              <span className="truncate">Start Stretch</span>
            </button>
          </div>
        </div>
      </div>

      <div className="px-5 py-4">
        <h2 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-red-500">favorite</span> Heart Rate
        </h2>
        <div className="flex flex-col gap-2 rounded-2xl p-5 border border-slate-100 bg-white dark:bg-[#1e3a36] dark:border-[#2a4f49] shadow-sm">
          <div className="flex justify-between items-end mb-2">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Current Rate</p>
              <div className="flex items-baseline gap-2">
                <p className="text-slate-900 dark:text-white text-4xl font-bold leading-none tracking-tight">82</p>
                <p className="text-slate-400 dark:text-slate-500 text-lg font-medium">BPM</p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 ring-1 ring-inset ring-emerald-600/20">
                Normal Range
              </span>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">Resting avg: 72</p>
            </div>
          </div>
          <div className="h-32 w-full relative overflow-hidden">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#13ecc8" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#13ecc8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                    <Area type="monotone" dataKey="v" stroke="#13ecc8" strokeWidth={3} fillOpacity={1} fill="url(#chartGradient)" />
                </AreaChart>
             </ResponsiveContainer>
          </div>
          <div className="flex justify-between px-2 pt-2 border-t border-slate-50 dark:border-slate-700">
            <p className="text-slate-400 dark:text-slate-500 text-[10px] font-bold tracking-wider uppercase">Live Pulse</p>
            <p className="text-primary text-[10px] font-bold tracking-wider uppercase animate-pulse">● Real-time</p>
          </div>
        </div>
      </div>

      <div className="px-5 pb-6">
        <h2 className="text-slate-900 dark:text-white tracking-tight text-xl font-bold leading-tight mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-orange-400">directions_walk</span> Activity
        </h2>
        <div className="flex flex-col gap-4 rounded-2xl p-5 border border-slate-100 bg-white dark:bg-[#1e3a36] dark:border-[#2a4f49] shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Current Steps</p>
              <p className="text-slate-900 dark:text-white text-3xl font-bold mt-1">4,200</p>
            </div>
            <div className="h-12 w-12 rounded-full border-4 border-slate-100 dark:border-slate-700 flex items-center justify-center relative">
              <span className="material-symbols-outlined text-slate-400">footprint</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
              <span>Progress</span>
              <span>Goal: 10,000</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3">
              <div className="bg-primary h-3 rounded-full relative" style={{ width: '42%' }}>
                <div className="absolute right-0 top-0 bottom-0 w-3 h-3 bg-white rounded-full opacity-30 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-slate-50 dark:bg-[#1e3a36] dark:border dark:border-[#2a4f49] p-4 rounded-xl flex flex-col gap-1">
            <span className="material-symbols-outlined text-orange-500 text-2xl mb-1">local_fire_department</span>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Active Calories</p>
            <p className="text-slate-900 dark:text-white text-xl font-bold">340 <span className="text-xs font-normal text-slate-400">kcal</span></p>
          </div>
          <div className="bg-slate-50 dark:bg-[#1e3a36] dark:border dark:border-[#2a4f49] p-4 rounded-xl flex flex-col gap-1">
            <span className="material-symbols-outlined text-blue-400 text-2xl mb-1">accessibility</span>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">Stand Hours</p>
            <p className="text-slate-900 dark:text-white text-xl font-bold">4 <span className="text-xs font-normal text-slate-400">/ 12 hr</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartwatchLive;