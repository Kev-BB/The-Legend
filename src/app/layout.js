export const metadata = {
  title: 'The Legend',
  description: 'Form Component',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
