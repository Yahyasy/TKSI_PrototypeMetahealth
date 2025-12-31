import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, Area, XAxis } from 'recharts';

const data = [
  { name: 'M', steps: 4000, glucose: 130 },
  { name: 'T', steps: 6000, glucose: 110 },
  { name: 'W', steps: 2000, glucose: 150 },
  { name: 'T', steps: 5000, glucose: 100 },
  { name: 'F', steps: 8000, glucose: 95 },
  { name: 'S', steps: 4500, glucose: 120 },
  { name: 'S', steps: 3000, glucose: 135 },
];

const WeeklyReport: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-6 p-4 pb-32">
       <header className="sticky top-0 z-10 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 -mx-4 px-4">
        <div className="flex items-center justify-between py-4">
          <button onClick={() => navigate(-1)} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white flex-1 text-center">Weekly Report</h1>
          <button className="flex items-center justify-center h-10 px-3 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold border border-slate-100 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all">
            <span className="material-symbols-outlined text-[18px] mr-2">calendar_month</span>
            <span>Oct 21 - 27</span>
          </button>
        </div>
      </header>

      <section aria-label="Key Metrics">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-orange-100 dark:bg-orange-800/40 rounded-full text-accent-orange">
                <span className="material-symbols-outlined text-[18px]">water_drop</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Avg. Glucose</p>
            </div>
            <div>
              <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">110 <span className="text-sm font-medium text-slate-500 dark:text-slate-400">mg/dL</span></p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-green-600 text-[16px]">trending_down</span>
                <p className="text-green-600 text-sm font-bold">-5%</p>
                <span className="text-xs text-slate-400 ml-1">vs last week</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-xl p-5 bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-900/30 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-teal-100 dark:bg-teal-800/40 rounded-full text-teal-600 dark:text-teal-400">
                <span className="material-symbols-outlined text-[18px]">footprint</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">Avg. Steps</p>
            </div>
            <div>
              <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight">4,200</p>
              <div className="flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-green-600 text-[16px]">trending_up</span>
                <p className="text-green-600 text-sm font-bold">+12%</p>
                <span className="text-xs text-slate-400 ml-1">vs last week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between px-1">
          <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Activity vs. Glucose</h2>
        </div>
        <div className="w-full bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-end gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Steps</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent-orange"></span>
              <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Glucose</span>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3]">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#13ecc8" stopOpacity={0.2}/>
                     <stop offset="95%" stopColor="#13ecc8" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                 {/* Steps Area */}
                 <Area type="monotone" dataKey="steps" stroke="#13ecc8" strokeWidth={3} fillOpacity={1} fill="url(#colorSteps)" />
                 {/* Glucose Line (simulated as area for simplicity or just Line) - The design shows dashed line. Recharts Area can be dashed stroke */}
                 <Area type="monotone" dataKey="glucose" stroke="#FF8C42" strokeWidth={3} strokeDasharray="5 5" fill="none" />
               </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section aria-label="AI Insight">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#0ebca0] shadow-lg shadow-primary/20">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className="relative z-10 flex flex-col p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
              </div>
              <span className="text-sm font-bold uppercase tracking-wider opacity-90">MetaHealth AI</span>
            </div>
            <h3 className="text-xl font-bold leading-snug mb-2">Insight: Activity Impact</h3>
            <p className="text-white/90 font-medium leading-relaxed">
              Great job! On days you walked over <span className="font-bold text-white border-b-2 border-white/40">4k steps</span>, your average glucose dropped by <span className="font-bold text-white border-b-2 border-white/40">10%</span>.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                Keeping active is working!
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-slate-900 dark:text-white text-lg font-bold">Detailed Logs</h3>
        <button className="flex w-full items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
              <span className="material-symbols-outlined">directions_walk</span>
            </div>
            <div className="text-left">
              <p className="text-slate-900 dark:text-white font-semibold">Weekly Steps Total</p>
              <p className="text-slate-500 text-sm">29,900 steps</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-400">chevron_right</span>
        </button>
        <button className="flex w-full items-center justify-between p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
              <span className="material-symbols-outlined">monitor_heart</span>
            </div>
            <div className="text-left">
              <p className="text-slate-900 dark:text-white font-semibold">Glucose Readings</p>
              <p className="text-slate-500 text-sm">14 logs this week</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-slate-400">chevron_right</span>
        </button>
      </section>

      <section className="pt-4">
        <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 h-14 font-bold text-lg shadow-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
          <span>Set Next Week's Goal</span>
          <span className="material-symbols-outlined">flag</span>
        </button>
      </section>
    </div>
  );
};

export default WeeklyReport;