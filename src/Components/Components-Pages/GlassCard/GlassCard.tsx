// components/GlassCard/GlassCard.tsx
import React, { ReactNode } from 'react';


type GlassCardProps ={
  children: ReactNode;
}

function GlassCard({ children }: GlassCardProps) {
  return <div className="glass-card">{children}</div>;
}

export default GlassCard;
