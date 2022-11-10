import { useState } from 'react'
import Image from 'next/image'

interface BlurImageProps {
  src: string
  width?: number
  height?: number
  fit?: any
  priority?: boolean
  layout?: any
}

function BlurImage({
  src,
  width,
  height,
  fit,
  priority,
  layout,
}: BlurImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <Image
      alt=""
      src={src}
      width={width}
      height={height}
      objectFit={fit}
      layout={layout}
      className={`duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'}`}
      onLoadingComplete={() => setLoading(false)}
      priority={priority}
    />
  )
}

export default BlurImage
