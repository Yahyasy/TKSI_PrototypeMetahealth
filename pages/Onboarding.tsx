import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark relative">
      <div className="flex items-center justify-center pt-8 pb-4">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 dark:bg-primary/10 p-1.5 rounded-lg">
            <span className="material-symbols-outlined text-primary text-xl">monitor_heart</span>
          </div>
          <h2 className="text-[#111817] dark:text-white text-lg font-bold leading-tight tracking-tight">MetaHealth</h2>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar relative z-10">
        <div className="w-full px-5 pt-4 pb-2">
          <div className="w-full relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm group">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7g6CufvmfoOM3XtbcuU_s9_itoc67SSlP1vOOPVnNGFJNStLNeL7I-td8M8vOl59KZnIqAZEYLZ5uaPGNWQo6utqqW-LEw9V_hhucgq249WRI7_-1wAG2aoh3xoIulkCkDdJxCAjVUd2Jjj6IsaRW7lLQJa___MKw_qCk2oKl_fnJ8-A7EQ4dAI3q6j3TN-_lHRwgKJ0PtWOHDmeoUOnbkgg1Zxl0V04w52CGpBTnibLCAqZEuu2M5SXAXd46m6pyrXr6xqOdGpB")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-light/90 via-transparent to-transparent dark:from-background-dark/90 dark:via-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/20 dark:border-white/5 shadow-lg flex items-center gap-4 animate-[fade-in-up_0.8s_ease-out_forwards]">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <span className="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Daily Status</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Glucose Levels Stable</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-2 py-6">
          <div className="h-2 w-8 rounded-full bg-[#111817] dark:bg-primary transition-all duration-300"></div>
          <div className="h-2 w-2 rounded-full bg-[#dbe6e4] dark:bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-[#dbe6e4] dark:bg-white/20"></div>
        </div>

        <div className="flex flex-col px-6 text-center pb-8">
          <h1 className="text-[#111817] dark:text-white tracking-tight text-[32px] font-bold leading-[1.15] pb-3">
            Your Proactive <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">Health Partner</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed max-w-xs mx-auto">
            Manage Type 2 Diabetes with confidence. Let our AI guide your daily wellness journey.
          </p>
        </div>
        
        {/* Spacer for sticky bottom area */}
        <div className="h-32 shrink-0"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 pt-0 bg-gradient-to-t from-background-light via-background-light to-transparent dark:from-background-dark dark:via-background-dark z-20">
        <Link 
          to="/setup"
          className="w-full bg-primary hover:bg-primary-dark text-[#10221f] font-bold text-lg h-14 rounded-xl shadow-[0_8px_30px_rgb(19,236,200,0.3)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
        >
          Get Started
          <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
        <div className="mt-5 text-center">
          <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Already have an account? <span className="text-teal-700 dark:text-primary font-bold">Log in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;