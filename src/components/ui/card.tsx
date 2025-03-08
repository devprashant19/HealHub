
import React, { ReactNode } from "react";
export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>;
  }
  
export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="p-6">{children}</div>;
  }