type LogoProps = {
  className?: string;
};

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex size-9 items-center justify-center rounded-full bg-primary text-on-primary">
        <span className="font-heading text-lg font-bold">M</span>
      </div>

      <span className="font-heading text-lg font-bold text-on-surface">
        Messaging App
      </span>
    </div>
  );
};

export default Logo;
