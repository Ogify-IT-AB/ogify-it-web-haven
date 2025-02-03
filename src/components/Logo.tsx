const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative group ${className}`}>
      <h1 className="text-4xl font-bold tracking-wider transition-all duration-500 hover:scale-105 drop-shadow-[0_0_15px_rgba(83,189,164,0.3)]">
        <span className="bg-gradient-to-r from-ogify-accent to-ogify-secondary text-transparent bg-clip-text">
          OGIFY
        </span>
      </h1>
      <div className="absolute inset-0 bg-gradient-to-r from-ogify-accent/20 to-ogify-secondary/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

export default Logo;