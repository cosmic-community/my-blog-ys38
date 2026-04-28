import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-md bg-white/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">📝</span>
            <span className="text-xl font-bold text-gray-900">My Blog</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/posts" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Posts
            </Link>
            <Link href="/authors" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Authors
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Categories
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}