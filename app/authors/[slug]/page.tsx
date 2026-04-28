// app/authors/[slug]/page.tsx
import { getAuthor, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import { notFound } from 'next/navigation'

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthor(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const email = getMetafieldValue(author.metadata?.email)
  const avatar = author.metadata?.profile_picture

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {avatar && (
            <img
              src={`${avatar.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
              alt={name}
              width="150"
              height="150"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-primary-50"
            />
          )}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{name}</h1>
            {bio && <p className="text-gray-600 text-lg mb-4">{bio}</p>}
            {email && (
              <a href={`mailto:${email}`} className="text-primary-600 hover:text-primary-700 font-medium">
                {email}
              </a>
            )}
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Posts by {name}</h2>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No posts by this author yet.</p>
      )}
    </div>
  )
}