import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const NavItem = ({ to, icon, label, isActive, isSpecial }: { to: string; icon: string; label: string; isActive: boolean, isSpecial?: boolean }) => {
    return (
      <Link to={to} className={`flex flex-col items-center justify-center gap-1 w-12 transition-all ${isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}>
        {isSpecial && isActive ? (
           <div className="relative">
             <div className="absolute -top-1 right-1 w-2 h-2 bg-secondary rounded-full border-2 border-surface-light dark:border-surface-dark"></div>
             <span className="material-symbols-outlined text-[26px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
           </div>
        ) : (
          <span className={`material-symbols-outlined text-[26px] ${isActive ? 'filled' : ''}`} style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{icon}</span>
        )}
        <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>{label}</span>
      </Link>
    );
  };

  return (
    <div className="absolute bottom-6 left-0 right-0 px-4 z-50 pointer-events-none">
      <div className="mx-auto max-w-[340px] bg-white dark:bg-[#1a2c29] rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 py-3 px-6 flex justify-between items-center pointer-events-auto backdrop-blur-xl">
        <NavItem to="/home" icon="home" label="Home" isActive={path === '/home'} />
        <NavItem to="/report" icon="bar_chart" label="Logs" isActive={path === '/report'} />
        <NavItem to="/live" icon="lightbulb" label="Insight" isActive={path === '/live'} />
        <NavItem to="/chat" icon="chat_bubble" label="Chat" isActive={path === '/chat'} isSpecial />
        <NavItem to="/profile" icon="person" label="Profile" isActive={path === '/profile'} />
      </div>
    </div>
  );
};

export default BottomNav;