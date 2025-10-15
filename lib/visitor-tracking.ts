import { visitorTrackingService } from '@/services/visitor-tracking.service';

const VISITOR_ID_KEY = 'visitorId';

// Tạo UUID v4
export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Lấy hoặc tạo visitor ID
export function getOrCreateVisitorId(): string {
  if (typeof window === 'undefined') return ''; // SSR check
  
  let visitorId = localStorage.getItem(VISITOR_ID_KEY);
  if (!visitorId) {
    visitorId = generateUUID();
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
  }
  return visitorId;
}

// Hàm chung để track page visit
export async function trackPageVisit(isHomePage: boolean = false): Promise<void> {
  if (typeof window === 'undefined') return; // SSR check
  
  try {
    const visitorId = getOrCreateVisitorId();
    
    // Check if visitor exists
    try {
      await visitorTrackingService.getVisitor(visitorId);
      
      // Visitor exists, increment counters
      if (isHomePage) {
        // Trang chủ: tăng cả access_count và page_count
        await visitorTrackingService.incrementAccessCount(visitorId);
      } else {
        // Trang khác: chỉ tăng page_count
        await visitorTrackingService.incrementPageCount(visitorId);
      }
    } catch (error) {
      // Visitor doesn't exist, create new one
      await visitorTrackingService.createVisitor(visitorId);
    }
  } catch (error) {
    console.error('Error tracking page visit:', error);
  }
}

// Hook cho các trang khác (không phải trang chủ)
export async function trackNormalPageVisit(): Promise<void> {
  await trackPageVisit(false);
}

// Hook cho trang chủ
export async function trackHomePageVisit(): Promise<void> {
  await trackPageVisit(true);
}