export default function Footer() {
  return (
    <footer className="glass py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            RoboCamp
          </span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} RoboCamp AI & Robotics Workshop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
