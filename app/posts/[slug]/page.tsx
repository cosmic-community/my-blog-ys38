// app/posts/[slug]/page.tsx
import { getPost } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const content = getMetafieldValue(post.metadata?.content)
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const tags = getMetafieldValue(post.metadata?.tags)

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {category && (
        <Link
          href={`/categories/${category.slug}`}
          className="inline-block px-3 py-1 text-sm font-semibold text-primary-700 bg-primary-50 rounded-full mb-4 hover:bg-primary-100 transition-colors"
        >
          {getMetafieldValue(category.metadata?.name) || category.title}
        </Link>
      )}
      
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">{title}</h1>

      {author && (
        <Link href={`/authors/${author.slug}`} className="flex items-center mb-8 group">
          {author.metadata?.profile_picture && (
            <img
              src={`${author.metadata.profile_picture.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
              alt={getMetafieldValue(author.metadata?.name) || author.title}
              width="48"
              height="48"
              className="w-12 h-12 rounded-full mr-3 object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              {getMetafieldValue(author.metadata?.name) || author.title}
            </p>
            <p className="text-sm text-gray-500">
              {new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
        </Link>
      )}

      {featuredImage && (
        <img
          src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
          alt={title}
          width="800"
          height="450"
          className="w-full rounded-xl mb-8 shadow-lg"
        />
      )}

      {content && (
        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {tags && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-2">Tags</p>
          <div className="flex flex-wrap gap-2">
            {tags.split(',').map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                {tag.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}