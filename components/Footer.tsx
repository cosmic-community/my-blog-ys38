export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} My Blog. Built with Next.js & Cosmic.</p>
      </div>
    </footer>
  )
}