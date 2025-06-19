import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children }: CardProps) {
  return <div className="rounded-xl shadow-md bg-white">{children}</div>;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
