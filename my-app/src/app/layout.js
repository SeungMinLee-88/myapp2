export default function RootLayout({ children }) {
  console.log("children: " + children);
  console.log("children.id: " + JSON.stringify(children));

  return (
    <html lang="en">
      <body>
        <div>
          <h2>next test !!!</h2>
          <h6>BIG TEXT11111</h6>
          <h6>BIG TEXT 222222222222</h6>
        </div>
        {children}</body>
        
    </html>
  )
}