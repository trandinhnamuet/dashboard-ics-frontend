"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Users, Eye, BarChart3, RefreshCw } from 'lucide-react';
import { visitorTrackingService, VisitorStatistics, VisitorTracking } from '@/services/visitor-tracking.service';

export default function VisitorStatisticsPage() {
  const [statistics, setStatistics] = useState<VisitorStatistics | null>(null);
  const [visitors, setVisitors] = useState<VisitorTracking[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const [statsData, visitorsData] = await Promise.all([
        visitorTrackingService.getStatistics(),
        visitorTrackingService.getAllVisitors()
      ]);
      setStatistics(statsData);
      setVisitors(visitorsData);
    } catch (error) {
      console.error('Error fetching visitor data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <span className="text-lg text-gray-600">Đang tải dữ liệu...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Thống kê lượt truy cập
            </h1>
            <p className="text-gray-600">
              Theo dõi số lượng người dùng và lượt truy cập trang web
            </p>
          </div>
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
            <span>Làm mới</span>
          </Button>
        </div>

        {/* Statistics Cards */}
        {statistics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tổng lượt truy cập trang chủ</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {statistics.totalAccessCount.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Số lần người dùng truy cập trang chủ
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tổng lượt xem trang</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {statistics.totalPageCount.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Tổng số trang đã được xem
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tổng số người dùng</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  {visitors.length.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Số lượng người dùng duy nhất
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Visitors Table */}
        <Card>
          <CardHeader>
            <CardTitle>Chi tiết người dùng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">ID Người dùng</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Lượt truy cập trang chủ</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Tổng lượt xem trang</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Lần đầu truy cập</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Lần cuối cập nhật</th>
                  </tr>
                </thead>
                <tbody>
                  {visitors.map((visitor) => (
                    <tr key={visitor.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {visitor.id.substring(0, 8)}...
                        </code>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {visitor.access_count}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {visitor.page_count}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {new Date(visitor.created_at).toLocaleString('vi-VN')}
                      </td>
                      <td className="py-3 px-4 text-sm text-gray-600">
                        {new Date(visitor.updated_at).toLocaleString('vi-VN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {visitors.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  Chưa có dữ liệu người dùng nào
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}