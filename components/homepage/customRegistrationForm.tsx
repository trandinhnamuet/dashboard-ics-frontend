'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import useAuthStore from '@/hooks/use-auth-store'
import axios from 'axios'

const formSchema = z.object({
  userName: z.string().min(2, 'Tên người dùng phải có ít nhất 2 ký tự'),
  email: z.string().email('Email không hợp lệ'),
  phoneNumber: z.string().min(10, 'Số điện thoại phải có ít nhất 10 số').max(20, 'Số điện thoại không được quá 20 số'),
  company: z.string().optional(),
  additionalNotes: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface CustomRegistrationFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedPlan?: {
    name: string
    description: string
    price?: string
  } | null
}

export default function CustomRegistrationForm({ open, onOpenChange, selectedPlan }: CustomRegistrationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const { user, isAuthenticated } = useAuthStore()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      email: '',
      phoneNumber: '',
      company: '',
      additionalNotes: '',
    },
  })

  // Autofill form khi có thông tin user và form được mở
  useEffect(() => {
    if (open && isAuthenticated && user) {
      const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim()
      form.reset({
        userName: fullName || '',
        email: user.email || '',
        phoneNumber: user.phoneNumber || '',
        company: user.company || '',
        additionalNotes: '',
      })
    }
  }, [open, isAuthenticated, user, form])

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true)
    
    // Giả lập thời gian xử lý
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    try {
      // TODO: Sẽ gọi API thật ở đây sau
      console.log('Form values:', values)

      toast({
        title: 'Đăng ký thành công!',
        description: 'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.',
        variant: 'success',
      })

      form.reset()
      onOpenChange(false)
    } catch (error) {
      console.error('Registration error:', error)
      toast({
        title: 'Có lỗi xảy ra',
        description: 'Vui lòng thử lại sau hoặc liên hệ hỗ trợ.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">

        <DialogHeader>
          <DialogTitle>Đăng ký gói tùy chỉnh</DialogTitle>
          <DialogDescription>
            Chúng tôi sẽ liên hệ với bạn ngay để cung cấp giải pháp.
          </DialogDescription>
          {selectedPlan && (
            <div className="my-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/20 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">Gói đã chọn</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-1">{selectedPlan.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedPlan.description}</p>
                </div>
                {selectedPlan.price && (
                  <div className="ml-4 text-right">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 border border-green-200">
                      <span className="text-xs font-medium text-green-800 mr-1">Giá:</span>
                      <span className="text-sm font-bold text-green-700">{selectedPlan.price}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên người dùng *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tên của bạn" {...field} className="placeholder:text-gray-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@company.com" {...field} className="placeholder:text-gray-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Số điện thoại *</FormLabel>
                    <FormControl>
                      <Input placeholder="0987654321" {...field} className="placeholder:text-gray-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên công ty</FormLabel>
                    <FormControl>
                      <Input placeholder="Công ty ABC" {...field} className="placeholder:text-gray-400" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="additionalNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ghi chú thêm</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Mô tả thêm về yêu cầu đặc biệt, thời gian triển khai, ngân sách dự kiến..."
                      className="min-h-[100px] placeholder:text-gray-400"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <span className="block mb-4 px-3 py-1 rounded-full bg-white text-primary font-semibold text-sm text-center mx-auto">
                Hoặc liên hệ ngay với hotline: <a href="tel:0931487231" className="underline hover:text-primary/80">0931 487 231</a>
              </span>
              <div className="flex justify-end space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => onOpenChange(false)}
                  disabled={isLoading}
                >
                  Hủy
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Đăng ký
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
