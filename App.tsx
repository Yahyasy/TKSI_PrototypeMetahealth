import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import ProfileSetup from './pages/ProfileSetup';
import SmartwatchConnect from './pages/SmartwatchConnect';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import SmartwatchLive from './pages/SmartwatchLive';
import WeeklyReport from './pages/WeeklyReport';
import BottomNav from './components/BottomNav';

// Layout component to conditionally show BottomNav
const Layout = ({ children }: { children?: React.ReactNode }) => {
  const location = useLocation();
  const showNav = ['/home', '/profile', '/chat', '/live', '/report'].includes(location.pathname);
  
  return (
    <div className="relative flex flex-col h-[100dvh] w-full max-w-md mx-auto bg-background-light dark:bg-background-dark sm:rounded-[32px] overflow-hidden shadow-2xl sm:ring-8 sm:ring-black/5 dark:sm:ring-white/5 sm:my-4 sm:h-[850px]">
      <main className="flex-1 overflow-y-auto no-scrollbar relative">
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-0 sm:p-4 font-display">
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/setup" element={<ProfileSetup />} />
            <Route path="/connect-watch" element={<SmartwatchConnect />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/live" element={<SmartwatchLive />} />
            <Route path="/report" element={<WeeklyReport />} />
          </Routes>
        </Layout>
      </HashRouter>
    </div>
  );
};

export default App;