"use client"

import { usePageTracking } from '@/hooks/use-visitor-tracking';
import { ReactNode } from 'react';

interface PageTrackerProps {
  children: ReactNode;
}

export function PageTracker({ children }: PageTrackerProps) {
  usePageTracking();
  
  return <>{children}</>;
}