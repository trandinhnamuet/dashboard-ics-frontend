"use client"

import { useState, useEffect, useRef } from "react"

interface ImageProps {
  src: string
  alt: string
  className?: string
  modalClassName?: string
  enableZoom?: boolean
  onClick?: () => void
}

export default function Image({ 
  src, 
  alt, 
  className = "", 
  modalClassName = "",
  enableZoom = true,
  onClick 
}: ImageProps) {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [imageScale, setImageScale] = useState(1)
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  // Reset scale when modalImage changes
  useEffect(() => {
    setImageScale(1)
    setImgPos({ x: 0, y: 0 })
  }, [modalImage])

  // Wheel zoom handler
  useEffect(() => {
    if (!modalImage || !imgRef.current) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault()
        setImageScale(prev => {
          let next = prev + (e.deltaY < 0 ? 0.1 : -0.1)
          next = Math.max(0.2, Math.min(next, 5))
          return next
        })
      }
    }
    const img = imgRef.current
    img.addEventListener('wheel', handleWheel, { passive: false })
    return () => img.removeEventListener('wheel', handleWheel)
  }, [modalImage])

  // Mouse drag to move image
  useEffect(() => {
    if (!modalImage || !imgRef.current) return;
    const img = imgRef.current
    let lastPos = { x: imgPos.x, y: imgPos.y }
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      setDragging(true)
      setDragStart({ x: e.clientX - lastPos.x, y: e.clientY - lastPos.y })
    }
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging && dragStart) {
        setImgPos({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
      }
    }
    const handleMouseUp = () => {
      setDragging(false)
      setDragStart(null)
    }
    img.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      img.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [modalImage, dragging, dragStart, imgPos])

  const handleImageClick = () => {
    if (onClick) {
      onClick()
    } else if (enableZoom) {
      setModalImage(src)
    }
  }

  return (
    <>
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${enableZoom || onClick ? 'cursor-pointer' : ''}`}
        onClick={handleImageClick}
      />

      {/* Modal hiển thị ảnh lớn */}
      {enableZoom && modalImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70" 
          onClick={() => setModalImage(null)}
        >
          <div className="relative" onClick={e => e.stopPropagation()}>
            <img
              ref={imgRef}
              src={modalImage}
              alt={alt}
              className={`max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl border-4 border-white cursor-move select-none ${modalClassName}`}
              style={{ 
                transform: `scale(${imageScale}) translate(${imgPos.x}px, ${imgPos.y}px)`, 
                transition: dragging ? 'none' : 'transform 0.2s' 
              }}
              draggable={false}
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-white/80 text-black rounded-full px-3 py-1 font-bold text-lg shadow-lg hover:bg-white transition-colors"
              onClick={e => { 
                e.stopPropagation(); 
                setModalImage(null); 
              }}
            >
              &times;
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 text-black rounded px-3 py-1 text-xs shadow">
              Giữ Ctrl và lăn chuột để phóng to/thu nhỏ. Nhấn giữ chuột trái và kéo để di chuyển ảnh.
            </div>
          </div>
        </div>
      )}
    </>
  )
}
