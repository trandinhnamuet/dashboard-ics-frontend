const API_BASE_URL = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || 'http://localhost:3001';

export interface DailyAccess {
  id: string;
  date: string; // YYYY-MM-DD format
  access_count: number;
  page_count: number;
  created_at: string;
  updated_at: string;
}

export interface DailyAccessStatistics {
  totalDays: number;
  dailyData: DailyAccess[];
}

class DailyAccessService {
  private baseUrl = `${API_BASE_URL}/daily-access`;

  async getAllDailyData(): Promise<DailyAccess[]> {
    const response = await fetch(`${this.baseUrl}/all`);
    if (!response.ok) {
      throw new Error('Failed to fetch daily access data');
    }
    return response.json();
  }

  async getStatistics(): Promise<DailyAccessStatistics> {
    const response = await fetch(`${this.baseUrl}/statistics`);
    if (!response.ok) {
      throw new Error('Failed to fetch daily access statistics');
    }
    return response.json();
  }

  async getRecentDays(limit: number = 30): Promise<DailyAccess[]> {
    const response = await fetch(`${this.baseUrl}/recent?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recent daily data');
    }
    return response.json();
  }

  async getDataByMonth(year: number, month: number): Promise<DailyAccess[]> {
    const response = await fetch(`${this.baseUrl}/by-month?year=${year}&month=${month}`);
    if (!response.ok) {
      throw new Error('Failed to fetch monthly daily data');
    }
    return response.json();
  }

  async getDataByDateRange(startDate: string, endDate: string): Promise<DailyAccess[]> {
    const response = await fetch(`${this.baseUrl}/by-range?start=${startDate}&end=${endDate}`);
    if (!response.ok) {
      throw new Error('Failed to fetch date range data');
    }
    return response.json();
  }
}

export const dailyAccessService = new DailyAccessService();