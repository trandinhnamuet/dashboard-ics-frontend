"use client";
import { usePageTracking } from "@/hooks/use-visitor-tracking";
export function PageTrackerGlobal() {
  usePageTracking();
  return null;
}
