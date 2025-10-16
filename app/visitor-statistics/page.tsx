"use client"

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Users, Eye, BarChart3, RefreshCw, TrendingUp } from 'lucide-react';
import { visitorTrackingService, VisitorStatistics, VisitorTracking } from '@/services/visitor-tracking.service';
import { monthlyAccessService, MonthlyAccess, MonthlyAccessStatistics } from '@/services/monthly-access.service';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function VisitorStatisticsPage() {
  const [statistics, setStatistics] = useState<VisitorStatistics | null>(null);
  const [visitors, setVisitors] = useState<VisitorTracking[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyAccess[]>([]);
  const [monthlyStats, setMonthlyStats] = useState<MonthlyAccessStatistics | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [currentVisitorId, setCurrentVisitorId] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const [statsData, visitorsData, monthlyStatsData, recentMonthsData] = await Promise.all([
        visitorTrackingService.getStatistics(),
        visitorTrackingService.getAllVisitors(),
        monthlyAccessService.getStatistics(),
        monthlyAccessService.getRecentMonths(12)
      ]);
      setStatistics(statsData);
      setVisitors(visitorsData);
      setMonthlyStats(monthlyStatsData);
      setMonthlyData(recentMonthsData.reverse()); // Đảo ngược để hiển thị từ cũ đến mới
    } catch (error) {
      console.error('Error fetching visitor data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Lấy visitorId từ localStorage (nếu có)
    if (typeof window !== 'undefined') {
      const id = localStorage.getItem('visitorId');
      if (id) setCurrentVisitorId(id);
    }
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 dark:text-blue-300" />
          <span className="text-lg text-gray-600 dark:text-gray-300">Đang tải dữ liệu...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">
              Thống kê lượt truy cập
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Theo dõi số lượng người dùng và lượt truy cập trang web
            </p>
          </div>
          <Button
            onClick={handleRefresh}
            disabled={refreshing}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''} dark:text-blue-300`} />
            <span className="dark:text-white">Làm mới</span>
          </Button>
        </div>

        {/* Statistics Cards */}
        {statistics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium dark:text-white">Tổng lượt truy cập trang chủ</CardTitle>
                <Eye className="h-4 w-4 text-muted-foreground dark:text-blue-300" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                  {statistics.totalAccessCount.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground dark:text-gray-300">
                  Số lần người dùng truy cập trang chủ
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium dark:text-white">Tổng lượt xem trang</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground dark:text-green-300" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 dark:text-green-300">
                  {statistics.totalPageCount.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground dark:text-gray-300">
                  Tổng số trang đã được xem
                </p>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium dark:text-white">Tổng số người dùng</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground dark:text-purple-300" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-300">
                  {visitors.length.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground dark:text-gray-300">
                  Số lượng người dùng duy nhất
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Monthly Access Chart */}
        {monthlyData.length > 0 && (
          <Card className="dark:bg-gray-900 dark:border-gray-800 mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                  <CardTitle className="dark:text-white">Biến động truy cập theo tháng</CardTitle>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  {monthlyData.length} tháng
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" className="dark:stroke-gray-700" />
                    <XAxis 
                      dataKey="month" 
                      className="text-sm dark:text-gray-300"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis className="text-sm dark:text-gray-300" tick={{ fontSize: 12 }} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'var(--card)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px'
                      }}
                      labelFormatter={(label) => `Tháng: ${label}`}
                      formatter={(value, name) => [
                        value.toLocaleString(),
                        name === 'access_count' ? 'Lượt truy cập trang chủ' : 'Tổng lượt xem trang'
                      ]}
                    />
                    <Legend 
                      formatter={(value) => 
                        value === 'access_count' ? 'Lượt truy cập trang chủ' : 'Tổng lượt xem trang'
                      }
                    />
                    <Line 
                      type="monotone" 
                      dataKey="access_count" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="page_count" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Visitors Table */}
        <Card className="dark:bg-gray-900 dark:border-gray-800">
          <CardHeader>
            <CardTitle className="dark:text-white">Chi tiết người dùng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">ID Người dùng</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Lượt truy cập trang chủ</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Tổng lượt xem trang</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Lần đầu truy cập</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Lần cuối cập nhật</th>
                  </tr>
                </thead>
                <tbody>
                  {visitors.map((visitor) => {
                    const isCurrent = currentVisitorId && visitor.id === currentVisitorId;
                    return (
                      <tr key={visitor.id} className={`border-b hover:bg-gray-50 dark:hover:bg-gray-800 dark:border-gray-700 ${isCurrent ? 'bg-green-50 dark:bg-green-900/30' : ''}`}>
                        <td className="py-3 px-4 flex items-center gap-2">
                          <code className="text-xs bg-gray-100 px-2 py-1 rounded dark:bg-gray-800 dark:text-gray-200">
                            {visitor.id.substring(0, 8)}...
                          </code>
                          {isCurrent && (
                            <Badge className="bg-green-500 text-white dark:bg-green-400 dark:text-green-900 ml-2" variant="outline">
                              Bạn
                            </Badge>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {visitor.access_count}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            {visitor.page_count}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">
                          {new Date(visitor.created_at).toLocaleString('vi-VN')}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-300">
                          {new Date(visitor.updated_at).toLocaleString('vi-VN')}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {visitors.length === 0 && (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
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