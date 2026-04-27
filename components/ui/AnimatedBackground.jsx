export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-primary">
      {/* Grid lines overlay */}
      <div className="absolute inset-0 bg-grid" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise" />
      
      {/* Radial blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-primary/20 dark:bg-accent-primary/10 blur-[100px] animate-blob-1" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-secondary/20 dark:bg-accent-secondary/10 blur-[120px] animate-blob-2" />
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-500/10 dark:bg-[#001133]/40 blur-[150px] animate-blob-3" />
    </div>
  );
}
