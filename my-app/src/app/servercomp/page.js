'use client'
 
import { usePathname } from 'next/navigation'

export default function Page() {
  const pathname = usePathname()
 
  function switchLocale(locale) {
    // 예: '/en/about' 또는 '/fr/contact'
    const newPath = `/${locale}${pathname}`
    window.history.replaceState(null, '', newPath)
  }
 
  return (
    <>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('fr')}>French</button>
    </>
  )
  }