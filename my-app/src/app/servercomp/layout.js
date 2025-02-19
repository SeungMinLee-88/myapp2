import { redirect } from 'next/navigation'
async function fetchTeam(id) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
export default function PagetestLayout({
  children, // 페이지 또는 중첩 레이아웃이 될 것임
}) {
  /*   const team = await fetchTeam(params.id)
  if (!team) {
    redirect('/login')
  } */

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}