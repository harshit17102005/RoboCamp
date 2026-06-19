import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkshopDetails from './components/WorkshopDetails';
import LearningOutcomes from './components/LearningOutcomes';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#03030a] font-sans transition-colors duration-500 relative overflow-hidden">
      
      {/* Deep Space Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-grid-slate-900/[0.04] dark:bg-grid-white/[0.02]">
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-[#03030a]/80 [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        
        {/* Animated glowing orbs using the custom blob animation */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-500/20 dark:bg-primary-500/10 blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary-500/20 dark:bg-secondary-600/10 blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-500/20 dark:bg-cyan-400/10 blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        <Toaster position="top-center" />
        <Navbar />
      <main>
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;
