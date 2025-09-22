import Link from 'next/link'
import CartButton from './cart-button'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <nav className='flex gap-3 w-full'>
        <Link href='/signin' className='header-button'>
          <span className='align-middle hover:text-white/90'>
            Hello, Sign in
          </span>
        </Link>

        <div className='flex justify-end'>
          <nav className='flex gap-3 w-full'>
            <CartButton />
          </nav>
        </div>
      </nav>
    </div>
  )
}
