import Link from 'next/link'
import { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const title = getMetafieldValue(post.metadata?.title) || post.title

  return (
    <Link href={`/posts/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {featuredImage && (
        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={title}
            width="400"
            height="225"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-50 rounded-full mb-3">
            {getMetafieldValue(category.metadata?.name) || category.title}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
          {title}
        </h3>
        {author && (
          <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
            {author.metadata?.profile_picture && (
              <img
                src={`${author.metadata.profile_picture.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={getMetafieldValue(author.metadata?.name) || author.title}
                width="32"
                height="32"
                className="w-8 h-8 rounded-full mr-3 object-cover"
              />
            )}
            <span className="text-sm text-gray-600">
              {getMetafieldValue(author.metadata?.name) || author.title}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}