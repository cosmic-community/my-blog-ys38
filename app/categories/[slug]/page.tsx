// app/categories/[slug]/page.tsx
import { getCategory, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import { notFound } from 'next/navigation'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <span className="inline-block px-4 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
          Category
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{name}</h1>
        {description && <p className="text-lg text-gray-600 max-w-3xl">{description}</p>}
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl">
          <p className="text-gray-600">No posts in this category yet.</p>
        </div>
      )}
    </div>
  )
}