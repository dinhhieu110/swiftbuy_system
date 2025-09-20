import { ProductInputSchema } from '@/lib/validator'
import { z } from 'zod'

export type TProductInput = z.infer<typeof ProductInputSchema>
export type TData = {
  products: TProductInput[]
  headerMenus: {
    name: string
    href: string
  }[]
  carousels: {
    image: string
    url: string
    title: string
    buttonCaption: string
    isPublished: boolean
  }[]
}
