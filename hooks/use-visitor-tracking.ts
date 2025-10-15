import { useEffect } from 'react';
import { trackNormalPageVisit, trackHomePageVisit } from '@/lib/visitor-tracking';

// Hook để track page visit cho trang bình thường
export function usePageTracking() {
  useEffect(() => {
    trackNormalPageVisit();
  }, []);
}

// Hook để track page visit cho trang chủ
export function useHomePageTracking() {
  useEffect(() => {
    trackHomePageVisit();
  }, []);
}