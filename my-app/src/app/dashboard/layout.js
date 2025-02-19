
'use client'
import { useRouter } from 'next/navigation'

export default function DashboardLayout({
  children, // 페이지 또는 중첩 레이아웃이 될 것임
}) {
  console.log("dashboard2 children : " + JSON.stringify(children));
   
const router = useRouter()
 
/* router.push('/dashboard2', { scroll: false }) */
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}