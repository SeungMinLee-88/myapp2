export default function PagetestLayout({
  children, // 페이지 또는 중첩 레이아웃이 될 것임
}) {
  
  
  // const router = useRouter()
 
  // router.push('/pagetest', { scroll: false })

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}