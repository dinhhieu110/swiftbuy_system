import {
  CartSchema,
  OrderItemSchema,
  ProductInputSchema,
} from '@/lib/validator'
import { z } from 'zod'

export type IData = {
  products: IProductInput[]
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

export type IProductInput = z.infer<typeof ProductInputSchema>
export type OrderItem = z.infer<typeof OrderItemSchema>
export type Cart = z.infer<typeof CartSchema>
