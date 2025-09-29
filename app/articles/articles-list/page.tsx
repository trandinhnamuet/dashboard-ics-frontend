'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { Search, Calendar, User } from 'lucide-react'
import { format } from 'date-fns'
import { articlesService, type Article as ServiceArticle, type ArticlesResponse } from '@/services/articles.service'

interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  thumbnail_url: string
  author_id: number
  status: string
  created_at: string
  updated_at: string
}

function ArticlesListContent() {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  const previewId = searchParams.get('preview')

  useEffect(() => {
    fetchArticles()
  }, [page])

  useEffect(() => {
    if (previewId) {
      fetchArticleForPreview(previewId)
    }
  }, [previewId])

  const fetchArticles = async () => {
    try {
      setIsLoading(true)
      // Only fetch published articles for public view
      const data = await articlesService.getAllArticles(page, 10, 'published')
      setArticles(data.data)
      setTotalPages(Math.ceil(data.total / data.limit))
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: 'Không thể tải danh sách bài viết',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const fetchArticleForPreview = async (id: string) => {
    try {
      const article = await articlesService.getArticleById(id)
      setSelectedArticle(article)
    } catch (error) {
      console.error('Failed to fetch article for preview:', error)
    }
  }

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500 hover:bg-green-600'
      case 'draft':
        return 'bg-yellow-500 hover:bg-yellow-600'
      case 'archived':
        return 'bg-gray-500 hover:bg-gray-600'
      default:
        return 'bg-gray-500 hover:bg-gray-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published':
        return 'Đã xuất bản'
      case 'draft':
        return 'Bản nháp'
      case 'archived':
        return 'Lưu trữ'
      default:
        return status
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Tin tức & Bài viết</h1>
        <p className="text-muted-foreground text-lg">
          Cập nhật những thông tin mới nhất về công nghệ và dịch vụ từ ICS Smart Dashboard
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="text-muted-foreground">Đang tải bài viết...</div>
        </div>
      ) : filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground text-lg">
            {searchTerm ? 'Không tìm thấy bài viết nào' : 'Chưa có bài viết nào được xuất bản'}
          </div>
        </div>
      ) : (
        <>
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`} className="block group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group-hover:ring-2 group-hover:ring-primary cursor-pointer">
                  {article.thumbnail_url && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.thumbnail_url}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getStatusColor(article.status)}>
                        {getStatusText(article.status)}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {format(new Date(article.created_at), 'dd/MM/yyyy')}
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 min-h-[72px] flex items-start">
                      <p className="text-muted-foreground line-clamp-3">
                        {article.excerpt || '\u00A0'}
                      </p>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      Tác giả #{article.author_id}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
              >
                Trang trước
              </Button>
              <span className="flex items-center px-4">
                Trang {page} / {totalPages}
              </span>
              <Button
                variant="outline"
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
              >
                Trang sau
              </Button>
            </div>
          )}
        </>
      )}

      {/* Auto-open preview dialog if preview ID is provided */}
      {previewId && selectedArticle && (
        <Dialog open={true} onOpenChange={() => setSelectedArticle(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">
                {selectedArticle.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground border-b pb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(new Date(selectedArticle.created_at), 'dd/MM/yyyy HH:mm')}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Tác giả #{selectedArticle.author_id}
                </div>
                <Badge className={getStatusColor(selectedArticle.status)}>
                  {getStatusText(selectedArticle.status)}
                </Badge>
              </div>
              
              {selectedArticle.thumbnail_url && (
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedArticle.thumbnail_url}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {selectedArticle.excerpt && (
                <div className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                  {selectedArticle.excerpt}
                </div>
              )}
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Tin tức & Bài viết</h1>
        <p className="text-muted-foreground text-lg">
          Cập nhật những thông tin mới nhất về công nghệ và dịch vụ từ ICS Smart Dashboard
        </p>
      </div>
      <div className="flex justify-center py-12">
        <div className="text-muted-foreground">Đang tải...</div>
      </div>
    </div>
  )
}

export default function ArticlesListPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ArticlesListContent />
    </Suspense>
  )
}