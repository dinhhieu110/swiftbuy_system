// App
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'SwiftBuy'
export const APP_SLOGAN =
  process.env.NEXT_PUBLIC_APP_SLOGAN || 'Spend less, enjoy more.'
export const APP_Description =
  process.env.NEXT_PUBLIC_APP_Description ||
  'The best place to buy products at the best price.'

// Products
export const CATEGORIES = ['men', 'women', 'kids', 'accessories']

export const PAGE_SIZE = Number(process.env.PAGE_SIZE || 9)

export const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE || 35 // default: 35$
)
