const API_BASE_URL = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || 'http://localhost:3005';

export interface MonthlyAccess {
  id: string;
  month: string; // YYYY-MM format
  access_count: number;
  page_count: number;
  created_at: string;
  updated_at: string;
}

export interface MonthlyAccessStatistics {
  totalMonths: number;
  monthlyData: MonthlyAccess[];
}

class MonthlyAccessService {
  private baseUrl = `${API_BASE_URL}/monthly-access`;

  async getAllMonthlyData(): Promise<MonthlyAccess[]> {
    const response = await fetch(`${this.baseUrl}/all`);
    if (!response.ok) {
      throw new Error('Failed to fetch monthly access data');
    }
    return response.json();
  }

  async getStatistics(): Promise<MonthlyAccessStatistics> {
    const response = await fetch(`${this.baseUrl}/statistics`);
    if (!response.ok) {
      throw new Error('Failed to fetch monthly access statistics');
    }
    return response.json();
  }

  async getRecentMonths(limit: number = 12): Promise<MonthlyAccess[]> {
    const response = await fetch(`${this.baseUrl}/recent?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recent monthly data');
    }
    return response.json();
  }

  async getDataByYear(year: number): Promise<MonthlyAccess[]> {
    const response = await fetch(`${this.baseUrl}/by-year?year=${year}`);
    if (!response.ok) {
      throw new Error('Failed to fetch yearly data');
    }
    return response.json();
  }
}

export const monthlyAccessService = new MonthlyAccessService();