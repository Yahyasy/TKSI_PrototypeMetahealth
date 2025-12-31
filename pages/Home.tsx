import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-0 pb-32">
      <header className="flex items-center justify-between px-6 pt-8 pb-4">
        <div className="flex flex-col">
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Oct 24, Tuesday</p>
          <h1 className="text-[#111817] dark:text-white text-2xl font-bold leading-tight">Good Morning, Budi ☀️</h1>
        </div>
        <Link to="/profile" className="relative shrink-0 cursor-pointer transition-transform hover:scale-105 active:scale-95">
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full size-12 border-2 border-white shadow-sm"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5-PuroA7vdGskzuaR-r10htB6TM4Od3qpfVdQcpe0Z8VJWORBzDiVW6IyMCFsk0-mB7sHS2nxI53iQfMZFs8U5xkS2dfau5adWakpby9lHPaVhWLBEOmSLOh2UEwzJmEcu3g0xDQ_kDq01RGEmUtcxFKbPtTIZt9W_1htjno1ggHb5bYsItkuiijwmlIXtZlNjAvVypyk50lg46qD6fEFg0txiM77wrDmIjWCrpVJwGlSApCSZ8jqCzxKhFHzONKnUxtY2yn8eTZa")' }}
          ></div>
          <div className="absolute bottom-0 right-0 size-3 bg-primary rounded-full border-2 border-white dark:border-background-dark"></div>
        </Link>
      </header>

      <div className="px-6 mb-6">
        <div className="flex items-center justify-between gap-3 bg-white dark:bg-[#1a2c29] px-4 py-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>watch</span>
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Device Connected</span>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Galaxy Watch 5</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">82%</span>
            <span className="material-symbols-outlined filled text-green-500" style={{ fontSize: '16px' }}>battery_5_bar</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-6">
        {/* Sleep Analysis Card */}
        <div className="bg-white dark:bg-[#1a2c29] rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-indigo-500">
                <span className="material-symbols-outlined filled" style={{ fontSize: '20px' }}>bedtime</span>
              </div>
              <h2 className="text-base font-bold text-slate-800 dark:text-slate-200">Sleep Analysis</h2>
            </div>
            <span className="text-xs font-medium text-slate-400 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded-full">Last Night</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative size-24 shrink-0 flex items-center justify-center">
              {/* Simple CSS Conic Gradient for Progress Ring */}
              <div className="size-full absolute inset-0 rounded-full" style={{ background: 'conic-gradient(#13ecc8 85%, #e5e7eb 0)' }}></div>
              <div className="bg-white dark:bg-[#1a2c29] size-[82%] rounded-full absolute flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-slate-800 dark:text-white">85</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Score</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">7<span className="text-lg font-medium text-slate-500">h</span> 15<span className="text-lg font-medium text-slate-500">m</span></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-primary filled" style={{ fontSize: '18px' }}>check_circle</span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Good Quality Sleep</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Target met (+15m)</p>
            </div>
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="relative overflow-hidden bg-white dark:bg-[#1a2c29] rounded-2xl shadow-sm border border-orange-100 dark:border-orange-900/30">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-accent-orange"></div>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-orange-500" style={{ fontSize: '20px' }}>lightbulb</span>
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">AI Insight</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Since you had a heavy dinner last night, let's start today with something lighter to stabilize blood sugar.
            </p>
            
            <div className="flex gap-4 items-center bg-background-light dark:bg-background-dark p-3 rounded-xl">
              <div 
                className="size-16 shrink-0 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_5J5fPzorAh11GlYVwYs830nXqoSSgHlTSXhH8e2lPfnnvjyJcJCwMbInCNCTuZAcA4Pe1tNVr3S-r7f-QF3rWGtRFss-Vqd-yYKZQ1fBo8w3Dl8u04LVAlKE38n8rf1UtXuX7xIAZYjEybRIZftE_HGe_nkAtnXINDmUR7kP61tVWBWi3VR1Bnh-XfjlaJ-tvxRxfIFeDvLGTELfpMbMMwUFUmyiyQXEeD23WvbYz4aA5CNHptm1yMYdUQ7bHYWAhnKZ0ZR1FowJ")' }}
              ></div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">Cinnamon Banana Oatmeal</h3>
                <p className="text-xs text-slate-500 truncate">320 kcal • Low Glycemic Index</p>
              </div>
            </div>
            
            <button className="w-full mt-4 bg-primary/10 hover:bg-primary/20 text-teal-800 dark:text-teal-200 text-sm font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
              <span>View Recipe</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Routine */}
        <div>
          <h3 className="text-lg font-bold text-[#111817] dark:text-white mb-3">Morning Routine</h3>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Metformin (500mg)', sub: 'Take with breakfast', icon: 'pill', color: 'blue' },
              { label: 'Vitamin D3', sub: '1 Tablet', icon: 'wb_sunny', color: 'yellow' }
            ].map((item, i) => (
              <label key={i} className="group flex items-center gap-4 bg-white dark:bg-[#1a2c29] p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer select-none transition-all active:scale-[0.99]">
                <input type="checkbox" className="peer sr-only" />
                <div className="relative flex items-center justify-center size-6 rounded-md border-2 border-slate-300 dark:border-slate-600 peer-checked:bg-primary peer-checked:border-primary transition-colors">
                  <span className="material-symbols-outlined text-white opacity-0 peer-checked:opacity-100 transition-opacity" style={{ fontSize: '16px' }}>check</span>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-slate-800 dark:text-slate-200 peer-checked:text-slate-400 peer-checked:line-through transition-colors">{item.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.sub}</p>
                </div>
                <div className={`size-8 rounded-full bg-${item.color}-50 dark:bg-${item.color}-900/30 flex items-center justify-center text-${item.color}-500`}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{item.icon}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;