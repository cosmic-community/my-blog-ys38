# My Blog

![App Preview](https://imgix.cosmicjs.com/53254e70-4329-11f1-969a-7fa4ba21e4d4-autopilot-photo-1506905925346-21bda4d32df4-1777398019280.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern, responsive blog application built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Features posts, authors, and categories with beautiful UI and dynamic routing.

## Features

- 📝 Blog posts with featured images and rich content
- 👤 Author profiles with bios and avatars
- 🏷️ Category-based content organization
- 🔗 Dynamic routing for all content types
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js 16
- 🎨 Beautiful UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f0f0cf827d7f49aae93bc7&clone_repository=69f0f188827d7f49aae93bfe)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
>
> User instructions: A blog with posts, authors, and categories"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Blog". The content is managed in Cosmic CMS with the following object types: authors, categories, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: A blog with posts, authors, and categories

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Cosmic SDK** - Content management
- **Bun** - Package management

## Getting Started

### Prerequisites

- Bun installed
- A Cosmic account with a bucket containing posts, authors, and categories

### Installation

1. Clone the repository
2. Install dependencies: `bun install`
3. Set environment variables in `.env.local`
4. Run: `bun run dev`

## Cosmic SDK Examples

```typescript
// Fetch all posts with related data
const posts = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app integrates with three Cosmic object types: posts, authors, and categories. All content is fetched server-side using the Cosmic SDK.

## Deployment Options

- **Vercel** - One-click deployment for Next.js
- **Netlify** - Static site hosting

Set environment variables in your hosting platform: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`.

<!-- README_END -->