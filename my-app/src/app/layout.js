import { NavLinks } from './ui/nav-links'
import { Imports } from './imports'
import { PostList } from './PostList'
export default function RootLayout({ children }) {
  console.log("children: " + children);
  return (
    <html lang="en">
      <body>
      <Imports />
      <PostList />
        <div>
          <h2>next test !!!</h2>
          <h6>BIG TEXT11111</h6>
        </div>
        {children}</body>
    </html>
  )
}