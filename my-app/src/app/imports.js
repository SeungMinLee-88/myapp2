'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export function Imports() {
    console.log("Imports called");
    const pathname = usePathname()
 
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
 
      <Link
        className={`link ${pathname === '/about' ? 'active' : ''}`}
        href="/about"
      >
        About
      </Link>
      <Link
        className={`link ${pathname === '/dashboard' ? 'active' : ''}`}
        href="/dashboard"
      >
        dashboard
      </Link>
    </nav>
  )
}