
export default function DashboardLayout({
  children, // 페이지 또는 중첩 레이아웃이 될 것임
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}