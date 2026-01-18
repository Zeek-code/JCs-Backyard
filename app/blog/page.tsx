import gardenData from '@/garden_data.json'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog & News | JC's Backyard",
  description: "Read the latest news, tips, and stories from JC's Backyard community garden in Kansas City.",
}

export default function Blog() {
  const { blogPosts } = gardenData

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/20 py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-neutral">
            Blog & News
          </h1>
          <p className="text-xl text-center text-neutral/70 max-w-2xl mx-auto">
            Stay updated with the latest news, tips, and stories from our garden
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="card hover:shadow-2xl transition-shadow duration-200">
                <div className="mb-4">
                  <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time 
                    dateTime={post.date}
                    className="block text-neutral/60 text-sm mt-2"
                  >
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-bold mb-3 text-neutral">
                  {post.title}
                </h2>
                <p className="text-neutral/70 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-accent2 hover:underline font-semibold inline-flex items-center"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-neutralLight">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
            Want to Stay Updated?
          </h2>
          <p className="text-xl mb-8 text-neutral/70">
            Visit us or contact us to learn about upcoming events and new blog posts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visit" className="btn-primary inline-block">
              Visit Us
            </Link>
            <Link href="/guides" className="btn-outline inline-block">
              Read Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

