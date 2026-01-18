import gardenData from '@/garden_data.json'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return gardenData.blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const post = gardenData.blogPosts.find(p => p.id === parseInt(id))
  
  if (!post) {
    return {
      title: 'Post Not Found | JC\'s Backyard',
    }
  }

  return {
    title: `${post.title} | JC's Backyard Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = gardenData.blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/20 py-16">
        <div className="section-container">
          <Link 
            href="/blog"
            className="text-primary hover:underline mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
          <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <time 
            dateTime={post.date}
            className="block text-neutral/60 text-sm mb-4"
          >
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <article className="section-container bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <p className="text-xl text-neutral/80 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="prose prose-lg max-w-none text-neutral/70 leading-relaxed">
            <p>
              This is a draft blog post. Full content will be added when available.
              Visit us to learn more about {post.category.toLowerCase()} and related topics!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-container bg-neutralLight">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
            Want to Learn More?
          </h2>
          <p className="text-xl mb-8 text-neutral/70">
            Visit us to see these topics in action and learn from our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visit" className="btn-primary inline-block">
              Plan Your Visit
            </Link>
            <Link href="/guides" className="btn-outline inline-block">
              Read More Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

