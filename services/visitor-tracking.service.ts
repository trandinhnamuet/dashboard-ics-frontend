const API_BASE_URL = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || 'http://localhost:3001';

export interface VisitorTracking {
  id: string;
  access_count: number;
  page_count: number;
  created_at: string;
  updated_at: string;
}

export interface VisitorStatistics {
  totalPageCount: number;
  totalAccessCount: number;
}

class VisitorTrackingService {
  private baseUrl = `${API_BASE_URL}/visitor-tracking`;

  async createVisitor(id: string): Promise<VisitorTracking> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create visitor');
    }
    
    return response.json();
  }

  async getVisitor(id: string): Promise<VisitorTracking> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to get visitor');
    }
    
    return response.json();
  }

  async incrementPageCount(id: string): Promise<VisitorTracking> {
    const response = await fetch(`${this.baseUrl}/${id}/increment-page`, {
      method: 'PUT',
    });
    
    if (!response.ok) {
      throw new Error('Failed to increment page count');
    }
    
    return response.json();
  }

  async incrementAccessCount(id: string): Promise<VisitorTracking> {
    const response = await fetch(`${this.baseUrl}/${id}/increment-access`, {
      method: 'PUT',
    });
    
    if (!response.ok) {
      throw new Error('Failed to increment access count');
    }
    
    return response.json();
  }

  async getStatistics(): Promise<VisitorStatistics> {
    const response = await fetch(`${this.baseUrl}/statistics`);
    
    if (!response.ok) {
      throw new Error('Failed to get statistics');
    }
    
    return response.json();
  }

  async getAllVisitors(): Promise<VisitorTracking[]> {
    const response = await fetch(this.baseUrl);
    
    if (!response.ok) {
      throw new Error('Failed to get all visitors');
    }
    
    return response.json();
  }
}

export const visitorTrackingService = new VisitorTrackingService();