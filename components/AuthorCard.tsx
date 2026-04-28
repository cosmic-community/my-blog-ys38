import Link from 'next/link'
import { Author } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const name = getMetafieldValue(author.metadata?.name) || author.title
  const bio = getMetafieldValue(author.metadata?.bio)
  const avatar = author.metadata?.profile_picture

  return (
    <Link href={`/authors/${author.slug}`} className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
      {avatar && (
        <img
          src={`${avatar.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
          alt={name}
          width="100"
          height="100"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-primary-50"
        />
      )}
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
        {name}
      </h3>
      {bio && (
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{bio}</p>
      )}
    </Link>
  )
}