import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZeTasks',
  description: 'A web-based Task Management System that allows users to create, update, and delete tasks. The application will consist of a frontend, where users can interact with their tasks, and a backend to manage task data.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
