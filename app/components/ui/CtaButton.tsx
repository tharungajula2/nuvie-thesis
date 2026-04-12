import React from 'react';

interface CtaButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full tracking-widest uppercase";
  
  const variants = {
    // Entry/Energy Action: Pistachio fill + Cream text
    primary: "bg-accent text-background hover:bg-accent-strong shadow-sm active:scale-[0.98]",
    // Soft Neutral: Subtle backdrop with Espresso text
    secondary: "bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10",
    // Structural Anchor: Espresso border + Espresso text
    outline: "border border-foreground text-foreground hover:bg-foreground/5 bg-transparent",
  };

  const sizes = {
    md: "px-6 py-2.5 text-[10px]",
    lg: "px-8 py-3.5 text-[11px]",
    xl: "px-10 py-5 text-[12px] tracking-[0.3em]",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
