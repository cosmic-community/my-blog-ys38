import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link href={`/categories/${category.slug}`} className="group block bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-primary-100">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
        {name}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      )}
      <span className="inline-block mt-4 text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
        Browse posts →
      </span>
    </Link>
  )
}