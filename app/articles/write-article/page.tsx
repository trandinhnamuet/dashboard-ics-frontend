'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { ArrowLeft } from 'lucide-react'
import 'react-quill/dist/quill.snow.css'
import '@/styles/quill-custom.css'
import { articlesService, type Article as ServiceArticle, type CreateArticleDto, type UpdateArticleDto } from '@/services/articles.service'

// Dynamic import React Quill để tránh SSR issues
const ReactQuill = dynamic(() => import('react-quill'), { 
  ssr: false,
  loading: () => <div className="border rounded-md p-4 min-h-[200px] bg-gray-50">Đang tải trình soạn thảo...</div>
})

interface Article {
  id?: string
  title: string
  excerpt: string
  content: string
  thumbnail_url: string
  status: string
}

export default function WriteArticlePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const articleId = searchParams.get('id')

  const [article, setArticle] = useState<Article>({
    title: '',
    excerpt: '',
    content: '',
    thumbnail_url: '',
    status: 'draft'
  })

  // Load article for editing if ID is provided
  useEffect(() => {
    if (articleId) {
      setIsEditing(true)
      fetchArticle(articleId)
    }
  }, [articleId])

  const fetchArticle = async (id: string) => {
    try {
      setIsLoading(true)
      const data = await articlesService.getArticleById(id)
      setArticle(data)
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: 'Không thể tải bài viết',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!article.title || !article.content) {
      toast({
        title: 'Lỗi',
        description: 'Vui lòng nhập tiêu đề và nội dung bài viết',
        variant: 'destructive',
      })
      return
    }

    try {
      setIsLoading(true)

      if (isEditing && articleId) {
        const updateData: UpdateArticleDto = {
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          thumbnail_url: article.thumbnail_url,
          status: article.status,
        }
        await articlesService.updateArticle(articleId, updateData)
      } else {
        const createData: CreateArticleDto = {
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          thumbnail_url: article.thumbnail_url,
          author_id: 1, // Temporary author ID since no authentication yet
          status: article.status,
        }
        await articlesService.createArticle(createData)
      }

      toast({
        title: 'Thành công',
        description: isEditing ? 'Cập nhật bài viết thành công' : 'Tạo bài viết thành công',
      })
      router.push('/articles/articles-management')
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: 'Không thể lưu bài viết',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof Article, value: string) => {
    setArticle(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại
        </Button>
        
        <h1 className="text-3xl font-bold">
          {isEditing ? 'Chỉnh sửa bài viết' : 'Viết bài viết mới'}
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            {isEditing ? 'Cập nhật bài viết' : 'Tạo bài viết mới'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="title">Tiêu đề *</Label>
              <Input
                id="title"
                type="text"
                value={article.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Nhập tiêu đề bài viết..."
                required
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Tóm tắt</Label>
              <Textarea
                id="excerpt"
                value={article.excerpt}
                onChange={(e) => handleInputChange('excerpt', e.target.value)}
                placeholder="Nhập tóm tắt ngắn gọn về bài viết..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="thumbnail_url">URL ảnh thumbnail</Label>
              <Input
                id="thumbnail_url"
                type="url"
                value={article.thumbnail_url}
                onChange={(e) => handleInputChange('thumbnail_url', e.target.value)}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <Label htmlFor="content">Nội dung *</Label>
              <div className="mt-2">
                <ReactQuill
                  value={article.content}
                  onChange={(value) => handleInputChange('content', value)}
                  theme="snow"
                  placeholder="Nhập nội dung bài viết..."
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'color': [] }, { 'background': [] }],
                      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                      [{ 'indent': '-1'}, { 'indent': '+1' }],
                      [{ 'align': [] }],
                      ['blockquote', 'code-block'],
                      ['link', 'image', 'video'],
                      ['clean']
                    ]
                  }}
                  formats={[
                    'header', 'bold', 'italic', 'underline', 'strike',
                    'color', 'background', 'list', 'bullet', 'indent',
                    'align', 'blockquote', 'code-block', 'link', 'image', 'video'
                  ]}
                  style={{ minHeight: '200px' }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Sử dụng thanh công cụ để định dạng văn bản, thêm ảnh, liên kết...
              </p>
            </div>

            <div>
              <Label htmlFor="status">Trạng thái</Label>
              <Select
                value={article.status}
                onValueChange={(value) => handleInputChange('status', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Bản nháp</SelectItem>
                  <SelectItem value="published">Đã xuất bản</SelectItem>
                  <SelectItem value="archived">Lưu trữ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isLoading}
              >
                {isLoading 
                  ? (isEditing ? 'Đang cập nhật...' : 'Đang tạo...') 
                  : (isEditing ? 'Cập nhật bài viết' : 'Tạo bài viết')
                }
              </Button>
              
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push('/articles/articles-management')}
              >
                Hủy
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}